// jshint esversion:6
// ## Test connection to mongoDB
const mongoose = require('mongoose');

// Using defualt ES6 promises - this is here if the mongoose promise method is deprecated
mongoose.Promise = global.Promise;

// drop the characters collection before each test
beforeEach( (done) => {
	// drop the collection
	mongoose.connection.collections['mario-chars'].drop( () => {
		done();
	});
});

// connect to the database before running tests
before( (done) => {
	// connect to mongodb - if 'test' database does not exist mongo will create one.
	mongoose.connect('mongodb://localhost/test');

	//this s a mongoose event listener. list to 'open' once.
	mongoose.connection.once('open', () => {
		console.log('connection has been established.');
		done();
	}).on('error', (error) => {
		console.log(`connection error: ${error}`);
	});
});


