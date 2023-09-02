import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import React,{useState} from 'react'
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [alert, setAlert] = useState(null);

  const ShowAlert = (message, type)=>{
    setAlert(
      {
        msg:message,
        type:type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const [Mode, setMode] = useState('light');

  const togglemode = ()=>{
    if(Mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#011525';
      ShowAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      ShowAlert("Light Mode has been enabled","success")
    }
  }
  return (
    <>
    <BrowserRouter>
     <Navbar title="TextUtils" AboutText="About" mode={Mode} togglemode={togglemode}/>
     <Alert alert={alert}/>
     <div className="container my-3">
     <Routes>
       <Route exact path="/about" element={<About mode={Mode}/>}/>
       <Route exact path="/" element={<TextForm heading="TextUtils - Text Analyzer Tool" mode={Mode} ShowAlert={ShowAlert}/>}/>
     </Routes>
     </div>
     </BrowserRouter>
    </>
  );
}

export default App; 
