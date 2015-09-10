'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('findMaxDiff', function() {
	it('should exist', function() {
		expect(functions.findMaxDiff).not.to.be.undefined;
	});
	it('should throw an exception if the argument passed in is not an array', function() {
		expect(function() {functions.findMaxDiff('1','4','9') }).to.throw('Invalid Input: argument has to be an array');
	});
	it('should throw an exception if anything other than numbers are in the passed in array', function() {
		expect(function() {functions.findMaxDiff(['1', 'abc', '3']) }).to.throw('Invalid Input: array can only contain numbers');
	});
	it('should throw an exception if anything other than numbers are in the passed in array', function() {
		expect(function() {functions.findMaxDiff(undefined) }).to.throw('Invalid Input: argument has to be an array');
	});
	it('should return the largest difference between two adjacent elements', function() {
		expect(functions.findMaxDiff([1, 3, 9, 3, 28])).to.equal(25);
	});
});