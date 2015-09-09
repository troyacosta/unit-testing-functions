'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('myMin', function() {
	it('should exist', function() {
		expect(functions.myMin).not.to.be.undefined;
	});
	it('should throw an exception if arguments are not integers', function() {
		expect(function() {functions.myMin('1','2') }).to.throw('Invalid Input');
	});
	it('should return an integer and it should be the lower value of the two', function() {
		expect(functions.myMin(1,2)).to.deep.equal(1);
	});
});