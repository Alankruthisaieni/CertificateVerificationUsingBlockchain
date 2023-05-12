/* eslint-disable */
import {Table, Button, Form } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../App.css';
import web3 from '../../web3';
import ipfs from '../../ipfs';
import storehash from '../../storehash';
import Out from '.././out/Out';
import Fetch from '../fetch/Fetch';
import Verify from '../verify/Verify';
//
//import { sendEmail } from './mailcode.js';
//////
class App1 extends Component {
    state = {
      ipfsHash:null,
      buffer:'',
      ethAddress:'',
      blockNumber:'',
      transactionHash:'',
      gasUsed:'',
      txReceipt: ''   
    };
    captureFile =(event) => {
        event.stopPropagation()
        event.preventDefault()
        const file = event.target.files[0]
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader)    
    };
    convertToBuffer = async(reader) => {
      //file is converted to a buffer to prepare for uploading to IPFS
        const buffer = await Buffer.from(reader.result);
      //set this buffer -using es6 syntax
        this.setState({buffer});
        console.log(buffer);
    };
    

    onClick = async () => {
    try{
        this.setState({blockNumber:"waiting.."});
        this.setState({gasUsed:"waiting..."});

        // get Transaction Receipt in console on click
        // See: https://web3js.readthedocs.io/en/1.0/web3-eth.html#gettransactionreceipt
        await web3.eth.getTransactionReceipt(this.state.transactionHash, (err, txReceipt)=>{
          console.log(err,txReceipt);
          this.setState({txReceipt});
        }); //await for getTransactionReceipt

        await this.setState({blockNumber: this.state.txReceipt.blockNumber});
        await this.setState({gasUsed: this.state.txReceipt.gasUsed});    
      } //try
    catch(error){
        console.log(error);
      } //catch
  } //onClick

    onSubmit = async (event) => {
      event.preventDefault();

      //bring in user's metamask account address
      const accounts = await web3.eth.getAccounts();
      console.log('Sending from Metamask account: ' + accounts[0]);

      //obtain contract address from storehash.js
      const ethAddress= await storehash.options.address;
      this.setState({ethAddress});
      console.log("EthAddress: "+ethAddress);
      //save document to IPFS,return its hash#, and set hash# to state
      //https://github.com/ipfs/interface-ipfs-core/blob/master/SPEC/FILES.md#add 
      await ipfs.add(this.state.buffer, (err, ipfsHash) => {
        console.log(err,ipfsHash);
        //setState by setting ipfsHash to ipfsHash[0].hash
        try{
          this.setState({ ipfsHash:ipfsHash[0].hash });
        }catch(e){  
          alert("Please Select file ["+e.message+"]"); //Handling error  
        }  
        // call Ethereum contract method "sendHash" and .send IPFS hash to etheruem contract 
        //return the transaction hash from the ethereum contract
        //see, this https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#methods-mymethod-send
         
         var id= document.getElementById("textbox2").value;
        try{
          storehash.methods.sendHash(id,this.state.ipfsHash).send({
          from: accounts[0] 
          }, (error, transactionHash) => {
          console.log(transactionHash);
          this.setState({transactionHash});
          }); //storehash 
        }catch(e){  
          alert("Id should be number "+e.message); //Handling error  
        }  

//added below 

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "cserit4@gmail.com",
    Password: "26AED938423E23C21C0338F27DB1547DD9B2",
    To: '1703007@ritindia.edu',
    From: "cserit4@gmail.com",
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
  })
    .then(function (message) {
    alert("mail sent successfully")
    });
  }
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: '1703007@ritindia.edu', // Change to your recipient
//   from: 'devine_vinayak@wearehackerone.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })

//


//         var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: 'cserit4@gmail.com',
//         pass: 'i@mn0tc$3'
//     }
// });

// var mailOptions = {
//     from: 'cserit4@gmail.com',
//     to: '1703007@ritindia.edu, cserit4@gmail.com',
//     subject: 'Hello',
//     text: 'Hello world',
//     html: '<b>Hello world</b>'
// };

// transporter.sendMail(mailOptions, function(error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Message sent: ' + info.response);
//     }
//     transporter.close();
// });

 ///till here Code of send mail

      }) //await ipfs.add 
      
    };
 render() {
      
      return (
        /////

        <div className="main  ">
        <div className="App-header">
         


      <div className="ct-btn" style={{display:'flex',flexDirection:'column'}}>
        <div class="btn-row">

          <div className="ct-btn">
            <button > <Link to="/Out" style={{color:'White'}}>Logout</Link></button>
          </div>
                  
          <div className="ct-btn">
            <button > <Link to="/Fetch" style={{color:'White'}}> Fetch</Link></button>
          </div>

          <div className="ct-btn">
            <button><Link to="/Verify" style={{color:'White'}}> Verify</Link></button>
          </div>
        </div>  
  
        <div class="header-text">
          <h1> Educational Documents Authorization</h1> 
          <p>CSE Department, GNITS</p>          
        </div>
      </div>
      <div class="submit-form">
        <h3> Choose file to upload </h3>
        <form onSubmit={this.onSubmit}>
          <input type ="file"  onChange = {this.captureFile}/>
          <input type="text" placeholder='Enter student Id' name="textbox2" id="textbox2"/>            
          <button type="submit"> Submit </button>
        </form>
      </div>

        {/* <form method="post">
          <input type="button" value="Send Email" onClick="sendEmail()" />
        </form> */}
        <div class="receipt-button">
        <button  onClick = {this.onClick}> Get Transaction Receipt </button>
        </div>

              <table>
                <thead>
                  <tr>
                    <th>Tx Receipt Category</th>
                    <th>Values</th>
                  </tr>
                </thead>
               
                <tbody>
                  <tr>
                    <td>IPFS Hash # stored on Eth Contract</td>
                    <td>{this.state.ipfsHash}</td>
                  </tr>
                  <tr>
                    <td>Ethereum Contract Address</td>
                    <td>{this.state.ethAddress}</td>
                  </tr>

                  <tr>
                    <td>Tx Hash # </td>
                    <td>{this.state.transactionHash}</td>
                  </tr>

                  <tr>
                    <td>Block Number # </td>
                    <td>{this.state.blockNumber}</td>
                  </tr>

                  <tr>
                    <td>Gas Used</td>
                    <td>{this.state.gasUsed}</td>
                  </tr>                
                </tbody>
            </table>
     </div>
            
    </div>
      );
    } //render
}
export default App1;




/*

import React, { useEffect } from 'react'
import './Main.scss';
import { auth } from '../../helper/Firebase';
import { useHistory } from 'react-router-dom';

function Main() {
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) history.push('/auth');
        })
    })
    const history = useHistory();

    const logOut = () => {
        auth.signOut().then(res => {
            history.push('/auth');
            //do something else with res
        }).catch(err => {
            //do something else with err
        })
    }

    return (
        <div className='main'>
            <h1>Hey there, you're logged in!</h1>
            <button onClick={logOut}>Log out</button>
        </div>
    )
}

export default Main

*/