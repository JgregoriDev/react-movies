import React from 'react'; // get the React object from the react module
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from 'react-bootstrap/Nav'
class NavBarProba extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
      <Container>
       
        <Navbar.Brand href="#home">Movies React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
}

export default NavBarProba; // expose the HelloWorld component to other modules