import React from 'react';
import "./css/main.css";
import "./css/responsive.css"
import resume from "./img/Giada Unger Resume.pdf"
import Slider from './Slider';

function Main() {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="App">
        <div><img src={require("./img/banner.png")} alt="banner" className="banner" /></div>
        
        <div className="btn-div">
        <ul className="btn-ul">
            <li><button className="btn" onClick={() => openInNewTab(resume)}>Resume</button></li>
            <li><button className="btn" onClick={() => openInNewTab('https://github.com/giadaunger')}>Github</button></li>
            <li><button className="btn" onClick={() => openInNewTab('https://www.linkedin.com/in/giada-unger-4bb74715a/')}>LinkedIn</button></li>
        </ul>
        </div>

        <Slider />
    </div>
  );
}

export default Main;
