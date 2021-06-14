const { argv }                  = require('yargs');
const ora                       = require('ora');
const archivedFiles = require('./util/archivedFiles');
const { createBuildVendor, createBuildModule, uploadBundles } = require('./util/buildWebpackTool');
const { clearBuildDir, execEntryFile, createEntryFiles, clearEntryFiles, replaceBabelConfig, returnBabelConfig } = require('./util/buildEntryTool');

const main = async () => {
  clearBuildDir();
  let moduleEntryArr = [];
  if (argv.release) {
    moduleEntryArr = createEntryFiles();
  } else {
    moduleEntryArr = execEntryFile();
  }
  const spinner = ora('[hippy build] start ...').start();
  try {
    spinner.start('[hippy build] replace babel config ...');
    replaceBabelConfig(moduleEntryArr);
    spinner.succeed('[hippy build] replace babel config success !');
    spinner.start('[hippy build] build vendor bundle ...');
    await createBuildVendor();
    spinner.succeed('[hippy build] build vendor bundle success !');
    spinner.start('[hippy build] build module bundle ...');
    await createBuildModule(moduleEntryArr);
    spinner.succeed('[hippy build] build module bundle success !');
    spinner.start('[hippy build] sort page ...');
    await archivedFiles(moduleEntryArr);
    spinner.succeed('[hippy build] sort page success !');
    clearEntryFiles(moduleEntryArr);
    returnBabelConfig();
    process.exit(0);
  } catch (err) {
    spinner.stop();
    console.error(err);
    clearEntryFiles(moduleEntryArr);
    returnBabelConfig();
    process.exit(1);
  }
};

main();
