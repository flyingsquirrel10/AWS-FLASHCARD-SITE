import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

import productData from "../../utils/products.json";
import { sliderSettingsProducts } from "../../utils/common";

import "./Products.css";

const Products = () => {
  return (
    <section id="Products" className="products-wrapper">
      <div className="paddings innerWidth products-container">
        <div className="flexColStart products-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular products</span>
        </div>

        <Swiper {...sliderSettingsProducts}>
          {/* <SliderButtons /> */}
          {productData.map((product, key) => (
            <SwiperSlide key={key}>
              <div className="flexColStart product-card">
                {product.link ? (
                  <a
                    className="flexColStart"
                    href={product.link}
                    target="_blank"
                  >
                    <img src={product.image} alt="product image" />
                    <span className="secondaryText product-price">
                      <span style={{ color: "orange" }}>$</span>
                      <span>{product.price}</span>
                    </span>

                    <span className="primaryText">{product.name}</span>
                    <span className="secondaryText">{product.detail}</span>
                  </a>
                ) : (
                  <>
                    <img src={product.image} alt="product image" />

                    <span className="secondaryText product-price">
                      <span style={{ color: "orange" }}>$</span>
                      <span>{product.price}</span>
                    </span>

                    <span className="primaryText">{product.name}</span>
                    <span className="secondaryText">{product.detail}</span>
                  </>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Products;
