const http = require('http');


const sever = http.createServer((req, res) =>{
  if(req.url === '/'){
    res.end('Welcome to our home page');
  }
  if(req.url === '/about'){
    res.end('Here is the about page');
  }
  res.end(`<h1>Oops!!</h1>
            <p>We can't seem to find the page you are looking for..</p>
            <a href="/">back home</a>`)
})

sever.listen(5000)