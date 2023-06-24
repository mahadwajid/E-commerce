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


export const createSignup = async (req, res) => {
  try {
    const { fname, lname, email, pass, cpass } = req.body;

    const newSignup = new SignupModel({
      fname,
      lname,
      email,
      pass,
      cpass
    });

    const savedSignup = await newSignup.save();
    res.status(201).json(savedSignup);
  } catch (error) {
    console.log('Error saving signup:', error);
    res.status(500).json({ error: 'Failed to save signup' });
  }
};






