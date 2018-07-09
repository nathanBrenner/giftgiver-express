const generateControllers = require('../../modules/query')
const User = require('./user.model')

module.exports = generateControllers(User)