import React from "react";
import Slider from "react-slick";
import Ddata from "./Ddata";
const Dcart = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    margin: 20,
  };
  return (
    <>
      <Slider {...settings}>
        {Ddata.map((value, index) => {
          return (
            <React.Fragment key={index}>
              <div className="box product" key={index}>
                <div className="img">
                  <img src={value.cover} width={"100%"} alt="" />
                </div>
                <h4>{value.name}</h4>
                <span>{value.price}</span>
              </div>
            </React.Fragment>
          );
        })}
      </Slider>
    </>
  );
};

export default Dcart;
