const fs = require('fs');

//Writing to a file 
fs.writeFile('example.txt','Hello from Node.js',(err)=>{
    if (err) throw err;
    console.log('File written successfully!');
})

//Reading from a file
fs.readFile('example.txt','utf8',(err,data)=>{
    if (err) throw err;
    console.log('File contents',data);
})

//Appending to a file
fs.appendFile('example.txt','\nNew Line added',(err)=>{
    if (err) throw err;
    console.log('File appended successfully!');
})

//Renaming the file
fs.rename('example.txt','rename.txt',(err)=>{
    if (err) throw err;
    console.log('File renamed successfully');
})

//Delete a file
fs.unlink('rename.txt',(err)=>{
    if (err) throw err;
    console.log('File deleted successfully');
})