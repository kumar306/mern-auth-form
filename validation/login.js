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
        error.email="Email required";
    else if(!validator.isEmail(data.email))
        error.email="Email invalid";
    if(validator.isEmpty(data.password))
        error.password="Password required";
    return
    {
        errors;
        isValid:isEmpty(errors);
    };
};