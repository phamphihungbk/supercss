const path = require('path');
const ExtractCSS = require('mini-css-extract-plugin');
const MinifyCSS = require('optimize-css-assets-webpack-plugin');



module.exports = {
    mode: 'production',
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'release/'),
        filename: 'app.min.js'
    },
    optimization: {
        minimizer: [new MinifyCSS({})],
    },
    plugins: [
        new ExtractCSS({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'app.min.css',
        }),
    ],
    module: {
        rules: [
            {
            test: /\.scss$/,
            use: [ExtractCSS.loader, 'css-loader', 'sass-loader']
            },
        ]
    }
};