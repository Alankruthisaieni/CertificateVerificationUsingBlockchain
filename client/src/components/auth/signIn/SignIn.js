import React, { useState } from 'react'
import { auth } from '../../../helper/Firebase';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './SignIn.scss';

function SignIn() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = () => {
        signInWithEmailAndPassword(auth,email, password).then((userCredential) => {
            // const user=userCredential.user;
            history.push('/main');
            //do something else with the response
        }).catch(err => {
            //do something with the error
            const greeting = 'Hello Function Component!';
 
            return <h1>{greeting}</h1>;
        })
    }

    return (
<div className='main'>
         <div className="App-header">

            <h1>Sign in to your account</h1>
            <input type='text' placeholder='Enter your email' value={email} onChange={e => setEmail(e.currentTarget.value)} />
            <br/>
            <br/>

            <input type='password' placeholder='Enter your password' value={password} onChange={e => setPassword(e.currentTarget.value)} />
                   <br/>
            <br/>
            <br/>

            <button onClick={signIn}>Sign In</button>
       
                </div>

        </div>

    )
}

export default SignIn
