import './register.css';
import {Link} from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Register() {

    const username=useRef();
    const email=useRef();
    const password=useRef();
    const passwordAgain=useRef();
    const navigate=useNavigate();

    const handleClick= async (e)=>{
        e.preventDefault();
        if(password.current.value !== passwordAgain.current.value){
            passwordAgain.current.setCustomValidity("Password Mismatch!");
        } else{
            const user={
                username:username.current.value,
                email:email.current.value,
                password:password.current.value,
            }
        try{
            await axios.post("/auth/register/",user);
            navigate("/login");
        } catch(err){
            console.log(err);
        }
        }
    }


  return (
    <div className='register'>
        <div className="registerWrapper">
            <div className="registerLeft">
                <Link to='/' style={{textDecoration:"none"}}>
                    <h3 className="registerLogo">MySocial</h3>
                </Link>
                <span className="registerDesc">
                    Connect with friends and the world around you on MySocial
                </span>
            </div>
            <div className="registerRight">
                <form onSubmit={handleClick} className="registerBox">
                    <input type="text" required placeholder='Enter username ' className="registerInput" ref={username}/>
                    <input type="email" required placeholder='Enter email ' className="registerInput" ref={email}/>
                    <input type="password" required minLength="6" placeholder='Enter password ' className="registerInput" ref={password}/>
                    <input type="password" required placeholder='Confirm password ' className="registerInput" ref={passwordAgain}/>
                    <button className="registerButton" type='submit'>Sign Up</button>
                    <Link to='/login' style={{textDecoration:"none",textAlign:"center"}}>
                        <button className="loginButton">Log into Account</button>
                    </Link>
                </form>
            </div>

        </div>
    </div>
  )
}
