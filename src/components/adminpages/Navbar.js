import React, {useContext, useEffect, useState} from 'react';
import './Navbar.css';
import  SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon  from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext} from '../context/darkModeContext';
import {db} from '../firebase';
import { collection, getDocs, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import {Link} from 'react-router-dom';


function Navbar() {
  const [users, setUsers] = useState([]); 
  

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

  
  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='search'>
              <input type='text' placeholder='search...'/>
              <SearchOutlinedIcon/>
            </div>
            <div className='items'>
              <div className='item'>
                <LanguageOutlinedIcon className='icon'/>
                English
              </div>
              <div className='item'>
                <DarkModeOutlinedIcon className='icon' onClick={()=>dispatch({type:'TOGGLE'})}/>
              </div>
              <div className='item'>
                <FullscreenExitOutlinedIcon className='icon'/>
              </div>
              <div className='item'>
                <NotificationsNoneOutlinedIcon className='icon'/>
                <div className='counter'>1</div>
              </div>
              <div className='item'>
                <Link to='' >
                <ChatBubbleOutlineOutlinedIcon className='icon'/>
                </Link>
                <div className='counter'>2</div>
              </div>
              <div className='item'>
                <ListOutlinedIcon className='icon'/>
              </div>
              {users.map((user) => (
              <div>
                <img src={user.img} alt='' className='avatar'/>
              </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Navbar;