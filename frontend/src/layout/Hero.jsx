// src/components/HeroSection.js
import React from 'react';
import { Row, Col } from 'antd';
import VisualDemo from './VisiualDemo';

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
      <Row>
      <Col xs={24} sm={24} md={12} lg={12} xl={10}>
          <div className="hero-image2">
            <img src='https://c8.alamy.com/comp/2AGF3KM/disaster-management-2AGF3KM.jpg' />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={14}>
          <div className="hero-tagline">
            <h1>Your Tagline Goes Here</h1>
            <VisualDemo/>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
