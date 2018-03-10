//Where the connection to the database and exporting is used the object relational mapper

var mysql = require('mysql');
//db is local on localhost
var connection = mysql.createConnection({
    port: 3306,
    host:'localhost',
    user: 'root',
    password: '',
    database: 'burger_db'
});
//This will connect to MySQL
connection.connect(function (err){
    if (err) {
        console.error('error connecting:' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
//This will connect the ORM
module.exports = connection;