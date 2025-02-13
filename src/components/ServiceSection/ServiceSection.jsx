import React, { useState } from 'react';
import './ServiceSection.css'
import img1 from '../../assets/images/services/img1.webp'
import img2 from '../../assets/images/services/img2.svg'
import img3 from '../../assets/images/services/img3.svg'
import img4 from '../../assets/images/services/img4.svg'
import img5 from '../../assets/images/services/img5.svg'
import img6 from '../../assets/images/services/img6.webp'
import img7 from '../../assets/images/services/img7.svg'
import img8 from '../../assets/images/services/img8.svg'
import img10 from '../../assets/images/services/img10.svg'
import img11 from '../../assets/images/services/img11.svg'
import img12 from '../../assets/images/services/img12.webp'
import img13 from '../../assets/images/services/img13.svg'
import img14 from '../../assets/images/services/img14.svg'
import img15 from '../../assets/images/services/img15.svg'
import img16 from '../../assets/images/services/img16.svg'
import img17 from '../../assets/images/services/img17.webp'
import img18 from '../../assets/images/services/img18.svg'
import img19 from '../../assets/images/services/img19.svg'
import img20 from '../../assets/images/services/img20.svg'
import img21 from '../../assets/images/services/img21.svg'
import img22 from '../../assets/images/services/img22.webp'
import img23 from '../../assets/images/services/img23.svg'
import img24 from '../../assets/images/services/img24.webp'
import img25 from '../../assets/images/services/img25.svg'
import img26 from '../../assets/images/services/img26.webp'
import img27 from '../../assets/images/services/img27.webp'
import img28 from '../../assets/images/services/img28.svg'
import img29 from '../../assets/images/services/img29.svg'
import img30 from '../../assets/images/services/img30.svg'
import img31 from '../../assets/images/services/img31.svg'

const ServicesSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [mobileHover, setMobileHover] = useState(null);
    const [graphicsHover, setGraphicsHover] = useState(null);
    const [designHover, setDesignHover] = useState(null);
    const [qualityHover, setQualityHover] = useState(null);
    const [digitalHover, setdigitalHover] = useState(null);
  return (
    <section className="sc-60093028-11 sxcgf">
      <div className="container">
        <div className="sc-be333bb3-0 ctezdg">
          <h2 className="container p-0">Services We Offer</h2>
        </div>
        <p>
          We offer a full range of web app development services that make things better for enterprises and companies we work with. Our team of dedicated mobile app developers fulfils your diverse business requirements through a number of services. We specialise in the following services:
        </p>
        <div className="sc-60093028-13 eykmLO">
          <ul className="servicesSection">
            <li  onMouseEnter={() => setHoveredIndex(true)}
            onMouseLeave={() => setHoveredIndex(null)}>
              <a aria-label="Web Development" href="/web-development-company">
                <div className="content-left">
                  <div className="content-img">
                    <img alt="web" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img1} />
                  </div>
                  <div className="content-services" >
                    <h3>Web Development</h3>
                    <div className="serviceDesc" style={{ display: hoveredIndex === true ? "flex" : "none" }}>Transform your business concepts with our web development services, crafting innovative and next-generation websites.</div>
                  </div>
                </div>
              </a>
              <div className="content-serviceImgs" style={{ display: hoveredIndex === true ? "flex" : "none" }} >
                <div className="serviceImgBox">
                  <img alt="react" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img2} />
                  <div className="imgName">React JS</div>
                </div>
                <div className="serviceImgBox">
                  <img alt="angular" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img3} />
                  <div className="imgName">Angular</div>
                </div>
                <div className="serviceImgBox">
                  <img alt="laravel" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img4} />
                  <div className="imgName">Laravel</div>
                </div>
                <div className="serviceImgBox">
                  <img alt="nodejs" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img5} />
                  <div className="imgName">Node JS</div>
                </div>
              </div>
              <a aria-label="Web Development" href="/web-development-company">
                <div className="content-arrow"  style={{ display: hoveredIndex === true ? "flex" : "none" }}>
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9791 8.55562C21.3696 8.16509 21.3696 7.53193 20.9791 7.1414L14.6152 0.777442C14.2246 0.386917 13.5915 0.386917 13.2009 0.777442C12.8104 1.16797 12.8104 1.80113 13.2009 2.19166L18.8578 7.84851L13.2009 13.5054C12.8104 13.8959 12.8104 14.5291 13.2009 14.9196C13.5915 15.3101 14.2246 15.3101 14.6152 14.9196L20.9791 8.55562ZM0.726563 8.84851L20.272 8.84851L20.272 6.84851L0.726562 6.84851L0.726563 8.84851Z" fill="white"></path>
                  </svg>
                </div>
              </a>
            </li>
            {/* Repeat the above structure for other list items */}
            {/* Mobile App Development */}
            <li onMouseEnter={() => setMobileHover(true)}
            onMouseLeave={() => setMobileHover(null)}>
              <a aria-label="Mobile App Development" href="/mobile-app-development-company">
                <div className="content-left">
                  <div className="content-img">
                    <img alt="mobile" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img6} />
                  </div>
                  <div className="content-services">
                    <div className="serviceName"><h3>Mobile App Development</h3></div>
                    <div className="serviceDesc"  style={{ display: mobileHover === true ? "flex" : "none" }}>Drive digital evolution by creating scalable, compelling, and feature-rich mobile applications.</div>
                  </div>
                </div>
              </a>
              <div className="content-serviceImgs"  style={{ display: mobileHover === true ? "flex" : "none" }}>
                <div className="serviceImgBox">
                  <img alt="android" loading="lazy" width="53" height="53" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img7} />
                  <div className="imgName">Android</div>
                </div>
                <div className="serviceImgBox">
                  <img alt="apple" loading="lazy" width="56" height="56" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img8} />
                  <div className="imgName">Apple</div>
                </div>
                <div className="serviceImgBox">
                  <img alt="flutter" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img10} />
                  <div className="imgName">Flutter</div>
                </div>
                <div className="serviceImgBox">
                  <img alt="ionic" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img11} />
                  <div className="imgName">Ionic</div>
                </div>
              </div>
              <a aria-label="Mobile App Development" href="/mobile-app-development-company">
                <div className="content-arrow"  style={{ display: mobileHover === true ? "flex" : "none" }}>
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9791 8.55562C21.3696 8.16509 21.3696 7.53193 20.9791 7.1414L14.6152 0.777442C14.2246 0.386917 13.5915 0.386917 13.2009 0.777442C12.8104 1.16797 12.8104 1.80113 13.2009 2.19166L18.8578 7.84851L13.2009 13.5054C12.8104 13.8959 12.8104 14.5291 13.2009 14.9196C13.5915 15.3101 14.2246 15.3101 14.6152 14.9196L20.9791 8.55562ZM0.726563 8.84851L20.272 8.84851L20.272 6.84851L0.726562 6.84851L0.726563 8.84851Z" fill="white"></path>
                  </svg>
                </div>
              </a>
            </li>
            {/* Repeat for other services like UI/UX Design, Quality Assurance, Digital Marketing, etc. */}
            <li onMouseEnter={() => setGraphicsHover(true)}
            onMouseLeave={() => setGraphicsHover(null)}>
              <a aria-label="Ui Ux design"href="/ui-ux-design-company">
                <div className="content-left">
                  <div className="content-img">
                    <img alt="mobile" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img12} />
                  </div>
                  <div className="content-services">
                    <div className="serviceName"><h3>Graphics Design</h3></div>
                    <div className="serviceDesc"  style={{ display: graphicsHover === true ? "flex" : "none" }}>Through our creatively inspired and strategically guided solutions, we assist your brand in establishing emotional connections with consumers.</div>
                  </div>
                </div>
              </a>
              <div className="content-serviceImgs"  style={{ display: graphicsHover === true ? "flex" : "none" }}>
                <div className="serviceImgBox">
                  <img alt="android" loading="lazy" width="53" height="53" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img13} />
                  <div className="imgName">illustrator</div>
                </div>
                <div className="serviceImgBox">
                  <img alt="apple" loading="lazy" width="56" height="56" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img14} />
                  <div className="imgName">Photoshop</div>
                </div>
                <div className="serviceImgBox">
                  <img alt="flutter" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img15} />
                  <div className="imgName">Coreldraw</div>
                </div>
                <div className="serviceImgBox">
                  <img alt="ionic" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img16} />
                  <div className="imgName">Sketch</div>
                </div>
              </div>
              <a aria-label="Ui Ux design" href="/ui-ux-design-company">
                <div className="content-arrow"  style={{ display: graphicsHover === true ? "flex" : "none" }}>
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9791 8.55562C21.3696 8.16509 21.3696 7.53193 20.9791 7.1414L14.6152 0.777442C14.2246 0.386917 13.5915 0.386917 13.2009 0.777442C12.8104 1.16797 12.8104 1.80113 13.2009 2.19166L18.8578 7.84851L13.2009 13.5054C12.8104 13.8959 12.8104 14.5291 13.2009 14.9196C13.5915 15.3101 14.2246 15.3101 14.6152 14.9196L20.9791 8.55562ZM0.726563 8.84851L20.272 8.84851L20.272 6.84851L0.726562 6.84851L0.726563 8.84851Z" fill="white"></path>
                  </svg>
                </div>
              </a>
            </li>
            <li onMouseEnter={() => setDesignHover(true)}
            onMouseLeave={() => setDesignHover(null)}>
              <a aria-label="Ui Ux design" href="/ui-ux-design-company">
                <div className="content-left">
                  <div className="content-img">
                    <img alt="mobile" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img17} />
                  </div>
                  <div className="content-services">
                    <div className="serviceName"><h3>UI/UX Design</h3></div>
                    <div className="serviceDesc"  style={{ display: designHover === true ? "flex" : "none" }}>We specialise in crafting professional and creative websites. Our designers create websites that are both search engine and user-friendly.</div>
                  </div>
                </div>
              </a>
              <div className="content-serviceImgs"  style={{ display: designHover === true ? "flex" : "none" }}>
                <div className="serviceImgBox">
                  <img alt="android" loading="lazy" width="53" height="53" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img18} />
                  <div className="imgName">Figma</div>
                </div>
                <div className="serviceImgBox">
                  <img alt="apple" loading="lazy" width="56" height="56" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img19} />
                  <div className="imgName">Adobe</div>
                </div>
                <div className="serviceImgBox">
                  <img alt="flutter" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img20} />
                  <div className="imgName">Zeplin</div>
                </div>
                <div className="serviceImgBox">
                  <img alt="ionic" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img21} />
                  <div className="imgName">Invision</div>
                </div>
              </div>
              <a aria-label="Ui Ux design" href="/ui-ux-design-company">
                <div className="content-arrow"  style={{ display: designHover === true ? "flex" : "none" }}>
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9791 8.55562C21.3696 8.16509 21.3696 7.53193 20.9791 7.1414L14.6152 0.777442C14.2246 0.386917 13.5915 0.386917 13.2009 0.777442C12.8104 1.16797 12.8104 1.80113 13.2009 2.19166L18.8578 7.84851L13.2009 13.5054C12.8104 13.8959 12.8104 14.5291 13.2009 14.9196C13.5915 15.3101 14.2246 15.3101 14.6152 14.9196L20.9791 8.55562ZM0.726563 8.84851L20.272 8.84851L20.272 6.84851L0.726562 6.84851L0.726563 8.84851Z" fill="white"></path>
                  </svg>
                </div>
              </a>
            </li>
            <li onMouseEnter={() => setQualityHover(true)}
            onMouseLeave={() => setQualityHover(null)}>
              <a aria-label="Mobile App Development" href="/mobile-app-development-company">
                <div className="content-left">
                  <div className="content-img">
                    <img alt="mobile" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img22} />
                  </div>
                  <div className="content-services">
                    <div className="serviceName"><h3>Quality Assurance (QA)</h3></div>
                    <div className="serviceDesc"  style={{ display: qualityHover === true ? "flex" : "none" }}>Explore our user-friendly and seamless website and app development services, designed for easy management.</div>
                  </div>
                </div>
              </a>
              <div className="content-serviceImgs"  style={{ display: qualityHover === true ? "flex" : "none" }}>
                <div className="serviceImgBox">
                  <img alt="android" loading="lazy" width="53" height="53" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img23} />
                  <div className="imgName">Selenium</div>
                </div>
                <div className="serviceImgBox">
                  <img alt="apple" loading="lazy" width="56" height="56" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img24} />
                  <div className="imgName">Katalon Studio</div>
                </div>
                <div className="serviceImgBox">
                  <img alt="flutter" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img25} />
                  <div className="imgName">Testsigma</div>
                </div>
                <div className="serviceImgBox">
                  <img alt="ionic" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img26} />
                  <div className="imgName">Telerik Test Studio</div>
                </div>
              </div>
              <a aria-label="Mobile App Development" href="/mobile-app-development-company">
                <div className="content-arrow"  style={{ display: qualityHover === true ? "flex" : "none" }}>
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9791 8.55562C21.3696 8.16509 21.3696 7.53193 20.9791 7.1414L14.6152 0.777442C14.2246 0.386917 13.5915 0.386917 13.2009 0.777442C12.8104 1.16797 12.8104 1.80113 13.2009 2.19166L18.8578 7.84851L13.2009 13.5054C12.8104 13.8959 12.8104 14.5291 13.2009 14.9196C13.5915 15.3101 14.2246 15.3101 14.6152 14.9196L20.9791 8.55562ZM0.726563 8.84851L20.272 8.84851L20.272 6.84851L0.726562 6.84851L0.726563 8.84851Z" fill="white"></path>
                  </svg>
                </div>
              </a>
            </li>
            <li onMouseEnter={() => setdigitalHover(true)}
            onMouseLeave={() => setdigitalHover(null)}>
              <a aria-label="Mobile App Development" href="/mobile-app-development-company">
                <div className="content-left">
                  <div className="content-img">
                    <img alt="mobile" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img27} />
                  </div>
                  <div className="content-services">
                    <div className="serviceName"><h3>Digital Marketing</h3></div>
                    <div className="serviceDesc"  style={{ display: digitalHover === true ? "flex" : "none" }}>Leverage our digital marketing services to achieve outstanding sales conversions and maximise ROI.</div>
                  </div>
                </div>
              </a>
              <div className="content-serviceImgs"  style={{ display: digitalHover === true ? "flex" : "none" }}>
                <div className="serviceImgBox">
                  <img alt="android" loading="lazy" width="53" height="53" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img28} />
                  <div className="imgName">Meta</div>
                </div>
                <div className="serviceImgBox">
                  <img alt="apple" loading="lazy" width="56" height="56" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img29} />
                  <div className="imgName">Analytics</div>
                </div>
                <div className="serviceImgBox">
                  <img alt="flutter" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img30} />
                  <div className="imgName">Google Ads</div>
                </div>
                <div className="serviceImgBox">
                  <img alt="ionic" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={img31} />
                  <div className="imgName">Growth</div>
                </div>
              </div>
              <a aria-label="Mobile App Development" href="/mobile-app-development-company">
                <div className="content-arrow"  style={{ display: digitalHover === true ? "flex" : "none" }}>
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9791 8.55562C21.3696 8.16509 21.3696 7.53193 20.9791 7.1414L14.6152 0.777442C14.2246 0.386917 13.5915 0.386917 13.2009 0.777442C12.8104 1.16797 12.8104 1.80113 13.2009 2.19166L18.8578 7.84851L13.2009 13.5054C12.8104 13.8959 12.8104 14.5291 13.2009 14.9196C13.5915 15.3101 14.2246 15.3101 14.6152 14.9196L20.9791 8.55562ZM0.726563 8.84851L20.272 8.84851L20.272 6.84851L0.726562 6.84851L0.726563 8.84851Z" fill="white"></path>
                  </svg>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;