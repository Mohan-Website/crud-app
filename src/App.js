import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Container from '@material-ui/core/Container';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';


function App(){
  return (
    <>
       <Container fixed>
    <BrowserRouter>
    <Routes>
 
    <Route exact path="/" element={<Create />}></Route>   
    <Route exact path="/read" element={<Read />}></Route>     
    <Route exact path="/update" element={<Update />}></Route>    
   
    </Routes>
    </BrowserRouter>
    </Container>
    </>
  );
}

export default App;
