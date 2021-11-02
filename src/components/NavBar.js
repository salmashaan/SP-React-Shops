import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/shops">
          <Navbar.Brand>Shops</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
