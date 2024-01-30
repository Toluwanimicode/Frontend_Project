import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../Navigation/Navigation.css"


function Navigation() {
  return (
    <Navbar  expand="lg" className='nav'>
      <Container >
        <Navbar.Brand href="#home"> <img  className="image" src={"./images/Gallery/Logo.png"} alt="School Logo" width="500" height="600"></img>MountainTop Schools </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar">
            <Nav.Link href="/">Home</Nav.Link>          
            <NavDropdown href="/academics"  title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">History</NavDropdown.Item>
              <NavDropdown.Item href="/schoolAnthem">School Anthem / Motto</NavDropdown.Item>          
              <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>                       
            </NavDropdown>       
            <Nav.Link href="/admission">Admission</Nav.Link>          
            <NavDropdown href="/academics"  title="Academics" id="basic-nav-dropdown">
              <NavDropdown.Item href="/news">News</NavDropdown.Item>
              <NavDropdown.Item href="/calendar"> Academic Calendar</NavDropdown.Item>          
              <NavDropdown.Item href="/events">Events</NavDropdown.Item>          
              <NavDropdown.Item href="/teachers">Our Teachers</NavDropdown.Item>          
            </NavDropdown>
            <Nav.Link href="/login">Login</Nav.Link>       
            <Nav.Link href="/gallery">Gallery</Nav.Link>       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;