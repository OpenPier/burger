//all the functions that will do the routing for your application//

var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');
//Imports (burger.js) to use database functions
// router.get('/', function(re,res){
//     res.redirect('/burgers');
// });
//creates routes
router.get('/', function(reg,res){
    console.log ("Hello, I'm HEre!")
    burgers.all(function(data){
        var hbsObject = {burgers: data};
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/burgers/create', function(req,res){
    burger.create(['name', 'devoured',], [req.body.name, req.body.devoured], function(){

    });
});

router.put('burgers/update/:id', function(req, res){
    var condition = 'id =' + req.params.id;

    console.log('condition', condition);

    burger.update({devoured: req.body.devoured}, condition, function(){

    });
});
router.delete('/burgers/delete/:id', function(req, res){
    var condition ='id =' + req.params.id;
    car.delete(condition,function(){
        res.redirect('/');
    })
})
//exports routes to server.js file
module.exports = router;