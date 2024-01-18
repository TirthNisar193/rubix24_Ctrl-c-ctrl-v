// src/components/HeroSection.js
import React from 'react';
import { Row, Col } from 'antd';
import VisualDemo from './VisiualDemo';
import Tweets from './Tweets';
import Video from './Video';

const Hero = () => {
  return (
    <div className="hero-section">
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={14}>
          <div className="hero-tagline">
            <h1>Your Tagline Goes Here</h1>
            <p>
              Brief description or additional information about your disaster management system.
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={10}>
          <div className="hero-image1">
            hello
          </div>
        </Col>
      </Row>
      <Row justify={'center'}>
        <img src='https://www.visualcapitalist.com/wp-content/uploads/2023/09/deadliest-earthquakes-21st-century.jpg' height={'auto'} width={'60%'}/>
      </Row>
      <Row style={{padding: 30}} justify='space-between'>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} align='center'>
        <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
          <Tweets />
        </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={10}>
          <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
            <Video url="https://www.youtube.com/watch?v=vTmJv94wZZ4" text="Do's and don'ts during an earthquake" />
            <Video url="https://www.youtube.com/watch?v=jPR8HHmpeXE" text="Earthquake Safety | Safety for kids | Earthquake safety tips | भूकंप से कैसे बचें?" />
            <Video url="https://www.youtube.com/watch?v=m59kX6MAEPw" text="How do you stay safe during an earthquake? (BBC Hindi)" />
            <Video url="https://www.youtube.com/watch?v=CBf57Fyy-YI" text="Natural Disaster Management Complete in Hindi प्राकृतिक आपदा पर निबंध, कारण, प्रभाव, प्रबंधन" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
