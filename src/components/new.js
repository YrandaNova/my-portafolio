import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../styles/Inicio.css'
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
  return (
    <>
    <Navbar  expand="lg" className='Navbar'>
      <Container>
        <Navbar.Brand href="#Home" className='logo'>Yranda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className='justify-content-end '>
          <Nav >
            <Nav.Link href="#Home" className='Navlink'>Home</Nav.Link>
            <Nav.Link href="#About"  className='Navlink'>About me</Nav.Link>
            <Nav.Link href="#My_projects" className='Navlink'>My Projects</Nav.Link>
            <Nav.Link href="#Contact" className='Navlink'>Contact</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
   
    </>
  );
}

export default Navigation;