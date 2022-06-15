import React, { useState } from 'react'
import { InputGroup, FormControl, Container } from 'react-bootstrap'

export default function Email({ email, onChange }) {
    return (
        <div>
            <label style={{ fontWeight: 'bold' }}>Email</label>
            <InputGroup className="mt-2">
                <FormControl
                    type="text"
                    required
                    placeholder="prenom.nom@company.com"
                    autoFocus
                    value={email}
                    onChange={e => {
                        onChange(e.target.value)
                    }}
                />
            </InputGroup>
        </div>
    )
}
