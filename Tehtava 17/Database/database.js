const mysql = require('mysql');
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'testuser',
  password: 'xxxx',
  database: 'test_db4'
});
module.exports = connection;