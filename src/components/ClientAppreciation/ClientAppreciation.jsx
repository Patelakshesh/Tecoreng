import React, { useState, useEffect } from "react";
import "./ClientAppreciation.css";

const ClientAppreciation = () => {
  // Array of client data
  const clients = [
    {
      name: "Juan S Ortiz Salazar",
      position: "Acme Corp",
      comment:
        "They were honest about their abilities from the beginning, have fantastic communication skills, and are overall a dream to work with! Myself and my team felt beyond confident of their abilities and that they were doing the work on a week to week basis just as they stated they would. I will definitely be looking to hiring Tecoreng first before considering anyone else on Upwork!!",
    },
    {
      name: "Tim Loenders",
      position: "BPOS LOENDERS GCV",
      comment:
        "Paresh worked out the infrastructure topology and did a fine job on that. He gave me insights about how to tackle setup that I didn't have which saved the project time and money.",
    },
    {
      name: "Denis Cartin",
      position: "CTO, SoSFba",
      comment:
        "They have good timing and quality in task solving. Their project management was outstanding. Always delivered on time and quickly replied to our needs and demands. The Communication was effective and running smoothly, with constant updates on the project's progress. They also shared significant insights and suggestions for developing the project.",
    },
    {
      name: "Kean Graham",
      position: "CEO, MonetizeMore",
      comment:
        "What most impressed us about Technical Core Engineers was their wide range of knowledge and commitment to the completion of our project. They exceeded our expectations rather than meeting them. Their ability to quickly understand the difficulties of our business and personalize their solutions to our specific need was absolutely impressive.",
    },
    {
      name: "Chetan Patwardhan",
      position: "CEO, HiQuest Group of IT Companies",
      comment:
        "What most impressed us about Technical Core Engineers was their commitment to delivering a service that exceeded our expectations. Their commitment to the project, dedication to excellence, and willingness to go the extra mile truly distinguish them. They demonstrated a thorough understanding of the business and adjusted their solutions to meet our specific needs.",
    },
  ];

  // State to track visible slides
  const [visibleSlides, setVisibleSlides] = useState([0, 1, 2]); // Initial indices

  // Function to shift slides forward
  const shiftSlides = () => {
    setVisibleSlides((prev) => {
      const nextFirstSlide = (prev[0] + 1) % clients.length;
      const nextSecondSlide = (prev[1] + 1) % clients.length;
      const nextThirdSlide = (prev[2] + 1) % clients.length;

      // Reset when reaching the last slide
      if (nextThirdSlide === 0) {
        return [0, 1, 2]; // Restart from the first three slides
      }

      return [nextFirstSlide, nextSecondSlide, nextThirdSlide];
    });
  };
  // Set up interval for automatic sliding
  useEffect(() => {
    const interval = setInterval(shiftSlides, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className=" c-6">
      <div className="container">
        <div className="a-13 z-13">
          <h2 className="container p-0">Appreciation from Clients</h2>
        </div>
        <div className="a-8 c-7">
          <div className="carousel-container">
            <div className="carousel">
              <div className="a-8 c-8">
                <div
                  className="horizontalSlider___281Ls carousel__slider carousel__slider--horizontal"
                  aria-live="polite"
                  aria-label="slider"
                  tabIndex="0"
                  role="listbox"
                >
                  <div className="carousel__slider-tray-wrapper carousel__slider-tray-wrap--horizontal">
                    <div
                      className="sliderTray___-vHFQ sliderAnimation___300FY carousel__slider-tray carousel__slider-tray--horizontal r-2"
                      style={{
                        display: "flex",
                        alignItems: "stretch",
                        width: "166.667%",
                        transform: `translateX(-${visibleSlides[0] * 20}%)`,
                        flexDirection: "row",
                      }}
                    >
                      {clients.map((client, index) => (
                        <div
                          key={index}
                          tabIndex={visibleSlides.includes(index) ? 0 : -1}
                          aria-selected={visibleSlides.includes(index)}
                          aria-label="slide"
                          role="option"
                          className={`slide___3-Nqo slideHorizontal___1NzNV carousel__slide ${
                            visibleSlides.includes(index)
                              ? "carousel__slide--visible"
                              : "carousel__slide--hidden"
                          }`}
                          style={{
                            width: "20%",
                            paddingBottom: "unset",
                            height: "unset",
                          }}
                        >
                          <div
                            className="slideInner___2mfX9 carousel__inner-slide"
                            style={{ position: "unset" }}
                          >
                            <div className=" c-9">
                              <div className="boxes">
                                <div className="clientName">{client.name}</div>
                                <div className="clientPosition">
                                  {client.position}
                                </div>
                                <div className="clientComment">
                                  {client.comment}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="controls">
                  <div className="carousel__dot-group dot-group">
                    {clients.map((_, index) => (
                      <button
                        key={index}
                        aria-label="slide dot"
                        type="button"
                        className={`dot___3c3SI carousel__dot carousel__dot--${index} ${
                          visibleSlides.includes(index)
                            ? "carousel__dot--selected"
                            : ""
                        }`}
                        onClick={() =>
                          setVisibleSlides([
                            index,
                            (index + 1) % clients.length,
                            (index + 2) % clients.length,
                          ])
                        }
                      >
                        <span></span>
                      </button>
                    ))}
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

export default ClientAppreciation;
