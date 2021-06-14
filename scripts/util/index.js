const fs = require('fs-extra');
const archiver = require('archiver');

exports.zipDir = (source, to, del = false) => new Promise(((resolve, reject) => {
  const output = fs.createWriteStream(to);
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Sets the compression level.
  });
  output.on('close', () => {
    if (del) {
      fs.removeSync(source);
    }
    resolve();
  });
  archive.on('error', (err) => {
    reject(err);
  });
  archive.pipe(output);
  archive.directory(source, false);
  archive.finalize();
}));


