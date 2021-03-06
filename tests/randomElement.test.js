'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('randomElement', function() {
	it('should exist', function() {
		expect(functions.randomElement).not.to.be.undefined;
	});
	it('should throw an exception if an array is not passed in as its argument', function() {
		expect(function() {functions.randomElement('abc') }).to.throw('Invalid Input: your argument must be an array');
	});
	it('should return an element from the array that is passed in', function() {
		var elements = ['a', 'd', 'cc'];
		var randomEl = functions.randomElement(elements);
		expect(elements.indexOf(randomEl)).to.be.above(-1);
	});
});