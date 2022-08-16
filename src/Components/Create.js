import React, { useState } from 'react'
import axios from 'axios';
import { InputLabel, TextField, Button, Input, Box, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Create() {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("");

    const history = useNavigate()

    const header = {"Access-Control-Allow-Orgin": "*"};

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("click");
        axios.post('https://62f4c402ac59075124c34c03.mockapi.io/Crud',{
            title: title,
            body: content,
            header,
        })

        .then(() => {
        history("/read");
    });

    };

  return (
    <>
   
    <Box sx={{ m: 2, display: 'flex'}} style={{justifyContent: 'space-between' }}>
    <Typography variant="h4" >Create Post</Typography>
    
    <Link to='/read'>
    <Button type="submit"  color="primary" variant="contained">View All Post</Button>
    </Link>
    </Box>
    <Box sx={{ mt: 5}}>
    <form>
  <Box sx={{ m: 2 }} >
    <InputLabel for="exampleInputEmail1" className="form-label"><Typography variant="h6" component="div" >Title</Typography></InputLabel>
    <Input type="text"  id="outlined-basic" variant="outlined" onChange={(e) => setTitle(e.target.value)} fullWidth/>
  </Box>
  <Box sx={{ m: 2 }} >
    <InputLabel for="exampleInputPassword1" className="form-label"><Typography variant="h6" component="div" >Post Content</Typography></InputLabel>
    <TextField  type="text"  multiline={true}  rows={7}  id="outlined-basic" variant="outlined" onChange={(e) => setContent(e.target.value)} fullWidth> </TextField >
  </Box>
  
  <Button sx={{ m: 2 }} className="btn btn-primary" type="submit" color="primary" variant="contained" onClick={handleSubmit} >Submit</Button>
  
</form></Box>

    </>
  )
}

export default Create