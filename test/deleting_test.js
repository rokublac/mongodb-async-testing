// jshint esversion:6
// no need for mocha module import. mocha is declared in the "test" attribute in package.json which means that it will look for a demo_test.js to test.
const assert = require('assert');
const MarioChar = require('../models/mario-char');

// describe tests
describe('deleting a record from the database', () => {

	let char;

	// create Peach instance
	beforeEach( (done) => {
		char = new MarioChar({
			name: 'Peach'
		});

		char.save().then( () => {
			done();
		});
	});

	it('deletes one record by name from database', (done) => {

		MarioChar.findOneAndRemove({ name: 'Peach' }).then( () => {
			// check if Peach exists
			MarioChar.findOne({ name: 'Peach' }).then( (result) => {
				// null signifies that the Mario data has been removed
				assert(result === null);
				done();
			});
		});
	});

});