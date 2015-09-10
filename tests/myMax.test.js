'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('myMax', function() {
	it('should exist', function() {
		expect(functions.myMax).not.to.be.undefined;
	});
	it('should throw an exception if arguments are not an array', function() {
		expect(function() {functions.myMax(1) }).to.throw('Invalid Input');
	});
	it('should throw an exception if arguments are strings', function() {
		expect(function() {functions.myMax('1') }).to.throw('Invalid Input');
	});
	it('should return the highest integer of the array', function() {
		expect(functions.myMax([3,5,7,9])).to.equal(9);
	});
});