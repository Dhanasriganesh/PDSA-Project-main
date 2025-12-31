const fs = require('fs');
const path = require('path');

// Function to update JSX files with animations
function updateJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern to match h1 tags without animate-fade-in-up
    const h1Pattern = /(<h1 className="[^"]*)(text-5xl md:text-6xl font-bold mb-6)([^>]*>)/g;
    const pPattern = /(<p className="[^"]*)(text-xl text-gray-200[^"]*")([^>]*>)/g;
    
    // Add animation to h1 if not already present
    if (content.includes('text-5xl md:text-6xl font-bold mb-6') && !content.includes('animate-fade-in-up')) {
      content = content.replace(h1Pattern, '$1$2 animate-fade-in-up$3');
    }
    
    // Add animation to p if not already present
    if (content.includes('text-xl text-gray-200') && !content.includes('animate-fade-in-up-delay')) {
      content = content.replace(pPattern, '$1$2 animate-fade-in-up-delay$3');
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
  }
}

// Get all JSX files in subdirectories
function getAllJSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllJSXFiles(fullPath));
    } else if (item.endsWith('.jsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Update all JSX files
const pagesDir = 'd:\\pdsa\\PDSA-Project\\src\\components\\pages';
const jsxFiles = getAllJSXFiles(pagesDir);

jsxFiles.forEach(updateJSXFile);

console.log('Animation update complete!');