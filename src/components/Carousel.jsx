import React from "react";
// import p1 from "../assets/fp1.png";
import { Carousel } from "antd";
import p1 from "../assets/eventbg.jpg";
import p2 from "../assets/mission1.jpg";
import p3 from "../assets/mission2.jpg";
import p4 from "../assets/mission5.jpg";
const contentStyle = {
  height: "63rem",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};
const HeaderCarousel = () => {
  return (
    <Carousel effect="fade">
      <div clas>
        <h3 style={contentStyle}>
          <img src={p1} alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={p2} alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={p3} alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={p4} alt="" />
        </h3>
      </div>
    </Carousel>
  );
};

export default HeaderCarousel;
