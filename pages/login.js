import Template from '../component/template'
import Login from '../component/login'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

export default function login() {
    return (
      <Container >
        <Row>
        <Template></Template>
        <h4>Login</h4>
        <Login></Login>
        </Row>
     </Container>
     
     
       
    )
    }

