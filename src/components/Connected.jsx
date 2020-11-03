import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import { Container, Row, Col } from 'react-bootstrap';
import connected from '../assets/connected-logos-indigo.png';
import { ReactComponent as Heart } from '../assets/heart.svg';
import { ReactComponent as WhiteCircle } from '../assets/white_circle.svg';
import '../styles/Utilities.scss';
import '../styles/Connected.scss';
configureAnchors({ scrollDuration: 700 });

const Connected = () => {
  return (
    <div className="w-100 h-100 overflow-hidden">
      {/* <div className="background overflow-hidden" style={{ right: '-10vw', top: '60vh', zIndex: '-3' }}>
        <WhiteCircle style={{ fill: "#ffffff", width: '80vw' }} />
      </div> */}
      <Container
        fluid
        className="d-flex flex-column w-100 justify-content-center align-items-center px-5 pb-5"
      >
        <ScrollableAnchor id={'home'}>
          <Row className="vh-100 align-items-center pb-5 d-flex flex-column justify-content-center">
            <img src={connected} alt="Connected logo" className="img70 auto-height" />
            <a
              className="for-mobile"
              href="https://forms.gle/ykD6ZPyRhynVq6LfA"
              target="_blank"
            >
              <div className="px-3 py-2 rounded-lg volunteer-link cursor-pointer d-flex flex-row align-items-center justify-content-center">
                VOLUNTEER
            </div>
            </a>
          </Row>
        </ScrollableAnchor>
        <Row className="d-flex flex-row py-5 m-5 position-relative">
          {/* Make mobile-friendly */}
          <Col lg={4}>
            <Heart className="heart pb-4" style={{ fill: "#6B78B8" }} />
          </Col>
          <Col lg={8}>
            <p className="text-indigo px-5 connected-description">
              connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
            </p>
          </Col>
          <div className="white-circle background">
            <WhiteCircle style={{ fill: "#ffffff" }} />
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Connected;