'use strict';

var net = require('net');
var fs = require('fs');
var name = require('gen-id');
var request = '';

var server	= net.createServer(function (socket) {
socket.on('data', function(data) {
	request = name.get();
	fs.writeFile(request + '.txt', data, function(err) {
		if (err) {
			return err;
		} else {
			console.log('file saved as ' + request +'.txt');
			}
		});
	});
});

server.listen(3000, function() {
	console.log('server running on port 3000');
});

