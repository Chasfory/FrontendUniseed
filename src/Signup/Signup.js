import React, { useState } from 'react'
import Email from '../Login/Email'
import Password from '../Login/Password'
import CreateCompte from './CreateCompte'
import Title from './Title'
import ConfirmationPassword from './ConfirmationPassword'
import Background from '../Picture/Back.png'
import Name from './Name'
import './signup.css'

export default function SignupUniseed() {
    const [password, setPassword] = useState('')
    const [confirmation_password, setConfirmationPassword] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    return (
        <div>
            <div className='split' style={{left:0, backgroundColor:"#30336b"}}>
            <img src={Background} style={{objectFit:"cover", width:"100%", height:"100%", opacity:"0.3"}}/>
            </div>
            <div className="split" style={{ right: 0, backgroundColor: "#F3F9FF"}}>
            <img src="https://uploads-ssl.webflow.com/618bd5d7f89b907cea580369/619d4f1073c983712f3af3ee_full_logo_uniseed.svg" style={{position:"absolute", left:20, top:20}}/>
                <div className="centered">
                    <div className="mt-3 text-center">
                        <Title />
                    </div>
                    <div className="mt-4">
                        <Name value={name} onChange={setName} />
                    </div>
                    <div className="mt-4">
                        <Email value={email} onChange={setEmail} />
                    </div>
                    <div className="mt-4">
                        <Password value={password} onChange={setPassword} />
                    </div>
                    <div className="mt-4">
                        <ConfirmationPassword
                            value={confirmation_password}
                            onChange={setConfirmationPassword}
                        />
                    </div>
                    <div className="mt-4">
                        <CreateCompte
                            name={name}
                            email={email}
                            password={password}
                            confirmation_password={confirmation_password}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
