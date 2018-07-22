const LocalStrategy = require('passport-local').Strategy;
const User = require('../resources/user/user.model');

module.exports = function(passport) {
	// used to serialize the user for the session
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	// used to deserialize the user
	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	passport.use(
		'local-signup',
		new LocalStrategy(
			{
				usernameField: 'email',
				passwordField: 'password',
				passReqToCallback: true,
			},
			function(req, email, password, done) {
				process.nextTick(function() {
					User.findOne({ email }, function(err, user) {
						if (err) return done(err);

						if (user) {
							return done(null, false, {message: 'that email is already taken'})
						} else {
							let newUser = new User();

							newUser.email = email;
							newUser.password = newUser.generateHash(password);
							
							newUser.save(function(err) {
								if (err) throw err;
								return done(null, newUser)
							});
						}
					});
				})
			}
		)
	)
}
