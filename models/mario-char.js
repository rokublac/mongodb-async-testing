// jshint esversion:6
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create schema and model
// schema
const MarioCharSchema = new Schema({
	name: String,
	weight: Number
});

// model
const MarioChar = mongoose.model('mario-char', MarioCharSchema);

module.exports = MarioChar;