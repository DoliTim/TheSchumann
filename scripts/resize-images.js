const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [
  { width: 1200, height: 800, suffix: '' },
  { width: 800, height: 533, suffix: '-800' },
  { width: 400, height: 267, suffix: '-400' },
  { width: 150, height: 150, suffix: '-thumb' }
];

const processImage = async (inputPath, filename) => {
  const imageName = path.parse(filename).name;
  const outputDir = path.join('public/images', imageName);

  // Create directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Process each size
  for (const size of sizes) {
    const outputPath = path.join(outputDir, `${imageName}${size.suffix}.jpg`);
    const outputPathWebp = path.join(outputDir, `${imageName}${size.suffix}.webp`);

    await sharp(inputPath)
      .resize(size.width, size.height, {
        fit: size.suffix === '-thumb' ? 'cover' : 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .jpeg({ quality: 80 })
      .toFile(outputPath);

    await sharp(inputPath)
      .resize(size.width, size.height, {
        fit: size.suffix === '-thumb' ? 'cover' : 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .webp({ quality: 80 })
      .toFile(outputPathWebp);
  }
};

const main = async () => {
  const inputDir = 'src/assets/original';
  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      console.log(`Processing ${file}...`);
      await processImage(path.join(inputDir, file), file);
    }
  }
};

main().catch(console.error); 