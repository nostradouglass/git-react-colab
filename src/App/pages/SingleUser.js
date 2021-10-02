import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import axios from 'axios';

const SingleUser = () => {

    const [firstName, setFirstName] = useState('');

    function searchByName() {
        console.log("Searching by name " + firstName);
        axios.get('http://localhost:3000/user/findByFirstName', {
            params: {
                firstName: firstName
            }
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
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </Table>

        </div>


    )
}

export default SingleUser