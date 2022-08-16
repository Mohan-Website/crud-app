import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { InputLabel, TextField, Button, Input, Box, Typography} from '@mui/material';

function Update() {

    const [id, setID] = useState(0)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const history = useNavigate()

    useEffect(() => {
        setID(localStorage.getItem("id"));
        setTitle(localStorage.getItem("title"));
        setBody(localStorage.getItem("body"));
    }, [])
    
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("ID...", id);
        axios.put(`https://62f4c402ac59075124c34c03.mockapi.io/Crud/${id}`,{
            title: title,
            body: body,
        }).then(()=>{
            history("/read");
        })
        
    }

  return (
    <>
  <Box sx={{ m: 2 }}>
  <Typography variant="h4" >Update Post</Typography>
    </Box>
    <form>
  <Box sx={{ m: 2 }}>
    <InputLabel for="exampleInputEmail1" className="form-label"><Typography variant="h6" component="div" >Title</Typography></InputLabel>
    <Input type="text"  id="outlined-basic" variant="outlined"  className="form-control" 
    value={title}
    onChange={(e) => setTitle(e.target.value)} 
    fullWidth/>
  </Box>
  <Box sx={{ m: 2 }}>
    <InputLabel for="exampleInputPassword1" className="form-label"><Typography variant="h6" component="div" >Update Content</Typography></InputLabel>
    <TextField type="text" id="outlined-basic" multiline={true}  rows={7} variant="outlined" className="form-control" 
    value={body}
    onChange={(e) => setBody(e.target.value)}
   fullWidth > </TextField>
  </Box>
 
  <Button sx={{ m: 2 }} type="submit" color="success" variant="contained" 
  onClick={handleUpdate}
   >Update</Button>
   <Link to='/read'><Button sx={{ m: 2 }} type="submit" color="error" variant="contained" 
>Cancel</Button></Link>
</form>

    </>
  )
}

export default Update