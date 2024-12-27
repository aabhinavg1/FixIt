const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Environment variable for Personal Access Token (PAT)
const PAT_TOKEN = process.env.PAT_TOKEN;
const REPO_URL = `https://${PAT_TOKEN}@github.com/aabhinavg1/newsletter_modal.git`;
const CLONE_DIR = path.resolve(__dirname, 'src/pages/newsletter_modal_updated');

// Clone the private repository
console.log('Cloning the private repository...');
execSync(`git clone ${REPO_URL} ${CLONE_DIR}`, { stdio: 'inherit' });

// Optionally, you can copy or process files as needed
console.log('Copying files...');
const sourceDir = path.resolve(CLONE_DIR);
const destinationDir = path.resolve(__dirname, 'src/pages/newsletter_modal_updated/');

fs.readdirSync(sourceDir).forEach(file => {
  const sourceFile = path.join(sourceDir, file);
  const destinationFile = path.join(destinationDir, file);
  if (!fs.existsSync(destinationFile)) {
    fs.copyFileSync(sourceFile, destinationFile);
    console.log(`Copied ${file}`);
  }
});

console.log('Repository cloned and files copied successfully.');
