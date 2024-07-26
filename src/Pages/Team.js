import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Team.css'; 
import it from './it.png';
import cyber from './cyber.png';
import Resources from './Resources.png';

const Team = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleOverlay = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <div>
      <div id="Teams" className="row mb-4">
        <div className="col-12 text-center">
          <h2 style={{ paddingTop: '110px' }}>It Takes A Team To Reach The Top!</h2>
          <p className="col-12 text-center" style={{ fontSize: 'calc(0.9rem + 0.5vw)', paddingTop: '30px', marginLeft: '30px' }}>
            Expertise is the fuel that drives a team towards their goals and helps them
          </p>
          <p className="col-12 text-center" style={{ fontSize: 'calc(0.9rem + 0.5vw)', marginLeft: '30px' }}>
            reach new heights. It takes more than just one individual to achieve greatness.
          </p>
        </div>
      </div>

      <Container className="my-5">
        <Row xs={1} md={2} lg={3} className="g-4">
          <Col>
            <Card className="h-100 mb-4" style={{ backgroundColor: 'whitesmoke', fontSize: 'calc(0.8rem + 0.7vw)' }}>
              <div className="card-image-container" onClick={() => toggleOverlay('it')}>
                <img src={it} alt="IT & Development" style={{ height: '380px', objectFit: 'cover' }} />
                {activeCard === 'it' && (
                  <div className="overlay">
                    <div className="overlay-content">
                      <h2>IT & Development</h2>
                      <p>Look no further than our expert development team! Our team of highly skilled and dedicated IT professionals has years of experience in crafting innovative, customized solutions tailored specifically to meet the unique needs of each client.</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </Col>

          <Col>
            <Card className="h-100 mb-4" style={{ backgroundColor: 'whitesmoke', fontSize: 'calc(0.8rem + 0.7vw)' }}>
              <div className="card-image-container" onClick={() => toggleOverlay('cyber')}>
                <img src={cyber} alt="Cyber Security" style={{ height: '380px', objectFit: 'cover' }} />
                {activeCard === 'cyber' && (
                  <div className="overlay">
                    <div className="overlay-content">
                      <h2>Cyber Security</h2>
                      <p>From firewalls, encryption tools, antivirus software, intrusion detection systems, and penetration testing services - We provide a plethora of effective measures available today that can safeguard your company's valuable information.</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </Col>

          <Col>
            <Card className="h-100 mb-4" style={{ backgroundColor: 'whitesmoke', fontSize: 'calc(0.8rem + 0.7vw)' }}>
              <div className="card-image-container" onClick={() => toggleOverlay('resources')}>
                <img src={Resources} alt="Human Resource" style={{ height: '380px', objectFit: 'cover' }} />
                {activeCard === 'resources' && (
                  <div className="overlay">
                    <div className="overlay-content">
                      <h2>Human Resource</h2>
                      <p>With an expert team at your side, watch as you unlock unprecedented growth opportunities faster and cheaper than ever before. So don't sweat the small stuff - outsource with confidence today for bigger rewards tomorrow!</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
