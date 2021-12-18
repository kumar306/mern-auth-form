const validator=require("validator");
const is_empty=require("is-empty");
module.exports=function validatelogin(data)
{
    let errors={};
    if(is_empty(data.email))
        data.email="";
    if(is_empty(data.password))
        data.password="";
    if(validator.isEmpty(data.email))
        errors.email="Email required";
    else if(!validator.isEmail(data.email))
        errors.email="Email invalid";
    if(validator.isEmpty(data.password))
        errors.password="Password required";
    var ret=
    {
        errors,
        isValid:is_empty(errors)
    };
    return ret;
};