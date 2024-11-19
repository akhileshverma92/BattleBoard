import React from 'react'
import {SignInButton} from "@clerk/clerk-react"
function Login() {
    return (
        <>
            <div className="mockup-phone border-primary">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1"><SignInButton/></div>
                </div>
            </div>
        </>
    )
}

export default Login