import React from "react";
import "./style.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <h1>Bonik</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              dolorum, blanditiis perferendis repellat tempora aut deleniti
              magni vel. Eligendi, excepturi amet sunt in aspernatur maiores
              laudantium consequuntur officia. Quasi, molestias.
            </p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i className="fa-brands fa-google-play"></i>
                <span>Google Play</span>
                <i className="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>
          <div className="box">
            <h2>About Us</h2>
            <ul>
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Term && Conditions</li>
                <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box">
            <h2>Customers Care</h2>
            <ul>
                <li>Help Center</li>
                <li>How To Buy</li>
                <li>Corporate & Bulk Purchasing</li>
                <li>Rerurns & Refunds</li>
            </ul>
          </div>
          <div className="box">
            <h2>Contact Us</h2>
            <ul>
                <li>25 Tan Phu, HCM </li>
                <li>Email : mail@gmail.com</li>
                <li>Phone: +84 5255 225 23</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
