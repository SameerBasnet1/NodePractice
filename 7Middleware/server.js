const express = require('express');
const app=express();
const path = require('path');
const PORT = process.env.port || 3500

//built in middleware to handle urlencoded data
//In other words form data
//'Context-type :application /x-www-form-urlencoded'
app.use(express.urlencoded({extended:false}));

//built in middleware to handle json data
app.use(express.json());

//serve static files
app.use(express.static(path.join(__dirname,'/public')));

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


//Route handlers
app.get('/hello(.html)?',(req,res,next)=>{
    console.log('Attempting to load hello.html');
    next();
},(req,res)=>{
    res.send("Hello World");
})

const one=(req,res,next)=>{
    console.log('One');
    next();
}
const two=(req,res,next)=>{ 
    console.log('Two');
    next();
}
const three=(req,res)=>{        
    console.log('Three');
    res.send('Finished');
}

app.get('/chain(.html)?',[one,two,three]);

app.get('/*',(req,res)=>{
     res.sendFile(path.join(__dirname,'views','404.html'));
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
