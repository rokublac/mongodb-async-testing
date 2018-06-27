// jshint esversion:6
// no need for mocha module import. mocha is declared in the "test" attribute in package.json which means that it will look for a demo_test.js to test.
const assert = require('assert');
const MarioChar = require('../models/mario-char');

// describe tests
describe('deleting record from the database', () => {

	let char;

	beforeEach( (done) => {
		char = new MarioChar({
			name: 'Mario'
		});

		char.save().then( () => {
			// assert(char.isNew === false);
			done();
		});
	});

	// find one record by name
	it('find one record by name from database', (done) => {

		MarioChar.findOne({ name: 'Mario' }).then( (data) => {
			assert(data.name === 'Mario');
			done();

		});
	});

	// find one record by ID
	it('find one record by ID from database', (done) => {

		MarioChar.findOne({ _id: char._id }).then( (data) => {
			// convert to string to have a valid logical expressions since _id is wrapped by an object
			// console.log(typeof data._id);
			assert(data._id.toString() === char._id.toString());
			done();

		});
	});

});