const express = require('express');
const app = express();
const port = 3000;

// Express middleware to parse JSON data
app.use(express.json());

//class 5
let users=[];

// POST route to create a user
app.post('/api/users', (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({ message: 'Name and age both are required' });
    }

    //Class 5
    const newUser = {
        id:users.length+1,
        name,age
    };

    //To push nee user to the users array
    users.push(newUser);
    res.status(201).json({
        message:`User created successfully`,
        user:newUser
    })

    //Get all users
    app.get('/api/users',(req,res)=>{
        res.json(users);
    })

    //Get User by id 
    app.get('/api/users/:id',(req,res)=>{
        const id =parseInt(req.params.id,10);
        const user =users.find(user=>user.id===id);
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        res.json(user);
    })

    //Update user by id 
    app.put('/api/users/:id',(req,res)=>{
        const id = parseInt(req.params.id, 10);
        const { name, age } = req.body; 
        const user = users.find(user => user.id === id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }   
        if (name) user.name =name;
        if (age) user.age =age;
        res.json({message:`User updated successfully`,})
    })


    //Delete user by id
    app.delete('/api/users/:id', (req, res) => {
        const id = parseInt(req.params.id);
        users = users.filter(u => u.id !== id);
        res.json({ message: 'User deleted' });
    });


    // If both data entered then return the data
    // res.status(201).json({
    //     message: 'User created successfully',
    //     user: { name, age }
    // });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
