import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar expand="lg" className="fs-3 mb-3" >
      <Container>
        <Navbar.Brand href="#home"><Link to="/" style={{textDecoration: "none", color: "black"}}>MyLearnings</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link to="/books" style={{textDecoration: "none", color: "black"}}>Home</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
