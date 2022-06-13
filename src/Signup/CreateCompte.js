import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router'
import { Toast, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function SignupCompte({
    name,
    email,
    password,
    confirmation_password,
    onSucces,
    onError,
}) {
    Axios.post('http://localhost:3000/signup', {
        email,
        password,
        name,
        confirmation_password,
    })
        .then((response) => {
            console.log("it's good edit")
            onSucces(response)
        })
        .catch((error) => {
            onError(error)
        })
}

export default function Connection({
    name,
    email,
    password,
    confirmation_password,
}) {
    let navigate = useNavigate()
    const [toast, setToast] = useState(false)
    const [errorCode, setErrorCode] = useState(200)

    const getErrorString = (code) => {
        if (code === 400) {
            return 'Merci de remplir tous les champs'
        }
        if (code === 409) {
            return 'Email déjà utilisé'
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
                type="submit"
                onClick={(e) => {
                    e.preventDefault()
                    SignupCompte({
                        name: name,
                        email: email,
                        password: password,
                        confirmation_password: confirmation_password,
                        onSucces: () => {
                            navigate('/login')
                        },
                        onError: (error) => {
                            setErrorCode(error.response.status)
                            setToast(true)
                        },
                    })
                }}
            >
                S'abonner{'  '}
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
                    style={{ position:"fixed", left:50, top: -90}}
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
