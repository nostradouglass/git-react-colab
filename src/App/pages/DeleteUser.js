

import React, {useState} from 'react'
import axios from 'axios';


const DeleteUser = () => {

    const [userID, setUserID] = useState('');

    const onDeleteButtonClick = () => {
        if(userID){
            axios.delete(`http://localhost:3000/users/${userID}`).then((res) => {
                console.log(res)
            })
        }
     
     
    }

    return (

        <div>
            <label htmlFor = "userIdInput" >Delete a User by ID </label> 
            <div className ="input-group mb-3">
           
                <input id = "userIdInput" type="text" className= "form-control" value = {userID} onChange = {(e) => setUserID(e.target.value)}/>
                <button className ="btn btn-outline-secondary" type="button"  onClick = {onDeleteButtonClick}>Delete this User</button>
            </div>
           
        </div>
       

    )

}

export default DeleteUser