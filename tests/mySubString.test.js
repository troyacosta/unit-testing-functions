'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('mySubstring', function() {
	it('should exist', function() {
		expect(functions.mySubstring).not.to.be.undefined;
	});
	it('should throw an exception if the first argument passed in is not a string, followed by two numbers', function() {
		expect(function() {functions.mySubstring(2, 1, 2) }).to.throw('Invalid Input: first argument has to be a string');
	});
	it('should throw an exception if the second and third arguments are not numbers', function() {
		expect(function() {functions.mySubstring('abcde','3',5) }).to.throw('Invalid Input: second and third arguments must be numbers');
	});	
	it('should throw an exception if the third argument is less than the second argument', function() {
		expect(function() {functions.mySubstring('abcde', 6, 3) }).to.throw('Invalid Input: second argument must be less than third argument')
	});
	it('should return a substring of the first argument based on the indexes of the second and third arguments', function() {
		expect(functions.mySubstring('abcde', 2, 3)).to.be.equal('cd');
	});
});