import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ShowUsers = () => {

    const [users, setUsers] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(function (response) {
                // handle success
                console.log(response);
                setUsers(response.data)
            })
            .catch(function (error) {
                // handle error 
                console.log(error);
                setErrorMessage("Error retreiving users")
            })
            .then(function () {
                // always executed
            });
    }, [])

    const mapUsers = () => {
        if (errorMessage) {
            return <div style={{ width: "300px" }} class="alert alert-danger" role="alert">
                {errorMessage}
            </div>
        }
        return users.map((user) => {
            return (
                <li key={user._id} style={{margin: "20px", width: "500px"}}>
                    <div className="card">
                        <div className="card-header">
                            {user.firstName} {user.lastName}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">id: {user._id}</h5>
                            <p className="card-text">email: {user.email}</p>
                        </div>
                    </div>
                </li>
            )
        })
    }

    return (
        <div>
            <h3>Show All users</h3>
            <br />
            <ul style={{listStyleType:"none"}}>
                {mapUsers()}
            </ul>

        </div>
    )
}

export default ShowUsers