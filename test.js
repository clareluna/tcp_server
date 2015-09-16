'use strict';

var chai = require('chai');
var expect = require('chai').expect;
var tcp = require('./TCPserver/server.js');
var net = require('net');
var chaiHTTP = require('chai-http');

describe('tcp server should log unique names from gen-id', function(){
	before(function(){
		tcp;
	});
	it('should write new file name', function(done) {
		chai.request('/') 
			.get('/'); 
		var filename = __dirname + './../' + request +'.txt';
		expect(filename).to.exist;
	});
});
