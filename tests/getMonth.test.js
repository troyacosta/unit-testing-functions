'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('getMonth', function() {
	it('should exist', function() {
		expect(functions.getMonth).not.to.be.undefined;
	});
	it('should throw an exception if the argument passed in is not an integer', function() {
		expect(function() {functions.getMonth('1') }).to.throw('Invalid Input');
	});
	it('should throw an exception if the argument passed in is greater than 12', function() {
		expect(function() {functions.getMonth(13) }).to.throw('Invalid Input');
	})
	it('should return a string', function() {
		expect(functions.getMonth(6)).to.equal('june');
	});
});