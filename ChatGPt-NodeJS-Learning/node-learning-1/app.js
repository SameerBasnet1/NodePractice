// //Import greet.js file and use it
// const greet = require('./greet');
// console.log(greet('Sameer'));

// //Inside module to shopw OS
// const os = require('os');
// console.log(os.platform()); // Outputs your OS

// //Just a simple console
// console.log("Hello World");

//A basic web server
const http= require('http');
const server = http.createServer((req,res)=>{
    res.write('Hello From nodejs server')
    res.end();
})
server.listen(3000,()=>{
    console.log('Server is running on port 3000');
})