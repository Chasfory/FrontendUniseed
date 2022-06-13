import React, { useState } from 'react'
import Email from './Email'
import Password from './Password'
import RememberMe from './RememberMe'
import Connection from './Connection'
import { Container } from 'react-bootstrap'
import Title from './Title'
import Background from '../Picture/Back.png'
import PictureBottom from './PictureBottom'
import Signup from './Signup'

export default function LoginUniseed() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    return (
        <div>
            <div
                className="split"
                style={{ left: 0, backgroundColor: '#30336b' }}
            >
                <img
                    src={Background}
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        opacity: '0.3',
                    }}
                />
            </div>
            <div
                className="split"
                style={{ right: 0, backgroundColor: '#F3F9FF' }}
            >
                <img
                    src="https://uploads-ssl.webflow.com/618bd5d7f89b907cea580369/619d4f1073c983712f3af3ee_full_logo_uniseed.svg"
                    style={{ position: 'absolute', left: 20, top: 20 }}
                />
                <div className="centered">
                    <div
                        className="text-center">
                        <Title />
                    </div>
                    <div
                        className="mt-3">
                        <Email value={email} onChange={setEmail} />
                    </div>
                    <div
                        className="mt-3">
                        <Password value={password} onChange={setPassword} />
                    </div>
                    <div
                        className="mt-3">
                        <RememberMe />
                    </div>
                    <div
                        className="mt-3">
                        <Connection email={email} password={password} />
                    </div>
                    <div
                        className="mt-3"
                        style={{
                            position: 'absolute',
                            top: 550,
                            left: 0,
                        }}
                    >
                        <Signup />
                    </div>
                </div>
            </div>
        </div>
    )
}
