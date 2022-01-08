//endpoint using express router
const mongoose=require("mongoose");
const User=require("../../schemas/user");
const express=require("express");
const router=express.Router();
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const bodyparser=require("body-parser");
require("dotenv").config();

//loading in validation and schema for db
const validate_reg=require("../../validation/register");
const login_reg=require("../../validation/login");
//if isValid, check if existing user. Else if new user, then create a record for that user
//bcrypt used to hash password before storing in the database

//REGISTER ENDPOINT FOR POST REQUESTS
router.post("/register",(req,res) => {
    const {errors,isValid}=validate_reg(req.body);
    if(!isValid)
        return res.status(400).json(errors);
    User.findOne({ email:req.body.email }).then(user => {
        if(user)
            return res.status(400).json({userexists:"User exists"});
        else
        {
            const new_user=new User();
            new_user.name=req.body.name;
            new_user.email=req.body.email;
            new_user.password=req.body.password;
            bcrypt.genSalt(12,(err,salt) => {
                bcrypt.hash(new_user.password,salt,(err,hash)=>{
                    if(err)
                        throw err;
                    new_user.password=hash;
                    new_user.save().then(user => res.json(user)).catch(err => console.log(err));
                });
            });
        }
    });
    });

//LOGIN endpoint for POST requests
router.post("/login",(req,res) => {
    const {errors,isValid}=login_reg(req.body);
    if(!isValid)
        return res.status(400).json(errors);
    const email=req.body.email;
    const pwd=req.body.password;
    User.findOne({email:email})
    .then(user => {
        if(!user)
            return res.status(400).json({emailnotfound:"Email not found"});
        bcrypt.compare(pwd,user.password)
        .then(matches => {
            if(matches)
            {
                //creating jwt payload
                const payload={
                    id:user.id,
                    name:user.name
                };
                jwt.sign(payload,process.env.JWT_SECRETORKEY,{expiresIn:31556926},(err,token) => {
                    console.log("Successful login");
                    console.log(typeof(token));
                    res.json({
                        success:true,
                        token:"Bearer "+token
                    });
                });
            }
            else
                return res.status(400).json({passwordincorrect:"Passwords don't match"});
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

module.exports=router;
