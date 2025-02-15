import React, { useState, useEffect } from "react";
import "./TecorengInsights.css";
import img1 from "../../assets/images/tecorenginsight/Top-Trends-in-Ai.webp";
import img2 from "../../assets/images/tecorenginsight/RPA-main-1.webp";
import img3 from "../../assets/images/tecorenginsight/What-Is-Cyber-Security.jpg";
import img4 from "../../assets/images/tecorenginsight/blog-main-image-1.webp";
import img5 from "../../assets/images/tecorenginsight/blog-3-09.jpg";
import img6 from "../../assets/images/tecorenginsight/blog.webp";

const TecorengInsights = () => {
  // Array of slide data
  const slides = [
    {
      title: "Top Trends in AI and ML Reshaping the world of 2024",
      date: "25-01-2024 - Tecoreng",
      content:
        "Brief Overview of AI and ML In the realm of technology, two groundbreaking forces are poised to shape our future: Artificial Intelligence (AI) and Machine Learning (ML). AI, the intelligence demonstrated by machines, and ML, the ability of machines to learn from data. stand as the vanguards of a digital revolution. These technologies are not.",
      image: img1,
    },
    {
      title: "Robotic Processing Automation (RPA) How To Use In Real Life",
      date: "01-06-2023 - Paresh Solanki",
      content:
        "Robotic Processing Automation (RPA), the use of RPA, its Advantages, Limitations, and the last FAQ of RPA are all explained in this article. Robotic Processing Automation (RPA) Robotic Process Automation (RPA) is a technology that has grown significantly in popularity in recent years. Organizations may automate routine, rule-based operations with this innovative solution, freeing up.",
      image: img2,
    },
    {
      title: "7 Types Of Cyber Security Trends 2023",
      date: "16-01-2023 - Paresh Solanki",
      content:
        "7 types of cyber security trends provide protection on your computer or electronic devices. Cyber security is far to your system from authorized access by humans or non-humans. Cyber security is in simple words protecting your computer or system from unauthorized access or hackers. The Cyber security is the save your on personal and professional.",
      image: img3,
    },
    {
      title: "Artificial Intelligence: How AI is Transforming Every Industries",
      date: "20-07-2023 - Paresh Solanki",
      content:
        "Artificial intelligence (AI) refers to the emulation of human intellect in devices that have been design to behave and think like humans. The phrase may also use to refer to any computer that demonstrates characteristics of the human intellect, such as learning and problem-solving. Furthermore, there are many ways to use artificial intelligence (AI) every.",
      image: img4,
    },
    {
      title: "Agile Testing Methodology, Process & Life Cycle",
      date: "09-01-2023 - Paresh Solanki",
      content:
        "The Agile Testing Methodology Process model is part of the Software Development Life Cycle (SDLC). This process programmers use to build software programs. Also, Agile software development process models are the most popular methodology. The SDLC process is necessary for all software development companies. This method builds a high-quality project.&nbsp; Furthermore, Tecoreng explores the Agile.",
      image: img5,
    },
    {
      title: "Web3: The Story of Blockchain",
      date: "05-02-2024 - Tecoreng",
      content:
        "Brief Overview of the Evolution of the Internet The internet, a transformative force that has redefined the way we communicate, access information, and conduct business, has undergone a  remarkable evolution since its inception. Beginning as a simple network for academic and  military purposes, it has evolved into a vast and interconnected ecosystem that permeates nearly.",
      image: img6,
    },
  ];

  // State to track visible slides
  const [visibleSlides, setVisibleSlides] = useState([0, 1, 2]); // Initial indices

  // Function to shift slides forward
  const shiftSlides = () => {
    setVisibleSlides((prev) => {
      const nextSlides = prev.map((index) => (index + 1) % slides.length);
      return nextSlides;
    });
  };

  // Set up interval for automatic sliding
  useEffect(() => {
    const interval = setInterval(shiftSlides, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="mt-4">
            <div className="a-13 z-13">
              <h2 className="container p-0">Tecoreng insights</h2>
            </div>
          </div>
          <div className="c-3">
            <div className="carousel">
              <div
                className="horizontalSlider___281Ls carousel__slider carousel__slider--horizontal"
                aria-live="polite"
                aria-label="slider"
                tabIndex="0"
                role="listbox"
              >
                <div className="carousel__slider-tray-wrapper carousel__slider-tray-wrap--horizontal">
                  <div
                    className="sliderTray___-vHFQ sliderAnimation___300FY carousel__slider-tray carousel__slider-tray--horizontal responsive"
                    style={{
                      display: "flex",
                      alignItems: "stretch",
                      width: "200%",
                      transform: "translateX(0%) translateX(0px)",
                      flexDirection: "",
                    }}
                  >
                    {visibleSlides.map((index) => (
                      <div
                        key={index}
                        tabIndex="0"
                        aria-selected="true"
                        aria-label="slide"
                        role="option"
                        className="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--visible"
                        style={{
                          width: "15.3337%",
                          padding: "unset",
                          height: "unset",
                        }} // 3 slides in row
                      >
                        <div
                          className="slideInner___2mfX9 carousel__inner-slide"
                          style={{ position: "unset" }}
                        >
                          <a
                            target="_blank"
                            href="/blog/top-trends-in-ai-and-ml-reshaping-the-world-of-2024"
                          >
                            <div className=" c-5">
                              <div className="blogImg">
                                <span
                                  className="lazy-load-image-background blur lazy-load-image-loaded"
                                  style={{
                                    color: "transparent",
                                    display: "inline-block",
                                    height: "100%",
                                    width: "100%",
                                  }}
                                >
                                  <img
                                    alt={slides[index].title}
                                    src={slides[index].image}
                                    height="100%"
                                    width="100%"
                                  />
                                </span>
                              </div>
                              <div className="blogDesc">
                                <div className="blogDescTitle">
                                  {slides[index].title}
                                </div>
                                <div className="blogDescDate">
                                  {slides[index].date}&nbsp;-&nbsp;
                                  <span>Tecoreng</span>
                                </div>
                                <div className="blogDescRead">
                                  <p>{slides[index].content}</p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TecorengInsights;
