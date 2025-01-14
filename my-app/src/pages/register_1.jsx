import React, { useRef, useState } from "react"
import { Form, Card, Alert,Container } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { Button } from '../components';
import { useAuth } from '../contexts/AuthContext'
import { MdOutlineCancel } from 'react-icons/md'

const Register1 = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordRef2 = useRef()
    const { signup} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordRef2.current.value)
        {
          return setError("Passwords do not match")
        }

        try
        {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate('/register2');
        } catch (e)
        {
            console.log(e)
            setError("Failed to create an account, email may exist")
        }

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
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" ref={emailRef} required />
                                    <div id="emailHelp" className="form-text">Enter your email here.</div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password1" aria-describedby="password" ref={passwordRef} required />
                                    <div id="emailHelp" className="form-text">Password need to be 6 character and more.</div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password2" aria-describedby="password" ref={passwordRef2} required />
                                    <div id="emailHelp" className="form-text">Confirm your passowrd here.</div>
                                </div>

                                <button disabled={loading} className="btn btn-outline-primary  w-100" type="submit">
                                    Register
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