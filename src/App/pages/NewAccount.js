import React, { useState } from 'react'
import axios from 'axios'


const NewAccount = () => {

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [showForm, setShowForm] = useState(true)

    const createUser = () => {
        axios.post('http://localhost:3000/users', {
            firstName: first,
            lastName: last,
            email: email,
            password: pass
        })
            .then(function (response) {
                console.log(response);
                setFirst('')
                setLast('')
                setEmail('')
                setPass('')
                setShowForm(false)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const createUserSubmit = (e) => {
        e.preventDefault()
        createUser()
    }

    const showUserForm = () => {
        if (showForm) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">

                        </div><div className="col">

                            <form onSubmit={createUserSubmit} >
                                <h2 style={{margin: "50px"}} lassName="text-center">
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
                                    <label>First</label>
                                    <input type="text"
                                        value={first}
                                        onChange={(e) => setFirst(e.target.value)}
                                        className="form-control"
                                        placeholder="first" />
                                </div>
                                <div className="form-group">
                                    <label>Last</label>
                                    <input type="text"
                                        value={last}
                                        onChange={(e) => setLast(e.target.value)}
                                        className="form-control"
                                        placeholder="Last" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password"
                                        value={pass}
                                        onChange={(e) => setPass(e.target.value)}
                                        className="form-control"
                                        placeholder="Pass" />
                                </div>
                                <button style={{width: "100%"}} className="btn btn-primary" type="submit">Submit</button>
                            </form>
                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div style={{marginTop:"100px"}} className="col">
                            <h4 className="text-center">User created.</h4>
                            <button onClick={() => setShowForm(true)} style={{width: "100%"}} className="btn btn-primary">Create another user</button>
                        </div>
                        <div className="col"></div>
                    </div>

                </div>
            )
        }
    }

    return showUserForm()


}

export default NewAccount