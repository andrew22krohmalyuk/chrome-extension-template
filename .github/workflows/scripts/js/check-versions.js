module.exports = async ({ github }) => {
  console.log('github.workspace', github);
  const currentDirectory = process.cwd();
  console.log(`Current working directory: ${currentDirectory}`);
  const manifestPath = '/chrome/manifest.json';
  const manifest = require(manifestPath);
  return null;
}