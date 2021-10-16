import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import axios from 'axios';

const SingleUser = () => {

    const [firstName, setFirstName] = useState('');
    const [resData, setResData] = useState([]);

    function searchByName() {
        axios.get(`http://localhost:3000/users/findUserByFirstName/${firstName}`)
        .then(res =>{
            setResData(res.data);
        })
    }

    return (
        <div>
            <h2>Show Single user</h2>
            <br />
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Type First Name</Form.Label>
                    <Form.Control type="text" placeholder="John" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
                </Form.Group>
                <br />

                <Button variant="primary" onClick={searchByName}>Search</Button>
            </Form>

            <br />
            <br />

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