export const userColumns = [
    {field: 'id', headerName: 'ID', width:150},
    {field: 'user', headerName: 'User', width:300, renderCell: (params)=>{
        return(
            <div className='cellWithImg'>
                <img className="cellImg" src={params.row.img} alt="avatar"/>
                {params.row.username}
            </div>
        )
    }},
    {field: 'email', headerName: 'Email', width:200},
    {field: 'address', headerName: 'Address', width:200},
    {field: 'phone', headerName: 'Phone', width:200, renderCell:(params)=>{
        return(
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    }},
    
]

