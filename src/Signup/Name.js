import React from 'react'
import { InputGroup, FormControl, Container } from 'react-bootstrap'

export default function Name({ name, onChange }) {
    return (
        <div>
            <label style={{ fontWeight: 'bold' }}>Nom complet</label>
            <InputGroup className="mt-2">
                <FormControl
                    type="text"
                    required
                    placeholder="Nom prénom"
                    autoFocus
                    value={name}
                    onChange={e => {
                        onChange(e.target.value)
                    }}
                />
            </InputGroup>
        </div>
    )
}
