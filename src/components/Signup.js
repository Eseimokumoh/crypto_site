import React, {useState} from 'react';
import './Signup.css';
import trade from '../assets/trade.png';
import {Link, useNavigate} from 'react-router-dom';
import { UserAuth } from './context/AuthContext';

function Signup() {
 {/* const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); */}
  const [error, setError]= useState(''); 
  const {createUser} = UserAuth();
  const navigate = useNavigate()

 {/* const handleSubmit = async (e)=> {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password);
            navigate('/users/new');
        } catch (e) {
          setError(e.message);
          console.log(e.message);
        }
  };*/}

  return (
    <div className='signup'>
        <div className='container'>
         {/* left */}
         <div className='left'>
            <img className='left-img' src={trade} alt=''/>
         </div>

         {/* right */}
         <div className='right'>
            <h2>Earn passive income with crypto.</h2>
            <p>Earn up to 12% annual rewards on 30+ Digital assets. Simply hold your assets with us and automatically earn rewards at the end of each month.</p>
            <div className='input-container'>
           {/* <form className='login-form' onSubmit={handleSubmit}> */}
              <h3>Create account:</h3>
              <h4>Already have an account : </h4>
              <Link to='/login'>
              <button className='login-btn' type='submit'>Sign in</button>
              </Link>
              {/*<input className='input-input' type='email' placeholder='email' onChange={e=>setEmail(e.target.value)}/>
              <input className='input-input' type='password' placeholder='password' onChange={e=>setPassword(e.target.value)}/> */}
              <h4>To create a new account:</h4>
              <Link to='/users/new'>
              <button className='login-btn' type='submit'>Sign Up</button>
              </Link>
              {/*{error && <span className='error-text'>Wrong email or password!</span>}
            </form> */}
              
            </div>
         </div>
        </div>
    </div>
  )
}

export default Signup;