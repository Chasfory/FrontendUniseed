import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router'
import { Toast, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function LoginCompte({ email, password, onSucces, onError }) {
    Axios.post('http://localhost:3000/login', { email, password })
        .then((response) => {
            onSucces(response)
        })
        .catch((error) => {
            onError(error)
        })
}

export default function Connection({ email, password }) {
    let navigate = useNavigate()
    const [toast, setToast] = useState(false)
    const [errorCode, setErrorCode] = useState(200)

    const getErrorString = (code) => {
        if (code === 400) {
            return 'Merci de remplir tous les champs'
        }
        if (code === 401) {
            return 'Email ou mot de passe incorecte'
        }
        if (code === 500) {
            return 'Impossible de contacter le serveur'
        }
    }

    return (
        <div className="text-center d-grid gap-2">
            <Button
                variant="primary"
                size="lg"
                onClick={(e) => {
                    e.preventDefault()
                    LoginCompte({
                        email: email,
                        password: password,
                        onSucces: () => {
                            navigate('/connection')
                        },
                        onError: (error) => {
                            setErrorCode(error.response.status)
                            setToast(true)
                        },
                    })
                }}
            >
                Me connecter{'  '}
                <FontAwesomeIcon
                    transform={{ rotate: -45 }}
                    className="fa-rotate-by"
                    icon={faArrowRight}
                />
            </Button>
            <Toast
                onClose={() => setToast(false)}
                show={toast}
                delay={3000}
                bg="danger"
                autohide
                style={{ position: 'fixed', left: 50, top: -90 }}
            >
                <Toast.Header>
                    <strong className="me-auto">
                        Impossible de se connecter
                    </strong>
                </Toast.Header>
                <Toast.Body>{getErrorString(errorCode)}</Toast.Body>
            </Toast>
        </div>
    )
}
