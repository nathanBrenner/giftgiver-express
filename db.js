const mongoose = require('mongoose')
mongoose.Primise = global.Promise

const connect = () => {
	return mongoose.connect('mongodb://localhost:27017/giftgiver', {
		useNewUrlParser: true
	})
}

module.exports = connect;