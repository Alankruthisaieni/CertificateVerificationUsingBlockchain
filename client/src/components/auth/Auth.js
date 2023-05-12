import React, { useState, useEffect } from 'react'
import SignIn from './signIn/SignIn';
// import SignUp from './signUp/SignUp';
import { auth } from '../../helper/Firebase';
import './Auth.scss';
import { useNavigate } from 'react-router-dom';


function Auth() {
    const history = useNavigate();
    const [authType, setAuthType] = useState('signIn');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) history.push('/main')
        })
    }, [])

    return (
        <div className='auth'>
            {authType === 'signIn' ?
                <div className='container'>
                    <SignIn />
                     </div>
                :
                <div className='container'>
                   </div>
            }
        </div>
    )
}

export default Auth
