import React from 'react';
import './Chart.css';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip } from 'recharts';


const data = [
 {name: 'January', Total: 1200},
 {name: 'February' , Total: 2100},
 {name: 'March', Total: 800},
 {name: 'April', Total: 1600},
 {name: 'May', Total: 900},
 {name: 'June', Total: 1700},
 {name: 'July', Total: 2500},
 {name: 'August', Total: 3000},
 {name: 'September', Total: 4500},
 {name: 'October', Total: 4000},
 {name: 'November', Total: 5000},
 {name: 'December', Total: 6000},
];
function Chart({aspect, title}) {
  return (
    <div className='chart'>
      <div className='title'>{title}</div>
      <AreaChart width={800} height={300} data={data} aspect={aspect}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke='gray'/>
  <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
    </div>
  )
}

export default Chart;