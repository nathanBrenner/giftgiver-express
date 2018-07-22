
module.exports = function(app, passport) {

	const routes = require('express').Router();
	const indexRouter = require('./home');
	const loginRouter = require('./login');
	const signupRouter = require('./signup');

	routes.use('/', indexRouter);
	routes.use('/signup', signupRouter);
	routes.use('/login', (req, res) => res.json({login: true}));

	return routes;
}