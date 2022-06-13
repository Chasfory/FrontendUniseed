import React, { useState } from 'react'
import { InputGroup, FormControl, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'

export default function Password({ password, onChange }) {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <label style={{ fontWeight: 'bold' }}>Confirmation password</label>
            <InputGroup className="mt-2">
                <FormControl
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="*******"
                    autoFocus
                    value={password}
                    onChange={e => {
                        onChange(e.target.value)
                    }}
                />
                <InputGroup.Text className='btn' style={{ right: 0, zIndex: 3, position: 'absolute' }} onClick={() => setShowPassword(!showPassword)}>
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </InputGroup.Text>
            </InputGroup>
        </div>
    )
}
