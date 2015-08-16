/**
 * Team.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {
		id : {
			type : "integer",
			autoIncrement : true,
			primaryKey : true,
			unique : true
		},

		name : {
			type : "string",
			required : true,
			unique : true
		},

		tournament : {
			model : "tournament",
			required : true
		},

		captain : {
			model : "user",
			required : true
		},

		members : {
			collection : "user",
			via : "teams",
			dominant : false
		}
	}
};

