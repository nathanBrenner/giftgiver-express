const mongoose = require('mongoose')
mongoose.Primise = global.Promise
const config = require('./config/index')

const connect = () => {
	return mongoose.connect(config.db.url, {
		useNewUrlParser: true
	})
}

module.exports = connect;