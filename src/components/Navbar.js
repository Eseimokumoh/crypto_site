import React, {useState} from 'react';
import './Navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <div className='header'>
        <div className='container'>
            <h1>Trade<span className='primary'>x</span>Capital</h1>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/Crypto'>Crypto</a>
                </li>
                <li>
                    <a href='/Stock'>Stock Market</a>
                </li>
                <li>
                    <a href='/Signup'>Earn</a>
                </li>
                <li>
                    <a href='/About'>About</a>
                </li>
                <li>
                    <a href='/Footer'>Contact Us</a>
                </li>
            </ul>
                <div className='btn-group'>
                   <Link to='/users/0000' >
                    <button className='btn'>Dashboard</button>
                    </Link>
                </div>
                <div className='hamburger' onClick={handleClick}>
                   {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}}/>)}
                </div>
            
        </div>
    </div>
  )
}

export default Navbar;