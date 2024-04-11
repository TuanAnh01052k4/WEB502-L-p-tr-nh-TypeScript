import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import data from "../../db.json";

const MainLogo = () => {
  return (
    <Slide>
      {/* <div className='item active'>
        <ul className='partner-list'>
          {data.logoBrand.map((sliders, i) => (
            <li key={i + 1} style={{ backgroundImage: `url(${sliders.images})` }}>
            </li>
          ))}
        </ul>
      </div> */}
      <div className="item active">
        <ul className="partner-list">
          {data.logoBrand.map((logoB, i) => (
            <li key={i + 1}>
              <img alt="" src={logoB.images} />
            </li>
          ))}
        </ul>
      </div>
      <div className="item">
        <ul className="partner-list">
          {data.logoBrand.map((logoB, i) => (
            <li key={i + 1}>
              <img alt="" src={logoB.images} />
            </li>
          ))}
        </ul>
      </div>
    </Slide>
  );
};

export default MainLogo;
