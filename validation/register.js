const validator=require("validator");
const isEmpty=require("is-empty");
module.exports = function validate_input(data) {
    let errors={};
    console.log(data.email+" "+data.password);
    if(isEmpty(data.name))
        data.name="";
    if(isEmpty(data.email))
        data.email="";
    if(isEmpty(data.password))
        data.password="";
    if(isEmpty(data.confirm_pwd))
        data.confirm_pwd="";
    
    if(validator.isEmpty(data.name))
        errors.name="Name required";
    if(validator.isEmpty(data.email))
        errors.email="Email required";
    else if(!validator.isEmail(data.email))
        errors.email="Email is invalid";
    if(validator.isEmpty(data.password))
        errors.password="Password required";
    if(validator.isEmpty(data.confirm_pwd))
        errors.confirm_pwd="Confirmation password required";
    if(!validator.isLength(data.password,{min:8}))
        errors.password="Password should be minimum 8 characters";
    if(!validator.equals(data.password,data.confirm_pwd))
        errors.confirm_pwd="Passwords don't match";
        
    var ret=
    {
        errors,
        isValid:isEmpty(errors),
    };
    return ret;
};