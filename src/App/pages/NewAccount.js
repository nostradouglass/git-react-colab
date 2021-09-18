import React, { useState } from 'react'
import axios from 'axios'



const NewAccount = () => {

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const createUser = () => {
        axios.post('localhost:3000/users/', {
            firstName: 'Fred',
            lastName: 'Flintstone',
            email: 'FFlintstone@stonemail.com',
            password: "rubblerubble"
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const createUserSubmit = (e) => {
        e.preventDefault()
        console.log("submit")
        createUser()
    }

    return (
        <div>
            <form  onSubmit={createUserSubmit} >
                <h2 className="text-center">
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
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default NewAccount