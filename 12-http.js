const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('here is out short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>we can find the page your are looking for</p>
        <a href="/">back home</a>
    `)
})
server.listen(8080)
