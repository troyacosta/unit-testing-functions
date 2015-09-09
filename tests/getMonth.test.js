'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('getMonth', function() {
	it('should exist', function() {
		expect(functions.getMonth).not.to.be.undefined;
	});
});