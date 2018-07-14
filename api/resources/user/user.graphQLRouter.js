const { readFileSync } = require("fs");

const userType = readFileSync(__dirname + '/user.graphql', 'utf8')

console.log(userType)

const userResolvers = require("./user.resolvers");

module.exports = { userType, userResolvers };
