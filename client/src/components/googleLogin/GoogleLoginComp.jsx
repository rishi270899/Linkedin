import React from 'react'
import { GoogleLogin } from '@react-oauth/google';

const GoogleLoginComp = () => {

const handleOnSuccess = () => {
    console.log("Google oAuth Working");
    
}

    return (
        <div>
            <GoogleLogin
            
                onSuccess={(credentialResponse) => handleOnSuccess(credentialResponse) }
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </div>
    )
}

export default GoogleLoginComp