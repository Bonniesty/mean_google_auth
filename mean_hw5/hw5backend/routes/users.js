// var express = require('express');
// var router = express.Router();
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
//
// module.exports = router;


const router = require('express').Router;
const passport = require('passport');
router.get('/google', passport.authenticate('google', {scope: ['profile']}));

router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/login'}),
    function (req, res) {
        res.render('index', {user: req.user});
    });

router.get('/logout', function (req, res, next) {
    req.logout();
    res.render('index', {user: req.user});
})


module.exports = router;
