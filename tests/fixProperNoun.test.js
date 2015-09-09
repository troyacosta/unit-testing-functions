'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('fixProperNoun', function() {
	it('should exist', function() {
		expect(functions.fixProperNoun).not.to.be.undefined;
	});
	it('should throw an exception if argument is not a string', function() {
		expect(function() {functions.fixProperNoun(1) }).to.throw('Invalid Input');
	});
	it('should return the argument with a capitalized first letter', function() {
		expect(functions.fixProperNoun('noun')).to.deep.equal('Noun');
	});
});