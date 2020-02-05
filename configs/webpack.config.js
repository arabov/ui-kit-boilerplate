const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.ts'),
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: 'index.js',
        library: 'Ui-kit',
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                exclude: [/node_modules/],
                loader: 'ts-loader'
            },
            {
                test: /\.jsx?$/i,
                exclude: [/node_modules/],
                loader: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff2?|ttf|otf|eot|svg|png|jpg)$/,
                exclude: [/node_modules/],
                loader: 'file-loader',
                options: { esModule: false }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'ui-kit.css'
        })
    ]
};