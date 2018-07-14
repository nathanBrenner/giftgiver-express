const { User } = require("./user.model");
const merge = require("lodash.merge");

const getMe = (_, __, { user }) => {
	return user;
};

module.exports = {
	Query: {
		getMe
	}
};
