import React from 'react';
import "./css/slider.css";
import "./css/responsive.css";

function Slider() {
  return (
    <div className="App">
        <h2 className="slider-h3">CodeCademy certfificates</h2>
        <div className="fling-minislide">
            <img src={require("./img/c1.jpg")} alt="certificate" />
            <img src={require("./img/c2.jpg")} alt="certificate" />
            <img src={require("./img/c3.jpg")} alt="certificate" />
            <img src={require("./img/c4.jpg")} alt="certificate" />
            <img src={require("./img/c5.jpg")} alt="certificate" />
            <img src={require("./img/c6.jpg")} alt="certificate" />
        </div>
        
    </div>
  );
}

export default Slider;
