var express = require('express');
var router = express.Router();

var Request = require('request');




router.get('/', function(req, res, next) {


    const getDoggg = () => {
        return new Promise(function (resolve, reject) {

            var url = 'https://random.dog/woof.json';
            Request.get(url, (error, response, body) => {
                if(error)
                {
                    resolve( console.dir(error) );
                }
                resolve(JSON.parse(body));
            });

        });
    };

    getDoggg().then((value) => {
        res.send( value );
    })



});

module.exports = router;

