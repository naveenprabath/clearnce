import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';



export default function Navigation() {
  const navStyle = {
    backgroundColor: '#800000'
  };
  return (
     
  <div>
    <Navbar expand="lg"  className="bg-body-tertiary justify-content-between"   style={{navStyle}}>
    <Container>
      <Navbar.Brand href="#home">University OF Peradeniya</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        
          
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Bachelor of Science Study Programme</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Bachelor of Science Honours Study Programme</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Bachelor of Science Honours in Statistics and Operations Research (SOR) Study Programme</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Bachelor of Science Honours in Computation and Management (CM) Study Programme </NavDropdown.Item>
            <NavDropdown.Divider /> <NavDropdown.Item href="#action/3.4"> Separated link  </NavDropdown.Item>
          </NavDropdown>
          
        <Form inline style={{textAlign:'right'}} >
        <Row >
          <Col >
            <Form.Control   type="text"  placeholder="Search" className=" mr-sm-2" />
            </Col>
            <Col  >
            <Button variant='outline-success'>Search</Button>
          </Col>
          
        </Row>
      </Form>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  </div>

  );
}

  
 
