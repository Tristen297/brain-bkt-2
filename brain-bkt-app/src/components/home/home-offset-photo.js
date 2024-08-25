import React from "react";
import WomenWorking from "../../images-and-icons/women-working.jpg";
import "../../styles/home/offset-photo.css";

function HomeOffsetPhoto() {
  return (
    <div className="offset-photo-content">
      <div className="offset-photo-div">
        <a href="#">
          <img
            src={WomenWorking}
            alt="Women working together at computer"
            className="offset-photo"
          />
        </a>
      </div>
      <div className="offset-text-container">
        <div className="offset-text">
          <h1 className="offset-text-title">Drive Your Brand to Success</h1>
          <p className="offset-text-main">
          Our clients appreciate our attention to detail and creativity. Your brand's visibility is our top priority. We turn ideas into eye-catching designs that move with you.
          </p>
          <p className="offset-text-main">
          We're a dynamic team elevating brands with stunning graphic designs and custom vehicle wraps. From concept to installation, we create visuals that attract attention and leave a lasting impression.
          </p>
        </div>
        <div className="offset-button">
          <h3>
            <a href="#">LEARN MORE ABOUT OUR WORK ⟶</a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default HomeOffsetPhoto;
