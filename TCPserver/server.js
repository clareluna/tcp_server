'use strict';

var net = require('net');
var fs = require('fs');
var name = require('dog-names');
var request = '';

console.log(request);

var server = net.createServer(function(socket) {
	socket.on('data', function(data) {
		console.log(data.toString());
		request = name.femaleRandom();
		console.log(request);
		fs.writeFile(__dirname + '/../files/' + request + '.txt', data, function(err) {
			if (err) {
				console.log('this is the error: ' + err);
			} else {
				console.log('file saved as ' + request +'.txt');
			}
			socket.end();
		// socket.on('end', function() {
		// 	console.log('disconnected');
		// 	});
		});
	});	
});	

server.listen(3000, function() {
	console.log('server running on port 3000');
});
