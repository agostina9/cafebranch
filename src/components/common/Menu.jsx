import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <Navbar bg="danger" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'>
          Cafe Branch
          </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>
            Inicio
            </Nav.Link>
          <Nav.Link as={Link} to='/administrador'>
            Administrar
            </Nav.Link>
            <NavLink end className="nav-item nav-link" to="/login">
              Login
            </NavLink>
            <NavLink end className="nav-item nav-link" to="/registro">
              Registro
            </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menu;
