import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <>
      
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/home" as={Link}>Home</Nav.Link>
            <Nav.Link to="/about" as={Link} > About</Nav.Link>
            <Nav.Link to="/contact" as={Link} >Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    
    </>
     );
}
 
export default Navigation;