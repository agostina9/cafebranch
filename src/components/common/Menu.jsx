import {Container, Nav, Navbar} from 'react-bootstrap';
const Menu = () => {
    return (
        <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Cafeteria</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Administrar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default Menu;