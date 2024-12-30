import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Navigation = () => {

    return (
        <Navbar bg="primary" data-bs-theme="primary">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/Dashboard" className='navbar'>Dashboard</Nav.Link>
            <Nav.Link href="/TaskDetails" className='navbar'>Manage Tasks</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    )
};

export default Navigation;


