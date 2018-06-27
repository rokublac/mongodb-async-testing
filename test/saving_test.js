// jshint esversion:6
// no need for mocha module import. mocha is declared in the "test" attribute in package.json which means that it will look for a demo_test.js to test.
const assert = require('assert');
const MarioChar = require('../models/mario-char');

// describe tests
describe('saving records', () => {
	// create tests
	it('saves a record to the database', (done) => {
		// arbritrary test - 1+1 === 5 is true this test it block will pass as successful. 
		//(done by npm run test, remember to change the test attribute in package.json)
		// assert(1 + 1 === 2);

		// new mario character instance
		let char = new MarioChar({
			name: "Mario"
		});

		// .save is asynchronous
		char.save().then( () => {
			// isNew is true when data is created locally but have not been saved into the database
			// isNew is false when data has been saved to the database
			assert(char.isNew === false);
			// tell mocha that test is done.
			done();
		});
	});

});