import React from "react";
import FlashCard from "./FlashCard";

const FlashDeals = ({productItems,addToCart}) => {
  return (
    <>
      <section className="flash background">
        <div className="container">
          <div className="f_flex heading">
            <i className="fa fa-bolt"></i>
            <h1>Flash Deals</h1>
          </div>
        </div>
        <FlashCard addToCart={addToCart} productItems = {productItems} />
      </section>
    </>
  );
};

export default FlashDeals;
