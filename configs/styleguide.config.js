const path = require('path');

module.exports = {
    styleguideDir: path.resolve(__dirname, '../public'),
    components: '../src/components/**/*.{js,jsx,ts,tsx}',
    skipComponentsWithoutExample: true,
    resolver: require('react-docgen').resolver.findAllComponentDefinitions,
    propsParser: require('react-docgen-typescript').withDefaultConfig({ propFilter: { skipPropsWithoutDoc: true } }).parse,
    webpackConfig: {
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
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(woff2?|ttf|otf|eot|svg|png|jpg)$/,
                    exclude: [/node_modules/],
                    loader: 'file-loader',
                    options: { esModule: false }
                }
            ]
        }
    },
    require: [
        path.join(__dirname, '../src/styles/index.scss')
    ]
};