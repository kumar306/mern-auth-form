const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const express=require("express");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
//using express for routing
const app=express();
//to parse URL incoming requests and JSON (body of incoming requests must be parsed to access)
app.use(
    bodyparser.urlencoded({
    extended:false //parsing with querystring library
    })
);
app.use(bodyparser.json());
//getting the connection string
//using mongoose to connect with mongodb
mongoose.connect(process.env.MONGO_URI, 
    {
        useNewUrlParser:true 
    })
    .then(()=>console.log("successfully connected to mongo database"))
    .catch(err=>console.log(err));
//specifying the port
const port=process.env.PORT || 5000;
app.listen(port,() => console.log(`Server running at port ${port}`));
