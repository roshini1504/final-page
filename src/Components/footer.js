import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import '@fortawesome/fontawesome-free/css/all.min.css';
const Footer = () => {
  return (
    <footer className="footer" style={{
      backgroundColor: '#333',
      color: '#ffffff',
      fontSize: '24px', 
      textAlign: 'center',
      padding: '40px 20px', 
      margin: '0 auto', 
    }}>
     <Container>
    <Row>
      <Col xs={12} md={3} style={{ marginBottom: '20px' }}>
        <h5 style={{color: 'whitesmoke', fontSize: '30px' , fontWeight: 'bolder'}}>About Us</h5>
        <p style={{ fontSize: '20px', margin: '30px 0' }}>
        FSF Global IT Solutions is the most popular service provider for customers looking for product development and employee outsourcing firm with a highly diversified and flexible approach of providing expert quality on end-to-end solutions for customers.
        </p>
      </Col>
      <Col xs={12} md={3} style={{ marginBottom: '20px' }}>
        <h5 style={{color: 'whitesmoke', fontSize: '30px' , fontWeight: 'bolder'}}>Sitemap</h5>
        <ul style={{ listStyle: 'none', padding: '0', margin: '30px 0' }}>
          <li><a href="#" style={{ textDecoration: 'none', color: '#ffffff' }}>IT & Development</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: '#ffffff' }}>Cyber Security</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: '#ffffff' }}>Human Resource</a></li>
          <li><a href="#industries" style={{ textDecoration: 'none', color: '#ffffff' }}>Industries</a></li>
          <li><a href="#services" style={{ textDecoration: 'none', color: '#ffffff' }}>Services</a></li>
          <li><a href="#contact" style={{ textDecoration: 'none', color: '#ffffff' }}>Contact us</a></li>
        </ul>
      </Col>
      <Col xs={12} md={3} style={{ marginBottom: '20px' }}>
        <h5 style={{color: 'whitesmoke', fontSize: '30px' , fontWeight: 'bolder'}}>Contact</h5>
        <p style={{ fontSize: '18px', margin: '30px 0' }}>
          <i className="fas fa-map-marker-alt flex-column" style={{ fontSize: '20px', marginRight: '20px', color: 'white'}}></i>
          Backside of Amma Nilayam, 
             Address : 1-98/3/F/3, Plot No 5, 3rd Floor, KPR Avenue, VIP Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081
        </p>
        <p style={{ fontSize: '18px', margin: '30px 0' }}>
          <i className="fas fa-envelope" style={{ fontSize: '20px', marginRight: '20px', color: 'white'}}></i>
          <a href="mailto:info@fullstackfresher.com" style={{ textDecoration: 'none', color: '#ffffff' }}>info@fullstackfresher.com</a><br />
          <i className="fas fa-phone" style={{ fontSize: '18px', marginRight: '20px', padding: '30px 0px' ,color: 'white'}}></i>
          +91 9100632143
        </p>
      </Col>
      <Col xs={12} md={3} style={{ marginBottom: '20px' }}>
        <Row>

          <Col xs={10} md={10} style={{ paddingLeft: '0' }}>
            <h5 style={{color: 'whitesmoke', fontSize: '30px' , fontWeight: 'bolder'}}>Follow us</h5>
            <ul style={{ listStyle: 'none', padding: '0', margin: '30px 0' }}>
              <li><a href="https://www.facebook.com/" target="_blank" style={{ textDecoration: 'none', color: '#ffffff'}}><i className="fab fa-facebook-f" style={{ fontSize: '36px', marginRight: '10px' }}></i></a></li>
              <li><a href="https://www.youtube.com/" target="_blank" style={{ textDecoration: 'none', color: '#ffffff' }}><i className="fab fa-youtube" style={{ fontSize: '36px', marginRight: '10px',marginTop: '30px' }}></i></a></li>
              <li><a href="https://www.linkedin.com/company/fullstackfreshers/?originalSubdomain=in" target="_blank" style={{ textDecoration: 'none', color: '#ffffff' }}><i className="fab fa-linkedin-in" style={{ fontSize: '36px', marginRight: '10px',marginTop: '30px' }}></i></a></li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
          <Col sm={12} className="text-center">
            <p style={{ color: '#fff', fontSize: '25px' }}>&copy; 2024 [FSF Global IT Solutions]. All rights reserved.</p>
          </Col>
        </Row>
  </Container>
    </footer>
  );
};

export default Footer;
