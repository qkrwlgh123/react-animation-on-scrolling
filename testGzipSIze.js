import fs from "fs";
import path from "path";
import { gzipSizeSync } from "gzip-size";

async function getTotalGzippedSize(directory) {
  let totalSize = 0;

  const files = fs.readdirSync(directory);

  const jsFiles = files.filter((file) => file.endsWith(".js"));

  for (const file of jsFiles) {
    const filePath = path.join(directory, file);
    const fileBuffer = fs.readFileSync(filePath);
    console.log(fileBuffer);
    const size = gzipSizeSync(fileBuffer);
    totalSize += size;
    console.log(`Gzipped size of ${file}: ${size} bytes`);
  }

  console.log(`Total gzipped size: ${totalSize} bytes`);
}

getTotalGzippedSize("dist");
