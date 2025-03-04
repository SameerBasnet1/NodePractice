const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log("Original Content:\n", data);

        await fsPromises.writeFile(path.join(__dirname, 'files', 'PromiseWrite.txt'), data, 'utf8');
        await fsPromises.appendFile(path.join(__dirname, 'files', 'PromiseWrite.txt'), '\n\nNice to meet you', 'utf8');
        await fsPromises.rename(
            path.join(__dirname, 'files', 'PromiseWrite.txt'),
            path.join(__dirname, 'files', 'PromiseComplete.txt')
        );

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'PromiseComplete.txt'), 'utf8');
        console.log("Updated Content:\n", newData);
    } catch (err) {
        console.error("Error:", err);
    }
};

fileOps();  // Call the function



// fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8',(err,data)=>{
//     if (err) throw err;
//     console.log(data);
//     console.log('Read Complete');
// });

// console.log('Hello');

// fs.writeFile(path.join(__dirname,'files','reply.txt'),'Nice to meet you','utf8',(err,data)=>{
//     if (err) throw err;
//     console.log('Write Complete');

//     fs.appendFile(path.join(__dirname,'files','reply.txt'),'\n\n Yes it is','utf8',(err,data)=>{
//         if (err) throw err;
//         console.log('Append Complete');

//         fs.rename(path.join(__dirname,'files','newReply.txt'),path.join(__dirname,'files','NewReply.txt'),(err)=>{
//             if (err) throw err;
//             console.log('Rename Complete');
//         });
//     });

// });




process.on('uncaughtException',(err)=>{
    console.error('There was an Uncaught error:,${err}');
    process.exit(1);
})
