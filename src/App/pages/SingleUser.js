import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import axios from 'axios';
import '../css/styles.css';

const SingleUser = () => {

    const [firstName, setFirstName] = useState('');
    const [resData, setResData] = useState([]);

    function searchByName() {
        if(firstName.length>0) {
            axios.get(`http://localhost:3000/users/findUserByFirstName/${firstName}`)
            .then(res =>{
                setResData(res.data);
            })
        }
        
    }

    return (
        <div className="container container-su">

            <div className="row">
            
            <div className="col"></div>
            <div className="col">
            <Form>
            <h2>Show Single user</h2>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Type First Name</Form.Label>
                    <Form.Control type="text" placeholder="John" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
                </Form.Group>
                <br />

                <Button className="searchbtn" variant="primary" onClick={searchByName}>Search</Button>
            </Form>
            </div>
            <div className="col"></div>
            </div>
            <br/>
            <br/>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {resData.map((user)=> {
                        return (
                            <tr key={user._id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                        </tr>
                        )
                    })}
                   
                </tbody>
            </Table>

        </div>


    )
}

export default SingleUser