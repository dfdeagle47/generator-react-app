/*=== <%= name %> Model ===*/
'use strict';

var mongoose = require('mongoose');

var <%= name %>Model = function() {
	var <%= name %>Schema = mongoose.Schema({
		<%= schema %>
	});

	return mongoose.model('<%= name %>', <%= name %>Schema);
}

module.exports = <%= name %>Model;