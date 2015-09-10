'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('studentPairs', function() {
	it('should exist', function() {
		expect(functions.studentPairs).not.to.be.undefined;
	});
	it('should throw an exception if the argument passed in is not an array', function() {
		expect(function() {functions.studentPairs(1,'abc') }).to.throw('Invalid Input');
	});
});
