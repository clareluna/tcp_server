'use strict';

var chai = require('chai');
var http = require('http'); //needed?
var expect = chai.expect;
var fs = require('fs');
require('./TCPserver/server.js');
var net = require('net');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);


describe('tcp server should log unique names from random female dog name', function(){
	var preTestDir;
	before(function(done) {
		preTestDir = fs.readdirSync(__dirname + '/files');
		console.log(preTestDir);
		console.log((preTestDir).length);
		chai.request('localhost:3000')
			.get('/')
			// .send({name: 'testing'})
			.end(function(err, res){
			if (err) console.log('before in describe block err: ' +err);
			done();
			});
	});
	
	it('should write new file name', function() {
		var postTestDir = fs.readdirSync(__dirname + '/files');
		console.log(postTestDir);
		console.log((postTestDir).length);
		expect(postTestDir.length).to.be.above(preTestDir.length);
	});
});
