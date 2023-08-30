import React, { useState, useEffect } from 'react';
import {styles} from './Styles';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

function ChatApp(props) {
  const [hovered, setHovered] = useState(false);
   
  return (
    <div style={props.styles}>
        <div
          className='transition-3'
          style={{
            ...styles.avatarHello,
            ...{opacity: hovered? '1' : '0'}
          }}
        >
          Hey, its Alexander!!!
        </div>

        <div
          className='transition-3'
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={()=> props.onClick && props.onClick()}
          style={{
            ...styles.chatWithMeButton,
            ...{border: hovered? '1px solid #f9f0ff' : '4px solid #118c4f'}
          }}
        />
    </div>
  )
}

export default ChatApp;