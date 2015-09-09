'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('insertDashes', function() {
	it('should exist', function() {
		expect(functions.insertDashes).not.to.be.undefined;
	});
});