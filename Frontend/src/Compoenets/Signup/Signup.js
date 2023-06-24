import '../../Assessts/Signup.css';
import { Link } from 'react-router-dom';
import {useEffect , useRef, useState} from 'react';
import { addSignup } from '../../Service/Api';
import { useNavigate } from 'react-router-dom';


function Signup(){

    const [userdata , setuserdata] = useState({
        fname:"",
        lname:"",
        email:"",
        pass:"",
        cpass:""
    })

    const { fname , lname ,email , pass , cpass} = userdata;

    const navigate = useNavigate();

    
    const Ref =useRef(null);

    const handleChange =(event)=>{
        setuserdata({...userdata, [event.target.name]: event.target.value });
    }


    const adddetails = async (event) =>{
      event.preventDefault();
      console.log(userdata);
      await addSignup(userdata);
      navigate('/Login');

      if (response && response.success) {
        // Display success alert
        window.alert('Signup successful');
        navigate('/Login');
      } else if (response && !response.success) {
        // Display error alert for incorrect password or login failure
        window.alert('Incorrect password or login failed');
      } else {
        // Display error alert for general error
        window.alert('An error occurred during signup');
      }
    }



    

    useEffect(() =>{
        Ref.current.focus();
    },[]);


    return(

        <div className="form-containerr">
        <p className="title">Register</p>
        <form className="form">
            <div className="input-group" >

                <label for="name">First name</label>
                <input ref={Ref} onChange={(event) => handleChange(event)} type="text" name="fname" id="name" />

                <label for="name">Last name</label>
                <input onChange={(event) => handleChange(event)} type="text" name="lname" id="name" />
            </div>

            <div className='input-group'>
            <label for="username">Email</label>
			    <input onChange={(event) => handleChange(event)} type="text" name="email" id="username" placeholder="@gmail.com" />

            </div>

            <div className="input-group">
                <label for="password">Password</label>
                <input onChange={(event) => handleChange(event)} type="password" name="pass" id="password" placeholder="" />

                <label for="password">Confirm Password</label>
                <input onChange={(event) => handleChange(event)} type="password" name="cpass" id="password" placeholder="" />
            </div>
    
    
             {/* <Link to="/Login" style={{textDecoration:'none'}}> */}
            <button onClick={(event) => adddetails(event)} className="signn" >Sign up</button>
            {/* </Link> */}
    
    
    
        </form>

        <Link to='/Login' style={{textDecoration:'none'}}>
        <p className="signin">Already have an account?
            <a rel="noopener noreferrer" href="#" className="">Sign in</a>
        </p>
        </Link>
    </div>


    )
}
export default Signup;