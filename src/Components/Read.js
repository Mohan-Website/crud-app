import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button, Box, Card, CardContent, Typography } from '@mui/material';

function Read() {

    const [data, setData] = useState([]);

function getDate(){
    axios.get('https://62f4c402ac59075124c34c03.mockapi.io/Crud')
    .then((res) => {
        console.log(res.data);
        setData(res.data);
    });
}

    
useEffect(() => {
    getDate();
}, [data]);


function handleDelete(id){
    axios.delete(`https://62f4c402ac59075124c34c03.mockapi.io/Crud/${id}`).then(()=>{
        getDate();
    });
}

const setToLocalStorage = (id, title, body)=> {
    localStorage.setItem("id", id)
    localStorage.setItem("title", title)
    localStorage.setItem("body", body)
}

  return (
    <>
    <Box sx={{ m: 2, display: 'flex'}} style={{justifyContent: 'space-between' }}>
    <Typography variant="h4" >All Post</Typography>
    <Link to='/'>
    <Button type="submit" color="primary" variant="contained" >Create Post</Button>
    </Link>
    </Box>
        

  {
    data.map((eachData) => {
        return(
            <>
{<Card  sx={{ m: 2}}>
  
  <CardContent>
    <Typography variant="h6" component="div" sx={{ m: 2}}>{eachData.id}</Typography>
    <Typography variant="h4" component="div" className="card-title" sx={{ m: 2}}>{eachData.title}</Typography>
    <Typography variant="body1" sx={{ m: 2}}>{eachData.body}</Typography>
    <Box sx={{ m: 2, display: 'flex'}} style={{justifyContent: 'space-between' }}>
    <Link to="/update">
        <Button color="success" variant="contained" onClick={()=> setToLocalStorage(eachData.id,eachData.title,eachData.body)} >Edit</Button>
        </Link>
        <Button color="error" variant="contained" onClick={() => handleDelete(eachData.id)}>Delete</Button>
        </Box>
  </CardContent>
</Card>}

             {/* <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.title}</td>
      <td>{eachData.body}</td>
      <td>
        <Link to="/update">
        <button className="btn btn-success" onClick={()=> setToLocalStorage(eachData.id,eachData.title,eachData.body)} >Edit</button>
        </Link>
      </td>
      <td><button className="btn btn-danger" onClick={() => handleDelete(eachData.id)}>Delete</button></td>
    </tr>
  
   
  </tbody> */}
            </>
        )
    })
   }

    </>
  )
}

export default Read