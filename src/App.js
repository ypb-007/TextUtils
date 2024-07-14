
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setalert]=useState(null);
  
  const showAlert=(msg,type)=>{
    setalert({
      msg:msg,
      
      type:type
    })

    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success")
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")

    }
  }

  return (
    <>
    <BrowserRouter>
  <Navbar title="TextYB" about={"About us"} mode={mode} toggelMode={toggleMode} />
  <Alert alert={alert}/>
  <div className="container my-3">
  
<Routes>
  <Route exact path="/about" element={ <About mode={mode} toggelMode={toggleMode} />}/> 
 
  
   <TextForm showAlert={showAlert} heading="Enter the Text here" mode={mode}/>
  
 
</Routes>
  
  {/* <About/> */}
</div>
  </BrowserRouter>
  </>
  );
}

export default App;
