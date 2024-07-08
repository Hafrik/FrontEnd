import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/hafrikplay-logo.png';
const Header = () => {
  return (
    <div>
      <Navbar bg="" data-bs-theme="">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="112.15"
              height="44.38"
              alt="Hafrikplay logo"
            />
          </Navbar.Brand>
          <Nav className="ms-5">
            <Nav.Link href="#home" className="text-white">
              About
            </Nav.Link>
            <Nav.Link href="#features" className="text-white">
              Support
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-white">
              Download
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header