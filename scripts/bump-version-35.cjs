const fs = require('fs');
const path = require('path');

// Update sw.js
const swPath = path.join(__dirname, '..', 'public', 'sw.js');
let swCode = fs.readFileSync(swPath, 'utf8');
swCode = swCode.replace(/parlez-v\d+-[\w-]+/, 'parlez-v35-grammar-system');
swCode = swCode.replaceAll('?v=34', '?v=35');
fs.writeFileSync(swPath, swCode, 'utf8');

// Update index.html
const indexPath = path.join(__dirname, '..', 'public', 'index.html');
let indexCode = fs.readFileSync(indexPath, 'utf8');
indexCode = indexCode.replaceAll('?v=34', '?v=35');
fs.writeFileSync(indexPath, indexCode, 'utf8');

// Update app.js sw registration
const appPath = path.join(__dirname, '..', 'public', 'app.js');
let appCode = fs.readFileSync(appPath, 'utf8');
appCode = appCode.replaceAll('sw.js?v=34', 'sw.js?v=35');
fs.writeFileSync(appPath, appCode, 'utf8');

console.log('Successfully bumped cache version to v35 across sw.js, index.html, and app.js.');
