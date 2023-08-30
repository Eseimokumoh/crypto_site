import React, {useState} from 'react';
import './Login.css';
import {useNavigate, Link} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'; 



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]= useState('');
  const navigate = useNavigate();

  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/users/1234567');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className='login'>
     <form onSubmit={handleSubmit} className='login-form'>
     <h3>Log in to your account:</h3>
    {/* <p>
      Don't have an account yet? {''}
      <Link className='sign-up' to={'/Signup'} >
        Sign Up.
      </Link>
     </p> */}
      <input className='input-input' type='email' placeholder='email' onChange={e=>setEmail(e.target.value)}/>
      <input className='input-input' type='password' placeholder='password' onChange={e=>setPassword(e.target.value)}/>
      <button className='login-btn' type='submit'>Login</button>
       <span className='error-text'>Wrong email or password!</span>
     </form>
    </div>
  )
}

export default Login;