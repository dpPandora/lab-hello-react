//import logo from './logo.svg';
import IHlogo from './images/ironhack-logo-xs.png';
import hamBurg from './images/menu-top-xs.png';

import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="top">
        <nav className='nav'>
          <img src={IHlogo} alt='ihlogo'/>
          <img src={hamBurg} alt='nbgdjfnb' />
        </nav>
        <h1 className='topH1'>Say hello to ReactJS</h1>
        <p className='topP'>You will learn how to blah blah blah why cant i find any snippet completion things i dont want to write out the brackets every single freaking time</p>
        <button className='btn'>Pog champ</button>
      </div>
      <div className="bottom">
          <div className='card'>
            <img src={icon1} alt="icon"/>
            <h2>Declarative</h2>
            <p>blah blah blah blah you didnt give me the  raw text :C</p>
          </div>
          <div className='card'>
            <img src={icon2} alt="icon"/>
            <h2>Compnents</h2>
            <p>does anyone remember that funky dancing cow?</p>
          </div>
          <div className='card'>
            <img src={icon3} alt="icon"/>
            <h2>Single-Way</h2>
            <p>why cant i autocomplete the div tag???</p>
          </div>
          <div className='card'>
            <img src={icon4} alt="icon"/>
            <h2>JSX</h2>
            <p>honestly its probably my fault but im still gonna be salty about it lol</p>
          </div>

      </div>
    </div>
  );
}

export default App;
