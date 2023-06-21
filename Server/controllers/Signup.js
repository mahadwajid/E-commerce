import SignupModel from "../Models/Signup.js";

export const getSignup = async (req , res) => {
 const { email , password } = req.body;

try{
    const Signup= await SignupModel.findOne({ email });
    
    if(Signup.pass === password){
        res.json({success : true , Signup});
    }
    else{
        res.json({success : false});
    }

}catch(error){

    console.log("Not Found Any data");
    res.json({success : false});
}
;
}

export const createSignup= async (req , res )=> {

    const fname=req.body.fname;
    const fnameInStringFormat =fname.toString();


    const lname=req.body.lname;
    const lnameInStringFormat =lname.toString();

    const email=req.body.email;
    const emailInStringFormat =email.toString();

    const pass=req.body.pass;
    const passInStringFormat =pass.toString();

    const cpass=req.body.cpass;
    const cpassInStringFormat =cpass.toString();



    const newSignup = new SignupModel({

      fname:fnameInStringFormat,
      lname:lnameInStringFormat,
      email:emailInStringFormat,
      pass:passInStringFormat,
      cpass:cpassInStringFormat

    });

    try{

        await newSignup.save();
        res.json(newSignup);

    }catch (error) {

        console.log("Not saved...");
    }

};




