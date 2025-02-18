import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import { Link, NavLink, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

export default function Header() {
    const cartCount = useSelector(state => state.cart.cartArray.length);
    const userData = useSelector(state => state.user.userData);
    let navigate = useNavigate();

    return (
        <Navbar bg="dark" data-bs-theme="dark" className='sticky-top'>
            <Container>
                <Navbar.Brand onClick={(e) => { e.preventDefault(); navigate('./') }}>FakeMart</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link className='mx-1' as={NavLink} to={'/'} title='Home'>
                        Home
                    </Nav.Link>
                    <Nav.Link className='mx-1' as={NavLink} to={'/cart'} title='Cart'>
                        <i className="bi bi-cart"></i>
                        {cartCount > 0 &&
                            <Badge pill bg="danger">
                                {cartCount}
                            </Badge>
                        }
                    </Nav.Link>
                    {userData &&
                        <NavDropdown className='mx-1' title={userData.name} id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to={'/orders'}>
                                My Orders
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to={'/logout'}>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    }
                    {!userData &&
                        <Nav.Link className='mx-1' as={NavLink} to={'/login'} title='Login'>
                            Login
                        </Nav.Link>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}
