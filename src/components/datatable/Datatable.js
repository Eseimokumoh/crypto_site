import React, {useEffect, useState} from 'react';
import './Datatable.css';
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from '../../datatablesource';
import {Link} from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import {db} from '../firebase';
import { Unsubscribe } from '@mui/icons-material';

  
function Datatable() {
    const [data, setData] = useState([]);

    useEffect(()=> {
    {/*  const fetchData = async () => {
        let list = []
        try {
          const querySnapshot = await getDocs(collection(db, 'users'));
          querySnapshot.forEach((doc)=>{
            list.push({id: doc.id, ...doc.data()});
        });
        setData(list);
        console.log(list);
        } catch (error) {
          console.log(error);
        }       
      };
    fetchData() */}

    //LISTEN (REALTIME)
    const unsubscribe = onSnapshot(
      collection(db, "users"), 
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach(doc=>{
          list.push({...doc.data(), id : doc.id});
      });
      setData(list);
      },
      (error) =>{
        console.log("Error", error)
      }
    );

    return ()=> {
      unsubscribe();
    };
  }, []);

    const handleDelete = async (id)=> {
      try {
        await deleteDoc(doc(db,'users', id));
        setData(data.filter((item) => item.id !== id));
      } catch (error) {
        console.log(error);
      }
    };

    const actionColumn = [
      {field: 'action', headerName: 'Action', width: 200, renderCell:(params)=>{
        return (
          <div className='cellAction'>
            <Link to='/users/test' style={{textDecoration:'none'}}>
              <div className='view-Button'>View</div>
            </Link>
              <div className='delete-Button' onClick={()=>handleDelete(params.row.id)}>Delete</div>
          </div>
        );
      }}
    ];
  return (
    <div className='datatable'>
        <div className='datatableTitle'>
              Add New User
          <Link to='/users/new' 
            style={{textDecoration:'none'}} className='link'>
              Add New
          </Link>
        </div>        
      <DataGrid
        className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable;