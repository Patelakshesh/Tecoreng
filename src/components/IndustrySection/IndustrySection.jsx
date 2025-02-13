import React from "react";
import "./IndustrySection.css";
import img1 from "../../assets/images/industrial/img1.webp";
import img2 from "../../assets/images/industrial/img2.webp";
import img3 from "../../assets/images/industrial/img3.webp";
import img4 from "../../assets/images/industrial/img4.webp";
import img5 from "../../assets/images/industrial/img5.webp";
import img6 from "../../assets/images/industrial/img6.webp";
const IndustrySection = () => {
  return (
    <div className="container">
      <div className="a-90 bdSzjT">
        <div className="a-13 z-13">
          <h2 className="container p-0">Industries We are experts in</h2>
        </div>

        <div className="image-row">
          <div
            className="position-relative image-container"
            style={{ width: "45%", marginRight: "21px", height: "200px" }}
          >
            <img
              alt="Supply chain & Logistics"
              loading="lazy"
              width="531"
              height="284"
              decoding="async"
              data-nimg="1"
              className="zoom-image"
              style={{
                color: "transparent",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={img1}
            />
            <div className="centered-text">
              <h3>Supply chain & Logistics</h3>
            </div>
          </div>

          <div
            className="position-relative image-container"
            style={{ width: "27%", marginRight: "21px", height: "200px" }}
          >
            <img
              alt="Healthcare"
              loading="lazy"
              width="284"
              height="284"
              decoding="async"
              data-nimg="1"
              style={{
                color: "transparent",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={img2}
            />
            <div className="centered-text">
              <h3>Healthcare</h3>
            </div>
          </div>

          <div
            className="position-relative image-container"
            style={{ width: "28%", height: "200px" }}
          >
            <img
              alt="Education"
              loading="lazy"
              width="284"
              height="284"
              decoding="async"
              data-nimg="1"
              style={{
                color: "transparent",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={img3}
            />
            <div className="centered-text">
              <h3>Education</h3>
            </div>
          </div>
        </div>

        <div className="image-row">
          <div
            className="position-relative image-container"
            style={{ width: "28%", marginRight: "21px", height: "200px" }}
          >
            <img
              alt="Banking"
              loading="lazy"
              width="284"
              height="284"
              decoding="async"
              data-nimg="1"
              className="zoom-image"
              style={{
                color: "transparent",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={img4}
            />
            <div className="centered-text">
              <h3>Banking</h3>
            </div>
          </div>

          <div
            className="position-relative image-container"
            style={{ width: "27%", marginRight: "21px", height: "200px" }}
          >
            <img
              alt="E-commerce"
              loading="lazy"
              width="284"
              height="284"
              decoding="async"
              data-nimg="1"
              style={{
                color: "transparent",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={img5}
            />
            <div className="centered-text">
              <h3>E-commerce</h3>
            </div>
          </div>

          <div
            className="position-relative image-container"
            style={{ width: "45%", height: "200px" }}
          >
            <img
              alt="Travel"
              loading="lazy"
              width="531"
              height="284"
              decoding="async"
              data-nimg="1"
              style={{
                color: "transparent",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={img6}
            />
            <div className="centered-text">
              <h3>Travel</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySection;
