
// const router = require('express').Router;
// const passport = require('passport');
// router.get('/google', passport.authenticate('google', {scope: ['profile']}));
//
// router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/login'}),
//     function (req, res) {
//         res.render('index', {user: req.user});
//     });
//
// router.get('/logout', function (req, res, next) {
//     req.logout();
//     res.render('index', {user: req.user});
// })
//
//
// module.exports = router;
//
//
// router.get('/login',(req,res)=>{
//     res.render('index');
//
// });
const router = require('express').Router();
const passport = require('passport');

//logout
router.get('/logout',(req,res)=>{
    res.send("log out  with google");

});


//login
router.get('/google',passport.authenticate('google',{
    scope: ['profile']

}));

//redirect

router.get('/google/redirect',passport.authenticate('google') ,(req,res)=>{

    res.send("login success!!  "+req.user);
});


module.exports = router;
