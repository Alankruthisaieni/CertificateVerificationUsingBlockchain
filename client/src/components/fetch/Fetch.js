/* eslint-disable */

import React from "react";
import axios from 'axios';
import web3 from '../../web3';
import Main from '../main/Main';
import '../../App.css';
import Out from '../out/Out';
import Verify from '../verify/Verify';
import {Table, Button, Form } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import storehash from '../../storehash';
// import {GET} from "react-axios";
//import storehash from './storehash';
//import {  Get } from 'react-axios'
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

//import {Switch,Link} from "react-router-dom";

const handleclick = async () =>{
  var first = 'https://ipfs.io/ipfs/'+document.getElementById("textbox1").value;
  var ih=document.getElementById("textbox1").value;
   var id= document.getElementById("textbox2").value;
   
    var id1 = parseInt(id, 10);
    var nameOfFile=id;//+".jpg";
    //window.alert(first);
  //const m =storehash.methods.verifyDocument(id1,ih).call();
  try{
  const m = await storehash.methods.verifyDocument(id1,ih).call();

   const accounts = await web3.eth.getAccounts();
     var metaAcc = accounts[0];
     // window.alert('Sending from Metamask account: ' + accounts[0]);
      // if(accounts[0]== metaAcc){
      //   window.alert("Verified By RIT","alpha beta");
      // }
      // else{
      //   window.alert("Verified account not belongs to RIT");
      // }
// window.alert(m);
 if(m && (accounts[0]== metaAcc))
        {
            window.alert("Valid and Verified By GNITS. ");
           
          //  axios({
          //      url:first,
          //      method: 'GET',
          //      mode: 'no-cors',
          //      responseType: 'blob',
          //      }).then((response) => {
          //  var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          //  var fileLink = document.createElement('a');

          //  fileLink.href = fileURL;
          //  fileLink.setAttribute('download', nameOfFile);
          //  document.body.appendChild(fileLink);

          //   fileLink.click();
          //   }); 
           

        }else
         {
          window.alert("Provided hash not found on system [Invalid Hash] or might be not Verified by GNITS account");
        }

  //const cid = "";
  }catch(e){  
alert("There is error which shows "+e.message); //Handling error  
}
}


function One()
{ 
  return (  
  <div className="App-header">
  <div className="ct-btn" style={{display:'flex',flexDirection:'column'}}>
    <div class="btn-row">

      <div className="ct-btn">
      <button> <Link to="/Out" style={{color:'White'}}> Log-Out</Link></button>
      </div>
              
      <div className="ct-btn">
      <button> <Link to="/Verify" style={{color:'White'}}> Verify</Link></button>
      </div>

      <div className="ct-btn">
      <button> <Link to="/Main" style={{color:'White'}}> Home</Link></button>
      </div>
    </div>

    <div class="header-text">
      {/* <h1>Verify Using Student Document Hash</h1>  */}
      <p>CSE Department, GNITS</p>
    </div>
    </div>
    <div class="fetch-page submit-form">
        <h3> Verify Using Student Document Hash </h3>
        <form >
          <input type="text" placeholder='Enter your Hash' name="textbox1" id="textbox1" />
          <input type="text" placeholder='Enter student Id' name="textbox2" id="textbox2" />
          <button onClick={handleclick}>Submit</button>  
        </form>
    </div>
    </div>

  );
}

export default One;