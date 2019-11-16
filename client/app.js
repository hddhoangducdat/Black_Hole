var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var dotenv = require("dotenv");
var favicon = require("static-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var hbs = require("express-handlebars");
var handlebars = require("hbs");

var routes = require("./routes/index");
var signup = require("./routes/signup");
var homePage = require("./routes/homePage");
var profilePage = require("./routes/profilePage");
var historyPage = require("./routes/historyPage");
var cartPage = require("./routes/cartPage");
var forgotPassword = require("./routes/forgotPassword");
var categories = require("./routes/categories");
var product = require("./routes/product");
var createdBy = require("./routes/createdBy");

var app = express();
dotenv.config();

// view engine setup
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layout"
  })
);
app.set("views", path.join(__dirname, "views/layout"));
app.set("view engine", "hbs");
handlebars.registerPartials(path.join(__dirname, "views/partials"));

app.use(favicon());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const db = mongoose.connect(
  process.env.CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("db connected !");
  }
);

app.use("/", routes);
app.use("/signup", signup);
app.use("/forgotPassword", forgotPassword);
app.use("/home", homePage);
app.use("/history", historyPage);
app.use("/profile", profilePage);
app.use("/cart", cartPage);
app.use("/categories", categories);
app.use("/product", product);
app.use("/createdBy", createdBy);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
});

module.exports = app;
