import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import React, { useState, useCallback } from 'react';
import axios from 'axios';
import _debounce from 'lodash.debounce';
import '../css/styles.css';

const SingleUser = () => {

    const [firstName, setFirstName] = useState('');
    const [resData, setResData] = useState([]);

    const dbSearch = event => {
        setFirstName(event.target.value)
        //const {value: nextValue} = event.target;
        //setFirstName(nextValue);
        debouncedSave(event.target.value); 
    }

    const debouncedSave = useCallback(_debounce(firstName => searchByName(firstName), 500), [],);

    function searchByName(sTerm) {
        if(sTerm.length>0) {
            axios.get(`http://localhost:3000/users/findUserByFirstName/${sTerm}`)
            .then(res =>{
                setResData(res.data);
            })
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        
    }

    return (
        <div className="container container-su">

            <div className="row">
            
            <div className="col"></div>
            <div className="col">
            <Form onSubmit={onSubmit}>
            <h2>Show Single user</h2>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Type First Name</Form.Label>
                    <Form.Control type="text" placeholder="John" value={firstName} onChange={dbSearch}/>
                </Form.Group>
                <br />
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

export default SingleUser;