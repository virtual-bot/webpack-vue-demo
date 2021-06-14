/**
 * 在原来@hippy/debug-server基础上进行升级，
 * 支持多个来自Chrome的WebSocket连接~
 */

const urlModule = require('url');
const queryString = require('query-string');
const { Server: WebSocketServer } = require('ws');
const { timerLogger, verboseInfo } = require('../utils');

let serverSocket;

const androidClientSocketMap = {};
const chromeSocketMap = {};
const messageCacheMap = {};
// TODO: 临时修改
/** 与chrome-plugin连接的webSocket队列 */
const chromePluginSocketQueue = [];

// eslint-disable-next-line no-underscore-dangle
global.__DEBUGGER_CONNECTED__ = false;


function sendMsgTo(dest, message) {
  if (!dest) {
    return;
  }

  try {
    dest.send(message);
  } catch (err) {
    timerLogger.warn(`sendMsgTo ${dest} error:`, err);
  }
}

function startWebsocketProxyServer(server, path) {
  if (serverSocket) {
    timerLogger.warn('server socket is already exist');
    return;
  }

  serverSocket = new WebSocketServer({
    server,
    path,
  });

  serverSocket.on('connection', (ws) => {
    const { url } = ws.upgradeReq;
    const urlInfo = urlModule.parse(url);
    const query = queryString.parse(urlInfo.search);
    const clientId = query.id;

    ws.id = clientId;

    timerLogger.info('websocket connected, url = ', url);

    if (url.indexOf('role=chrome') > -1) { // url = /debugger-proxy?role=chrome，这里是来自Chrome的debug的链接
      const chromeSocket = ws;
      // TODO: 临时修改
      let chromePluginSocketIndex;
      if (!clientId) {
        chromePluginSocketIndex = chromePluginSocketQueue.length;
        chromePluginSocketQueue.push(ws);
      } else {
        chromeSocketMap[clientId] = ws;
      }

      chromeSocket.onerror = err => timerLogger.error('Error: chrome websocket error : ', err);

      chromeSocket.onclose = () => {
        // TODO: 临时修改
        if (clientId) {
          delete chromeSocketMap[clientId];
        } else if (chromePluginSocketIndex) {
          chromePluginSocketQueue.splice(chromePluginSocketIndex, 1);
        }

        timerLogger.info('chromeSocket closed');

        if (androidClientSocketMap[clientId]) {
          sendMsgTo(androidClientSocketMap[clientId], 'chrome_socket_closed');
        }

        if (Object.keys(chromeSocketMap).length === 0) {
          // eslint-disable-next-line no-underscore-dangle
          global.__DEBUGGER_CONNECTED__ = false;
        }
      };

      // eslint-disable-next-line no-underscore-dangle
      global.__DEBUGGER_CONNECTED__ = true;

      // 收到chrome的msg就转发给终端
      chromeSocket.onmessage = ({ data }) => {
        const obj = JSON.parse(data);
        if (obj.method) {
          verboseInfo('get chrome msg, method = ', obj.method, data);
        } else {
          verboseInfo('get chrome msg : ', data);
        }

        // TODO: 临时修改
        if (androidClientSocketMap[clientId]) {
          sendMsgTo(androidClientSocketMap[clientId], data);
        } else {
          Object.keys(androidClientSocketMap).forEach((key) => {
            sendMsgTo(androidClientSocketMap[key], data);
          });
        }
      };
    } else if (url.indexOf('role=android_client') > -1) { // url = /debugger-proxy?role=android_client，这里是来自于终端的socket链接
      const androidClientSocket = ws;
      androidClientSocketMap[clientId] = ws;

      androidClientSocket.onerror = err => timerLogger.error('Error: androidClient websocket error : ', err);

      androidClientSocket.onclose = () => {
        delete androidClientSocketMap[clientId];

        timerLogger.info(`androidClientSocket ${clientId} closed`);

        if (chromeSocketMap[clientId]) {
          sendMsgTo(chromeSocketMap[clientId], JSON.stringify({
            method: 'client-disconnected',
          }));
        }
      };

      // 收到终端的msg就转发给chrome
      androidClientSocket.onmessage = ({ data }) => {
        const obj = JSON.parse(data);
        if (obj.method) {
          verboseInfo('get android msg, method = ', obj.method);
        } else if (obj.debugInfo) {
          androidClientSocket.debugInfo = {
            ...androidClientSocket.debugInfo,
            ...obj.debugInfo,
          };
          return;
        } else {
          verboseInfo('get android msg : ', data.slice(0, 200));
        }

        if (chromeSocketMap[clientId]) {
          sendMsgTo(chromeSocketMap[clientId], data);
        } else {
          messageCacheMap[clientId] = messageCacheMap[clientId] || [];
          messageCacheMap[clientId].push(data);
        }
        // TODO: 临时修改
        chromePluginSocketQueue.forEach((chromeSocket) => {
          sendMsgTo(chromeSocket, data);
        });
      };
    } else {
      timerLogger.error('Error: websocket error, no such server path');
      ws.close(1011, 'Missing role param');
    }
  });
}

module.exports = {
  startWebsocketProxyServer,
  androidClientSocketMap,
  chromeSocketMap,
};
