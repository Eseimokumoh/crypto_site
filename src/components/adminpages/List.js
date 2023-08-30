import React from 'react';
import './List.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Datatable from '../datatable/Datatable';

function List() {
  return (
    <div className='list'>
      <Sidebar/>
      <div className='listContainer'>
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List;