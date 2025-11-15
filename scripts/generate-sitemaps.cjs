require('ts-node').register({
  transpileOnly: true,
  compilerOptions: {
    module: 'NodeNext',
    moduleResolution: 'NodeNext'
  }
});

require('./generate-sitemaps.ts');
