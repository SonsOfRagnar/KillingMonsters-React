import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navbar.css';


function KMNavbar() {
    return (
        <Navbar expand="lg" sticky="top" className="main-navbar">
            <Container>
                <Navbar.Brand>Killing Monsters</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/bestiary">Bestiary</Nav.Link>
                        <Nav.Link as={Link} to="/story">Story</Nav.Link>
                        <Nav.Link as={Link} to="/rules">Rules</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default KMNavbar;