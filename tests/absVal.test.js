'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('absVal', function() {
	it('should exist', function() {
		expect(functions.absVal).not.to.be.undefined;
	});
	it('should throw an exception if argument is not a number', function() {
		expect(function() {functions.absVal('1') }).to.throw('Invalid Input');
	});
	it ('should throw an exception if the argument is a decimal number', function() {
		expect(function() {functions.absVal(1.23) }).to.throw('Invalid Input');
	});
	it ('should not return a negative number', function() {
		expect(functions.absVal(-5)).to.deep.equal(5);
	});
});