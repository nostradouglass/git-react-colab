import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router'
import axios from 'axios'

const User = () => {

    const [user, setUser] = useState(null)
    let { _id } = useParams();

    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${_id}`)
            .then((user) => {
                console.log(user.data)
                setUser(user.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    if (user) {
        return (
            <div className="container container-su">
                <h2 className="text-center " style={{ margin: "50px" }}>{user.firstName} {user.lastName}</h2>
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <br />
                        <h5>Id: {user._id}</h5>
                        <h3>First Name: {user.firstName}</h3>
                        <h3>Last Name: {user.lastName}</h3>
                        <h3>email: {user.email}</h3>
                        <br />
                        <button
                            onClick={goBack}
                            className="btn btn-outline-secondary"
                            style={{ width: "100%" }}>
                            Return
                        </button>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container container-su">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">Loading User...</div>
                    <div className="col"></div>
                </div>
            </div>
        )
    }
}

export default User