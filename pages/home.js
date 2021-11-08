
import Home from '../component/home'
import Template from '../component/template'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function home() {
    return (
      <Container>
        <Row>
        <Template></Template>
        <Home></Home>
        </Row>
     </Container>
     
       
    )
    }

