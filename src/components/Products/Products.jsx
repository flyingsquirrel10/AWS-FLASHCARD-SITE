import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

import "./Products.css";

const Products = () => {
  return (
    <section id="Products" className="products-wrapper">
      <div className="paddings innerWidth products-container">
        <div className="flexColStart products-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular products</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((house, key) => (
            <SwiperSlide key={key}>
              <div className="flexColStart house-card">
                <img src={house.image} alt="House image" />

                <span className="secondaryText house-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{house.price}</span>
                </span>

                <span className="primaryText">{house.name}</span>
                <span className="secondaryText">{house.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Products;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter products-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
