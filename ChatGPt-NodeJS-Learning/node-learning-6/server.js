const express = require('express');
const app=express();
const port = 3000;

//Express does not support json by default so 
app.use(express.json());

//Import user routes
const userRoutes = require('./routes/users');

//use the user routes
app.use('/api/users',userRoutes);

app.listen(port,()=>{
    console.log(`Server is running on htttp://localhost:${port}`);
});
