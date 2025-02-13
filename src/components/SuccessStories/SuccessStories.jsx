import React, { useRef } from "react";
import "./SuccessStories.css";
import bettingimg from "../../assets/images/success/betting.webp";
import helthimg from "../../assets/images/success/helth.webp";
import ecommerceimg from "../../assets/images/success/ecommerce.webp";
import betting from "../../assets/videos/BettingPlatform.mp4";
import helth from "../../assets/videos/HelthandWellness.mp4";
import ecommmerce from "../../assets/videos/E-Commerce.mp4";

const SuccessStories = () => {
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
      video.style.opacity = 1; // Show the video
      video.previousElementSibling.style.opacity = 0; // Hide the image
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0; // Reset video to the beginning
      video.style.opacity = 0; // Hide the video
      video.previousElementSibling.style.opacity = 1; // Show the image
    }
  };

  return (
    <div className="container">
      <div className="sc-3acf39f6-0 gDnSdl">
        <div className="a-13 z-13">
          <h2 className="container p-0">Our Success Stories</h2>
        </div>
        <div className="gap-3 d-md-flex">
          <div className="portfolio-box-main">
            <a
              href="/portfolio/betting-platform"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
            >
              <div className="portfolio-box-story flex-column gap-3">
                <div className="portfolio-box-img">
                  <img
                    alt="Betting Platform"
                    loading="lazy"
                    width="360"
                    height="341"
                    decoding="async"
                    data-nimg="1"
                    style={{
                      color: "transparent",
                      transition: "opacity 0.3s ease",
                    }}
                    src={bettingimg}
                  />
                  <video
                    ref={(el) => (videoRefs.current[0] = el)}
                    className="portfolio-box-video"
                    loop
                    muted
                    style={{ opacity: 0, transition: "opacity 0.3s ease" }}
                  >
                    <source src={betting} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="portfolio-box-detail-stories">
                  <div className="portfolio-box-detail-title">
                    <h3>Betting Platform</h3>
                  </div>
                  <div className="portfolio-box-detail-stories-desc">
                    Tecoreng's Online Betting Platform revolutionizes how
                    enthusiasts engage with betting, offering seamless
                    experiences across sports, esports, casino games, and more.
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="portfolio-box-main">
            <a
              href="/portfolio/health-and-wellness"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
            >
              <div className="portfolio-box-story flex-column gap-3">
                <div className="portfolio-box-img">
                  <img
                    alt="Health and Wellness"
                    loading="lazy"
                    width="360"
                    height="341"
                    decoding="async"
                    data-nimg="1"
                    style={{
                      color: "transparent",
                      transition: "opacity 0.3s ease",
                    }}
                    src={helthimg}
                  />
                  <video
                    ref={(el) => (videoRefs.current[1] = el)}
                    className="portfolio-box-video"
                    loop
                    muted
                    style={{ opacity: 0, transition: "opacity 0.3s ease" }}
                  >
                    <source src={helth} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="portfolio-box-detail-stories">
                  <div className="portfolio-box-detail-title">
                    <h3>Health and Wellness</h3>
                  </div>
                  <div className="portfolio-box-detail-stories-desc">
                    Excitement fills the air as we proudly unveil our Health and
                    Wellness Platform—a pivotal portal toward maximizing your
                    health journey.
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="portfolio-box-main">
            <a
              href="/portfolio/e-commerce-store"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              <div className="portfolio-box-story flex-column gap-3">
                <div className="portfolio-box-img">
                  <img
                    alt="An E - Commerce"
                    loading="lazy"
                    width="361"
                    height="341"
                    decoding="async"
                    data-nimg="1"
                    style={{
                      color: "transparent",
                      transition: "opacity 0.3s ease",
                    }}
                    src={ecommerceimg}
                  />
                  <video
                    ref={(el) => (videoRefs.current[2] = el)}
                    className="portfolio-box-video"
                    loop
                    muted
                    style={{ opacity: 0, transition: "opacity 0.3s ease" }}
                  >
                    <source src={ecommmerce} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="portfolio-box-detail-stories">
                  <div className="portfolio-box-detail-title">
                    <h3>An E - Commerce</h3>
                  </div>
                  <div className="portfolio-box-detail-stories-desc">
                    Delve into the world of our custom-designed Ecommerce
                    Platform, a true testament to Tecoreng's meticulous
                    craftsmanship.
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
