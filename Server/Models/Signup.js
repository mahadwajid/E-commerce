import mongoose from "mongoose";

const SignupStructure=mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    pass:{
        type:String,
        required:true
    },
    cpass:{
        type:String,
        required:true
    }

});

const SignupModel=mongoose.model('Signup',SignupStructure);

export default SignupModel;