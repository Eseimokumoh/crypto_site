import React, {useState} from 'react';
import './Editpage.css';
import { db } from '../firebase';
import { doc, setDoc, updateDoc, collection } from "firebase/firestore";


function Editpage({numbers,setEditbox}) {
  const [user, setUser] = useState('');
  const [order, setOrder] = useState('');
  const [capital, setCapital] = useState('');
  const [profit, setProfit] = useState('');
  const [totalRevenue, setTotalRevenue] = useState('');
  const [percentage, setPercentage] = useState('');


  const editDoc = async ()=> {
    try {
      await updateDoc(doc(db,'numbers', 
      'smart-ID'),
      {"users": user,"orders" : order ,
      "capital": capital ,"profit": profit,
      "totalRevenue": totalRevenue,
      "percentage": percentage,
       })
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


  return (
    <div>
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
            <button onClick={()=>{
              editDoc({
                  "users": user,"orders" : order ,
                  "capital": capital , "profit": profit,
                  "totalRevenue": totalRevenue,
                  "percentage": percentage,
                  }
              )
              setEditbox(false)
              }}>Update</button>  
            </form> 
    </div>
  )
}

export default Editpage;