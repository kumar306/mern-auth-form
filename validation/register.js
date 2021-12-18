const validator=require("validator");
const isempty=require("is-empty");
module.exports = function validate_input(data) {
    let errors={};
    if(isempty(data.name))
        data.name="";
    if(isempty(data.email))
        data.email="";
    if(isempty(data.password))
        data.password="";
    if(isempty(data.confirm_pwd))
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
    if(!validator.isLength(data.password, {min:8,max:20}))
        errors.password="Password should be between 8 and 20 characters";
    if(!validator.equals(data.password,data.confirm_pwd))
        errors.confirm_pwd="Passwords don't match";
    var ret=
    {
        errors,
        isValid:isempty(errors),
    };
    return ret;
};