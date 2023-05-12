/* eslint-disable */


import {Table, Button, Form } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Main from '../main/Main';
import del from '../del/del';
import Out from '../fetch/Fetch';
import Verify from '../verify/Verify';
import React, { Component } from 'react';
import '../../App.css';
//import logo from './logo.svg';
import '../../App.css';
import web3 from '../../web3';
import ipfs from '../../ipfs';
import storehash from '../../storehash';
//////

class App2 extends Component {
 
    state = {
      ipfsHash:null,
      buffer:'',
      ethAddress:'',
      blockNumber:'',
      transactionHash:'',
      gasUsed:'',
      txReceipt: ''   
    };
   ///



   //////



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
    };

             
    onSubmit = async (event) => {
      event.preventDefault();

      //bring in user's metamask account address
      
      //save document to IPFS,return its hash#, and set hash# to state
      //https://github.com/ipfs/interface-ipfs-core/blob/master/SPEC/FILES.md#add 
    

      await ipfs.add(this.state.buffer, (err, ipfsHash) => {
        console.log(err,ipfsHash);
        //setState by setting ipfsHash to ipfsHash[0].hash 
        
try{
        this.setState({ ipfsHash:ipfsHash[0].hash });
       
}catch(e){  
alert("There is error which shows file not selected ["+e.message+"]"); //Handling error  
}  
        // call Ethereum contract method "sendHash" and .send IPFS hash to etheruem contract 
        //return the transaction hash from the ethereum contract
        //see, this https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#methods-mymethod-send
          
         var id= document.getElementById("textbox2").value;
         var hash = this.state.ipfsHash;
         	//window.alert(hash);
          console.log("id "+id+"hash:  "+hash);
         try{ 
         const m = storehash.methods.verifyDocument(id,hash).call().then(result =>
      {
        // window.alert(result) ;
        if(result)
        {
            window.alert("verified");      
            return true;      
        }else
         {
          window.alert("not verified");
        };
      });
         }catch(e){  
        alert("There is error which shows "+e.message); //Handling error  
      }  
      }) //await ipfs.add 
      
    };
 render() {
      
      return (
////

 



        /////
  <div className="main">
    <div className="App-header">
      <div className="ct-btn" style={{display:'flex',flexDirection:'column'}}>
        <div class="btn-row">
          <div className="ct-btn">
          <button> <Link to="/Out" style={{color:'White'}}> Log-Out</Link></button>
          </div>
                  
          <div className="ct-btn">
          <button> <Link to="/Fetch" style={{color:'White'}}> Fetch</Link></button>
          </div>

          <div className="ct-btn">
          <button> <Link to="/Main" style={{color:'White'}}> Home</Link></button>
          </div>
        </div>
        <div class="header-text"> 
          <p>CSE Department, GNITS</p>          
        </div>
      </div>
      <div class="fetch-page submit-form">
        <h3>  Verify Using Student Document only </h3>
        <form onSubmit={this.onSubmit} >
          <input type = "file" onChange = {this.captureFile}/>
          <input type="text" placeholder='Enter Student Id' name="textbox2" id="textbox2"/>           
          <button type="submit"> Send it </button>
        </form>
      </div>
      </div>
         
      
            

     </div>

    
      );
    } //render
}




export default App2;











