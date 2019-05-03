const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./key')
const User = require('./dbmodel');


passport.serializeUser((user,done)=>{
    done(null,user.id);

});

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{

        done(null,user);
    });

});


passport.use(

    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID:keys.google.clientID,
        clientSecret: keys.google.clientSecret


    },(accessToken, refreshToken, profile, done) =>{
        console.log('passport callback function fired');
        console.log(profile);

        //retrieve from mongodb
        User.findOne({googleId:profile.id}).then((currentUser)=>{
            if(currentUser){
                console.log('user is:',currentUser);
                done(null, currentUser);
            }else {
                //add new user to mongodb
                new User({

                    username: profile.displayName,
                    googleId: profile.id

                }).save().then((newUser)=>{

                    console.log('create new user:'+newUser);
                    done(null, newUser);
                });

            }


        });


    })
)
