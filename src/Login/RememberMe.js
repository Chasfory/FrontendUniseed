import React from 'react'
import { Form, FormCheck, Container } from 'react-bootstrap'

export default function RememberMe() {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <FormCheck type="switch" label="Se souvenir de moi" />
                <a href="/Password">Mot de passe oublié?</a>
            </div>
        </div>
    )
}
