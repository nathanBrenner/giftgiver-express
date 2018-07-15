const { makeExecutableSchema } = require("graphql-tools");
const merge = require("lodash.merge");
const { graphqlExpress } = require("apollo-server-express");
const { userType, userResolvers } = require("./resources");

const baseSchema = `
  schema {
		query: Query
		mutation: Mutation
  }
`;

var typeDefs = [baseSchema, userType];

var resolvers = merge(
	{},
	userResolvers
);

var schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = graphqlExpress(req => ({
	schema,
	req,
}));
