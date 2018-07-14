
const userRouter = require('./user.router');
const { userType, userResolvers } = require('./user.graphQLRouter');

module.exports = {
	userRouter,
	userType,
	userResolvers,
}