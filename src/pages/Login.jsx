import React from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import '../styles/Login.css'

export default function Login() {
  return (
    <Container className="login-container">
      <img className='logoLogin' src="https://portal.goflux.com.br/assets/images/logo_branco.png" alt="" />
      <h1>LOGIN</h1>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>
            <Button className="mb-6 btn-login" variant="primary" type="submit">
              Entrar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
