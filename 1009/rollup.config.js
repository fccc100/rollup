import replace from 'rollup-plugin-replace'


const banner =
  '/*!\n' +
  ` * rollup v1.0.0\n` +
  ` * (c) 2000-${new Date().getFullYear()} kd\n` +
  ' * Released under the MIT License.\n' +
  ' */'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    banner
  },
  plugins: [
    replace({
      'process.env.Node_ENV': JSON.stringify('development')
    })
  ]
}
