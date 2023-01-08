import './login.css';
import { Link } from 'react-router-dom';
import { useContext, useRef } from 'react';
import {loginCall} from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@material-ui/core';

export default function Login() {

    const email=useRef();
    const password=useRef();
    const {user,isFetching, error, dispatch}=useContext(AuthContext);

    const handleClick=(e)=>{
        e.preventDefault();
        loginCall({email:email.current.value,password:password.current.value}, dispatch);
    }
    console.log(user);

  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <Link to='/' style={{textDecoration:"none"}}>
                    <h3 className="loginLogo">MySocial</h3>
                </Link>
                <span className="loginDesc">
                    Connect with friends and the world around you on MySocial
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick} >
                    <input type="email" required placeholder='Enter email here ' className="loginInput"  ref={email}/>
                    <input type="password" minLength="6" required placeholder='Enter password here ' className="loginInput" ref={password}/>
                    <button className="loginButton" disabled={isFetching}>{isFetching ? <CircularProgress color="white" size="20px"/> : "Login"}</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <Link to='/register' style={{textDecoration:"none",textAlign:"center"}}>
                        <button className="registerButton" disabled={isFetching}>{isFetching ? <CircularProgress color="white" size="20px"/> : "Create a New Account"}</button>
                    </Link>
                </form>
                
            </div>

        </div>
    </div>
  )
}
