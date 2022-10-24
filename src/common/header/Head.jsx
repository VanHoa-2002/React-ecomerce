import React from "react";
import EN from "../../components/assets/icons/en-icon.png";
import VN from "../../components/assets/icons/vn-icon.png";
const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label htmlFor=""><a style={{color:"inherit"}} href="tel:+025 225 3365" >+025 225 3365</a></label>
            <i className="fa fa-envelope"></i>
            <label htmlFor="">vnr@gmail.com</label>
          </div>
          <div className="right row RText content">
            <li>Theme FAQ's</li>
            <li>Need Helps</li>
            <li className="trans-icon">
              <img width={20} src={EN} alt="" />
              &nbsp;English
            </li>
            <li className="trans-icon">
              <img width={20} src={VN} alt="VietNam"  />
              &nbsp; VietNam
            </li>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
