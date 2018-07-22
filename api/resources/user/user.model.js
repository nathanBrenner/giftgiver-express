const mongoose = require('mongoose')
const bcrypt = require("bcrypt-nodejs");

const schema = {
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		// required: true,
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

// generate a hash
userSchema.methods.generateHash = password =>
	bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

// check if password is valid
userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

const User = mongoose.model('user', userSchema)

module.exports = User