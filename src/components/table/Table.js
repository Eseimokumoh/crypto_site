import React from 'react';
import './Table.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const rows = [
  { id: 1143155,
    product: 'Acer Nitro 5',
    img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
    customer: 'John Smith',
    date: '1 March',
    amount: 785,
    method: 'Cash on Delivery',
    status: 'Approved',
  },
  { id: 2235235,
    product: 'Playstation 5',
    img: 'https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg',
    customer: 'Micheal Doe',
    date: '1 March',
    amount: 900,
    method: 'Online Payment',
    status: 'Pending',
  },
  { id: 2342353,
    product: 'Redragon S101',
    img: 'https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg',
    customer: 'John Smith',
    date: '1 March',
    amount: 35,
    method: 'Cash on Delivery',
    status: 'Pending',
  },
  { id: 2357741,
    product: 'Razar Blade 15',
    img: 'https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg',
    customer: 'Jane Smith',
    date: '1 March',
    amount: 920,
    method: 'Online',
    status: 'Approved',
  },
  { id: 2342355,
    product: 'ASUS ROG Strix',
    img: 'https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg',
    customer: 'Harold Carol',
    date: '1 March',
    amount: 2000,
    method: 'Online',
    status: 'Pending',
  },
];
function List () {
  return   (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className='table'>
        <TableHead >
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell align="left" className='tableCell'>Product</TableCell>
            <TableCell align="right" className='tableCell'>Customer</TableCell>
            <TableCell align="right" className='tableCell'>Date</TableCell>
            <TableCell align="right" className='tableCell'>Amount</TableCell>
            <TableCell align="right" className='tableCell'>Payment Method</TableCell>
            <TableCell align="right" className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right" className='tableCell'>
              <div className='cellwrapper'>
                <img src={row.img} alt="" className='image' />
                {row.product}
              </div>
              
              </TableCell>
              <TableCell align="right" className='tableCell'>{row.customer}</TableCell>
              <TableCell align="right" className='tableCell'>{row.date}</TableCell>
              <TableCell align="right" className='tableCell'>{row.amount}</TableCell>
              <TableCell align="right" className='tableCell'>{row.method}</TableCell>
              <TableCell align="right" className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;