// jshint esversion:6
// no need for mocha module import. mocha is declared in the "test" attribute in package.json which means that it will look for a demo_test.js to test.
const assert = require('assert');
const MarioChar = require('../models/mario-char');

// describe tests
describe('updating record from the database', () => {

	let char;

	// create Yoshi instance
	beforeEach( (done) => {
		char = new MarioChar({
			name: 'Yoshi',
			weight: 200
		});

		char.save().then( () => {
			done();
		});
	});

	it('update one record by name from database', (done) => {
		MarioChar.findOneAndUpdate({ name:'Yoshi'}, { name: 'YOSHI!'}).then( () => {
			MarioChar.findOne({ _id: char._id}).then( (data) => {
				assert(data.name === 'YOSHI!');
				done();
			});
		});
	});

	it('increments weight by 1', (done) => {
		MarioChar.update({}, { $inc: {weight:1} }).then( () => {
			MarioChar.findOne({ name: 'Yoshi'}).then( (record) => {
				assert(record.weight === 201);
				done();
			});
		});
	});

});