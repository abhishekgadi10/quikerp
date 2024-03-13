// const path = require('path');

// module.exports = {
//     entry: './src/index.js', // Replace './src/index.js' with the path to your entry file
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js'
//     },
//     resolve: {
//         extensions: ['.js', '.jsx'], // Add '.jsx' extension to resolve JSX files
//         alias: {
//             '@components': path.resolve(__dirname, 'src', 'Components') // Alias for your Components directory
//         }
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader'
//                 }
//             }
//         ]
//     }  
// };











const HtmlWebPackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {

entry: "./src/App.js"

|

output: {

path: path.resolve(__dirname, "dist"),

filename: "bundle.js"

},

plugins: [new HtmlWebPackPlugin({ template: "./src/index.html" })]

};