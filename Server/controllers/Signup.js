import SignupModel from "../Models/Signup.js";
export const getSignup = async (req, res) => {
  const { email, password } = req.body;

  // Email validation regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password validation regex pattern
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  try {
    const signup = await SignupModel.findOne({ email });

    // Check if signup exists and the password matches
    if (signup && signup.pass === password) {
      res.json({ success: true, signup });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.log("Error:", error);
    res.json({ success: false });
  }
};



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






