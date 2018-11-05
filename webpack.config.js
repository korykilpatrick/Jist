var path = require('path');
const Dotenv = require('dotenv-webpack');

const DIST_DIR = path.resolve(__dirname, "./client/dist");
  // (distribution) path where you want bundle.js to bundle.js to be made
const SRC_DIR = path.resolve(__dirname, "./client/src");
  // path to your jsx files

module.exports = {
  entry: SRC_DIR + '/index.jsx',
    // file to be transpiled - main component
  output: {
    path: DIST_DIR,
      // output folder
    filename: 'bundle.js',
      // transpiled file name
  },
  plugins: [
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      }
      // {
      //   // test: /\.css$/,
      //   // use: []
      // }
    ],
  },
};
