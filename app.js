require('dotenv').config();

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL,function(err){
  if(err){
    console.error('Error connecting to MongoDB');
    module.exports.db_connected = false;
  }else{
    console.log('Connected to MongoDB');
    module.exports.db_connected = true;
  }
});

mongoose.connection.on('error',function(){
  
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var sassSrc = path.join(__dirname, 'public','stylesheets','scss');
var sassDest = path.join(__dirname, 'public');
app.use(require('node-sass-middleware')({
  root: path.join('public','stylesheets'),
  src: 'scss',
  dest: '.',
  debug: true,
  outputStyle: 'compressed',
  force: true,
  error:function(err){
    console.log("Sass compilation error: " + err);
  }
}));

app.use(express.static(path.join(__dirname, 'public')));

//registration of pages and binding to routes
app.use('/', require('./routes/index'));
app.use('/news',require('./routes/news'));
app.use('/status',require('./routes/status'));
app.use('/movies',require('./routes/movies'))
app.use('/calendar',require('./routes/calendar'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
