// esbuild configuration for Indian Fuel Price Tracker

const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  outfile: './dist/bundle.js',
  minify: true,
  sourcemap: true,
  platform: 'node',
  target: 'node14',
}).catch(() => process.exit(1));
