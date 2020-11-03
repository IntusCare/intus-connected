import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import { Container, Row, Col } from 'react-bootstrap';
import connected from '../assets/connected-logos-indigo.png';
import { ReactComponent as Heart } from '../assets/heart.svg';
import { ReactComponent as WhiteCircle } from '../assets/white_circle.svg';
import '../styles/Utilities.scss';
import '../styles/NavBar.scss';

configureAnchors({ scrollDuration: 700 });

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: 'home',
    };
  }

  render() {
    return (
      <div className="nav-bar">
        <div class="circle-bg" />
        <div class="vl"></div>
        <div class="d-flex flex-column align-items-left justify-content-between h-75 ">
          <a href={`#home`} class="h-25">
            <h4
              className={`${this.state.focus === 'home' ? 'subcat focused' : 'subcat'} d-flex flex-row align-items-left`}
              onClick={() => this.setState({ focus: 'home' })}
            >
              <div className="plus position-absolute">+</div>
              <div className="number">1</div>
              <div>HOME</div>
            </h4>
          </a>
          <a href={`#about`} class="h-25">
            <h4
              className={`${this.state.focus === 'about' ? 'subcat focused' : 'subcat'} d-flex flex-row align-items-left`}
              onClick={() => this.setState({ focus: 'about' })}
            >
              <div className="plus position-absolute">+</div>
              <div className="number">2</div>
              <div>ABOUT</div>
            </h4>
          </a>
          <a href={`#impact`} class="h-25">
            <h4
              className={`${this.state.focus === 'impact' ? 'subcat focused' : 'subcat'} d-flex flex-row align-items-left`}
              onClick={() => this.setState({ focus: 'impact' })}
            >
              <div className="plus position-absolute">+</div>
              <div className="number">3</div>
              <div>IMPACT</div>
            </h4>
          </a>
          <a href={`#involved`} class="h-25">
            <h4
              className={`${this.state.focus === 'involved' ? 'subcat focused' : 'subcat'} d-flex flex-row align-items-left`}
              onClick={() => this.setState({ focus: 'involved' })}
            >
              <div className="plus position-absolute">+</div>
              <div className="number">4</div>
              <div>GET <br /> INVOLVED</div>
            </h4>
          </a>
        </div>
        <div className="position-relative w-75 pt-2">
          <a
            href="https://forms.gle/ykD6ZPyRhynVq6LfA"
            target="_blank"
          >
            <div className="px-3 py-2 rounded-lg volunteer-link cursor-pointer d-flex flex-row align-items-center justify-content-center">
              VOLUNTEER
            </div>
          </a>
        </div>
        {/* 
        <div className="subcat-wrap d-flex flex-row align-items-center">
          <a href={`#home`}>
            <h4
              className={`${this.state.focus === 'home' ? 'subcat-white' : 'subcat'} d-flex flex-row align-items-center`}
              onClick={() => this.setState({ focus: 'home' })}
            >
              1 + HOME
          </h4>
          </a>
        </div>
        <div className="subcat-wrap">
          <a href={`#about`}>
            <h4
              className={`${this.state.focus === 'about' ? 'subcat-white' : 'subcat'} d-flex flex-row align-items-center`}
              onClick={() => this.setState({ focus: 'about' })}
            >
              2 + ABOUT
          </h4>
          </a>
        </div>
        <div className="subcat-wrap">
          <a href={`#impact`}>
            <h4
              className={`${this.state.focus === 'impact' ? 'subcat-white' : 'subcat'} d-flex flex-row align-items-center`}
              onClick={() => this.setState({ focus: 'impact' })}
            >
              3 + IMPACT
          </h4>
          </a>
        </div>
        <div className="subcat-wrap">
          <a href={`#involved`}>
            <h4
              className={`${this.state.focus === 'involved' ? 'subcat-white' : 'subcat'} d-flex flex-row align-items-center`}
              onClick={() => this.setState({ focus: 'involved' })}
            >
              4 + GET INVOLVED
          </h4>
          </a>
        </div>
       */}
      </div>
    )
  }
}

export default NavBar;