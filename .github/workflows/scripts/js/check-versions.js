module.exports = async ({ github }) => {
  console.log('github.workspace', github.workspace);
  const currentDirectory = process.cwd();
  console.log(`Current working directory: ${currentDirectory}`);
  const manifestPath = '/chrome/manifest.json';
  const manifest = require(manifestPath);
  return null;
}