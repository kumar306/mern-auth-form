const mongoose=require("mongoose");
const user_schema=new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
});
var User=mongoose.model('users',user_schema);
module.exports=User;