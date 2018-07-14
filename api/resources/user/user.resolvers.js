'use strict';

const User = require("./user.model");

const getMe = (_, __, { user }) => {
	return user;
};

const getUser = (_, {id}) => User.findById(id).exec()

const getUsers = () => User.find({}).exec()

const userResolvers = {
	Query: {
		getMe,
		User: getUser,
		Users: getUsers,
	}
};

module.exports = {
	userResolvers
}
