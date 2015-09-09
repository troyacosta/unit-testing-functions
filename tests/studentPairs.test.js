'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('studentPairs', function() {
	it('should exist', function() {
		expect(functions.studentPairs).not.to.be.undefined;
	});
});
