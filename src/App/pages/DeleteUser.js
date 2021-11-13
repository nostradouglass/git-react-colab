

import React, { useState } from 'react'
import axios from 'axios';



const DeleteUser = () => {

    const [userID, setUserID] = useState('');

    const onDeleteUserSubmit = (e) => {
        e.preventDefault()
        if (userID) {
            axios.delete(`http://localhost:3000/users/${userID}`).then((res) => {
                console.log(res)
                setUserID = ''
            })
        }
    }

    return (

        <div>
            {/* <label htmlFor = "userIdInput" >Delete a User by ID </label> 
            <div className ="input-group mb-3">
           
                <input id = "userIdInput" type="text" className= "form-control" value = {userID} onChange = {(e) => setUserID(e.target.value)}/>
                <button className ="btn btn-outline-secondary" type="button"  onClick = {onDeleteButtonClick}>Delete this User</button>
            </div> */}

            <div className="container container-su">
               
                <div className="row">

                    <div className="col"></div>

                    <div className="col">
                        <h2 style={{ margin: "50px" }} className="text-center">
                            Delete User
                        </h2>
                        <form onSubmit={onDeleteUserSubmit}>

                            <div className="form-group">
                                <label>User ID</label>
                                <input type="text"
                                    value={userID}
                                    onChange={(e) => setUserID(e.target.value)}
                                    className="form-control" />
                            </div>

                            <div>
                                <button className="btn btn-primary"
                                    type="submit"
                                    style={{ width: "100%" }}>
                                    Delete
                                </button>
                            </div>

                        </form>

                    </div>

                    <div className="col"></div>

                </div>
            </div>




        </div>


    )

}

export default DeleteUser