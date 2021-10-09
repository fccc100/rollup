import replace from 'rollup-plugin-replace'

export default {
  input: 'src/main.js',
  output: {
      file: 'dist/bundle.js',
      format: 'cjs'
  },
  plugins: [
    replace({
      'process.env.Node_ENV': JSON.stringify('development')
    })
  ]
}
