// "18 November 2026 — One Day in Pictures" (revised edition): a program
// that writes the front-page image of 18 November 2026's world news to
// /output/entry.png. The image is drawn in code (see draw.py beside the
// workspace) and stored as entry.png next to this file; this program
// copies those exact bytes to the output directory, so both graded runs
// produce byte-identical output. Before copying it checks the PNG magic,
// the 1 MiB size cap and the 1024x1024 dimension cap from the IHDR chunk. Run with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const bytes = readFileSync(join(here, 'entry.png'));

// The gate only accepts a whole PNG of at most 1 MiB and at most
// 1024 by 1024 pixels: refuse to write anything else, so a bad image
// fails loudly here instead of at grading.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1048576;
const MAX_DIM = 1024;
if (bytes.length > MAX_BYTES || !bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error(
    `entry.png is not a PNG of at most 1 MiB (got ${bytes.length} bytes)`,
  );
}
// IHDR: width and height are the first two big-endian uint32 after the
// 8-byte signature and the 4-byte length + 4-byte "IHDR" type.
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > MAX_DIM || height > MAX_DIM) {
  throw new Error(
    `entry.png is larger than ${MAX_DIM}x${MAX_DIM} (got ${width}x${height})`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), bytes);
console.log(`wrote entry.png (${bytes.length} bytes)`);
