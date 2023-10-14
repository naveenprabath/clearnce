import React from 'react';
import Navigation from '../components/Navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Stack from '../components/Stack';


export default function Signup() {
    const pageStyles = {
        margin: '40px',
        backgroundColor: '#B8E3FF',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
      }
  return (
    <div style={pageStyles}>
    <br/>
    
      <Stack/>
      <br/>
        
        <h1>
        <h1 style={{fontFamily:'times new roman', color: "black", textAlign: 'center'}}>Student Signup Page</h1>
        </h1>
        <br/>
      <Container>
        <Col>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Contact Number" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Label>Select Your Combination</Form.Label>
      <Form.Select aria-label="Default select example">

      <option>Select your Combination</option>
      <option value="1">Bachelor of Science Study Programme </option>
      <option value="2">Bachelor of Science Honours Study Programme</option>
      <option value="3">Bachelor of Science Honours in Statistics and Operations Research (SOR) Study Programme</option>
      <option value="4">Bachelor of Science Honours in Computation and Management (CM) Study Programme</option>
    </Form.Select>
    <br></br>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="This is correct details" />
      </Form.Group>
      <br/>
      <Button variant="primary" type="submit" style={{ display: 'block', margin: '0 auto' }}>
         Submit
    </Button>
    <br/>

    </Form>
    </Col>
    </Container>
    </div>
  )
}
