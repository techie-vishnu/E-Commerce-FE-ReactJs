import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import { Link, NavLink, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

export default function Header() {
    const cartCount = useSelector(state => state.cart.cartArray.length)
    let navigate = useNavigate();

    return (
        <Navbar bg="dark" data-bs-theme="dark" className='sticky-top'>
            <Container>
                <Navbar.Brand onClick={(e) => { e.preventDefault(); navigate('./') }}>FakeMart</Navbar.Brand>
                <Nav className="ms-auto">
                    <NavLink to={'/cart'} title='Cart'>
                        <i className="bi bi-cart"></i>
                        {cartCount > 0 &&
                            <Badge pill bg="danger">
                                {cartCount}
                            </Badge>
                        }
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}
