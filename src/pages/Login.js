import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Link} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Stack from '../components/Stack';

export default function Login() {
    const pageStyles = {
        margin: '40px', 
        maxWidth: '',
        backgroundColor: 	'#B8E3FF',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
      }
  return (
    <div style={pageStyles}>
      <br/>
      <Container>
        <Row>
          <Stack/>
        </Row>
      </Container>

        
        <br/>
        <br/>
        
        <h1 style={{fontFamily:'times new roman', color: "black", textAlign: 'center'}}>Student Login Page</h1>
        <br/>
        <div >
        <Container>
        <Row></Row>
        <Row>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter User Name" />
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="This is correct details" />
      </Form.Group>
      <Button variant="primary" type="submit" style={{ display: 'block', margin: '0 auto' }}>
         Submit
    </Button>
    <br/>
    <br/>
    <br/>
    <br/>

    </Form>
    </Row>
    </Container>
    </div>
    </div>
  )
}
