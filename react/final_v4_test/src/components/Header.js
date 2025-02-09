import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/coverPage">
            <img
              src="./img/popcon_logo_test.png"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-nav">
              <Nav.Link as={Link} to="/main">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/main/explorePage">
                Explore
              </Nav.Link>
              <Nav.Link as={Link} to="/main/likePage">
                Like
              </Nav.Link>
              <Nav.Link as={Link} to="/main/myPage">
                Mypage
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
