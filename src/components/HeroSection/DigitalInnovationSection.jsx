import { useMemo } from "react";
import animation from "../../assets/images/animation1.webp";
import ball from "../../assets/images/ball.webp";
import infinite from "../../assets/images/infinite.webp";

const DigitalInnovationSection = () => {
  const pathImageSrc = useMemo(() => infinite, []);
  const ballImageSrc = useMemo(() => ball, []);
  const frontImageSrc = useMemo(() => animation, []);

  return (
    <section className="a-10 z-9">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="a-11 z-10">
              <h2>Transfer your enterprise with digital innovation</h2>
              <p>
                Your success as a market innovator reflects our strides as a
                unified partner. Committed to assisting you in attaining
                excellence through our solutions, we boast a team of adept
                professionals and dynamic facilitators. Our steadfast commitment
                to a collaborative strategy, coupled with agile methodologies,
                propels business expansion. Rely on our strategic insights and
                development processes, and we will fuel your concepts to
                manifest as groundbreaking disruptions.
              </p>
              <a href="/hire-developer">
                <button className="pushable">
                  <span className="front">Hire Now</span>
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="a-12 evetls">
              <svg viewBox="0 0 1400 800" xmlns="http://www.w3.org/2000/svg">
                <image
                  alt="path"
                  className="path-image"
                  width="100%"
                  height="100%"
                  x="0"
                  y="0"
                  xlinkHref={pathImageSrc}
                />
                <g id="ball-image">
                  <image
                    alt="ball"
                    className="ball-image"
                    width="125"
                    height="125"
                    x="338"
                    y="70"
                    xlinkHref={ballImageSrc}
                  />
                  <image
                    alt="front"
                    id="front-image"
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    xlinkHref={frontImageSrc}
                    style={{ display: "none" }}
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalInnovationSection;
