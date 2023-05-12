import React, { useEffect, useState } from 'react';
// import {Table, Button, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { Link, BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Main from './components/main/Main';
import Out from './components/out/Out';
import Fetch from './components/fetch/Fetch';
import Verify from './components/verify/Verify';
import Del from './components/del/del';
import Home from './components/Home';
import Login from './components/auth/signIn/Login';
import Signup1 from './components/auth/signUp/Signup1';
import SignIn from './components/auth/signIn/SignIn';
import SignUp from './components/auth/signUp/SignUp';
import  {auth} from './helper/Firebase';

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <div className="App">
      <Router>         
        <Routes>
          {/* <Route path='/auth' element={<Auth/>} /> */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup1/>}/>
          <Route path='/main' element={<Main/>} />
          <Route path='/fetch' element={<Fetch/>} />
          <Route path='/verify' element={<Verify/>} />
          <Route path="/out" element={<Out/>} />
          <Route path="/del" element={<Del/>} />
          <Route path="/" element={<Home name={userName} />} />
          {/* <Route path="/" element={<Navigate  to="/main" />} /> */}
          {/* <Navigate to='/auth' from='*' /> */}
        </Routes>
      </Router>
    </div>
        
  );
}

export default App;


