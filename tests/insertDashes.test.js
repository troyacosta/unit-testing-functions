'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('insertDashes', function() {
	it('should exist', function() {
		expect(functions.insertDashes).not.to.be.undefined;
	});
	it('should throw an exception if the argument passed in is not a string', function() {
		expect(function() {functions.insertDashes(1) }).to.throw('Invalid Input: argument must be a string');
	});
	it('should return the input string with dashes between each letter', function() {
		expect(functions.insertDashes('hello world')).to.equal('h-e-l-l-o w-o-r-l-d');
	});
});