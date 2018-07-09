const mongoose = require('mongoose')

const schema = {
	email: {
		type: String,
		required: true,
		unique: true,
	},
	firstName: String,
	lastName: String,
	spouse: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
	wishList: [String],
}

const userSchema = new mongoose.Schema(schema)

const User = mongoose.model('user', userSchema)

module.exports = User