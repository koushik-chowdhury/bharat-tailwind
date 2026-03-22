export default [
  //  ESM (for import)
  {
    input: 'index.js',
    output: {
      file: 'dist/chai.esm.js',
      format: 'esm',
    },
  },

  //  CJS (for Node)
  {
    input: 'index.js',
    output: {
      file: 'dist/chai.cjs.js',
      format: 'cjs',
    },
  },

  //  IIFE (for CDN simple usage)
  {
    input: 'index.js',
    output: {
      file: 'dist/chai.js',
      format: 'iife',
      name: 'BharatTailwind',
    },
  },

  //  UMD (universal - works everywhere)
  {
    input: 'index.js',
    output: {
      file: 'dist/chai.umd.js',
      format: 'umd',
      name: 'BharatTailwind',
    },
  },
];
