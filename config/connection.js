//Where the connection to the database and exporting is used the object relational mapper

var mysql = require('mysql');
//db is local on localhost

var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else  {
    connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'burger_db'
    });
};

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