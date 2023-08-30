// import React, { useEffect, useState } from 'react';
// import './Widget.css';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
// import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
// import {collection, getDocs, query, where} from 'firebase/firestore';
// import {db} from '../firebase';


// function Widget({type}) {
//  // const [amount, setAmount] = useState(null);
//   // const [difference, setDifference] = useState(null);
//   // let data;

//   // switch(type){
//   //   case 'user':
//   //     data={
//   //       title:'USERS',
//   //       isMoney: false,
//   //       link: 'See all users',
//   //       query: 'users',
//   //       icon: 
//   //     };
//   //     break;
//   //     case 'order':
//   //       data={
//   //         title:'ORDERS',
//   //         isMoney: false,
//   //         link: 'View all orders',
//   //         query: 'orders',
//   //         icon:
//   //       };
//   //       break;
//   //       case 'capital':
//   //         data={
//   //           title:'CAPITAL',
//   //           isMoney: true,
//   //           link: 'View net earnings',
//   //           query: 'capital',
//   //           icon:
//   //         };
//   //         break;
//   //         case 'profit':
//   //           data={
//   //             title:'PROFIT',
//   //             isMoney: true,
//   //             link: 'See details',
//   //             query: 'profit',
//   //             icon: 
//   //           };
//   //           break;
//   //     default:
//   //       break;
//   // }

//   // useEffect(()=>{
//   //   const fetchData = async ()=>{
//   //     const today = new Date();
//   //     const lastMonth = new Date(new Date().setMonth(today.getMonth()-1))
//   //     const prevMonth = new Date(new Date().setMonth(today.getMonth()-2))

//   //     const lastMonthQuery = query(
//   //       collection(db, data.query), 
//   //       where("timeStamp", "<=", today),
//   //       where("timeStamp", ">", lastMonth)
//   //     );
//   //     const prevMonthQuery = query(
//   //       collection(db, data.query), 
//   //       where("timeStamp", "<=", lastMonth),
//   //       where("timeStamp", ">", prevMonth)
//   //       );

//   //     const lastMonthData = await getDocs(lastMonthQuery)
//   //     const prevMonthData = await getDocs(prevMonthQuery)

//   //   //  setAmount(lastMonthData.docs.length);
//   //     setDifference(
//   //       ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) * 
//   //         100
//   //       );
//   //   };
//   //   fetchData();
//   // }, [query]);

//   return (
//     <div className='widget-container'>
//     <div className='widget'>
//         <div className='left'>
//           <span className='title'>USERS</span>
//           <span className='two'></span>
//           <span className='link'>Number of users</span>
//         </div>
//         <div className='right'>
//           <div>
//             <ExpandLessIcon/>
//           </div>
//           <PersonOutlinedIcon className='icon' style={{
//           color: 'crimson',
//           backgroundColor: 'rgba(255, 0, 0, 0.2)',
//         }}/>
//         </div>
//     </div>
//     <div className='widget'>
//         <div className='left'>
//           <span className='title'>ORDER</span>
//           <span className='two'></span>
//           <span className='link'>Type of order</span>
//         </div>
//         <div className='right'>
//           <div>
//             <ExpandLessIcon/>
//           </div>
//           <ShoppingCartOutlinedIcon className='icon' style={{
//             color: 'goldenrod',
//             backgroundColor: 'rgba(218, 165, 32, 0.2)',
//           }}/>
//         </div>
//     </div>
//     <div className='widget'>
//         <div className='left'>
//           <span className='title'>CAPITAL</span>
//           <span className='two'></span>
//           <span className='link'>Starting capital</span>
//         </div>
//         <div className='right'>
//           <div>
//             <ExpandLessIcon/>
//              %
//           </div>
//           <MonetizationOnOutlinedIcon className='icon'  style={{
//               color: 'green',
//               backgroundColor: 'rgba(0, 128, 0, 0.2)',
//             }}/>
//         </div>
//     </div>
//     <div className='widget'>
//         <div className='left'>
//           <span className='title'>PROFIT</span>
//           <span className='two'></span>
//           <span className='link'>Net earnings</span>
//         </div>
//         <div className='right'>
//           <div>
//             <ExpandLessIcon/>
//              %
//           </div>
//           <AccountBalanceWalletOutlinedIcon className='icon'  style={{
//                 color: 'purple',
//                 backgroundColor: 'rgba(128, 0, 128, 0.2)',
//               }}/>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default Widget;