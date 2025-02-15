import React, { useState } from "react";
import "./ContactUs.css";
import skypay from "../../assets/images/contactus/skypay.svg";
import phone from "../../assets/images/contactus/phone.svg";
import x from "../../assets/images/contactus/x.svg";
import facebook from "../../assets/images/contactus/facebook.svg";
import linkdin from "../../assets/images/contactus/linkdin.svg";
import Pinterest from "../../assets/images/contactus/Pinterest.svg";
import behance from "../../assets/images/contactus/behance.svg";
import dribble from "../../assets/images/contactus/dribble.svg";
import medium from "../../assets/images/contactus/medium.svg";
import upload from "../../assets/images/contactus/upload.svg";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const countries = [
    { code: "ZZ", name: "International" },
    { code: "AF", name: "Afghanistan" },
    { code: "AX", name: "Åland Islands" },
    { code: "AL", name: "Albania" },
    { code: "DZ", name: "Algeria" },
    { code: "AS", name: "American Samoa" },
    { code: "AD", name: "Andorra" },
    { code: "AO", name: "Angola" },
    { code: "AI", name: "Anguilla" },
    { code: "IN", name: "India", selected: true },
    { code: "US", name: "United States" },
    { code: "GB", name: "United Kingdom" },
    { code: "CA", name: "Canada" },
    { code: "AU", name: "Australia" },
    { code: "FR", name: "France" },
    { code: "DE", name: "Germany" },
  ];

  const [formData, setFormData] = useState({
    contactUsName: "",
    contactUsNumberCountry: "IN",
    contactUsNumber: "",
    contactUsEmail: "",
    contactUsMessage: "",
    contactUsFile: null,
    recaptcha: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.contactUsName) newErrors.contactUsName = "Name is required";
    if (!formData.contactUsEmail) {
      newErrors.contactUsEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.contactUsEmail)) {
      newErrors.contactUsEmail = "Invalid email address";
    }
    if (!formData.contactUsNumber) {
      newErrors.contactUsNumber = "Phone number is required";
    } else if (!/^[0-9]+$/.test(formData.contactUsNumber)) {
      newErrors.contactUsNumber = "Only numbers allowed";
    } else if (
      formData.contactUsNumber.length < 10 ||
      formData.contactUsNumber.length > 15
    ) {
      newErrors.contactUsNumber = "Must be between 10 and 15 digits";
    }
    if (!formData.contactUsMessage)
      newErrors.contactUsMessage = "Message is required";
    if (
      formData.contactUsFile &&
      formData.contactUsFile.size > 2 * 1024 * 1024
    ) {
      newErrors.contactUsFile = "File size too large (max 2MB)";
    }
    if (!formData.recaptcha) newErrors.recaptcha = "reCAPTCHA is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      const { contactUsFile, ...dataToStore } = formData;
      localStorage.setItem("contactFormData", JSON.stringify(dataToStore));
      setFormData({
        contactUsName: "",
        contactUsNumberCountry: "IN",
        contactUsNumber: "",
        contactUsEmail: "",
        contactUsMessage: "",
        contactUsFile: null,
        recaptcha: "",
      });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, contactUsFile: e.target.files[0] });
  };

  const handleRecaptchaChange = (value) => {
    setFormData({ ...formData, recaptcha: value });
  };

  return (
    <section>
      <div className="container" id="contactForm">
        <div className="a-8 c-1 position-relative">
          <div className="row">
            <div className="col-lg-6 d-none d-lg-block left-side-section">
              <div className="title">We Are Here To Help You</div>
              <div className="form-description">
                Let’s Transform Your Vision Into Value.
              </div>
              <div className="contact-us">Contact us</div>
              <div className="tecoreng-skype">
                <div style={{ margin: "5px 10px" }}>
                  <img
                    alt="skype"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    style={{ color: "transparent" }}
                    src={skypay}
                  />
                </div>
                <p className="m-0" style={{ paddingTop: "6px" }}>
                  <a href="skype:live:.cid.a1e2fe8f7d36b5e8?call">
                    biz.tecoreng
                  </a>
                </p>
              </div>
              <div className="tecoreng-number">
                <div style={{ margin: "5px 10px" }}>
                  <img
                    alt="phone"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    style={{ color: "transparent" }}
                    src={phone}
                  />
                </div>
                <p className="m-0" style={{ paddingTop: "6px" }}>
                  <a href="tel:+918511746476">+91 85117 46476</a>
                </p>
              </div>
              <section className="sc-ac27afee-0 kMHscz">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-12">
                      <h2>Our Socials</h2>
                      <p className="d-none d-md-flex">
                        Don’t Miss To Follow Us On Our Social Networks Accounts.
                      </p>
                    </div>
                    <div className="col-8">
                      <div className="socials d-flex align-items-center justify-content-end">
                        <a
                          aria-label="twitter"
                          href="https://twitter.com/tecoreng"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            loading="lazy"
                            src={x}
                            alt="twitter"
                            className="sc-ac27afee-1 eBAOux"
                          />
                        </a>
                        <a
                          aria-label="facebook"
                          href="https://www.facebook.com/Tecoreng"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            loading="lazy"
                            src={facebook}
                            alt="fb"
                            className="sc-ac27afee-1 eBAOux"
                          />
                        </a>
                        <a
                          aria-label="linkedin"
                          href="https://linkedin.com/company/tecoreng"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            loading="lazy"
                            src={linkdin}
                            alt="linkedin"
                            className="sc-ac27afee-1 eBAOux"
                          />
                        </a>
                        <a
                          aria-label="pntrest"
                          href="https://pinterest.com/TechnicalCoreEngineers/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            loading="lazy"
                            src={Pinterest}
                            alt="Pinterest"
                            className="sc-ac27afee-1 eBAOux"
                          />
                        </a>
                        <a
                          aria-label="behance"
                          href="https://www.behance.net/Tecoreng"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            loading="lazy"
                            src={behance}
                            alt="Behance"
                            className="sc-ac27afee-1 eBAOux"
                          />
                        </a>
                        <a
                          aria-label="dribbble"
                          href="https://dribbble.com/Tecoreng"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            loading="lazy"
                            src={dribble}
                            alt="Dribblbe"
                            className="sc-ac27afee-1 eBAOux"
                          />
                        </a>
                        <a
                          aria-label="medium"
                          href="https://medium.com/@Tecoreng"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            loading="lazy"
                            src={medium}
                            alt="Medium"
                            className="sc-ac27afee-1 eBAOux"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-lg-6">
              <div className=" c-2">
                <div className="title">
                  <h2>
                    Get in <span className="gradientText">touch</span>
                  </h2>
                  <p>
                    We are always ready to help. There are many ways to contact
                    us. You may drop us a line, give us a call, send an email.
                  </p>
                </div>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="contactUsName"
                      className=" c-4"
                      value={formData.contactUsName}
                      onChange={handleChange}
                    />
                    {errors.contactUsName && (
                      <div className="error-message">
                        {errors.contactUsName}
                      </div>
                    )}
                  </div>

                  <div className="PhoneInput">
                    <div className="PhoneInputCountry">
                      <select
                        name="contactUsNumberCountry"
                        className="PhoneInputCountrySelect"
                        value={formData.contactUsNumberCountry}
                        onChange={handleChange}
                      >
                        {countries.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                      <div className="PhoneInputCountryIcon PhoneInputCountryIcon--border">
                        <img
                          className="PhoneInputCountryIconImg"
                          alt={formData.contactUsNumberCountry}
                          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${formData.contactUsNumberCountry}.svg`}
                        />
                      </div>
                    </div>
                    <input
                      type="tel"
                      placeholder="Contact number"
                      name="contactUsNumber"
                      className="PhoneInputInput"
                      value={formData.contactUsNumber}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.contactUsNumber && (
                    <div className="error-message">
                      {errors.contactUsNumber}
                    </div>
                  )}

                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="E-mail"
                      name="contactUsEmail"
                      className=" c-4"
                      value={formData.contactUsEmail}
                      onChange={handleChange}
                    />
                    {errors.contactUsEmail && (
                      <div className="error-message">
                        {errors.contactUsEmail}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <textarea
                      cols="30"
                      rows="5"
                      placeholder="Let’s talk about your idea"
                      name="contactUsMessage"
                      className=" c-4"
                      value={formData.contactUsMessage}
                      onChange={handleChange}
                    />
                    {errors.contactUsMessage && (
                      <div className="error-message">
                        {errors.contactUsMessage}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="fileUpload">
                      <img src={upload} alt="upload" />
                      <span className="additional-file">
                        {formData.contactUsFile?.name ||
                          "Upload Additional file"}
                      </span>
                      <input
                        type="file"
                        name="contactUsFile"
                        className=" c-4"
                        onChange={handleFileChange}
                      />
                    </label>
                    {errors.contactUsFile && (
                      <div className="error-message">
                        {errors.contactUsFile}
                      </div>
                    )}
                    <div className="file-size-info">
                      File size of your document should not exceed 2MB.
                    </div>
                  </div>

                  <div className="form-group">
                    <ReCAPTCHA
                      sitekey="6Lc4dtMqAAAAAH0SyLc_Z2bDa5jhwZtLk7Ni3qHa"
                      onChange={handleRecaptchaChange}
                    />
                    {errors.recaptcha && (
                      <div className="error-message">{errors.recaptcha}</div>
                    )}
                  </div>

                  <div className="mt-4">
                    <button
                      className="pushable"
                      type="submit"
                      style={{ width: "100%" }}
                      disabled={!formData.recaptcha}
                    >
                      <span className="front">Submit</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
