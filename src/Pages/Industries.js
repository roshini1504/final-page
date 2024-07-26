import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure this import exists to use Bootstrap Icons
import './Industries.css';

const industriesData = [
  {
    title: "Supply Chain",
    description:
      "Building Solutions for Supply Chain Management using the best practices of the industry on various systems and applications providing the most appropriate and effective SAP & Cloud integrated solutions.",
    icon: "bi-truck"
  },
  {
    title: "Telecom",
    description:
      "We have been working with clients across the globe with end-to-end solution integration for the telecom industry starting from Visitor Management to Site Management Platforms with latest cloud technologies.",
    icon: "bi-phone"
  },
  {
    title: "Healthcare",
    description:
      "IoT is the new Healthcare. We are having a proven expertise working with different cloud-based IoT Mobile & Web Integrated solutions for the health monitoring system on ease for major hospitals around the globe.",
    icon: "bi-heart"
  }
];

const Industries = () => {
  return (
    <Container fluid>
      <Row className="my-4" id="industries">
        <Col>
          <h2 className="industries-heading">Industries</h2>
          <p>
            Our services are driven across various industries and domains providing Digital Transformation Solutions & Automation Services.
          </p>
        </Col>
      </Row>
      <Row>
        {industriesData.map((industry, index) => (
          <Col lg={4} md={6} sm={12} key={index} className="mb-4">
            <Card className="industry-card">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <i className={`bi ${industry.icon} me-3`} style={{ fontSize: '24px' }}></i>
                  <Card.Title>{industry.title}</Card.Title>
                </div>
                <Card.Text>{industry.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Industries;
