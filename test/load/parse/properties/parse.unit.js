'use strict';

var expect = require('chai').expect,
	properties = requireLib('load/parse/properties');

describe("properties.parse module test:", function() {

	var validProperties = { x: 'a' },
		validPropertiesText = "x = a";

	describe("should parseSync properties document", function() {

		it("and return object", function() {
			var result = properties.parseSync(validPropertiesText);
			expect(result).to.exist;
			expect(result).to.be.eql(validProperties);
		});

		it("and return empty object on empty json", function() {
			var result = properties.parseSync('');
			expect(result).to.exist;
			expect(result).to.be.eql({});
		});

	});

	describe("should parse properties document", function() {

		it("and return object", function(done) {
			properties.parse(validPropertiesText, function(err, result) {
				if (err) return done(err);
				expect(result).to.exist;
				expect(result).to.be.eql(validProperties);
				done();
			});
		});

		it("and return empty object on empty json", function(done) {
			properties.parse('', function(err, result) {
				if (err) return done(err);
				expect(result).to.exist;
				expect(result).to.be.eql({});
				done();
			});
		});

	});

});
