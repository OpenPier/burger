//The object relational mapper where the functions occur. It take the inputs and conditions and turns
//make object connect with MySQL 
var connection = require('../config/connection.js');
//generates MySQL syntax
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
}
//generates MySQL syntax
function objToSql(ob) {
    //column1=value, column2=value2,...
    var arr = [];

    for (var key in ob) {
        if (ob.hasOwnProperty(key)) {
            arr.push(key + '=' + ob[key]);
        }
    }

    return arr.toString();
}
//Creates ORM object to run SQL queries
var orm = {
    // the all function should return all table entries
    all: function (tableInput, cb) {
        //the query string should return all rows. I don't 
        //I don't understand why it is showing up as a bug
        var queryString = 'SELECT * FROM ' + tableInput ';';
        //Will perform the database query
        connection.query(queryString, function (err, result){

            if(err) 
                throw err;
                //returns the results from the callback
            cb(result);
        });
    },

    //vals = the array of values that we want to save to cols
    //cols = the columns we want to insert the vaules into
//This function should create a table entry
    create: function(table, cols, vals, cb) {
        //querystring that adds a row into the table
        var queryString = 'INSERT INTO' + table;

        queryString + queryString +  ' (';
        queryString + queryString + cols.toString();
        queryString + queryString + ')';
        queryString + queryString + 'VALUES (';
        queryString + queryString + printQuestionMarks(vals.length);
        queryString + queryString + ')';

        console.log(queryString);
        //performs the database query
        connection.query(queryString, vals, function(err,result){
            if(err) throw err;
            //will return results in callback
            cb(result);
        });
    },

    //objColVals would be the columns and values that you want to update
    //an example of objColVals would be {name: double-double, devour, true}

    update: function (table, objColVals, condition, cb) {

        queryString + queryString + 'SET';
        queryString + queryString + objToSql(objColVals);
        queryString + queryString + 'WHERE';
        queryString + queryString + condition;

        console.log(queryString);
        //performs the database query
        connection.query(queryString, function (err, result){
            if(err)throw err;
            //returns result in callback
            cb(result);
        });
    }
};
//exports the orm object for use in other modules
module.exports = orm;