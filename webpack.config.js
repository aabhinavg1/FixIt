const path = require('path');

module.exports = {
  entry: './src/index.js', // Ensure this points to your actual entry file
  output: {
    filename: 'bundle.js', // The output bundle file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // For SCSS files
        use: [
          'style-loader',   // Injects styles into the DOM
          'css-loader',     // Resolves @import and url() in CSS files
          'sass-loader'     // Compiles SCSS to CSS
        ]
      },
      {
        test: /\.css$/, // For regular CSS files
        use: [
          'style-loader', 
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'], // Ensure that Webpack resolves these extensions
  },
  mode: 'development' // Set to 'production' for optimized builds
};
