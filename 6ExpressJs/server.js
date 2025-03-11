const express = require('express');
const { Server } = require('http');
const app=express();
const path = require('path');
const PORT = process.env.port || 3500

//This makes sure that index.html is served when / or /index is requested
app.get('^/$|/index(.html)?',(req,res)=>{
    //1st way
    // res.sendFile('./views/index.html',{root:__dirname});
    //2nd way
    res.sendFile(path.join(__dirname,'views','index.html'));
});


//This makes sure that new-page.html is served when /new-page is requested
app.get('^/$|/new-page(.html)?',(req,res)=>{
    //1st way
    // res.sendFile('./views/new-page.html',{root:__dirname});
    //2nd way
    res.sendFile(path.join(__dirname,'views','new-page.html'));
});


app.get('^/$|/old-page(.html)?',(req,res)=>{
    res.redirect(301,'/new-page.html');//302 by default
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
