import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Background from '../Picture/Bottom.png'
import Bottom from '../Picture/white.png'
import logo from '../Picture/logo.png'

export default function LoginUniseed() {

    return (
        <div>
            <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}>
                <img src={Background} className="col-6" />
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 950,
                    right: 0,
                    bottom: 0,
                }}
            >
                <img
                    src={Bottom}
                    className="col-12"
                    height="100%"
                    width="100%"
                />
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: 10,
                    left: 960,
                    right: 0,
                    bottom: 0,
                }}
            >
                <img src={logo} height="4%" width="5%" />
            </div>
        </div>
    )
}
