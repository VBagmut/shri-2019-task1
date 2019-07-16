const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    webpack: config => {
        config.plugins.push(
            new MiniCssExtractPlugin({
                filename: 'static/styles/style.css',
                chunkFilename: 'static/styles/style.css',
                ignoreOrder: false, // Enable to remove warnings about conflicting order
                hmr: process.env.NODE_ENV === "development"
            }),
            new CopyPlugin([
                { from: 'static/styles/style.css', to: '../../build/style.css' },
            ]),
        );

        config.module.rules.push({
            test: /\.scss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // you can specify a publicPath here
                        // by default it uses publicPath in webpackOptions.output
                        publicPath: "../",
                        hmr: process.env.NODE_ENV === "development",
                        sourceMap: false,
                    }
                },
                'css-loader',
                "sass-loader",
                'import-glob'
            ]
        });

        // config.target = 'node';

        return config;
    }
};
