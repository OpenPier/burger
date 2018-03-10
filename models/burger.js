//The model for how to interface with the database.
//ORM: object relational mapper
//Will import the ORM to implement functions to interact with db
var orm = require('../config/orm.js');
//Creating the burger object
var burger = {
    //will select all burger table entries in MySQL
    all: function(cb) {
        orm.all('burgers', function(res){
            cb(res);
        });
    },

    //columns and values are the arrays
    create: function (cols, vals, cb) {
        orm.create('burgers', cols, vals, function (res){
            cb(res);
        });
    },

    delete:function (condition,cb){
        orm.delete('cats', condition, function(res){
            cb(res);
        });
    }
};
//exports the db functions for the burgerController.js file
module.exports = burger;