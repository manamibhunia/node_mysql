npm install --save express mysql express-myconnection http errorhandler method-override body-parser path

Node-Express REST -
http://www.sitepoint.com/creating-restful-apis-express-4/

MySql Connection pool-
https://github.com/felixge/node-mysql#pooling-connections



REST urls -

USER-

POST - http://localhost:3000/api/user
{
  "user_name" : "ram5",
  "user_type" : "admin",
  "password" : "password",
  "security_question" : "security_question?",
  "securty_answer" : "securty_answer"
}

GET - http://localhost:3000/api/user
