const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',  // Set to 'development' for dev purposes
  entry: './src/index.js',  // Entry point for your application
  output: {
    filename: '[name].js',  // Output filename pattern
    path: path.resolve(__dirname, 'dist'),  // Output directory
    clean: true,  // Clean the output directory before each build
  },
  watch: true,  // Enable watch mode
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),  // Serve static files from 'dist' directory
    },
    compress: true,  // Enable gzip compression
    port: 9000,  // Dev server port
    open: true,  // Open browser after server starts
    hot: true,  // Enable Hot Module Replacement
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Path to your HTML template
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],  // Use 'style-loader' and 'css-loader' for CSS files
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',  // Handle image assets
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',  // Handle font assets
      },
    ],
  },
};
