import React, { useRef, useState } from "react"
import { Form, Card, Alert, Container } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { Button } from '../components';
import { useAuth } from '../contexts/AuthContext'
import { MdOutlineCancel } from 'react-icons/md'

const Register1 = () => {
   
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { currentUser } = useAuth()
    const uid = currentUser.uid
    const email = currentUser.email
    async function handleSubmit(e) {
        e.preventDefault()
        navigate('/profile');
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSfOXgkheNu29BvKhbCdtm57Zy0veN9FhCQP96h7V4JOwuWU0Q/viewform?usp=pp_url&entry.1038252029="+uid);
        setLoading(false)
    }

    let mainStyle = {
        'backgroundColor': '#EDE9E9`',
        'position': 'absolute',
        'width': '100%',
    }


    return (
        <div className="container h-100 bg-light" style={mainStyle}>
            <div className="row h-100">
                <div className="col-3 justify-content-center" style={{ 'backgroundColor': '#8AABBD' }}>
                    <div className="row">
                        <div className="col-5">
                            <img src='./logo.png' className="rounded float-left" alt="logo"></img>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 place-content-center h-75">
                        <p className="text-center h2 text-white">
                            <u>Welcome to FitEx</u>
                        </p>

                        <p className="text-center p text-white">
                            In FitEx, You can:
                            <br></br>
                            description put here
                        </p>

                        <p className="text-center p text-white">
                            To start, let's finish setup your account first
                        </p>
                    </div>
                </div>
                <div className="col-7 place-content-center bg-light">
                    <div className="row h-100 place-content-center">
                        <div className="col">
                            <div className="h1 text-center">Register</div>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <form onSubmit={handleSubmit}>
                                <h1 className="text-center mt-9">You are almost finish</h1>
                                <p>we have some addictional questionnaire</p>
                                <button disabled={loading} className="mt-10 btn btn-outline-primary  w-100" type="submit">
                                    Great, Entering FitEx!
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Register1