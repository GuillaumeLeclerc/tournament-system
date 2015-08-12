/**
* Notification.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

	  id : {
		  type : "integer",
		  primaryKey : true,
		  unique : true,
		  autoIncrement : true
	  },

	  title : {
		  type : "string",
		  required : true
	  }, 

	  message : {
		  type : "string",
		  required : true,
	  }, 

	  target : {
		  defaultsTo : [],
		  model : "user",
		  required : true
	  }
  }
};

