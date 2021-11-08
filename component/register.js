import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'

export default function Register() {
    return (
      <Row>
    <Col md={6}>
    <Card>
        <Card.Body>


        <Form>
       
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="3">
            Name
          </Form.Label>
          <Col sm="9">
            <Form.Control type="text" placeholder="Name" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="3">
            Email Account
          </Form.Label>
          <Col sm="9">
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="3">
            Password
          </Form.Label>
          <Col sm="9">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="3">
          Address
          </Form.Label>
          <Col sm="9">
            <Form.Control type="text" placeholder="Address" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="3">
            Phone
          </Form.Label>
          <Col sm="9">
            <Form.Control type="number" placeholder="Phone" />
          </Col>
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      
      </Card.Body>
        </Card>
    </Col>
    </Row>
       
    )
}
