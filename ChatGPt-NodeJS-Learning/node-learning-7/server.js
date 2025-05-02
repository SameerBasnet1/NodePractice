const express = require('express'); 
const mongoose = require('mongoose');
const port = 3000;
const app = express();

//Middleware
app.use(express.json());


mongoose.connect('mongodb+srv://lordking1037:<db_password>@cluster0.l3kklrq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser:true,
    useUnifiedToplogy:true,
}),then(()=>console.log('MongoDb connected'))
.catch((err)=>console.log('Mongodb not connected'));
