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

    // Check if password and confirm password match
    if (pass !== cpass) {
      return res.status(400).json({ error: 'Password and confirm password do not match' });
    }

    // Password validation regex pattern
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    // Check if password meets the required criteria
    if (!passwordRegex.test(pass)) {
      return res.status(400).json({ error: 'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit' });
    }

    // Email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is valid
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

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







