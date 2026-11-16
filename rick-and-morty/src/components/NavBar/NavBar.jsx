import { Link } from 'react-router'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="px-4">
      <Navbar.Brand as={Link} to="/">R&M Fan Site</Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/characters">Characters</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar