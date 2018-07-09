const merge = require('lodash.merge')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const env = process.env.NODE_ENV

const baseConfig = {
	port: 0,
	db: {
		url: ''
	}
}

let envConfig = {}

switch (env) {
  case 'development':
  case 'dev':
    envConfig = require('./dev')
    break;
  case 'test':
  case 'testing':
    envConfig = require('./testing')
    break;
  case 'prod':
  case 'production':
    envConfig = require('./prod')
  default:
    envConfig = require('./dev')
}


module.exports = merge(baseConfig, envConfig)