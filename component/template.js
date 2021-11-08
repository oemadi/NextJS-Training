
import Head from '../component/head'
import Menu from '../component/menu'
import About from '../component/about'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function Template() {
    return (

      <Container>
        <Row>
        <Head></Head>
        </Row>
        <Row>
        <Menu></Menu>
        </Row>
     <p></p>
        </Container>

       
    )
    }

