const mongoose=require("mongoose");
const schema=mongoose.Schema;
const user_schema=new schema({
    name: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    email: {
        type:String,
        required:true
    }
});
module.exports=mongoose.model("users",user_schema);