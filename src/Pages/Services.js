import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Services.css';

const Services = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const flipCard = (id) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const services = [
    {
      id: 1,
      icon: 'bi-cloud',
      title: 'Digital Transformation',
      descriptionFront: 'Uncover the Possibilities of Digital Transformation with Cloud Integrated Product Development.',
      descriptionBack: 'For most companies, digital transformation requires a shift away from traditional thinking and toward a more collaborative, experimental approach.',
    },
    {
      id: 2,
      icon: 'bi-terminal',
      title: 'IoT Solution Integrations',
      descriptionFront: 'Unlock The Power of Connectivity with IoT Solution Integration in various industries and domains.',
      descriptionBack: 'IoT integration can take some of the load off your employees, as it lets you build trigger-based automations that work off of sensor data.',
    },
    {
      id: 3,
      icon: 'bi-robot',
      title: 'Industrial Automation',
      descriptionFront: 'Automate Your Business Processes With Powerful AI/ML Integrated Method Solution Implementations.',
      descriptionBack: 'It involves improving the efficiency, productivity, and quality of industrial processes.',
    },
    {
      id: 4,
      icon: 'bi-lock',
      title: 'Information Security',
      descriptionFront: 'Keep Your Data Safe With Our Top-Notch Cyber/Data Security Solution Deployments.',
      descriptionBack: 'Information security is the practice of protecting information by mitigating information risks.',
    },
    {
      id: 5,
      icon: 'bi-speedometer2',
      title: 'Product Development',
      descriptionFront: 'We help you achieve a responsive and dynamic IT transformation at the business level.',
      descriptionBack: 'Product development is the complete process of delivering a new product or improving an existing one for customers.',
    },
    {
      id: 6,
      icon: 'bi-cloud',
      title: 'UI/UX Development',
      descriptionFront: 'Our expertise in User Experience (UX) and User Interface (UI) design.',
      descriptionBack: 'UI/UX development services aim to create user-friendly interfaces that enable users to understand how to use complex technical products.',
    },
  ];

  return (
    <section id="services" className="Services" style={{ backgroundColor: 'white' }}>
      <Container>
        <h2 className="text-center mb-3" style={{ marginTop:'65px' }}>Our Services</h2>
        <p className="services-list" style={{ fontSize: '24px', marginTop: '0px' }}>
          Our Services Consist of: UI/UX, Product Development (Web/Mobile), Cloud Migration, Saas Application Development, Server Management, Resource Outsourcing, US IT Staffing, SAP Training & Development, Robotics and Corporate Event Management.
        </p>
      </Container>

      <section className="ThreeBoxes">
        <Container>
          <Row xs={1} md={3} className="g-4">
            {services.map((service) => (
              <Col key={service.id} lg={4} md={4} className="mb-4">
                <div
                  className={`flip-box ${flippedCards[service.id] ? 'flip-box-flipped' : ''}`}
                  onClick={() => flipCard(service.id)}
                >
                  <div className="flip-box-inner">
                    <div className="flip-box-front">
                      <div className="box" style={{
                        padding: '20px',
                        borderRadius: '30px',
                        marginTop: '30px',
                        boxShadow: '8px 8px 16px #554b4b, -8px -8px 16px #ddd4d4',
                        background: 'linear-gradient(rgba(8, 8, 8, 0.034) 35%, rgba(135, 171, 196, 0.904) 100%)'
                      }}>
                        <i className={`bi ${service.icon}`} style={{ fontSize: '56px', color: '#007bff' }}></i>
                        <div className="service-info">
                          <h3 style={{ color: 'maroon' }}>{service.title}</h3>
                          <p className="margin b-5" style={{ fontSize: '20px', color: 'black' }}>
                            {service.descriptionFront}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flip-box-back">
                      <div className="box" style={{
                        background: 'linear-gradient(rgba(8, 8, 8, 0.034) 35%, rgba(175, 128, 236, 0.932) 100%)',
                        boxShadow: '8px 8px 16px #ddd4d4, -8px -8px 16px #554b4b',
                        transform: 'scale(1.03)',
                        transition: 'all 2s',
                        padding: '20px',
                        borderRadius: '30px',
                        marginTop: '30px'
                      }}>
                        <i className={`bi ${service.icon}`} style={{ fontSize: '56px', color: '#007bff' }}></i>
                        <div className="service-info">
                          <h3 style={{ color: 'maroon' }}>{service.title}</h3>
                          <p className="margin b-5" style={{ fontSize: '20px', color: 'black' }}>
                            {service.descriptionBack}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default Services;
