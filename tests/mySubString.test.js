'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('mySubString', function() {
	it('should exist', function() {
		expect(functions.mySubString).not.to.be.undefined;
	});
});