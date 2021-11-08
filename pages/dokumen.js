
import Dokumen from '../component/dokumen'
import Template from '../component/template'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function dokumen() {
    return (
      <Container>
        <Row>
        <Template></Template>
        <Dokumen></Dokumen>
        </Row>
     </Container>
       
    )
    }

