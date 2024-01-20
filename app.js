require('dotenv').config();

const bodyParser = require('body-parser');
var express = require("express");
var path = require('path');
var cookieParser = require('cookie-parser');
var mlogger = require('morgan');
var router = require('./routes/index');

const cors = require('cors');
// var createError = require('http-errors');
const { logError, returnError } = require("./errors");
const { logger } = require("./logger");
const { sequelize } = require("./config/db");
var app = express();
app.use(cors());


// var usersRouter = require('./routes/users');
const table = require('./models/index')

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

// sequelize.sync({ force: true })

app.use(mlogger("dev", { stream: { write: (msg) => logger.info(msg) } }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(logError);
app.use(returnError);


// // Add middleware to parse incoming requests with JSON payloads
// app.use(bodyParser.json());

// // ... other configurations and routes

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

module.exports = app;




