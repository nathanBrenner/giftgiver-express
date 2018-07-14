const { makeExecutableSchema } = require("graphql-tools");
const merge = require("lodash.merge");
const { graphqlExpress } = require("apollo-server-express");
const { userType, userResolvers } = require("./resources/user");

const baseSchema = `
  schema {
    query: Query
  }
`;

// var typeDefs = [baseSchema, userType];

// var resolvers = merge({}, userResolvers);

var typeDefs = [`
type Query {
  hello: String
}

schema {
  query: Query
}`];

var resolvers = {
  Query: {
    hello(root) {
      return 'world';
    }
  }
};

var schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = graphqlExpress(req => ({
	schema,
	req,
	user: req.user
}));
