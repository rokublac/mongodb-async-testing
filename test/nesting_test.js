// jshint esversion:6
const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

// decsribe our tests
describe('nesting records', () => {

	// drop database to see out tests without duplicates
	beforeEach((done) => {
		mongoose.connection.collections.authors.drop( () => {
			done();
		});
	});

	// create an author
	it('creates an author with sub-documents', (done) => {
		let jimmy = new Author({
			name: 'Jimmy Jimson',
			age: 23,
			books: [{title: "Jim's Biography", pages: 100 }]
		});

		jimmy.save().then( () => {
			Author.findOne({ name: 'Jimmy Jimson'}).then( (record) => {
				assert(record.books.length === 1);
				done();
			});
		});
	});

	// add book to an author
	it('adds a book to an author', (done) => {
		let jimmy = new Author({
			name: 'Jimmy Jimson',
			age: 23,
			books: [{title: "Jim's Biography", pages: 100 }]
		});

		jimmy.save().then( () => {
			Author.findOne({ name: 'Jimmy Jimson'}).then( (record) => {
				// push into the array in books array
				record.books.push({ title: "Jim's 2nd Biography", pages: 200});
				record.save().then( () => {
					// check if book array has been updated.
					Author.findOne({ name: 'Jimmy Jimson'}).then( (record) => {
						assert(record.books.length === 2);
						done();
					});
				});
			});
		});
	});
});