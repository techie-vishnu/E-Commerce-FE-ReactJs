import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">FakeMart</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#">
                        <i className="bi bi-cart"></i>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
