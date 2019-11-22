const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app:  "./src/index.js"
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, 'dist'),
    },
    devServer: {
       hot: true,
       headers: {
        'Access-Control-Allow-Origin': '*'
    }
    },
    mode:'development',
    devtool: "cheap-module-source-map",
    resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    module: {
             rules: [
                {
                    test: /\.js[x]?$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    loader: "style-loader!css-loader"
                },
             ],
            },
            plugins: [
                new HtmlWebpackPlugin()
            ],
            resolve: {
                extensions: [ ".js", ".jsx" ]
            }
        };
        