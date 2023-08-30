import React, { useState, useEffect } from 'react';
import './Admin.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
//import Widget from './Widget';
//import Featured from '../featured/Featured';
import Chart from '../chart/Chart';
import Table from '../table/Table';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar }  from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { collection, addDoc, doc, updateDoc, setDoc, onSnapshot } from "firebase/firestore"; 
import { db } from '../firebase';
import {v4 as uuidv4} from 'uuid';
import Editpage from './Editpage';
import ChatApp from './ChatApp';


function Admin() {
  const [user, setUser] = useState('');
  const [order, setOrder] = useState('');
  const [capital, setCapital] = useState('');
  const [profit, setProfit] = useState('');
  const [totalRevenue, setTotalRevenue] = useState('');
  const [percentage, setPercentage] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [editbox, setEditbox] = useState(false);


  const handleAdd = async (e)=> {
    e.preventDefault()
    try {
      await setDoc(doc(db,'numbers', 
      'smart-ID'),
      {"users": user,"orders" : order ,
      "capital": capital ,"profit": profit,
      "totalRevenue": totalRevenue,
      "percentage": percentage,
      "id": uuidv4()})
      alert("Data added successfully");
      } catch (error) {
        console.log('Error adding document:', error);
        };
        setUser('');
        setOrder('') ;
        setCapital('');
        setProfit('');
        setTotalRevenue('');
        setPercentage('');
  }

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


  return (
    <div className='admin-home'>
      <Sidebar/>
      <div className='homeContainer'>
        <Navbar/>
        {numbers.map((number) => (
          <div className='widget-container'>
          <div className='widget' key={number.id}>
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
    <div className='widget' key={number.id}>
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
    <div className='widget' key={number.id}>
        <div className='left'>
          <span className='title'>CAPITAL</span>
          <span className='two'>${number.capital}</span>
          <span className='link'>Starting capital</span>
        </div>
        <div className='right'>
          <div>
            <ExpandLessIcon/>
            {number.percentage}
          </div>
          <MonetizationOnOutlinedIcon className='icon'  style={{
              color: 'green',
              backgroundColor: 'rgba(0, 128, 0, 0.2)',
            }}/>
        </div>
    </div>
    <div className='widget' key={number.id}>
        <div className='left'>
          <span className='title'>PROFIT</span>
          <span className='two'>${number.profit}</span>
          <span className='link'>Net earnings</span>
        </div>
        <div className='right'>
          <div>
            <ExpandLessIcon/>
            {number.percentage}
          </div>
          <AccountBalanceWalletOutlinedIcon className='icon'  style={{
                color: 'purple',
                backgroundColor: 'rgba(128, 0, 128, 0.2)',
              }}/>
        </div>
    </div>
          </div>   
        ))}

        <div className='formInput-container'>
        <form >
            <div className='formInput'>
              <input id='user' type='number'
              placeholder='Number of users' 
              onChange={(e)=>{setUser(e.target.value)}}/>
      
            </div>    
            <div className='formInput'>
              <input id='order' type='text'
              placeholder='Type of order' 
              onChange={(e)=>{setOrder(e.target.value)}}/>
            
            </div> 
            <div className='formInput'>
              <input id='capital' type='number'
              placeholder='Capital' 
              onChange={(e)=>{setCapital(e.target.value)}}/>
            
            </div> 
            <div className='formInput'>
              <input id='profit' type='number'
              placeholder='Profit' 
              onChange={(e)=>{setProfit(e.target.value)}}/>
            
            </div> 
            <div className='formInput'>
              <input id='totalRevenue' type='number'
              placeholder='Total Revenue' 
              onChange={(e)=>{setTotalRevenue(e.target.value)}}/>
          
            </div>
            <div className='formInput'>
              <input id='percentage' type='text'
              placeholder='Percentage' 
              onChange={(e)=>{setPercentage(e.target.value)}}/>
            </div>  
            <button onClick={handleAdd} >Add New Data</button> 
            <button onClick={(e)=>{
              e.preventDefault()
              setEditbox(true)}}>Edit</button>  
            {editbox === true && <Editpage numbers={numbers} setEditbox={setEditbox}/>}
            </form>   
        </div>

        {numbers.map((number) => (
        <div className='charts'>
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
          <Chart/>
        </div>
        ))}

        <div className='listContainer'>
          <div className='listTitle'>Latest Transactions</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Admin;