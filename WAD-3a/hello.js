const http = require("http");
const host  = 'localhost'
const port = 8000;

const requestListner = function(req, res){
    res.writeHead(200); // sets the http response status code, sucessful connection
    res.end("<h1>My first server!</h1>");
}

const server = http.createServer(requestListner);
server.listen(port, host, ()=>{
    console.log(`Server is running on http://${host}:${port}`);
});