import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';


function KMNavbar() {
    return (
        <Navbar expand="lg" className="main-navbar">
            <Container>
                <Navbar.Brand>Killing Monsters</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#bestiary">Bestiary</Nav.Link>
                    <Nav.Link href="#story">Story</Nav.Link>
                    <Nav.Link href="#rules">Rules</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default KMNavbar;