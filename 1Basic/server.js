
const os =require ('os');
const path=require('path');
const {add,subtract,multiply,divide}=require('./math');

console.log(add(1,2));
console.log(subtract(9,3));
console.log(multiply(4,5)); 
console.log(divide(8,2));
// console.log('Server-side code running');

// console.log(global)

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

const add =(a,b)=>a+b;
const subtract =(a,b)=>a-b;
const multiply =(a,b)=>a*b;
const divide =(a,b)=>a/b;


module.exports={add,subtract,multiply,divide};