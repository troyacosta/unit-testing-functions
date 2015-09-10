'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('findMaxDiff', function() {
	it('should exist', function() {
		expect(functions.findMaxDiff).not.to.be.undefined;
	});
	it('should throw an exception if the argument passed in is not an array of numbers', function() {
		expect(function() {functions.findMaxDiff(['1','4','9']) }).to.throw('Invalid Input');
	});
});