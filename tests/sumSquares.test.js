'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('sumSquares', function() {
	it('should exist', function() {
		expect(functions.sumSquares).not.to.be.undefined;
	});
	it('should throw an exception if the argument passed in is not an integer', function() {
		expect(function() {functions.sumSquares('1') }).to.throw('Invalid Input');
	});
	it('should throw an exception if the argument passed in is less than 1', function() {
		expect(function() {functions.sumSquares(0) }).to.throw('Invalid Input');
	});
	
});