import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner_main">
      <div className="banner_text">
        There is nothing like <span>Staying at your own house</span> with real comfort.
      </div>
      <div className="banner_img">
      <img src="/images/home_loan_banner.svg" alt="banner"/>
      </div>
    </div>
  );
};

export default Banner;
