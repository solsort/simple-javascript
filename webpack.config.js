//
//   AUTOGENERATED FILE
//   DO NOT EDIT (except in template)
//
webpack = require('webpack');
module.exports = {
  entry: ['./simple-javascript.js'],
  devtool: 'source-map',
  module: {loaders: [{ 
    test: /\.js$/, 
    exclude: /(dist.js|dist.js.map|node_modules)/, 
    loader: 'babel-loader'
  }]},
  plugins: [
    new webpack.IgnorePlugin(/^(fs|child_process|ws|express|electron|node-fetch|http|crypto|net|tls|dns)$/)
  ],
  output: {
    libraryTarget: 'umd',
    filename: 'dist.js'
  }
}
