import React, {useState} from 'react';
import {styles} from './Styles';
import Main from '../adminpages/Main';

function ChatWindow(props) {
  // state
  const [user, setUser] = useState(null)
  const [chat, setChat] = useState(null)
  
  return (
    <div
        className='transition-5'
        style={{
            ...styles.supportWindow,
            ...{opacity: props.visible? '1' : '0'}
        }}
    >
        <Main/>
    </div>
  )
}

export default ChatWindow;