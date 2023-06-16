import React from "react";
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import Textform from './components/Textform';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  var [myalert , SetAlert] = useState (null);

  const ShowAlert = (message,type)=>{
    
    SetAlert({
      message : message,
      type :type
    })
    setTimeout(() => {
      SetAlert(null)
    }, 3000);
  }

  return (
    //importing Navbar
    <>
      {/* <Navbar title="Mywebsite" aboutText = "About" /> */}
      {/* if some body forget to add there title and about page in there website then default message will apper there */}
      <Router>
      <Navbar title="Mywebsite" aboutText = "About" />
      <Alert alert={myalert}/>
      <div className="container">
      <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/" element={<Textform ShowAlert={ShowAlert} />} />
      </Routes>
      </div>
      </Router>
    </>     
  );
}

export default App;
