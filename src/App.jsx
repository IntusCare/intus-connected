import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/BootstrapCustom.scss';
import Connected from './components/Connected';
import Impact from './components/Impact';
import About from './components/About';
import Involved from './components/Involved';
import NavBar from './components/Nav';

function App() {
  return (
    <>
      <div className="h-100" style={{ position: 'fixed', top: '0px', left: '0px', zIndex: '9', width: '25vw' }}>
        <NavBar />
      </div>
      <div className="App h-100 d-flex flex-column">
        <Connected />
        <About />
        <Impact />
        <Involved />
      </div>


    </>
  );
}

export default App;
