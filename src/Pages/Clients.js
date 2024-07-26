import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import sbp from '../Components/sbp.jpg';
import nine from '../Components/nine.jpeg';
import bigg from '../Components/bigg.jpeg'

const Clients = () => {
  return (
    <Container className="clients-logos" id="client" style={{ marginTop: '110px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '120px'}}>Our Clients & Partners</h2>
      <p style={{ marginBottom: '60px', fontSize: '20px'}}>Forever, We thrive to maintain Successful Relationships with our Clients and Partners to showcase a healthy relationship and improving opportunities.</p>
      <Row className='justify-content-center'>
        <Col xs={6} md={4} lg={3} xl={2}>
          <img src={nine} alt="Client Logo 1" className="img-fluid" style={{ width: '150px', height: '100px', margin: '20px' }} />
        </Col>
        <Col xs={6} md={4} lg={3} xl={2}>
          <img src={sbp} alt="Client Logo 2" className="img-fluid" style={{ width: '150px', height: '100px', margin: '20px' }} />
        </Col>
        <Col xs={6} md={4} lg={3} xl={2}>
          <img src={bigg} alt="Client Logo 3" className="img-fluid" style={{ width: '150px', height: '100px', margin: '20px' }} />
        </Col>
      </Row>
    </Container>
  );
};

export default Clients;