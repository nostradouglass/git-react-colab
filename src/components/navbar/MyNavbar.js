import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const MyNavbar = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="me-auto">
                    <LinkContainer to={"/newAccount"}>
                    <Nav.Link>New Account</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={"/users"}>
                        <Nav.Link>Users</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={"/user"}>
                        <Nav.Link>User</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={"/remove"}>
                        <Nav.Link>Remove</Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavbar