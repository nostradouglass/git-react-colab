

import React, {useState, useRef} from 'react'
import axios from 'axios';


const DeleteUser = () => {

    const [userID, setUserID] = useState('');
    const inputRef = useRef();

    const onDeleteButtonClick = (e) => {
        e.preventDefault();
        const inputID = inputRef.current
        if(userID){
            axios.delete(`http://localhost:3000/users/${userID}`).then((res) => {
               
            })
            setUserID('');
        }
    }

    return (

        <div className = "container">
            <br/>
            <form onSubmit = {onDeleteButtonClick}>
                
            <div className = "col-12">
                
            <label htmlFor = "userIdInput" >Delete a User by ID </label> 
            <div className ="input-group mb-3">
           
                <input id = "userIdInput" ref = {inputRef} type="text" className= "form-control" value = {userID} onChange = {(e) => setUserID(e.target.value)}/>
                <button className ="btn btn-outline-secondary" type="submit">Delete a User</button>
            </div>
            </div>

            </form>
        </div>
       

    )

}

export default DeleteUser