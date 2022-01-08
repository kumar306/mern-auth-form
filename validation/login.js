const validator=require("validator");
const isEmpty=require("is-empty");
module.exports=function validatelogin(data)
{
    let errors={};
    if(isEmpty(data.email))
        data.email="";
    if(isEmpty(data.password))
        data.password="";
    if(validator.isEmpty(data.email))
        errors.email="Email field is empty"; 
    else if(!validator.isEmail(data.email))
        errors.email="Email is invalid format"; 
    if(validator.isEmpty(data.password))
        errors.password="Password field is empty";
    var ret=
    {
        errors,
        isValid:isEmpty(errors)
    };
    return ret;
};