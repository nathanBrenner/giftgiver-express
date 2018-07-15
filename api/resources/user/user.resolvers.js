'use strict';

const User = require("./user.model");
const merge = 'lodash.merge'

const getMe = (_, __, { user }) => {
	return user;
};

const getUser = (_, {id}) => User.findById(id).exec()

const getUsers = () => User.find({}).exec()

const addUser = (_, {input}) => User.create(input)

const updateUser = (_, {input}) => {
	const {id, ...update} = input;
	return User.findByIdAndUpdate(id, update, {new: true}).exec()
}

const removeUser = (_, {id}) => {
	return User.findOneAndRemove(id).exec()
}

const userResolvers = {
	Query: {
		getMe,
		User: getUser,
		Users: getUsers,
	},
	Mutation: {
		addUser,
		updateUser,
		removeUser,
	}
};

module.exports = {
	userResolvers
}
