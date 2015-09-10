'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('mySubString', function() {
	it('should exist', function() {
		expect(functions.mySubString).not.to.be.undefined;
	});
	it('should throw an exception if the first argument passed in is not a string, followed by two numbers', function() {
		expect(function() {functions.mySubString(abc, 1, 2) }).to.throw('Invalid Input');
		expect(function() {functions.mySubString('abc', '1', 2) }).to.throw('Invalid Input');
		expect(function() {functions.mySubString('abc', 1, '2') }).to.throw('Invalid Input');
		expect(function() {functions.mySubString('abc', '1', '2') }).to.throw('Invalid Input');
	});

});