require('esbuild').buildSync({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  minify: false,
  sourcemap: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  outdir: 'public/dist'
})