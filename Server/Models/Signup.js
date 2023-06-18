import mongoose from "mongoose";

const SignupStructure=mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    pass:String,
    cpass:String

});

const SignupModel=mongoose.model('Signup',SignupStructure);

export default SignupModel;