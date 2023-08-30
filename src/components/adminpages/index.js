import React from 'react';
import ChatApp from './ChatApp';


function index() {
  return (
    <div>
        <ChatApp styles={{position:'fixed', bottom:'24px', right:'24px'}}/>
    </div>
  )
}

export default index;