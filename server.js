'use strict';

const http = require('http');
const {upper,low, show} = require('./ports');

const server = http.createServer((req,res) => {
  if(req.url === '/'){
    res.setHeader('content-type','text/html');
    res.end(`
      <!doctype html>
      <body>
        <h1>${upper(__dirname)}</h1>
        <h3>${low('TEXT which is written in h3 tag')}</h3>
        <p>${show('*')}</p>
      </body>
      `)
  }else{
    res.end('UNKNOWN')
  }
})

server.on('connection', socket => {
  console.log("someone connected", socket);
});
server.listen(8080, () => console.log('Started'));
