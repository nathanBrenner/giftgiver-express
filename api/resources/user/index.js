
const userRouter = require('./user.router');
const { userType, userResolvers } = './user.graphQLRouter';

module.exports = {
	userRouter,
	userType,
	userResolvers,
}