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

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    // if (window.scrollY > 1) {
    //     console.log('hi1', window.scrollY);
    //     console.log(window.location.href);
    // }
    // if (window.location.href.split('#').length > 1) {
      // console.log("before", window.scrollY)
      const focusRef = window.location.href.split('#').length > 1 ? window.location.href.split('#')[1] : window.location.href.split('#')[0];
      if (focusRef === 'home' || (window.scrollY < 720)) {
        // console.log('home', window.scrollY);
        this.setState({ focus: 'home' });
      } else if ((focusRef === 'about') || (focusRef === 'aboutFocus') || (720 < window.scrollY && window.scrollY < 1950)) {
        // console.log('about');

        this.setState({ focus: 'about' });
      } else if ((focusRef === 'impact') || (focusRef === 'impactFocus') || (1950 < window.scrollY && window.scrollY < 2730)) {
        this.setState({ focus: 'impact' });
        // console.log('impact');

      } else if ((focusRef === 'involved') || (2730 <= window.scrollY)) {
        // console.log('involved');

        this.setState({ focus: 'involved' });
      }
      // console.log('hitting none');
      // console.log(window.scrollY);

      // console.log(720 < window.scrollY && window.scrollY <  1950);
    // }
    // if (window.scrollY > 20) {
    //   console.log('hi1');
    //   console.log(window.location.href);
    //   // document.querySelector(".navbar").className = "navbar scroll";
    // } else {
    //   console.log('2');
    //   console.log(window.location.href);

    //   // document.querySelector(".navbar").className = "navbar";
    // }
  };

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
              <div style={{ marginLeft: '-7px' }} className="px-1  rounded-lg volunteer-link cursor-pointer d-flex flex-row align-items-center justify-content-center">
                <h4 className="extra-bold medium-text pt-1">GET <br /> INVOLVED</h4>
              </div>
            </h4>
          </a>
        </div>
        {/* <div className="position-relative w-75 pt-2">
          <a
            href="https://forms.gle/ykD6ZPyRhynVq6LfA"
            target="_blank"
          >
            <div className="px-3 py-2 rounded-lg volunteer-link cursor-pointer d-flex flex-row align-items-center justify-content-center">
              VOLUNTEER
            </div>
          </a>
        </div> */}
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