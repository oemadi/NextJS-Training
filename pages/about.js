
import About from '../component/about'
import Template from '../component/template'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function about() {
    return (
      <Container >
        <Row>
        <Template></Template>
        <About></About>
        </Row>
     </Container>
       
    )
    }

