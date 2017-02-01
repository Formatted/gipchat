/* eslint no-console: ["error", { allow: ["log"] }] */
const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
// const io = require('socket.io').listen(server);
// const request = require('request');

const port = process.env.PORT || '8080';

// app.use(express.static(__dirname + '/'));
app.use(express.static(`${__dirname}/`));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.resolve(__dirname, './src') });
});

server.listen(port, () => {
  // custom console
  console.log(`Example app listening on port ${port}!`);
});
