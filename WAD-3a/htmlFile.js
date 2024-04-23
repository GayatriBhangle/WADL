// Serving html page from a file 
const http = require('http');
const fs = require('fs').promises;
const host  = 'localhost'
const port = 8000;

const requestListner = function(req, res){
    fs.readFile(__dirname + "/index.html")
    .then(contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents.toString());
    })
    .catch(err =>{
        res.writeHead(500);
        res.end(err.toString());
        return;
    });
};

const server = http.createServer(requestListner);
server.listen(port, host, ()=>{
    console.log(`Server is running on http://${host}:${port}`);
});
