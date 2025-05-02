const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/',async(req,res)=>{
    const {name,age} = req.body;
    if (!name || !age) return res.status(400).json({message:'Nmae and age required'});

    const newUser = new User({
        name,
        age
    });
})