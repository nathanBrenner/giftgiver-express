const createError = require("http-errors");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const { graphiqlExpress } = require("apollo-server-express");

const config = require("./config/index");
const connect = require("./db");
const setGlobalMiddleware = require('./middleware');
const { restRouter, graphQLRouter } = require("./api/index");
const index = require("./routes/index");

const app = express();

setGlobalMiddleware(app);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log(`mongodb connected, server started on port ${config.port}`);
});
connect();

require('./api/modules/passport')(passport)
app.use(
	session({ secret: "henryjames", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", index)(app, passport);
// require('./routes/index')(app, passport);

app.use("/api", restRouter);
app.use("/graphql", express.json(), graphQLRouter);
app.use("/docs", graphiqlExpress({ endpointURL: "/graphql" }));

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
