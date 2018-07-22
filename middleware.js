const cookieParser = require("cookie-parser");
const express = require('express')
const logger = require("morgan");
const passport = require("passport");
const path = require("path");
const session = require("express-session");

module.exports = function (app) {
	app.set("views", path.join(__dirname, "views"));
	app.set("view engine", "pug");
	
	app.use(logger("dev"));
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(express.static(path.join(__dirname, "public")));

	// required for passport
	app.use(
		session({ secret: "henryjames", resave: false, saveUninitialized: false })
	);
	app.use(passport.initialize());
	app.use(passport.session());
}