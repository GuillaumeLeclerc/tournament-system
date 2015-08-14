/**
* Tournament.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

	  nbMaxTeam : {
		  type : "integer",
		  required : true
	  }, 

	  name : {
		  type : "string",
		  required : "true",
		  defaultsTo : "Tournoi flingué"
	  },

	  nbMaxTeamPerSection : {
		  type : "integer",
		  required : true
	  }, 

	  nbPlayerPerTeam : {
		  type : "integer",
		  required : true
	  },

	  validationPlace : {
		  type : "string",
		  required : true
	  },

	  validationDate : {
		  type : "date",
		  required : true
	  },

	  startDate : {
		  type : "date",
		  required : true
	  },

	  endDate : {
		  type : "date",
		  required : false,
		  defaultsTo : null
	  },

	  playerTypes : {
		  type : "string",
		  enum : ["male", "female", "both"],
		  required : true
	  },

	  state : {
		  type : "string",
		  required : "true",
		  defaultsTo : "created",
		  enum : ["created", "validated", "running", "ended"]
	  },

	  teams : {
		  collection : "team",
		  via : "tournament"
	  }
  }
};

