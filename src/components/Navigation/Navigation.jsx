import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navigation.css";

function Navigation() {
  return (
    <Navbar expand="lg" className='nav'>
      <Container>
      <Navbar.Brand className="info-school flex items-center" as={Link} to="/">
          <img className="image" src={"./images/Gallery/Logo.png"} alt="School Logo" width="50" height="60" />
          <h1 className="ml-2 text-xl"><span className='text-brand'>MountainTop</span> <span className='text-shadeofpurple text-3xl font-semibold'>Schools</span> </h1>
      </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar  ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/aboutUs">About</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/SchoolAnthem">School Anthem / Motto</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Admission">Admission</Nav.Link>
            <NavDropdown title="Academics" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/events">Events</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Gallery">Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
