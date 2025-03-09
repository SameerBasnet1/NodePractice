const express = require('express');
const { Server } = require('http');
const app=express();
const path = require('path');
const PORT = process.env.port || 3500

app.get('/',(req,res)=>{
    //1st way
    // res.sendFile('./views/index.html',{root:__dirname});
    //2nd way
    res.sendFile(path.join(__dirname,'views','index.html'));
});

app.get('/new-page',(req,res)=>{
    //1st way
    // res.sendFile('./views/new-page.html',{root:__dirname});
    //2nd way
    res.sendFile(path.join(__dirname,'views','new-page.html'));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
