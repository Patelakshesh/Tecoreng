import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { BsList, BsXLg } from "react-icons/bs";

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="body">
      <div
        className={`header-main show-nav d-flex align-items-center justify-content-between ${
          isMenuOpen ? "hidden" : ""
        }`}
      >
        <div className="tce-logo">
          <a className="pl-15 d-block" aria-label="home" href="/">
            <img
              alt="Tecoreng"
              loading="lazy"
              width="102"
              height="46"
              decoding="async"
              style={{ color: "transparent", width: "100%", height: "100%" }}
              src={logo}
            />
          </a>
        </div>

        <button
          className="navbar-toggler d-block d-xl-none"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          ☰
        </button>

        {/* Menu Section */}
        <div
          className={`main-menu-container position-relative h-100 ${
            isMenuOpen ? "open" : ""
          }`}
        >
          <div className="d-flex w-100 align-items-center child-main-menu h-100">
            <nav className="nav-main h-100">
              <ul className="menus">
                <li className="menu-items">
                  <a href="/services">Services</a>
                </li>
                <li
                  className="menu-items"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={isDropdownVisible}
                  >
                    About Us<span className="arrow"></span>
                  </button>
                  <ul
                    className={`dropdown about-dropdown ${
                      isDropdownVisible ? "visible" : ""
                    }`}
                  >
                    <div className="dropdown-div">
                      <button
                        aria-label="navbar-toggle"
                        className="navbar-toggler ms-auto"
                        type="button"
                        onClick={closeMenu}
                      >
                        <BsXLg />
                      </button>
                    </div>
                    <li className="col-lg-12 menu-items">
                      <a href="/who-we-are">Who we are</a>
                    </li>
                    <li className="col-lg-12 menu-items">
                      <a href="/industries-we-serve">Industries we serve</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-items">
                  <a href="/career">Career</a>
                </li>
                <li className="menu-items">
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li className="menu-items">
                  <a target="_blank" href="/blog">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
            <div className="d-flex align-items-center menu-links">
              <a href="/hire-developer">
                <div className="a-3 z-3">Hire Developers</div>
              </a>
              <a href="/contact-us">
                <div className="a-2 z-2">Get a quote</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`a-1 z-1 ${isMenuOpen ? "open" : ""}`}>
        {/* Logo */}
        <a className="pl-15 d-block" aria-label="home" href="/">
          <img
            alt="Tecoreng"
            loading="lazy"
            width="102"
            height="46"
            decoding="async"
            style={{ color: "transparent", width: "100%", height: "100%" }}
            src="/_next/static/media/logo1.2795f947.svg"
          />
        </a>

        <button
          aria-label="navbar-toggle"
          className="navbar-toggler collapsed"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          style={{ opacity: "0" }}
        >
          <BsList />
        </button>

        <div
          className={`collapse navbar-collapse  ${isMenuOpen ? "show" : ""}`}
          id="navbarContent"
          style={{overflowX: "hidden"}}
        >
          <div className="d-flex d-xl-none py-3">
            <button
              aria-label="navbar-toggle"
              className="navbar-toggler ms-auto collapsed"
              type="button"
              onClick={closeMenu}
            >
              <BsXLg />
            </button>
          </div>
          <div className="navbar-nav align-items-center">
            <ul className="menusre">
              {/* Services */}
              <li className="menu-items">
                <a target="" href="/services">
                  Services
                </a>
              </li>
              {/* About Us Dropdown */}
              <li className="menu-items">
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded="false"
                >
                  <a href="/who-we-are">About Us</a>
                  <span className="arrow"></span>
                </button>
                <ul className="dropdown about-dropdown">
                  <div className="dropdown-div">
                    <button
                      aria-label="navbar-toggle"
                      className="navbar-toggler ms-auto"
                      type="button"
                      onClick={closeMenu} // Close menu when dropdown close button is clicked
                    >
                      <BsXLg /> {/* Bootstrap Icon for Close */}
                    </button>
                  </div>
                  <li className="col-lg-12 menu-items">
                    <a target="" href="/who-we-are">
                      Who we are
                    </a>
                  </li>
                  <li className="col-lg-12 menu-items">
                    <a target="" href="/industries-we-serve">
                      Industries we serve
                    </a>
                  </li>
                </ul>
              </li>
              {/* Career */}
              <li className="menu-items">
                <a target="" href="/career">
                  Career
                </a>
              </li>
              {/* Portfolio */}
              <li className="menu-items">
                <a target="" href="/portfolio">
                  Portfolio
                </a>
              </li>
              {/* Blog */}
              <li className="menu-items">
                <a target="_blank" href="/blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/* Hire Developers Button */}
          <div className="mt-4 w-75 m-auto">
            <a href="/hire-developer">
              <div className="a-3 z-3re">Hire Developers</div>
            </a>
          </div>
          {/* Get a Quote Button */}
          <div className="mt-4 w-75 m-auto">
            <a href="/contact-us">
              <div className="a-2 z-2re">Get a quote</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
