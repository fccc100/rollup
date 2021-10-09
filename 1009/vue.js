var foo = 'hello world!';

function main () {
  console.log(foo);
}

console.log('start');
console.log(process.env.Node_ENV);

export { main as default };
