const rollup = require('../node_modules/rollup/dist/rollup')

let config = {
  input: __dirname + '/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
}
console.log('start')
rollup.rollup(config, (res, err) => {
  console.log('res')
  console.log(res)
  console.log(err)
})