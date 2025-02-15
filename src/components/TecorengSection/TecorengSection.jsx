import React from "react";
import "./TecorengSection.css";
import img1 from "../../assets/images/tecorengSection/img1.webp";
import img2 from "../../assets/images/tecorengSection/img2.webp";
import img3 from "../../assets/images/tecorengSection/img3.webp";
import img4 from "../../assets/images/tecorengSection/img4.webp";

const TecorengSection = () => {
  const handleGetInTouchClick = () => {
    alert("Get in touch button clicked");
  };

  return (
    <section className="a-7 c-25">
      <div className="container">
        <div className="a-7 c-26">
          <div className="outlineTitle">
            <h2>Why Tecoreng for your next project</h2>
          </div>
          <p>
            Introducing Technical Core Engineers (TCE), the intersection of
            technology and innovation. At TCE, we excel in delivering
            exceptional IT services customized to fulfill your development
            requirements. Harnessing our expertise and enthusiasm, we breathe
            life into your ideas. Backed by a team of seasoned developers with
            extensive knowledge in various programming technologies, our
            dedication is unwavering, ensuring the delivery of outstanding
            results. Our mission is straightforward: decode the language of
            binary and transform it into extraordinary digital solutions that
            empower your business.
          </p>
          <a href="/who-we-are">
            <button className="pushable" onClick={handleGetInTouchClick}>
              <span className="front">Get In Touch</span>
            </button>
          </a>
          <div className="boxes3D">
            <div className="row">
              <div className="col-6 col-md-3">
                <div className="a-7 c-27">
                  <div className="d-flex align-items-center flex-column text-center">
                    <div className="Box3dIcon">
                      <img
                        alt="Reporting & Analysis"
                        loading="lazy"
                        width="56"
                        height="53"
                        decoding="async"
                        style={{ color: "transparent", height: "auto" }}
                        src={img1}
                      />
                    </div>
                    <div style={{ paddingTop: "5px" }}>
                      Reporting & Analysis
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="a-7 c-27">
                  <div className="d-flex align-items-center flex-column text-center">
                    <div className="Box3dIcon">
                      <img
                        alt="On-Time Delivery"
                        loading="lazy"
                        width="66"
                        height="66"
                        decoding="async"
                        style={{ color: "transparent", height: "auto" }}
                        src={img2}
                      />
                    </div>
                    <div style={{ paddingTop: "5px" }}>On-Time Delivery</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="a-7 c-27">
                  <div className="d-flex align-items-center flex-column text-center">
                    <div className="Box3dIcon">
                      <img
                        alt="Seamless Communication"
                        loading="lazy"
                        width="66"
                        height="66"
                        decoding="async"
                        style={{ color: "transparent", height: "auto" }}
                        src={img3}
                      />
                    </div>
                    <div style={{ paddingTop: "5px" }}>
                      Seamless Communication
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="a-7 c-27">
                  <div className="d-flex align-items-center flex-column text-center">
                    <div className="Box3dIcon">
                      <img
                        alt="Post Launch Support"
                        loading="lazy"
                        width="66"
                        height="66"
                        decoding="async"
                        style={{ color: "transparent", height: "auto" }}
                        src={img4}
                      />
                    </div>
                    <div style={{ paddingTop: "5px" }}>Post Launch Support</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="a-7 c-27">
                  <div className="text-center">
                    <b>Agile Methodology</b>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="a-7 c-27">
                  <div className="text-center">
                    <b>Certified Experts</b>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="a-7 c-27">
                  <div className="text-center">
                    <b>Budget Friendly</b>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="a-7 c-27">
                  <div className="text-center">
                    <b>100% Client Expectation</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TecorengSection;
