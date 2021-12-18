//setting up passport for authentication to use with json web token
const path=require("path");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const jwtStrategy=require("passport-jwt").Strategy;
const ExtractJwt=require("passport-jwt").ExtractJwt;
const mongoose=require("mongoose");
const user=mongoose.model("users");
const options={};
options.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey=process.env.JWT_SECRETORKEY;
//jwt payload sent through login endpoint
module.exports = passport => {
    passport.use(new jwtStrategy(options,(jwt_payload,done) => {
        user.findById({_id:jwt_payload.id})
        .then(user => {
            if(user)
                return done(null,user);
            return done(null,false);
        })
        .catch(err => console.log(err));
        })
    );
};
