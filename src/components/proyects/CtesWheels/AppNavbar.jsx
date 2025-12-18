import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useInternalNavigation } from "./MainCtesWheels";

function AppNavbar() {
  const { navigate, standalone } = useInternalNavigation();

  return (
    <Navbar expand="md" className="navbar-ctesWheels navbar-dark">
      <Container fluid>
        <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }} className="ctes-brand">
          <span className="brand-part-1">Ctes</span>
          <span className="brand-part-2">Wheels</span>
        </Navbar.Brand>
        {standalone && (
          <Button
            variant="outline-light"
            size="sm"
            className="ms-3"
            onClick={() => window.location.href = '/'}
          >
            &larr; Volver al Portafolio
          </Button>
        )}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link onClick={() => navigate('/tienda')} className="nav-link-ctes">Tienda</Nav.Link>
            <Nav.Link onClick={() => navigate('/carrito')} className="nav-link-ctes">Carrito</Nav.Link>
            <Nav.Link onClick={() => navigate('/admin')} className="nav-link-ctes">Admin</Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button className="btn-ctes-search">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
