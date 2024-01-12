import React from 'react';
import '../../Components/css/LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    return(
        <><div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='text'
                        placeholder='Username / Email' required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type='password'
                        placeholder='Password' required />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <label><input type='checkbox' />Remember me?</label>
                    <a href='#'>Forgot password?</a>
                </div>

                <button type='submit'>Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href='#'>Register</a></p>
                </div>
            </form>
        </div>
        <footer>
            By <a href='https://github.com/EvilXpirit' target='blank'>Evilxpirit</a>
        </footer>
        </>
    );
};

export default LoginForm