const express = require('express');
const router = express.Router();

let users =[];

//Create a user
router.post('/',(req,res)=>{
    const {name,age} = req.body;
    if(!name || !age){
        return res.status(400).json({Message: 'Name and age both are required'});
    }

    const newUser ={
        id:users.length +1,
        name,
        age
    }

    users.push(newUser);
    res.status(201).json({
        message:'User created successfully',
        user:newUser
    })
})

//Get all users
router.get('/',(req,res)=>{
    res.json(users);
})

// Read one
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});

// Update
router.put('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });

    const { name, age } = req.body;
    if (name) user.name = name;
    if (age) user.age = age;

    res.json({ message: 'User updated', user });
});

// Delete
router.delete('/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.json({ message: 'User deleted' });
});

module.exports = router;