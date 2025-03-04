// Title= NPM modules

// console.log('Testing');

const { format } = require('date-fns');
const { v4:uuid } = require('uuid');

console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'))

// console.log('Hello')

console.log(uuid())

console.log('Hello')


//Major Minor Patch
// "uuid": "^11.1.0" 
// To change or Update  Just use ~ or ^
// "~11.1.0" - 11.1.0 to 11.1.9

