import React, { useEffect, useState, useRef } from 'react';
import './Single.css';
import Navbar from '../adminpages/Navbar';
import Widget from '../adminpages/Widget';
import Chart from '../chart/Chart';
import List from '../table/Table';
import {UserAuth} from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import UserDataService from '../../user.services';
import {db} from '../firebase';
import { collection, getDocs, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import Featured from '../featured/Featured';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar}  from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ChatApp from './ChatApp';
import ChatWindow from './ChatWindow';


function Single() {
  const ref = useRef(null);
  const [users, setUsers] = useState([]); 
  const [numbers, setNumbers] = useState([]);
  const {user, logout} = UserAuth();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);


  useEffect(()=> {
    const unsubscribe = onSnapshot(
      collection(db, "users"), 
      (snapShot) => {
        let users = [];
        snapShot.docs.forEach((doc)=>{
          users.push({id : doc.id, ...doc.data()});
      });
      setUsers(users);
      console.log(users);
      },
      (error) =>{
        console.log("Error", error)
      }
    );

    return ()=> {
      unsubscribe();
      setUsers(users);
    };
  }, []);

  useEffect(()=> {
    const unsubscribe = onSnapshot(
      collection(db, "numbers"), 
      (snapShot) => {
        let numbers = [];
        snapShot.docs.forEach((doc)=>{
          numbers.push({id : doc.id, ...doc.data()});
      });
      setNumbers(numbers);
      console.log(numbers);
      },
      (error) =>{
        console.log("Error", error)
      }
    );

    return ()=> {
      unsubscribe();
      setNumbers(numbers);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/Signup');
      console.log('You are logged out');
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(()=>{
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return() =>{
    document.removeEventListener("mousedown", handleClickOutside);
  };
  }, [ref])
  
  return (
    <div className='single'>
      <div className='singleContainer'>
        <Navbar/>
        <button className='single-button' onClick={handleLogout}>Logout</button>
        
        {numbers.map((number) => (
        <div className='widget-container'>
        <div className='widget'>
        <div className='left'>
          <span className='title'>USERS</span>
          <span className='two'>{number.users}</span>
          <span className='link'>Number of users</span>
        </div>
        <div className='right'>
          <div>
            <ExpandLessIcon/>
          </div>
          <PersonOutlinedIcon className='icon' style={{
          color: 'crimson',
          backgroundColor: 'rgba(255, 0, 0, 0.2)',
        }}/>
        </div>
    </div>
    <div className='widget'>
        <div className='left'>
          <span className='title'>ORDER</span>
          <span className='two'>{number.orders}</span>
          <span className='link'>Type of order</span>
        </div>
        <div className='right'>
          <div>
            <ExpandLessIcon/>
          </div>
          <ShoppingCartOutlinedIcon className='icon' style={{
            color: 'goldenrod',
            backgroundColor: 'rgba(218, 165, 32, 0.2)',
          }}/>
        </div>
    </div>
    <div className='widget'>
        <div className='left'>
          <span className='title'>CAPITAL</span>
          <span className='two'>${number.capital}</span>
          <span className='link'>Starting capital</span>
        </div>
        <div className='right'>
          <div>
            <ExpandLessIcon/>
             {number.percentage}%
          </div>
          <MonetizationOnOutlinedIcon className='icon'  style={{
              color: 'green',
              backgroundColor: 'rgba(0, 128, 0, 0.2)',
            }}/>
        </div>
    </div>
    <div className='widget'>
        <div className='left'>
          <span className='title'>PROFIT</span>
          <span className='two'>${number.profit}</span>
          <span className='link'>Net earnings</span>
        </div>
        <div className='right'>
          <div>
            <ExpandLessIcon/>
            {number.percentage}%
          </div>
          <AccountBalanceWalletOutlinedIcon className='icon'  style={{
                color: 'purple',
                backgroundColor: 'rgba(128, 0, 128, 0.2)',
              }}/>
        </div>
    </div>
    </div>
        ))}

        <div className='single-top'>
          <div className='single-left'>
            <div className='editButton'>Edit</div>
            <h2 className='single-title'>Information</h2>
            
              {users.map((user) => (
                <div className='single-item'>
              <img src={user.img}
                alt='' className='itemImg'
              />
              <div className='details'>
                <h3 className='itemTitle'>{user.displayName}</h3>
                <div className='detailItem'>
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>{user.email}</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>{user.phone}</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>{user.address}</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>{user.country}</span>
                </div>
              </div>
            </div>
            ))}
          </div>
          {numbers.map((number) => (
          <div className='featured'>
      <div className='featured-top'>
        <h1 className='title'>Total Revenue</h1>
        <MoreVertIcon fontSize='small'/>
      </div>
      <div className='featured-bottom'>
        <div className='featuredChart'>
        <CircularProgressbar value={number.percentage} text={number.percentage} strokeWidth={5}/>
        </div>
        <p className='featured-title'>Total balance at the end of Contract</p>
        <p className='featured-amount'>${number.totalRevenue}</p>
        <p className='featured-desc'>
           Transactions processing. All payments included.
        </p>
        <div className='summary'>
          <div className='item'>  
            <div className='itemResult negative'>
              <div className='itemTitle'>Target</div>
              <KeyboardArrowDownIcon fontSize='small'/>
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
          <div className='item'>  
            <div className='itemResult positive'>
              <div className='itemTitle'>Last Week</div>
              <KeyboardArrowUpOutlinedIcon fontSize='small'/>
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
          <div className='item'>  
            <div className='itemResult positive'>
              <div className='itemTitle'>Last Month</div>
              <KeyboardArrowUpOutlinedIcon fontSize='small'/>
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
          ))}
        </div>
          
        <div className='single-right'>
            <Chart aspect={3 / 1} title='Trading Forecast(for the year)'/>
          </div>
        <div className='single-bottom' ref={ref}>
        <h1 className='title'>Last Transactions</h1>
          <List/>
          <ChatWindow
            visible = {visible}
          />
          <ChatApp 
            onClick={()=> setVisible(true)}
            styles={{
              position:'fixed', 
              bottom:'24px', 
              right:'24px'
              }}
          />
        </div>
      </div>
    </div>
  )
}

export default Single;