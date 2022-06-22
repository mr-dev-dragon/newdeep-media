// import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// import { Login } from './components';
// import Home from './container/Home';
import React from "react";
const App = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

  //   if (!User) navigate('/login');
  // }, []);

  return (
    <h1 className="text-3xl font-bold underline">
      hello world
    </h1>
    // <Routes>
    //   <div > hiii ther</div>
    //   {/* <Route path="login" element={<Login />} />
    //   <Route path="/*" element={<Home />} /> */}
    // </Routes>
  )
}

export default App;
