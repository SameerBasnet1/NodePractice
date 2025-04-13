// //In nodejs we write like this
// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.end('Hello from nodejs');
// })


// //In Expressjs we write like this
// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
//     res.send('Hello from expressjs');
// })


const express = require('express');
const app=express();
const port = 3000;

//Home route
app.get('/',(req,res)=>{
    res.send('Hello from expressjs')
})

//About route
app.get('/about',(req,res)=>{
    res.send('Hello from about page')
})

//To start server
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})

//to return json
app.get('/api/users',(req,res)=>{
    res.json([
        {name:'Sameer Basnet',age:21},
        {name:'Sharmila Basnet',age:47}
    ]);
});