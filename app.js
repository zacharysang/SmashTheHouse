var env = require('./env')
    ,express = require('express')
    ,path = require('path')
    ,favicon = require('serve-favicon')
    ,logger = require('morgan')
    ,cookieParser = require('cookie-parser')
    ,bodyParser = require('body-parser')
    ,mongoose = require('mongoose')
    ,api = require('./api/api');

mongoose.connect(env.MONGO_URL,function(err){
  if(err){
    console.error('Error connecting to MongoDB: ' + err.message);
    module.exports.db_connected = false;
  }else{
    console.log('Connected to MongoDB');
    module.exports.db_connected = true;
  }
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//parse request info into request
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//load style preprocessing middleware
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

//load middleware for static assets (images, client-side js, stylesheets, etc.)
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req,res,next){
  module.exports.partial = (req.query.partial) ? true : false;
  next();
});

//do routing for basic rendering functionality (get requests)
app.get(/^\/([a-z0-9-_]*)\/?$/i,function(req,res){
  var targetUrl = req.params[0];
  res.render(`${targetUrl}`,{
    "title": targetUrl
  });
});

//post requests and functionality more complex than rendering is handled by the api.js router object
app.use('*/api/movies', api);

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
