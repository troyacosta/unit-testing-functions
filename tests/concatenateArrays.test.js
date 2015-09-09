'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('concatenateArrays', function() {
	it('should exist', function() {
		expect(functions.concatenateArrays).not.to.be.undefined;
	});
	it('should throw an exception if arguments are not an array', function() {
		expect(function() {functions.concatenateArrays(1,2) }).to.throw('Invalid Input');
	});
	it('should throw an exception if arguments are strings', function() {
		expect(function() {functions.concatenateArrays('1','2') }).to.throw('Invalid Input');
	});
	it('should return one concatenated array of \'a\' and \'b\'', function() {
		expect(functions.concatenateArrays([1],[2])).to.deep.equal([1,2]);
	})
});	