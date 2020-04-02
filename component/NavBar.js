import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import Link from 'next/link';

/** Navbar allows for page switching. */

function setScroll(s){
    s = s; 
}

function NavBar(props) {
    setScroll(0); 
    return (
    <Container>
        <Navbar variant= "dark" bg="dark" expand="lg">
            <Navbar.Brand href="/">Julian</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/projects/snake" > Snake</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/robin"> Robinhood API</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/playlist" > Playlist Creator</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/projects/links">Project links</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Game Design" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/gamedesign/snake" >Snake</NavDropdown.Item>
                        <NavDropdown.Item href="/gamedesign/robin"> Robinhood API</NavDropdown.Item>
                        <NavDropdown.Item href="/gamedesign/playlist" > Playlist Creator</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/gamedesign/links">Project links</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
    )
}

export default NavBar

