import React, { useEffect, useState, useRef } from "react";
import "./DevelopmentProcess.css";
import img1 from "../../assets/images/developmentprogress/img1.svg";
import img from "../../assets/images/developmentprogress/img.svg";
import img2 from "../../assets/images/developmentprogress/img2.webp";
import img3 from "../../assets/images/developmentprogress/img3.webp";
import img4 from "../../assets/images/developmentprogress/img4.webp";
import img5 from "../../assets/images/developmentprogress/img5.webp";
import img6 from "../../assets/images/developmentprogress/img6.webp";
import img7 from "../../assets/images/developmentprogress/img7.webp";
import img8 from "../../assets/images/developmentprogress/img8.webp";
import img9 from "../../assets/images/developmentprogress/img9.webp";
const DevelopmentProcess = () => {
  const [ballTransform, setBallTransform] = useState(
    "translateX(0px) translateY(0px)"
  );
  const componentRef = useRef(null);
  const keyframes = [
    // Progress calculated based on TIME percentages not scroll percentages
    { progress: 0.0, transform: "translateX(0px) translateY(0px)" }, // 0s
    { progress: 0.05, transform: "translateX(400px) translateY(100px)" }, // 1s
    { progress: 0.15, transform: "translateX(800px) translateY(200px)" }, // +2s
    { progress: 0.2, transform: "translateX(800px) translateY(350px)" }, // +1s
    { progress: 0.25, transform: "translateX(0px) translateY(500px)" }, // +1s
    { progress: 0.3, transform: "translateX(0px) translateY(580px)" }, // +1s
    { progress: 0.4, transform: "translateX(800px) translateY(750px)" }, // +2s
    { progress: 0.45, transform: "translateX(800px) translateY(900px)" }, // +1s
    { progress: 0.5, transform: "translateX(0px) translateY(1050px)" }, // +1s
    { progress: 0.55, transform: "translateX(0px) translateY(1140px)" }, // +1s
    { progress: 0.65, transform: "translateX(800px) translateY(1280px)" }, // +2s
    { progress: 0.7, transform: "translateX(800px) translateY(1450px)" }, // +1s
    { progress: 0.75, transform: "translateX(0px) translateY(1600px)" }, // +1s
    { progress: 0.8, transform: "translateX(0px) translateY(1690px)" }, // +1s
    { progress: 0.9, transform: "translateX(750px) translateY(1830px)" }, // +2s
    { progress: 1.0, transform: "translateX(750px) translateY(1900px)" }, // +2s
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!componentRef.current) return;

      const component = componentRef.current;
      const componentTop = component.offsetTop;
      const componentHeight = component.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress relative to component visibility
      const scrollStart = componentTop - viewportHeight * 0.5;
      const scrollEnd = componentTop + componentHeight - viewportHeight * 0.5;
      const scrollPosition = window.scrollY;

      let scrollProgress =
        (scrollPosition - scrollStart) / (scrollEnd - scrollStart);
      scrollProgress = Math.min(1, Math.max(0, scrollProgress));

      // Find current keyframe segment
      let startIdx = 0;
      while (
        startIdx < keyframes.length - 1 &&
        keyframes[startIdx + 1].progress <= scrollProgress
      ) {
        startIdx++;
      }
      const endIdx = Math.min(startIdx + 1, keyframes.length - 1);

      // Interpolate with easing
      const start = keyframes[startIdx];
      const end = keyframes[endIdx];
      const segmentProgress =
        (scrollProgress - start.progress) / (end.progress - start.progress);
      const easedProgress = 0.5 * (1 - Math.cos(Math.PI * segmentProgress)); // Smooth easing

      // Parse transform values
      const parseTransform = (str) => {
        const x = Number(str.match(/translateX\(([-\d.]+)px/)[1]);
        const y = Number(str.match(/translateY\(([-\d.]+)px/)[1]);
        return { x, y };
      };

      const startPos = parseTransform(start.transform);
      const endPos = parseTransform(end.transform);

      const currentX = startPos.x + (endPos.x - startPos.x) * easedProgress;
      const currentY = startPos.y + (endPos.y - startPos.y) * easedProgress;

      setBallTransform(`translateX(${currentX}px) translateY(${currentY}px)`);
    };

    const optimizedScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", optimizedScroll);
    return () => window.removeEventListener("scroll", optimizedScroll);
  }, []);

  return (
    <section className="a-76 hcygZN" ref={componentRef}>
      <div className="container">
        <div className="a-77 Bejbq">
          <div className="a-13 z-13">
            <h2 className="container p-0">Our Development Process</h2>
          </div>
          <div className="stagesProcess position-relative">
            {/* Ball Entry */}
            <div className="ballEntry d-none d-lg-block">
              <img
                alt="ball entry"
                loading="lazy"
                width="65"
                height="124"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src={img}
              />
            </div>

            {/* Ball 3D */}
            <div
              className="ball3d position-absolute d-none d-lg-block"
              style={{
                top: "6px",
                left: "0%",
                transform: ballTransform,
                transition: "transform 1s linear",
              }}
            >
              <div className="ball">
                <img
                  alt="Ball"
                  loading="lazy"
                  width="88"
                  height="88"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src={img1}
                />
              </div>
            </div>

            {/* Stages Boxes */}
            <div className="stagesBoxes">
              {/* Research and Analysis */}
              <div className="a-79 lpcpoA">
                <div className="a-80 NfKcz">
                  <div className="a-81 bBBcHj">
                    <div>
                      <img
                        alt="kickOff"
                        loading="lazy"
                        width="96"
                        height="96"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src={img2}
                      />
                    </div>
                  </div>
                  <div className="a-82 gXMToA">
                    <h3>Research and Analysis</h3>
                    <p className="desc">
                      Idea, Consultation, Research, Goal Definition, &amp;
                      Requirements Gathering
                    </p>
                  </div>
                </div>
              </div>

              {/* Design */}
              <div
                className="a-79 lpcpoA ms-auto"
                style={{ transform: "scale(-1, 1)" }}
              >
                <div
                  style={{
                    transform: "scale(-1, 1)",
                    flexDirection: "row-reverse",
                    textAlign: "end",
                  }}
                  className="a-80 NfKcz"
                >
                  <div className="a-81 bBBcHj">
                    <div>
                      <img
                        alt="Design"
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src={img3}
                      />
                    </div>
                  </div>
                  <div className="a-82 gXMToA">
                    <h3>Design</h3>
                    <p className="desc">
                      System Architecture Design, Wireframing, UI/UX Designing,
                      &amp; Prototyping
                    </p>
                  </div>
                </div>
              </div>

              {/* Development */}
              <div className="a-79 lpcpoA">
                <div className="a-80 NfKcz">
                  <div className="a-81 bBBcHj">
                    <div>
                      <img
                        alt="Development"
                        loading="lazy"
                        width="104"
                        height="73"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src={img4}
                      />
                    </div>
                  </div>
                  <div className="a-82 gXMToA">
                    <h3>Development</h3>
                    <p className="desc">
                      Functional Implementation, Software Coding &amp;
                      Optimization
                    </p>
                  </div>
                </div>
              </div>

              {/* Testing */}
              <div
                className="a-79 lpcpoA ms-auto"
                style={{ transform: "scale(-1, 1)" }}
              >
                <div
                  style={{
                    transform: "scale(-1, 1)",
                    flexDirection: "row-reverse",
                    textAlign: "end",
                  }}
                  className="a-80 NfKcz"
                >
                  <div className="a-81 bBBcHj">
                    <div>
                      <img
                        alt="Testing"
                        loading="lazy"
                        width="118"
                        height="118"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src={img5}
                      />
                    </div>
                  </div>
                  <div className="a-82 gXMToA">
                    <h3>Testing</h3>
                    <p className="desc">
                      Quality Assurance, Troubleshooting, &amp; Testing
                    </p>
                  </div>
                </div>
              </div>

              {/* Deployment */}
              <div className="a-79 lpcpoA">
                <div className="a-80 NfKcz">
                  <div className="a-81 bBBcHj">
                    <div>
                      <img
                        alt="Deployment"
                        loading="lazy"
                        width="108"
                        height="108"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src={img6}
                      />
                    </div>
                  </div>
                  <div className="a-82 gXMToA">
                    <h3>Deployment</h3>
                    <p className="desc">Launch, Beta Live, &amp; Live</p>
                  </div>
                </div>
              </div>

              {/* Evaluation */}
              <div
                className="a-79 lpcpoA ms-auto"
                style={{ transform: "scale(-1, 1)" }}
              >
                <div
                  style={{
                    transform: "scale(-1, 1)",
                    flexDirection: "row-reverse",
                    textAlign: "end",
                  }}
                  className="a-80 NfKcz"
                >
                  <div className="a-81 bBBcHj">
                    <div>
                      <img
                        alt="Evaluation"
                        loading="lazy"
                        width="94"
                        height="72"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src={img7}
                      />
                    </div>
                  </div>
                  <div className="a-82 gXMToA">
                    <h3>Evaluation</h3>
                    <p className="desc">
                      Performance Evaluation, &amp; Analytics Implementation
                    </p>
                  </div>
                </div>
              </div>

              {/* Maintenance */}
              <div className="a-79 lpcpoA">
                <div className="a-80 NfKcz">
                  <div className="a-81 bBBcHj">
                    <div>
                      <img
                        alt="Maintenance"
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src={img8}
                      />
                    </div>
                  </div>
                  <div className="a-82 gXMToA">
                    <h3>Maintenance</h3>
                    <p className="desc">
                      Monitoring, Feedback, Analysis, &amp; Complete Support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ball Exit */}
            <div className="a-78 diTaJz d-none d-lg-block">
              <div className="ballExit">
                <img
                  alt="ball exit"
                  loading="lazy"
                  width="209"
                  height="83"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src={img9}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
