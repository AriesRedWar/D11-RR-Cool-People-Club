import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./Logo.png";

function Navigation() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt="Cool People logo"
            />
          </Navbar.Brand>
        <Container>
          <Nav className="md">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Milestone Projects">Milestone Projects</Nav.Link>
            <Nav.Link href="#About Us">About Us</Nav.Link>
            <Nav.Link href="#Contact Us">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
