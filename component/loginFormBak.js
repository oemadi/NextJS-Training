import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function loginFormBak({Login,error}) {
  const [details,setDetails]= useState({email:"",password:""});


      const adminUser = {
        email:'admin@admin.com',
        password:'admin123',
      };
     
  
    const submitHandler = e => {
        e.preventDefault()
        Login(details)
        if (details.email == adminUser.email && details.password == adminUser.password){
          console.log("Logged In");
       
          } else { 
            console.log("Details do not match!");
          }
    }
  
    
    return (
        <Row >
        <Col>
        <Card>
            <Card.Body className="bgLogin">    
            <Form onSubmit={submitHandler}>
            <Form.Group as={Row} className="mb-24" >
                <Form.Label column sm="12">
                Email
                </Form.Label>
                <Col sm="12">
                <Form.Control type="email" name="email" id="email" 
               onChange={e => setDetails({...details,email:e.target.value})} 
               value={details.email} placeholder="Enter email" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-24" >
                <Form.Label column sm="12">
                Password
                </Form.Label>
                <Col sm="12">
                <Form.Control type="password" name="password" id="password" 
               onChange={e => setDetails({...details,password:e.target.value})} 
               value={details.password} placeholder="Password" />
                </Col>
            </Form.Group>
            
          <div >
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
           
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </div>

          </Form>
          
          </Card.Body>
            </Card>
        </Col>
        </Row>
    )
}


