const express = require('express');
const bodyParser = require('body-parser');
const auth = require('./routes/auth');
const passportsetup= require('./passport');
const mongoose = require('mongoose');
const keys = require('./key');
const  cookieSession = require('cookie-session');
const passport = require('passport');

const cors = require('cors');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


//mongodb

app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys:[keys.session.cookieKey]
}));

mongoose.connect(keys.mongodb.dbURI,()=>{

  console.log("connect!!!")
});
app.use(passport.initialize());
app.use(passport.session());

var dogapi = require('./routes/dog');
app.use('/dog', dogapi);
app.use('/auth',auth);


app.get('/',(req,res)=>{

  res.render('auth', { title: 'Auth' });

});

app.listen(port, () => {
  console.log('Open on ' + port);
});
