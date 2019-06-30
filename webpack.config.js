const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const templateEngine = require('./src/template-engine');
const templatesData = require('./src/templateData');
const webpack = require('webpack');

module.exports = {
    entry:["./src/index.js"],
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // template: 'src/index.html'
            templateContent: templateEngine(templatesData.index),
            contentBase: './build',
            watchContentBase: true
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
          }),
          new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: "script.js",
        path: path.resolve(__dirname, "build")
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        port: 4000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          // you can specify a publicPath here
                          // by default it uses publicPath in webpackOptions.output
                          publicPath: '../',
                          hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    { loader: "css-loader", options: {
                        modules: true,
                      } },
                    {
                        loader: "postcss-loader",
                        options: { plugins: () => [
                            require("postcss-import")(),
                            require("postcss-url")(),
                            require('postcss-nesting')(),
                            require('postcss-preset-env'),
                        ] }
                    }
                ]
            }
        ]
    },
    target: 'node'
};
