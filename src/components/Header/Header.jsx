import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar className='container' bg="white mt-md-3" expand="lg">
            <Container>
                <Link className='network fw-bold fs-5' to="/">Network-Hub</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='network' to="/">Home</Link>
                        <Link className='network' to="/statistics">Statistics</Link>
                        <Link className='network' to="/applied-jobs">Applied Jobs</Link>
                        <Link className='network' to="/blog">Blog</Link>
                    </Nav>
                    <Button>Star Applying</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;