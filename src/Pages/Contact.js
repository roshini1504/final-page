
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container fluid className="contact-section" id='contact'>
      <Row className="justify-content-center">
        <Col lg={8} md={10} sm={12} xs={12}>
          <h1 style={{ marginTop: '120px', textAlign: 'center' }}>IT Development & Recruitments</h1>
          <h4 style={{ marginTop: '40px', textAlign: 'center' }}>
            1-98/3/F/3, Plot No 5, 3rd Floor, KPR Avenue, VIP Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081
          </h4>
          <Row className="contact-info">
            <Col xs={12} md={6} lg={4}>
              <strong style={{ fontSize: '24px' }}>Phone:</strong>
              <br />
              <span style={{ fontSize: '24px' }}> +91 9100632143</span>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <strong style={{ fontSize: '24px' }}>Gmail:</strong>
              <br />
              <a href={`mailto:info@fullstackfresher.com`} style={{ fontSize: '24px' }}>info@fullstackfresher.com</a>
              </Col>
          </Row>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.216521774984!2d78.38408650958581!3d17.449347800950417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ed7092fdab%3A0x22c9a1731ac2ad51!2sFSF%20Global%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1721412777677!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0, marginBottom: '60px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

