const path = require('path');
const ExtractCSS = require('mini-css-extract-plugin');
const MinifyCSS = require('optimize-css-assets-webpack-plugin');
const BrotliCompression = require('brotli-webpack-plugin');


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
            filename: 'app.min.css',
        }),
        new BrotliCompression({
            asset: '[path].br[query]',
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8
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