// const fs = require('fs');
const Koa = require('koa');
// const path = require('path');
const devSupportWsServer = require('./websocketProxy');
const liveReloadWsServer = require('./hippy-livereload');
const {
  // getFrameworkVersion,
  logger,
  exec,
  content,
  parseMimeType,
} = require('../utils');

const ts = +(new Date());

async function startDevServer(args) {
  const {
    // static,
    entry = 'dist/dev/index.bundle',
    host = '127.0.0.1',
    port = 38989,
    verbose,
  } = args;

  // if (!getFrameworkVersion()) {
  //   throw new Error('The current folder is not containing Hippy project.');
  // }

  const app = new Koa();

  // let staticPath;
  // if (static) {
  //   staticPath = path.resolve(static);
  // } else {
  //   staticPath = path.resolve(path.dirname(entry));
  // }

  // if (!fs.statSync(staticPath).isDirectory()) {
  //   throw new Error('Static folder is not exist or not a folder');
  // }

  app.use((ctx) => {
    if (verbose) {
      logger.info('Received url request', ctx.url);
    }

    // Response the content of version request
    if (ctx.path === '/json/version') {
      const versionReturn = '{"Browser": "Hippy/v1.0.0","Protocol-Version": "1.1"}';
      ctx.res.writeHead(200, {
        'Content-Type': 'application/json; charset=UTF-8',
        'Content-Length': versionReturn.length,
      });
      ctx.res.write(versionReturn);
      return ctx.res.end();
    }

    // Response the content of json api request
    if (ctx.path === '/json') {
      const ret = [];
      Object.keys(devSupportWsServer.androidClientSocketMap).forEach((clientId) => {
        const androidClientSocket = devSupportWsServer.androidClientSocketMap[clientId];
        const debugInfo = (androidClientSocket && androidClientSocket.debugInfo) || {};
        ret.push({
          id: `${ts}_${clientId}`,
          description: `Voltron instance ${clientId}`,
          devtoolsFrontendUrl: `chrome-devtools://devtools/bundled/js_app.html?experiments=true&v8only=true&ws=${host}%3A${port}%2Fdebugger-proxy%3Frole%3Dchrome%26id%3D${clientId}`,
          devtoolsFrontendUrlCompat: `chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=${host}%3A${port}%2Fdebugger-proxy%3Frole%3Dchrome%26id%3D${clientId}`,
          faviconUrl: 'http://res.imtt.qq.com/hippydoc/img/hippy-logo.ico',
          title: `Voltron debug ${debugInfo.rawPath || ''} [clientId:${clientId}] [runTimeId:${debugInfo.v8RuntimeId || ''}]`,
          type: 'node',
          url: `ws://${host}:${port}/debugger-proxy?role=chrome&id=${clientId}`,
          webSocketDebuggerUrl: `ws://${host}:${port}/debugger-proxy?role=chrome&id=${clientId}`,
        });
      });
      ctx.res.writeHead(200, {
        'Content-Type': 'application/json; charset=UTF-8',
        'Content-Length': JSON.stringify(ret).length,
      });
      ctx.res.write(JSON.stringify(ret));
      return ctx.res.end();
    }

    // Read the file content from specific path
    const contentStr = content(ctx, 'dist/dev/');
    if (!contentStr) {
      ctx.res.writeHead(404);
      return ctx.res.end();
    }
    ctx.res.writeHead(200, {
      'Content-Type': parseMimeType(ctx.path),
    });
    ctx.res.write(contentStr);
    return ctx.res.end();
  });

  const serverInstance = app.listen(port, host, () => {
    exec('adb', ['reverse', '--remove-all'])
      .then(() => exec('adb', ['reverse', `tcp:${port}`, `tcp:${port}`]))
      .catch((err) => {
        logger.warn('Port reverse failed, For iOS app debug only just ignore the message.');
        logger.warn('Otherwise please check adb devices command working correctly');
        if (verbose) {
          logger.error(err);
        }
      });
    devSupportWsServer.startWebsocketProxyServer(serverInstance, '/debugger-proxy');
    liveReloadWsServer.startLiveReloadServer(serverInstance, '/debugger-live-reload');
    logger.info('Hippy debug server is started at', `${host}:${port}`, 'for', entry);
    logger.info('Please open "chrome://inspect" in Chrome to debug your android Hippy app, or use Safari to debug iOS app');
  });
}

module.exports = startDevServer;
