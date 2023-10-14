import React from 'react'
import Navigation from '../components/Navigation'
import  Stack  from '../components/Stack'
import  Image from '../components/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';




function ContainerExample() {
  const rowStyle = {
    padding:'10px',
   
  };
  const pageStyles = {
    backgroundColor: '#B8E3FF',
    minHeight: '100vh'
  };
  
  return (
    <div style={pageStyles}>
   <br/>
   <br/>
    <Container>
    <Stack/>    
      <Row style= {rowStyle}><Navigation/>    </Row>
      <Row style= {rowStyle}></Row>
      <Row style= {rowStyle}><h1 style={{fontFamily:'times new roman', color: "black"}}>University Of Peradeniya Faculty Of Science Clearnce System</h1></Row>
      <Row style= {rowStyle}></Row>
      <Row style= {rowStyle}></Row>
      <Row style= {rowStyle}></Row>
      <Row><Image/>    </Row>
      <Row style= {rowStyle}></Row>
      <Row style= {rowStyle}></Row>
      <Row style= {rowStyle}></Row>
      <Row style= {rowStyle}><hr/></Row>
    </Container>
  
<br/>
<br/>
<Container>
  <Row>
  

    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Notice Board</Card.Title>
        <Card.Text>
        Special notices about the Clearnce
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col> </Col>

    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Quick Link</Card.Title>
        <Card.Text>
         Downloard the report
        </Card.Text>
       </Card.Body>
    </Card>
    </Col>
    <Col> </Col>

    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Quick Link</Card.Title>
        <Card.Text>
         Online Payment
        </Card.Text>
       </Card.Body>
    </Card>
    </Col>
    </Row>
    <Row style= {rowStyle}></Row>
    <Row style= {rowStyle}></Row>
    <Row style= {rowStyle}></Row>
    <Row style= {rowStyle}><hr/></Row>
    </Container>
   

    <Container>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>About us</Card.Title>
        <Card.Text>
         xxxxx
        </Card.Text>
       </Card.Body>
       </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="holder.js/100px180" />
           <Card.Body>
           <Card.Title>The Team</Card.Title>
           <Card.Text>
            xxxxx
           </Card.Text>
          </Card.Body>
           </Card>
        </Col>
      </Row>

      
    </Container>

    <Container>
      <Row>
        <footer>
          <Col> </Col>
          <Col><p style={{fontFamily:'times new roman', color: "black"}}>..........................................................................................................................................................Copy Right Issuess.......................................................................................................................................</p></Col>
        </footer>
      </Row>
    </Container>


    
    </div>
  );
}

export default ContainerExample;


