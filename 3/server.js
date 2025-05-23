//Build a Web Server
const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');
const EventEmitter = require('events');

class Emitter extends EventEmitter { };

// Initialize object
const myEmitter = new Emitter();
myEmitter.on('log', (msg,fileName) => logEvents(msg,fileName));

const PORT = process.env.port || 3500

const serveFile = async (filePath, contentType, response) => {
    try {
        const rawData = await fsPromises.readFile(filePath, !contentType.includes('image') ? 'utf8' : '');
        const data = contentType === 'application/json'
            ? JSON.parse(rawData) : rawData;
        response.writeHead(
            filePath.includes('404.html') ? 404 : 200, 
            { 'Content-Type': contentType });
        response.end(
            contentType === 'application/json' ? JSON.stringify(data) : data
        );
    }
    catch (err) {
        console.log(err);
        myEmitter.emit('log', `${err.name}: ${err.message}`,'errlog.txt');
        response.statusCode = 500;
        response.end();
    }
}

const server = http.createServer((req, res) => {
    myEmitter.emit('log', `${req.url}\t${req.method}`,'reqlog.txt');
    console.log(req.url, req.method);

    const extension = path.extname(req.url);
    let contentType = 'text/html';
    switch (extension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;

        default:
            contentType = 'text/html';
    }

    let filePath =
        contentType === 'text/html' && req.url === '/'
            ? path.join(__dirname, 'views', 'index.html')
            : contentType === 'text/html' && req.url.slice(-1) === '/'
                ? path.join(__dirname, 'views', req.url == 'index.html')
                : contentType === 'text/html'
                    ? path.join(__dirname, 'views', 'req.url')
                    : path.join(__dirname, req.url);


    //Makes .html not require in the browser
    if (!extension && req.url.slice(-1) !== '/') filePath += '.html';

    const fileExists = fs.existsSync(filePath);

    if (fileExists) {
        //Serve the file
        serveFile(filePath, contentType, res);
    }
    else {
        switch (path.parse(filePath).base) {
            case 'old-page.html':
                res.writeHead(301, { 'Location': '/old-page.html' });
                res.end();
                break;
            case 'new-page.html':
                res.writeHead(301, { 'Location': '/new-page.html' });
                res.end();
                break;
            default:
                //Serve a 404 response       
                serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res);
        }
    }


    //1st way
    // if (req.url==='/' || req.url==='/home'){
    //     res.statusCode=200;
    //     res.setHeader('Content-Type','text/html');
    //     path=path.join(__dirname,'public','index.html');

    //     fs.readFile(path,'utf8',(err,data)=>{
    //         res.end(data);
    //     });
    // }


    //2nd way
    // let path;;

    // switch(req.url){
    //     case '/':
    //         res.StatusCode = 200;
    //         path = path.join(__dirname,'views','index.html');
    //         fs.readFile(path,'utf8',(err,data)=>{
    //             res.end(data);
    //         });
    //         break;
    // }

});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
// Add listener for the log event
// myEmitter.on('log', (msg) => logEvents(msg));


