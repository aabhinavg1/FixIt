const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Check if the script is running in a Netlify environment
const isNetlify = process.env.NETLIFY === 'true';

// If not running on Netlify, exit early
if (!isNetlify) {
  console.log('Not running on Netlify. Skipping git operations.');
  process.exit(0);
}

// Environment variable for Personal Access Token (PAT)
const PAT_TOKEN = process.env.PAT_TOKEN;
if (!PAT_TOKEN) {
  throw new Error('PAT_TOKEN is not set or empty!');
}

console.log(`Using PAT_TOKEN: ${PAT_TOKEN}`);

// Construct the repository URL using the PAT_TOKEN
const REPO_URL = `https://${PAT_TOKEN}@github.com/aabhinavg1/newletter_modal.git`; // Correct repository name
const CLONE_DIR = path.resolve(__dirname, 'src/pages/newsletter_modal_updated');

// Function to delete the directory if it exists
const deleteDirectory = (dirPath) => {
  if (fs.existsSync(dirPath)) {
    console.log(`Deleting existing directory: ${dirPath}`);
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
};

// Delete the directory if it exists
deleteDirectory(CLONE_DIR);

// Clone the private repository
console.log('Cloning the private repository...');
try {
  execSync(`git clone ${REPO_URL} ${CLONE_DIR}`, { stdio: 'inherit' });
  console.log('Repository cloned successfully.');
} catch (error) {
  throw new Error('Failed to clone the repository. Check if the PAT is correct and has the necessary permissions.');
}

console.log('Repository cloned and files copied successfully.');
