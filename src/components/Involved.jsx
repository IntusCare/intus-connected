import React from 'react';
import Collapsible from './Collapsible';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as Heart } from '../assets/heart.svg';
import { ReactComponent as HandHeart } from '../assets/hand_heart.svg';
import { ReactComponent as Brain } from '../assets/brain_drawing.svg';
import { ReactComponent as Smiley } from '../assets/pink_smile.svg';
import '../styles/Utilities.scss';
import '../styles/Involved.scss';

configureAnchors({ scrollDuration: 700 });

const Involved = () => {
  return (
    <div className="involved-background">
      <Container
        fluid
        className="w-100 p-0 px-5"
      >
        <ScrollableAnchor id={'involved'}>
          <div style={{ height: '5vh' }} />
        </ScrollableAnchor>
        <Row className="d-flex justify-content-center align-items-end text-white font-weight-bold pt-5 m-5">
          <h1 className="pt-3 m-0 extra-bold">get involved</h1>
        </Row>
        <Row className="d-flex flex-row justify-content-center align-items-center pb-5 mb-5 ">
          <div className="position-relative">
            <a
              href="https://forms.gle/ykD6ZPyRhynVq6LfA"
              target="_blank"
            >
              <div className="px-5 py-3 rounded-lg form-link cursor-pointer">
                <h4 className="font-weight-bold p-0 m-0">Volunteer</h4>
              </div>
            </a>
          </div>
        </Row>
        {/* <Row className="px-5 mx-5 pt-5 d-flex flex-column justify-content-left align-items-start text-white font-weight-bold">
          <h2 className="font-weight-bold text-white-60">Application Process</h2>
          <p className="text-white px-4 py-5 mx-5">
            connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
            connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
            connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
            connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
            connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
        </p>
        </Row> */}
      </Container>
    </div>
  )
}

export default Involved;

