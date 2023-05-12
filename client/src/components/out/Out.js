
import React, { useState, useEffect } from 'react'
import './Out.scss';
import { auth } from '../../helper/Firebase';
import { useNavigate } from 'react-router-dom';
// import {Table, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Out() {
    const [userName, setUserName] = useState("");
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            // if (!user) Navigate('/home');
            setUserName("");
        })
    })
    const Navigate=useNavigate();

    const logOut = () => {
        auth.signOut().then(res => {
            Navigate('/home');
            //do something else with res
        }).catch(err => {
            //do something else with err
        })
    }

    return (
//         <div className='main'>
//          <div className="App-header">
//         <div ClassName="btn-row">
//             <div ClassName="ct-btn">
               
//             </div>
//         </div>


//         <div className="ct-btn" style={{display:'flex',flexDirection:'column'}}>
                
//                     <div class="btn-row">

// <div className="ct-btn">
// <button className="inner-height-neon"><span className="bg-height"></span><span class="btn-text"></span> <Link to="/Verify" style={{color:'White'}}> Verify</Link></button>
// </div>
        
// <div className="ct-btn">
// <button className="border-neon"><span className="bg-height"></span><span class="btn-text"></span> <Link to="/Fetch" style={{color:'White'}}> Fetch</Link></button>
// </div>

// <div className="ct-btn">
// <button className="inner-width-neon"><span className="bg-height"></span><span class="btn-text"></span> <Link to="/Main" style={{color:'White'}}> Home</Link></button>
// </div>
// </div>
      <div>
            <h1>You're logged in!</h1>
            <button onClick={logOut}>Log out</button>
        </div>
        // </div>

    )
}

export default Out