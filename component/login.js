import React,{setState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'


export default function Login() {
  const state ={
    email:'',
    password:''
  };

const handleChange =  event => {
  setState({[event.target.name]:event.target.value});

}
const handleSubmit = event => {
  event.preventDefault();
  console.log(state);
}

  
    return (
      <Row>
    <Col md={6}>
    <Card>
        <Card.Body>


        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username / Email</Form.Label>
          <Form.Control type="email" name="email" id="email"  onChange={handleChange} placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" id="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
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
