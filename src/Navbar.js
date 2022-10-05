import Nav from 'react-bootstrap/Nav';


export default function NavBar () {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/about">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/milestoneproject">Milestone Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/Aboutus">About us</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/contactus">Contact Us</Nav.Link>
      </Nav.Item>
      </Nav>
      

  
  );
}