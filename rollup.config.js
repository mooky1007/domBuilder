import { terser } from 'rollup-plugin-terser';

export default {
    input: 'pureDOM.js',
    output: {
        file: 'dist/pureDOM.umd.js',
        format: 'umd',
        name: 'PureDom',
        sourcemap: true,
        intro: 'const Dom = PureDom.Dom;',
    },
    plugins: [
        terser({
            format: {
                comments: false,
            },
            compress: {
                drop_console: false,
            },
        }),
    ],
};
