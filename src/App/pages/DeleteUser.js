

import React, {useState} from 'react'
import axios from 'axios';


const DeleteUser = () => {

    const [userID, setUserID] = useState('');

    const onDeleteButtonClick = () => {
        axios.delete(`http://localhost:3000/users/ ${userID}`).then((res) => {
            console.log(res)
        })
     
    }

    return (
        <div>
        <h3>Delete a User by ID </h3>   
        <input type = 'text' value = {userID} onChange = {(e) => setUserID(e.target.value)}/>
        <button onClick = {onDeleteButtonClick}>Delete user</button>

        </div>
        
        
    )
}

export default DeleteUser