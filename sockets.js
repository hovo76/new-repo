'use strict';

const net = require('net');
const sock = new net.Socket;

sock.on('connect', () => {
  sock.write('GET /en/ HTTP/1.1 \r\n');
  sock.write('Host: istc.am');
  sock.write('\r\n\r\n');
});

sock.setEncoding('utf-8');

const total_data = [];

sock.on('data', d => total_data.push(d));

sock.on('end', () => {
  const fullData = total_data.reduce((prev, total) => prev + total);
  const obj = {};
  const splitData = fullData.split('\n\r');
  const headers = splitData[0].split('\r\n');
  const body = splitData[1];

  const delFirstLine = headers.shift();
  obj.headers = headers;
  obj.body = body;

  console.log(obj);

});

sock.connect({
  port: 80,
  host: 'istc.am'
});
