const path = require('path');

module.exports = {
  target: 'web',
  mode: 'production',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};