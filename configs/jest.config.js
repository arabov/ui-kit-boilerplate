const path = require('path');

module.exports = {
    rootDir: path.resolve(__dirname, '../'),
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/style_mock.js',
        '\\.(woff2?|ttf|otf|eot|svg|png|jpg)$': '<rootDir>/__mocks__/file_mock.js'
    },
    snapshotResolver: './configs/snapshot_resolver.js'
};
