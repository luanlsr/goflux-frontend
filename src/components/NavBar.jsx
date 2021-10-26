import React, { Component } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="/home">
          <img
            src="https://portal.goflux.com.br/assets/images/logo_branco.png"
            width="120"
            alt="goFlux"
            style={{'cursor': 'pointer'}}
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/shippers">Embarcadores</Nav.Link>
          <Nav.Link href="/carriers">Transportadoras</Nav.Link>
          <Nav.Link href="/offers">Ofertas</Nav.Link>
          <Nav.Link href="/bids">Lances</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;