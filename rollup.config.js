import { terser } from 'rollup-plugin-terser';

export default {
    input: 'dom-builder.js',
    output: {
        file: 'dist/vanilladom-builder.umd.js',
        format: 'umd',
        name: 'VanillaDOM',
        sourcemap: true,
    },
    plugins: [terser()],
};
