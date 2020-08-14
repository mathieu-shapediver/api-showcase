const path = require('path');

module.exports = {
  entry: './js/main.js',
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: ["source-map-loader"],
      },
    ]
  }
};