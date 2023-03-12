import React from 'react'
import Navbar from './Component/Navbar'
import {Router,Routes,Route, BrowserRouter} from 'react-router-dom'
import { redirect } from 'react-router-dom';
import Home from './Component/Home'
import Tourist from './Component/Tourist';
import Stay from './Component/Stay';
import BookTickets from './Component/BookTickets';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import HashLoader from "react-spinners/HashLoader";
import { useEffect,useState } from 'react';
import './App.css'
function App() {


  const [loading,SetLoading]=useState(false);
  useEffect(()=>{
    SetLoading(true)
    setTimeout(()=>{
      SetLoading(false);
    },4000)
  },[])
  return (
    <>
    {
       loading ?
       <HashLoader
       className='MySpinner'
       color={"blue"}
       loading={loading}
       size={100}
       aria-label="Loading Spinner"
       data-testid="loader"
       />
       :
      <div>
      <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Tourist' element={<Tourist/>}/>
    <Route path='/BookTickets' element={<BookTickets/>}/>
    <Route path='/Stay' element={<Stay/>}/>
    </Routes>
    <redirect path='/'/>
    </div>
    }
    </>
  )
}

export default App