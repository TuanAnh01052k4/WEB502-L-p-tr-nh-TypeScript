import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import data from "../../db.json";
import "../index.scss";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div>
      <div className="background-slider">
        <Slide>
          {data.slider.map((sliders, index) => (
            <div
              key={index + 1}
              className="slide-item"
              style={{ backgroundImage: `url(${sliders.images})` }}
            ></div>
          ))}
        </Slide>
      </div>
      <div className="slide-caption">
        <h2>Chúng tôi là Delicio</h2>
        <h2>Lý tưởng cho người yêu Sô cô la</h2>
        <h2>
          <a href="#">XEM THÊM</a>
        </h2>
      </div>
    </div>
  );
};

export default Banner;
