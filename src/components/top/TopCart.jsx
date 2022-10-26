import React from "react";
import Slider from "react-slick";
import Tdata from "./Tdata";

const TopCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
            <React.Fragment key={index}>
              <div className="box product"  >
                <div className="nametop d_flex">
                  <span className="t_left">{value.para}</span>
                  <span className="t_right">{value.desc}</span>
                </div>
                <div className="img">
                  <img src={value.cover} alt="" />
                </div>
              </div>
              </React.Fragment>
          );
        })}
      </Slider>
    </>
  );
};

export default TopCart;
