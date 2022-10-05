import Nav from 'react-bootstrap/Nav';


export default function NavBar () {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="#about">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#milestoneproject">Milestone Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Aboutus">About us</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#contactus">Contact Us</Nav.Link>
      </Nav.Item>
      </Nav>
      

  
  );
}