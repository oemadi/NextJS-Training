



import Head from '../component/head'
import Menu from '../component/menu'
import Template from '../component/template'
import Register from '../component/register'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

export default function formulir() {
    return (

        <Container >
        <Row>
        <Template></Template>
      <h4>Register</h4>
        <Register></Register>
              </Row>
          </Container>
       
    )
    }

