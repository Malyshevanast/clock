import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand ms-left as={Link} to="/">
         <img id="logo" src={logo} />
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="/about">О нас</Nav.Link>
            <NavDropdown title="Каталог" id="collasible-nav-dropdown" >
              <NavDropdown.Item href="/catalog/3.1">Женские часы</NavDropdown.Item>
              <NavDropdown.Item href="/catalog/3.2">Мужские часы</NavDropdown.Item>
              <NavDropdown.Item href="/catalog/3.3">Детские часы</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/catalog/3.4">
                Настольные часы
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contacts">Контакты</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/singup">Sing up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;