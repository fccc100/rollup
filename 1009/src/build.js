const rollup = require('../node_modules/rollup/dist/rollup')
const fs = require('fs')

let config = {
  input: __dirname + '/main.js',
  output: {
    file: 'bundle.js',
    format: 'esm'
  }
}
console.log('start')
rollup.rollup(config)
  .then(bundle => {
    console.log(bundle, 'bundle')
    return bundle.generate(config.output)
  })
  .then(output => {
    console.log(output, 'output')
    fs.writeFile('./vue.js', output.output[0].code, err => {

    })
  })