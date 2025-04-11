const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'images', 'profile.jpg');
const outputPath = path.join(__dirname, 'public', 'images', 'profile-optimized.jpg');

// Check if original file exists
if (!fs.existsSync(inputPath)) {
  console.error('Original image not found:', inputPath);
  process.exit(1);
}

// Get original file size
const originalSize = fs.statSync(inputPath).size;
console.log(`Original image size: ${(originalSize / 1024).toFixed(2)} KB`);

// Optimize image
sharp(inputPath)
  .resize(800) // Resize to max width of 800px
  .jpeg({ quality: 70 }) // Reduce quality to 70%
  .toFile(outputPath)
  .then(info => {
    const newSize = fs.statSync(outputPath).size;
    console.log(`Optimized image size: ${(newSize / 1024).toFixed(2)} KB`);
    console.log(`Reduction: ${(100 - (newSize / originalSize * 100)).toFixed(2)}%`);
    console.log('Optimized image saved to:', outputPath);
  })
  .catch(err => {
    console.error('Error optimizing image:', err);
  });
