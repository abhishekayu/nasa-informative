import logo from './img/NASA_logo.png';
import './App.css';
import Home from './Home.jsx'
import Navbar from './Navbar';
import Scroll from "./Scroll"
import {Route, Routes} from "react-router-dom"
import Astronomy from './Astronomy';
import About from "./About"
import React, { useEffect,useState } from 'react';
import {BallTriangle } from  'react-loader-spinner'
function App() {
  const [loading , setloading] = useState(false);
  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    },3000)
  },[])
  return (
    <>
    <div className="App">
    {
      loading ? 
      <>
      <div id="loagimg">
      </div>
      <div id="load">
      <BallTriangle  color="#00BFFF" />
      </div>
      </> :      
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Navbar></Navbar>
      <Routes>
      <Route exact path='/Astro' element={<Astronomy/>} />
      <Route exact path='/About' element={<About/>} />
      </Routes>
      <Home></Home>
      <Scroll></Scroll>
    </header>
    }
    </div>
    </>

  );
}

export default App;
