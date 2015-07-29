var lodash = require("lodash");

module.exports = {
	attributes : {
		id : {
			primaryKey : true,
			unique : true,
			autoIncrement : true,
			type : "integer"
		},

		leader : {
			required : true,
			model : "User"
		},

		members : {
			collection : "User"
		},

		name : {
			required : true,
			type : "string"
		},

		getOutputForm : function(me) {
			var entry = this;
			if (me) {
				entry.isMine = me === entry.leader.id;
			}
			entry.leader.isLeader = true;
			lodash.each(entry.members, function(member) {
				member.isLeader = false;
			});
			entry.members.unshift(entry.leader);
			lodash.each(entry.members, function(member) {
				delete member.password;
			});
			return entry;
		}
	}
}


