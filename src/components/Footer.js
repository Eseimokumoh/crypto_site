import React from 'react';
import './Footer.css';
import { FaGoogle, FaFacebook, FaTwitter, FaSignal } from 'react-icons/fa';


function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='col col-1'>
                <h3>Trade<span style={{color:'var(--primary)'}}>x</span>Capital</h3>
            </div>
            <div className='col'>
                <h5>Support</h5>
                <span className='bar'></span>
                    <a href='/'>Contact Us</a>
                    <a href='/'>Help Center</a>
                    <a href='/'>FAQ</a>
            </div>
            <div className='col'>
                <h5>Company</h5>
                <span className='bar'></span>
                    <a href='/'>About</a>
                    <a href='/'>Information</a>
                    <a href='/'>Legal</a>
                    <a href='/'>Privacy</a>
            </div>
            <div className='col'>
                <h5>Social</h5>
                <span className='bar'></span>
                    <a href='/'><FaFacebook className='icon'/></a>
                    <a href='/'><FaGoogle className='icon'/></a>
                    <a href='/'><FaTwitter className='icon'/></a>
                    <a href='/'><FaSignal className='icon'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer