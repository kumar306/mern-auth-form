const mongoose=require("mongoose");
const schema=mongoose.Schema;
const user_schema=new schema({
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
module.exports=user=mongoose.model("users",user_schema);