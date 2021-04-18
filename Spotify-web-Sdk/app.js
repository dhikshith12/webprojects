const http = require('http')
const fs = require('fs')
var htm = fs.readFileSync('./index.html').toString()
const server = http.createServer((req,res)=>{
    if(req.url=='/home'){
        res.writeHead(200,{'Content-type':'text/html'})
        
        res.end(htm)
    }
})

server.listen(4004,()=>console.log('server running...'))