import React from 'react';
import Navigation from '../components/Navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Stackl from '../components/Stackl';

export default function Dema() {
    const pageStyles = {
        margin: '40px', 
        maxWidth: '',
        backgroundColor: '	#800000',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
      }
  return (
    <div style={pageStyles}>
      <br/>
      <Container>
        <Row>
          <Stackl/>
        </Row>
      </Container>
        
        <h1>
        <h1 style={{fontFamily:'times new roman', color: "black", textAlign: 'center'}}>Signup Page</h1>
        </h1>
        <br/>
        <div style={pageStyles}>
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

      <Form.Label>Select Your Department</Form.Label>
      <Form.Select aria-label="Default select example">
      
      <option>Select your Department</option>
      <option value="1">Computer Science & Statistics Department</option>
      <option value="2">Mathmatictist Department</option>
      <option value="3">Bialogy Department</option>
      <option value="4">Physics Department</option>
      <option value="5">Chemistry Department</option>
      <option value="6">Geo Department</option>

    </Form.Select>
    <br/>
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
    

    </Form>
    <br/>
    </div>
    </div>
  )
}
