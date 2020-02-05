import path from 'path';
import node_sass from 'node-sass';
import typesript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import sass from 'rollup-plugin-sass';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'postcss';
import postcss_url from 'postcss-url';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import package_json from '../package.json';

export default [
    {
        input: path.resolve(__dirname, '../src/index.ts'),
        output: {
            file: package_json.main,
            format: 'cjs'
        },
        plugins: [
            url({
                limit: 1024 * 50
            }),
            sass({
                runtime: node_sass,
                output: `./lib/${package_json.name}.css`,
                processor: (css) => postcss([
                    autoprefixer,
                    postcss_url({ url: 'inline', basePath: './' }),
                    cssnano
                ]).process(css, { from: undefined })
            }),
            external(),
            resolve(),
            typesript({
                exclude: ['node_modules/**']
            }),
            commonjs({
                namedExports: {
                    'react-yandex-maps': ['YMaps', 'Map', 'Placemark']
                }
            })
        ]
    }
]