import React from 'react';
import Collapsible from './Collapsible'
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as Phone } from '../assets/iphone.svg';
import { ReactComponent as Mail } from '../assets/mail.svg';
import { ReactComponent as Letter } from '../assets/paper_letter.svg';
import { ReactComponent as Bubbles } from '../assets/about_bubbles.svg';
import { ReactComponent as Circle } from '../assets/ellipse.svg';
import evan from '../assets/evan.jpg';
import joanne from '../assets/joanne.png';
import sophia from '../assets/sophia.png';

import gradientBubble from '../assets/color_gradient_bubble.png';
import '../styles/About.scss';
import '../styles/Impact.scss';
import '../styles/Utilities.scss';

configureAnchors({ scrollDuration: 700 });
const About = () => {
  return (
    <Collapsible subcat="#aboutFocus">
      <div className="about-background">
        <div className="background" style={{ left: '-50vh', top: '325vh' }}>
          <Bubbles style={{ width: '133vw' }} className="d-none d-lg-block" />
        </div>
        <div className="background" style={{ left: '-50vh', top: '530vh' }}>
          <img src={gradientBubble} alt="Placeholder Image" className="img70" />
        </div>
        <Container
          fluid
          className="w-100 p-0 px-5"
        >
          <ScrollableAnchor id={'about'}>
            <div style={{ height: '5vh' }}></div>
          </ScrollableAnchor>
          <Row className="d-flex justify-content-center align-items-end text-white font-weight-bold pb-5 m-5">
            <h1 className="pt-5 m-0 extra-bold">about us.</h1>
          </Row>

          <Row className="px-5 mx-5 d-flex flex-column justify-content-left align-items-start text-white font-weight-bold">
            <h2 className="font-weight-bold text-white-60">who we are</h2>
          </Row>
          <Row className="d-flex flex-column align-items-center justify-content-center py-3 px-5 mx-4">
            <p className="text-white px-4 mx-5">
              We are a group of passionate college students who, after seeing how social isolation detrimentally affected our grandparents’ mental health, realized that this issue could be improved through virtual interactions. Although we must remain physically distant, we believe that we do not have to stay socially distant. During this time, it’s more important than ever to stay CONNECTED.
            </p>
          </Row>
          <ScrollableAnchor id={'aboutFocus'}>
            <Row className="px-5 mx-5 pt-5 d-flex flex-column justify-content-left align-items-start text-white font-weight-bold">
              <h2 className="font-weight-bold text-white-60 pt-2">how we do it</h2>
            </Row>
          </ScrollableAnchor>
          <Row className="d-flex flex-column align-items-center justify-content-center pt-4 px-5 mx-4">
            <p className="text-white px-4 mx-5">
              We individually match our Elderly Friends with college students for weekly phone calls.
          </p>
          </Row>
          <Row className="d-flex flex-column align-items-center justify-content-around py-4 px-5 mx-4">
            <div className="d-flex flex-row align-items-end">
              <Phone className="mx-4" style={{ fill: "#ffffff", height: '20vw' }} />
              {/* <Mail className="mx-4" style={{ fill: "#ffffff", width: '15vw' }} />
              <Letter className="mx-4" style={{ fill: "#ffffff", height: '20vw' }} /> */}
            </div>
          </Row>
          <Row className="px-5 mx-5 py-5 d-flex flex-column justify-content-left align-items-start text-white font-weight-bold">
            <h2 className="font-weight-bold text-white pt-3">our team!</h2>
          </Row>
          <Row className="px-5 mx-5 py-5 d-flex flex-row align-items-center justify-content-between">
            <p className="text-white pt-4" style={{ position: 'relative' }}>
              <div className="background" style={{ left: '3vw', top: '-34vh' }}>
                <Circle style={{ width: '10vw' }} />
              </div>
            </p>
            <div>
              <img src={evan} alt="evan" className="img-profile" />

            </div>
            <div className="p-5 about-box d-flex flex-column align-items-center justify-content-center">
              <h3>Evan</h3>
              <h4 className="font-weight-bold pb-4"> (Director of Strategic Growth)</h4>
              <p>
                Evan is a Senior at Brown University studying economics and religious studies. He is passionate about healthcare and is a cofounder and Chief Operating Officer at Intus Care. Evan also works in the non-profit sector where he serves as the Vice Chairman of the Board of Directors for two international non-profits. In the future, Evan hopes to continue serving communities around him and making a difference through programs like Connected by Intus Care.
                </p>
            </div>
          </Row>
          <Row className="px-5 mx-5 py-5 d-flex flex-row align-items-center justify-content-between">
            <p className="text-white pt-4" style={{ position: 'relative' }}>
              <div className="background" style={{ left: '0vw', top: '-12vh' }}>
                <Circle style={{ width: '10vw' }} />
              </div>
            </p>

            <div className="p-5 about-box d-flex flex-column align-items-center justify-content-center">
              <h3>Joanne</h3>
              <h4 className="font-weight-bold pb-4"> (Director of Strategic Growth)</h4>
              <p>
                Joanne is a student-athlete studying Cognitive Science at Brown University. She aspires to be a practicing physician and work with underserved communities. She is a passionate advocate for mental health and reproductive health. After constantly communicating with her grandparents across the sea in South Korea through phone calles she realized she wanted to inspire that kind of connection for others during social isolation.                 </p>
            </div>
            <img src={joanne} alt="joanne" className="img-profile" />

          </Row>
          <Row className="px-5 mx-5 py-5 d-flex flex-row align-items-center justify-content-between">
            <p className="text-white pt-4" style={{ position: 'relative' }}>
              <div className="background" style={{ left: '-5vw', top: '-25vh' }}>
                <Circle style={{ width: '10vw' }} />
              </div>
            </p>
            <img src={sophia} alt="Sohpia" className="img-profile" />
            <div className="p-5 about-box d-flex flex-column align-items-center justify-content-center">
              <h3>Sophia</h3>
              <h4 className="font-weight-bold pb-4"> (Director of Marketing)</h4>
              <p>
                Sophia is a junior studying Philosophy at Brown University, as well as the founder and CEO of her own company, Zoa Rose. Outside of work, she enjoys singing, being creative, going to the gym, and spending time with family. After seeing how lonely her grandparents felt during the COVID-19 pandemic, she felt passionate about creating an accessible solution. Through CONNECTED, Sophia hopes to make a difference.
              </p>
            </div>
          </Row>
          <Row className="px-5 mx-5 pt-5 d-flex flex-column justify-content-left align-items-start text-white font-weight-bold">
            <h2 className="font-weight-bold text-white-60">volunteer testimonials</h2>
          </Row>
          <Row className="d-flex flex-column align-items-start justify-content-left py-5 px-5 mx-4 my-5 position-relative">
            <div className="background position-absolute" style={{ left: '-10vw', top: '0' }}>
              <Circle style={{ width: '70vw' }} />
            </div>
            <p className="text-white px-4 pb-1 mx-5" style={{ width: '40vw' }}>
                Testimonial: Intus Care is a healthcare analytics platform that synthesizes financial, clinical, and administrative data 
            </p>
          </Row>
          <Row className="d-flex flex-column align-items-end justify-content-right py-5 px-5 mx-4 my-5 position-relative">
            <div className="background position-absolute" style={{ right: '-10vw', top: '0' }}>
              <Circle style={{ width: '70vw' }} />
            </div>
            <p className="text-white px-4 pb-1 mx-5" style={{ width: '40vw' }}>
                Testimonial: Intus Care is a healthcare analytics platform that synthesizes financial, clinical, and administrative data 
            </p>
          </Row>
          <Row className="d-flex flex-column align-items-start justify-content-left py-5 px-5 mx-4 my-5 position-relative">
            <div className="background position-absolute" style={{ left: '-10vw', top: '0' }}>
              <Circle style={{ width: '70vw' }} />
            </div>
            <p className="text-white px-4 pb-1 mx-5" style={{ width: '40vw' }}>
                Testimonial: Intus Care is a healthcare analytics platform that synthesizes financial, clinical, and administrative data 
            </p>
          </Row>
          <Row className="px-5 mx-5 pt-5 d-flex flex-column justify-content-left align-items-start text-white font-weight-bold">
            <h2 className="font-weight-bold text-white-60">
              our partner
            </h2>
          </Row>
          <Row className="d-flex flex-column align-items-center justify-content-center py-5 px-5 mx-4">
            <p className="text-white px-4 pb-5 mx-5">
              Intus Care is a healthcare analytics platform that synthesizes financial, clinical, and administrative data to identify and correlate trends in long-term care facilities. We do this by integrating with electronic health record, claims, and accounting software to highlight clinical risks in patients and insightfully display organizational data. Intus Care empowers care providers to mitigate preventable high-utilization events and equips executives with the tools to make informed decisions based on data.
            </p>
            <div style={{ height: '150px' }}>
            </div>
          </Row>
        </Container>
      </div>
      <Row className="d-flex flex-row justify-content-center">
        <a href="https://intuscare.com/" target="_blank" className="font-weight-bold">
          <div className="intus-link px-5 py-3 rounded-lg">
            intuscare.com
            </div>
        </a>
      </Row>
      {/* <div style={{ height: '100px' }}>
      </div> */}
    </Collapsible>
  )
}
export default About;