
import Home from '../component/home'
import Template from '../component/template'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function index() {
    return (
      <div>
      <Container fluid="md">
        <Row>
        <Template></Template>
        <Home></Home>
        </Row>
     </Container>
     
     
    
           </div>
       
    )
    }

