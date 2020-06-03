const express = require('express');
const app = express();
const server = require('http').Server(app);

server.listen(80);

app.use('/node', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/node', express.static(__dirname + '/node_modules/socket.io-client/dist/'));
app.use('/node', express.static(__dirname + '/node_modules/jquery/dist/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
