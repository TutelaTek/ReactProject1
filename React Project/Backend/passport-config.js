const LocalStrategy = require('passport-local').Strategy;




function initialize(passport, getUserByUsername){
    const authenticateUser = (username, password, done) => {
        const user = getUserByUsername(username);
        if (user == null){
            return done(null, false, {message: 'No user with that username'})
        }

        try {
            if(await bcrypt.compare(password, user.password)){
                return done(null, user)
            } else{
                return done(null, false, { message: 'Password incorrect'})
            }
        } catch(e){
            return done(e)
        }
    }
    passport.use(new LocalStrategy({ usernameField: 'username'}),
    authenticateUser)
    passport.serializeUser((user, done) => {});
    passport.deserializeUser((user, done) => {});
}


module.exports = initialize;