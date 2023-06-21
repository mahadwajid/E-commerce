import {useEffect , useRef, useState} from 'react';
import '../../Assessts/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import {getSignup} from "../../Service/Api";

function Login(){

	const[details , setdetails]=useState({
		email:"",
		password:""
	});

	// const [customerdetails , setcustomerdetails]= useState([]);
	const{email , password}=details;

    const Ref =useRef(null);

	const navigate= useNavigate();

	const handleChange = (event) =>{
	setdetails({...details , [event.target.name]: event.target.value });
	}


	const handleSubmit=  async (event)=>{
		event.preventDefault();
		try{

			const response=await getSignup(details);
			const {success , Signup}=response.data;
			if(success){
				
				navigate('/');
			}
			else {
				alert("Invalid Email or passowrd")
			}

		} catch (error){
			alert("Data not found");
		}
	};

    useEffect(() =>{
        Ref.current.focus();
    },[]);

	



    return(
		<div className='Back-login-container'>

    <div className="form-container">
	<p className="title">Login</p>
	<form className="form">
		<div className="input-group">
			<label for="username">Username</label>
			<input ref={Ref} onChange={handleChange} type="text" name="email" id="username" placeholder="@gmail.com" />
		</div>
		<div className="input-group">
			<label for="password">Password</label>
			<input onChange={handleChange} type="password" name="password" id="password" placeholder="" />
			<div className="forgot">
				<a rel="noopener noreferrer" href="#">Forgot Password ?</a>
			</div>
		</div>


		<button className="sign" onClick={handleSubmit}>Sign in</button>



	</form>
	<div className="social-message">
		<div className="line"></div>
		<p className="message">Login with social accounts</p>
		<div className="line"></div>
	</div>
	<div className="social-icons">
		<button aria-label="Log in with Google" className="icon">
		</button>
		<button aria-label="Log in with Twitter" className="icon">
		</button>
		<button aria-label="Log in with GitHub" className="icon">
		</button>
	</div>

    <Link to='/Signup' style={{textDecoration:'none'}}>
	<p className="signup">Don't have an account?
		<a rel="noopener noreferrer" href="#" className="">Sign up</a>
	</p>
    </Link>
</div>
</div>



    )
    
}
export default Login;