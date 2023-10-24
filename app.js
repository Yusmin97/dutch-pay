const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('서버 에러');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    } else if (req.url === '/dutchPay') {
      fs.readFile('./static/dutchPay.html', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('서버 에러');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    } else if (req.url === '/static/css/indexStyle.css') {
      fs.readFile('./static/css/indexStyle.css', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('서버 에러');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/css' });
          res.end(data);
        }
      });
    } else if (req.url === '/static/css/resultStyle.css') {
      fs.readFile('./static/css/resultStyle.css', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('서버 에러');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/css' });
          res.end(data);
        }
      });
    } else if (req.url === '/static/js/dutch-pay.js') {
      fs.readFile('./static/js/dutch-pay.js', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('서버 에러');
        } else {
          res.writeHead(200, { 'Content-Type': 'Application/javascript' });
          res.end(data);
        }
      });
    } else {
      res.writeHead(404, {'Content-Type' : 'text/plain'})
      res.end('Not Found')
    }
  }
});

const port = 8080
server.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`)
})
