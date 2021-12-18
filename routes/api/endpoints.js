//endpoint using express router
const express=require("express");
const router=express.Router();
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
require("dotenv").config();

//loading in validation and schema for db
const validate_reg=require("../../validation/register");
const login_reg=require("../../validation/login");
const user=require("../../schemas/user");

//if isValid, check if existing user. Else if new user, then create a record for that user
//bcrypt used to hash password before storing in the database

router.post("/register",() => {

    const {errors,isValid}=validate_reg(req.body);
    if(!isValid)
        return res.status(400).json(errors);
    user.findOne({email:req.body.email}).then((user) => {
        if(user)
            return res.status(400).json("User exists");
        const new_user=new user({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        });
        bcrypt.genSalt(12,(err,salt)=>{
            bcrypt.hash(new_user.password,salt,(err,hash)=>{
                if(err)
                    throw err;
                new_user.password=hash;
                new_user.save().then(user => res.json(user)).catch(err => console.log(err));
            });
        });
    });
});

router.post("/login",() => {
    const {errors,isValid}=login_reg(req.body);
    if(!isValid)
        res.status(400).json(errors);
    const email=req.body.email;
    const pwd=req.body.password;
    user.findOne({email})
    .then(user => {
        if(!user)
            return res.status(400).json("Email not found");
        bcrypt.compare(pwd,user.password)
        .then(matches => {
            if(matches)
            {
                //creating jwt payload
                const payload={
                    id:user.id,
                    name:user.name
                };
                jwt.sign(payload,process.env.JWT_SECRETORKEY,{expires_in:1000000},(err,token) => {
                    console.log("Sucessful login");
                    res.json({
                        success:true,
                        token:"Bearer "+token
                    });
                });
            }
            else
                return res.status(400).json("Passwords don't match");
        })
    })
    .catch(err => console.log(err))
});

module.exports=router;
