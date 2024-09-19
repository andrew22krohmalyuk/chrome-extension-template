const path = require('path');
const {writeFileSync} = require("node:fs");

module.exports = async ({ github }) => {
  const currentDirectory = process.cwd();
  console.log(`Current working directory: ${currentDirectory}`);
  // const manifestPath = '/chrome/manifest.json';

  const manifestPath = path.join(currentDirectory, 'chrome', 'manifest.json');

  const manifest = require(manifestPath);
  manifest.version = '0.0.2';
  writeFileSync(manifestPath, JSON.stringify(manifest));
  return null;
}