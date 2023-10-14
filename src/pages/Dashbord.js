import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

function Dashboard(){
    const containerStyle = {
            backgroundColor: '#B8E3FF',
            
            
             minHeight: '100vh'
      };

      const pageStyles = {
        backgroundColor: '#B8E3FF',
        minHeight: '100vh'
      };

      const navStyle = {
        backgroundColor: '#800000'
      };

      
    return(
        
        <div style={pageStyles}>

            <Navbar expand="lg"  className="bg-body-tertiary justify-content-between"   style={{navStyle}}>
                <Container>
                <Navbar.Brand href="#home">University Of Peradeniya Faculty Of Science Clearnce System Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                      
                    
                    
                 <Form inline className="mr-4" >
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
  
            <Container style={containerStyle} >
            
             <Row md={6} className="className=d-flex align-items-center justify-content-center p-1">

                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1" >
                <Card style={{ width: '18rem', color:'black', backgroundColor: '#AAFFF6' }}>
                     <Card.Body className="text-center">
                    <Card.Title>Home page</Card.Title>
                    <Card.Text>
                        Add sutable icon
                    </Card.Text>
                    <a href="/Home">
                    <Button variant="primary">Click Me</Button>
                    </a>
                    </Card.Body>
                </Card>
                </Col>

                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'back', backgroundColor: '#AAFFF6' }}>
                     <Card.Body className="text-center">
                    <Card.Title>Letchers Signin</Card.Title>
                    <Card.Text>
                        Add sutable icon
                    </Card.Text>
                    <a href="/Dema">
                    <Button variant="primary">Click Me</Button>
                    </a>
                    </Card.Body>
                </Card>
                </Col>

                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'black', backgroundColor: '#AAFFF6' }}>
                     <Card.Body className="text-center">
                    <Card.Title>Letchers Login</Card.Title>
                    <Card.Text>
                        Add icon
                    </Card.Text>
                    <a href="/Demo">
                    <Button variant="primary">Click Me</Button>
                    </a>
                    </Card.Body>
                </Card>
                </Col>
           
             </Row>

             <Row md={6} className="className=d-flex align-items-center justify-content-center p-1">

                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'black', backgroundColor: '#AAFFF6' }}>
                     <Card.Body className="text-center">
                    <Card.Title>Student Signup</Card.Title>
                    <Card.Text>
                        Add icon
                    </Card.Text>
                    <a href="/Signup">
                    <Button variant="primary">Click Me</Button>
                    </a>
                    </Card.Body>
                </Card>
                </Col>

                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'black', backgroundColor: '#AAFFF6' }}>
                     <Card.Body className="text-center">
                    <Card.Title>Student Login</Card.Title>
                    <Card.Text>
                        Add Icon
                    </Card.Text>
                    <a href="/Login">
                    <Button variant="primary">Click Me</Button>
                    </a>
                    </Card.Body>
                </Card>
                </Col>

                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'black', backgroundColor: '#AAFFF6' }}>
                     <Card.Body className="text-center">
                    <Card.Title> Computer Science </Card.Title>
                    <Card.Text>
                        Add icon
                    </Card.Text>
                    <a href="/CS">
                    <Button variant="primary">Click Me</Button>
                    </a>
                    </Card.Body>
                </Card>
                </Col>
           
             </Row>

             <Row md={6} className="className=d-flex align-items-center justify-content-center p-1">

                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'black', backgroundColor: '#AAFFF6' }}>
                     <Card.Body className="text-center">
                    <Card.Title> Department Of Zoo</Card.Title>
                    <Card.Text>
                        Add icon
                    </Card.Text>
                    <Button variant="primary">Click Me</Button>
                    </Card.Body>
                </Card>
                </Col>

                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'black', backgroundColor: '#AAFFF6' }}>
                     <Card.Body className="text-center">
                    <Card.Title>Department Of Botny</Card.Title>
                    <Card.Text>
                        Add icon
                    </Card.Text>
                    <Button variant="primary">Click Me</Button>
                    </Card.Body>
                </Card>
                </Col>

                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'black', backgroundColor: '#AAFFF6' }}>
                     <Card.Body className="text-center">
                    <Card.Title>Department of Physics</Card.Title>
                    <Card.Text>
                        Add icon
                    </Card.Text>
                    <Button variant="primary">Click Me</Button>
                    </Card.Body>
                </Card>
                </Col>
           
             </Row>

             <Row md={6} className="className=d-flex align-items-center justify-content-center p-1">

                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'black', backgroundColor: '#AAFFF6' }}>
                     <Card.Body className="text-center">
                    <Card.Title>Department of Chemistry</Card.Title>
                    <Card.Text>
                        Add icon
                    </Card.Text>
                    <Button variant="primary">Click Me</Button>
                    </Card.Body>
                </Card>
                </Col>

                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'black', backgroundColor: '#AAFFF6' }}>
                     <Card.Body className="text-center">
                    <Card.Title>Department of Maths</Card.Title>
                    <Card.Text>
                        Add Icon
                    </Card.Text>
                    <Button variant="primary">Click Me</Button>
                    </Card.Body>
                </Card>
                </Col>

                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'black', backgroundColor: '#AAFFF6' }}>
                     <Card.Body className="text-center">
                    <Card.Title> Department of Geology</Card.Title>
                    <Card.Text>
                        Add icon
                    </Card.Text>
                    <Button variant="primary">Click Me</Button>
                    </Card.Body>
                </Card>
                </Col>
           
             </Row>

             <Row md={6} className="className=d-flex align-items-center justify-content-center p-1">

                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'black', backgroundColor: '#AAFFF6' }}>
                     <Card.Body className="text-center">
                    <Card.Title> Science Library</Card.Title>
                    <Card.Text>
                        Add icon
                    </Card.Text>
                    <Button variant="primary">Click Me</Button>
                    </Card.Body>
                </Card>
                </Col>

                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'black', backgroundColor: '#AAFFF6' }}>
                     <Card.Body className="text-center">
                    <Card.Title>Gym</Card.Title>
                    <Card.Text>
                        Add icon
                    </Card.Text>
                    <Button variant="primary">Click Me</Button>
                    </Card.Body>
                </Card>
                </Col>

                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'blackt', backgroundColor: '#AAFFF6' }}>
                     <Card.Body className="text-center">
                    <Card.Title>Admin Support</Card.Title>
                    <Card.Text>
                        Add icon
                    </Card.Text>
                    <Button variant="primary">Click Me</Button>
                    </Card.Body>
                </Card>
                </Col>
           
             </Row>
          
            </Container>
        </div>

    );
}

export default Dashboard;