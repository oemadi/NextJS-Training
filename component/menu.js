
import styles from '../styles/Home.module.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRouter} from 'next/router'
import Logout from '../component/logout'

  function handleLogOut() {
    let history = useRouter()
    sessionStorage.clear();
    history.push("/login"); // whichever component you want it to route to
  }

export default function Menu() {
  return (
    <div className={styles.container}>
     <Navbar bg="primary" variant="dark">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link href="/pengadaan/pengadaan">Pengadaan</Nav.Link>
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/news">Table Bootstrap</Nav.Link>
        <Nav.Link href="/tableantd">Table Antd</Nav.Link>
        {/* <Nav.Link href="/dokumen">Document</Nav.Link> */}
        <Nav.Link href="/register">Register</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Logout/>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )

  }