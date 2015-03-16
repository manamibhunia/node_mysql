var application_root = __dirname,
  http = require('http');
  express = require('express'),
  path = require("path"),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('errorhandler');

  var app = express();

  app.use(bodyParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());
  app.use(methodOverride());
  app.use(express.static(path.join(application_root, 'public')));

  // development only
  if ('development' == app.get('env')) {
    app.use(errorHandler());
  }

  app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something broke!'+err.stack);
  });


  //================== ROUTES ======================================

  var api = require('./routes/api');
  var web = require('./routes/web');
  app.use('/api', api);
  app.use('/', web);

  //start Server
  var server = app.listen(3000,function(){

    console.log("Listening to port %s",server.address().port);
  });
