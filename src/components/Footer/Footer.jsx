import React from "react";
import "./Footer.css";
import location from "../../assets/images/footer/location.svg";
import call from "../../assets/images/footer/call.webp";
import mail from "../../assets/images/footer/mail.svg";
import facebook from "../../assets/images/footer/facebook.svg";
import linkdin from "../../assets/images/footer/linkdin.svg";
import pntrest from "../../assets/images/footer/pntrest.svg";
import behance from "../../assets/images/footer/behance.svg";
import dribbble from "../../assets/images/footer/dribbble.svg";
import medium from "../../assets/images/footer/medium.svg";
import x from "../../assets/images/footer/x.svg";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div style={{ background: "#112542", marginTop: "2rem" }}>
      <footer className=" f-1">
        <div className="container footerMenus">
          <div className="row justify-content-center">
            <div className="col-lg-3 d-block">
              <span style={{ fontSize: "1.5rem", borderBottom: "1px dashed" }}>
                Features menu
              </span>
              <ol className="footerUl">
                <li className="my-3">
                  <a target="_blank" href="/blog">
                    Blog
                  </a>
                </li>
                <li className="my-3">
                  <a href="/services">Services</a>
                </li>
                <li className="my-3">
                  <a href="/hire-developer">Hire Developer</a>
                </li>
                <li className="my-3">
                  <a href="/career">Career</a>
                </li>
                <li className="my-3">
                  <a href="/who-we-are">Who We Are</a>
                </li>
              </ol>
            </div>
            <div className="col-lg-5 d-none d-lg-block">
              <span style={{ fontSize: "1.5rem", borderBottom: "1px dashed" }}>
                Service Menu
              </span>
              <div className="d-flex">
                <ol className="footerUl">
                  <li className="my-3">
                    <a href="/web-development-company">Web Development</a>
                  </li>
                  <li className="my-3">
                    <a href="/mobile-app-development-company">
                      Mobile App Development
                    </a>
                  </li>
                  <li className="my-3">
                    <a href="/game-development">Game Development</a>
                  </li>
                  <li className="my-3">
                    <a href="/ui-ux-design-company">UI/UX Design</a>
                  </li>
                  <li className="my-3">
                    <a href="/graphics-design">Graphics Design</a>
                  </li>
                </ol>
                <ol className="footerUl mx-auto">
                  <li className="my-3">
                    <a href="/devops">DevOps</a>
                  </li>
                  <li className="my-3">
                    <a href="/e-commerce">E-Commerce</a>
                  </li>
                  <li className="my-3">
                    <a href="/digital-marketing">Digital Marketing</a>
                  </li>
                  <li className="my-3">
                    <a href="/cloud-computing">Cloud Computing</a>
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contactUs">
                <span
                  style={{ fontSize: "1.5rem", borderBottom: "1px dashed" }}
                >
                  Contact Information
                </span>
                <ol className="footerUl">
                  <li className="d-flex my-3">
                    <img
                      alt="location"
                      loading="lazy"
                      width="24"
                      height="24"
                      decoding="async"
                      style={{
                        color: "transparent",
                        height: "fit-content",
                        margin: "5px 10px",
                      }}
                      src={location}
                    />
                    <p className="m-0">
                      Skywalk, The Element, 904, Godrej Garden City Rd, off
                      Sarkhej - Gandhinagar Highway, Jagatpur, Ahmedabad, Ranip,
                      Gujarat 382481
                    </p>
                  </li>
                  <li className="d-flex my-3">
                    <img
                      alt="location"
                      loading="lazy"
                      width="24"
                      height="24"
                      decoding="async"
                      style={{
                        color: "transparent",
                        height: "fit-content",
                        margin: "5px 10px",
                      }}
                      src={location}
                    />
                    <p className="m-0">
                      1148 S Railroad Ave, Bronxville, New York 10708, USA.
                    </p>
                  </li>
                  <li className="d-flex my-3 align-items-center">
                    <div style={{ margin: "5px 10px" }}>
                      <img
                        alt="mail"
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        style={{ color: "transparent" }}
                        src={mail}
                      />
                    </div>
                    <p className="m-0">
                      <a href="mailto:sales@tecoreng.com">sales@tecoreng.com</a>
                    </p>
                  </li>
                  <li className="d-flex my-3">
                    <div style={{ margin: "5px 10px", height: "0px" }}>
                      <img
                        alt="skype"
                        loading="lazy"
                        width="24"
                        height="25"
                        decoding="async"
                        style={{ color: "transparent" }}
                        src={call}
                      />
                    </div>
                    <div className="m-0">
                      <div className="call-Us">
                        <div>Call Us: </div>
                        <div className="HR">
                          <a href="tel:+916352725452">HR - +91 63527 25452</a>
                        </div>
                        <div className="sales">
                          <a href="tel:+918511746476">
                            Sales - +91 85117 46476
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <section className=" f-2">
            <div className="copyrights d-flex justify-content-between align-items-center">
              <div className="footerLogo d-none d-md-flex">
                <a className="pl-15 d-block" aria-label="home" href="/">
                  <img
                    alt="Tecoreng"
                    loading="lazy"
                    width="102"
                    height="46"
                    decoding="async"
                    style={{
                      color: "transparent",
                      width: "100%",
                      height: "100%",
                    }}
                    src={logo}
                  />
                </a>
              </div>
              <div>Copyright © 2025 by Tecoreng</div>
              <div className="copyrightsSocials d-flex align-items-center col-md-3">
                <a
                  aria-label="twitter"
                  href="https://twitter.com/tecoreng"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="twitter"
                    loading="lazy"
                    width="23"
                    height="21"
                    decoding="async"
                    style={{ color: "transparent" }}
                    src={x}
                  />
                </a>
                <a
                  aria-label="facebook"
                  href="https://www.facebook.com/Tecoreng"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="fb"
                    loading="lazy"
                    width="11"
                    height="20"
                    decoding="async"
                    style={{ color: "transparent" }}
                    src={facebook}
                  />
                </a>
                <a
                  aria-label="linkedin"
                  href="https://linkedin.com/company/tecoreng"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="linkedin"
                    loading="lazy"
                    width="21"
                    height="20"
                    decoding="async"
                    style={{ color: "transparent" }}
                    src={linkdin}
                  />
                </a>
                <a
                  aria-label="pntrest"
                  href="https://pinterest.com/TechnicalCoreEngineers/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="Pinterest"
                    rel="noreferrer"
                    loading="lazy"
                    width="21"
                    height="20"
                    decoding="async"
                    style={{ color: "transparent" }}
                    src={pntrest}
                  />
                </a>
                <a
                  aria-label="behance"
                  href="https://www.behance.net/Tecoreng"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="Behance"
                    loading="lazy"
                    width="21"
                    height="20"
                    decoding="async"
                    style={{ color: "transparent" }}
                    src={behance}
                  />
                </a>
                <a
                  aria-label="dribbble"
                  href="https://dribbble.com/Tecoreng"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="Dribblbe"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    style={{ color: "transparent" }}
                    src={dribbble}
                  />
                </a>
                <a
                  aria-label="medium"
                  href="https://medium.com/@Tecoreng"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="Medium"
                    loading="lazy"
                    width="36"
                    height="20"
                    decoding="async"
                    style={{ color: "transparent" }}
                    src={medium}
                  />
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
