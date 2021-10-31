import React, { useState } from 'react'
import axios from 'axios'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";


const NewAccount = () => {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [showForm, setShowForm] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const createUser = () => {
        setIsLoading(true)
        axios.post('http://localhost:3000/users', {
            firstName: first,
            lastName: last,
            email: email,
            password: pass
        })
            .then(function (response) {
                setFirst('')
                setLast('')
                setEmail('')
                setPass('')
                setIsLoading(false)
                setShowForm(false)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const checkFormFilled = () => {
        if (first.length > 0 && last.length > 0 && email.length > 0 && pass.length > 0) {
            return true
        } else { return false }
    }

    const createUserSubmit = (e) => {
        e.preventDefault()
        if (checkFormFilled()) {
            createUser()
        } else {
            console.log("add error saying to fill in form")
        }
    }

    const showUserForm = () => {
        if (isLoading) {
            return <ClipLoader color="#0269D9" loading={isLoading} css={css`margin-top: 200px;`} size={100} />
        } else {
            if (showForm) {
                return (
                    <div>
                        <div className="col">
                            <form onSubmit={createUserSubmit} >
                                <h2 style={{ margin: "50px" }} className="text-center">
                                    Create new User
                                </h2>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control"
                                        placeholder="geeks@example.com" />
                                </div>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text"
                                        value={first}
                                        onChange={(e) => setFirst(e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text"
                                        value={last}
                                        onChange={(e) => setLast(e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password"
                                        value={pass}
                                        onChange={(e) => setPass(e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                                <button style={{ width: "100%" }} className="btn btn-primary" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div>
                        <div style={{ marginTop: "100px" }} className="col">
                            <h4 className="text-center">User created.</h4>
                            <button onClick={() => setShowForm(true)} style={{ width: "100%" }} className="btn btn-primary">Create another user</button>
                        </div>
                    </div>
                )
            }
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col"></div>
                {showUserForm()}
                <div className="col"></div>
            </div>
        </div>
    )
}

export default NewAccount