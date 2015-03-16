//================================== routes for API ====================================
var express = require('express'),
  connection = require('express-myconnection'),
  mysql = require('mysql'),
  app = express();

module.exports = (function() {
  'use strict';
  var api = express.Router();
  app.use(bodyParser.json());

  var pool  = mysql.createPool({
    host     : 'localhost',
    user : 'root',
    password: 'password',
    database : 'cmpe226'
  });

  var user = api.route('/user');

  user.get(function(req,res){

    var userList = null;
    pool.getConnection(function(err, connection) {
      connection.query( 'SELECT * FROM users', function(err, rows) {

        if(err){
          console.log(err);
          if (err) return err;
        }
        console.log('User List: ', rows);
        userList = JSON.stringify(rows);
        connection.release();
        res.send(rows);
      });
    });
  });

  user.post(function(req,res){

    console.log('Data: ', req.body);
    pool.getConnection(function(err, connection) {
      connection.query('INSERT INTO users SET ?', req.body, function(err, rows) {
        if(err){
          console.log(err);
          if (err) return err;
        }
        connection.release();
        res.send({ message: 'User Added' });
      });
    });
  });

  return api;
})();
