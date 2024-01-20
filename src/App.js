
import React, { useState } from 'react';
import './App.css';
//import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Navbar from './Components/Navbar'
import About from './Components/About'

import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import Feedback from './Components/Feedback';


function App() {
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
    

  }
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#042743';
        showAlert("Dark Mode is Enabled","success");

      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light Mode is Enabled","success");

      }

  }

  return (
    <>
   
    
    <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}></Alert>
        <div className='container my-3'>
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
            <Route path='/feedback' element={<Feedback />} />

          </Routes>
        </div>
      </Router>

    
      {/* <Router>
    <Navbar title="TextUtils" aboutText="about us" mode={mode} toggleMode={toggleMode}   ></Navbar>
    <Alert alert={alert}></Alert>
    <div className='container my-3'> */}
      {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>  */}
      {/* <About>
      </About> */}
    
    {/* <switch>
      <Route path='/about'> 
        <About/>
      </Route>
      <Route path='/'> 
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> 
      </Route>

    </switch>
    </div>
    </Router> */}

    
    </>
  );
}

export default App;
