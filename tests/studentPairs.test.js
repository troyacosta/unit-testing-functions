'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('studentPairs', function() {
	it('should exist', function() {
		expect(functions.studentPairs).not.to.be.undefined;
	});
	it('should throw an exception if the argument passed in is not an array', function() {
		expect(function() {functions.studentPairs('abc') }).to.throw('Invalid Input');
	});
	it('should return an array', function() {
		expect(functions.studentPairs(['a','b'])).to.be.instanceof(Array);
	});
	it('should not allow non-string students', function() {
		expect(function() {functions.studentPairs([troy, mike]) }).to.throw('Invalid Input');
	});
});
