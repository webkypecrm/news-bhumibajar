import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // initially disabled
  const [buttonText, setButtonText] = useState("Subscribe");
  const apiUrl = import.meta.env.VITE_API_URL;

  // Basic email validation function
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubscribed) {
      return;
    }

    const formData = new FormData();
    formData.append("email", email);

    try {
      const response = await axios.post(
        `${apiUrl}/subscriber/addSubscriber`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.status === "success") {
        setButtonText("Subscribed!");
        setIsButtonDisabled(true);
      }
    } catch (error) {
      console.error("Error subscribing:", error);
    }
  };

  const checkSubscriber = async (email) => {
    const formData = new FormData();
    formData.append("email", email);

    try {
      const response = await axios.post(
        `${apiUrl}/subscriber/checkSubscriber`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.exists === 1) {
        setIsSubscribed(true);
        setButtonText("Already Subscribed");
        setIsButtonDisabled(true);
      } else {
        setIsSubscribed(false);
        setButtonText("Subscribe");
        setIsButtonDisabled(false);
      }
    } catch (error) {
      console.error("Error checking subscriber:", error);
      setButtonText("Error");
      setIsButtonDisabled(true);
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Reset subscription state and disable button until verified
    setIsSubscribed(false);
    setButtonText("Subscribe");
    setIsButtonDisabled(true);
  };

  const handleEmailBlur = () => {
    if (!isValidEmail(email)) {
      setButtonText("Invalid Email");
      setIsButtonDisabled(true);
      return;
    }

    // Small delay to avoid too many API calls
    setTimeout(() => {
      checkSubscriber(email);
    }, 100);
  };

  return (
    <Fragment>
      <footer
        id="footer"
        className="site-footer dark-skin dark-widgetized-area"
      >
        <div id="footer-widgets-container">
          <div className="container">
            <div className="footer-widget-area">
              <div className="tie-row">
                {/* First Column */}
                <div className="tie-col-sm-3 normal-side">
                  <div
                    id="author-bio-widget-4"
                    className="container-wrapper widget aboutme-widget"
                  >
                    <div className="about-author about-content-wrapper">
                      <img
                        alt=""
                        src="/logo.png"
                        style={{ marginTop: 0, marginBottom: 0, width: 75 }}
                        className="about-author-img lazy-img"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>

                {/* Second Column with Links */}
                <div className="tie-col-md-3 normal-side">
                  <div className="container-wrapper widget custom-links-widget">
                    <div className="widget-title the-global-title">
                      <div className="the-subtitle">
                        Important Links
                        <span className="widget-title-icon tie-icon" />
                      </div>
                    </div>
                    <ul className="custom-links-list">
                      <li className="menu-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/termscondition-page">
                          Terms & Conditions
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/about-page">About</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/privacy-page">Privacy Policy</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Shop</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Third Column with More Links */}
                <div className="tie-col-md-3 normal-side">
                  <div className="container-wrapper widget custom-links-widget">
                    <div className="widget-title the-global-title">
                      <div className="the-subtitle">
                        More Links
                        <span className="widget-title-icon tie-icon" />
                      </div>
                    </div>
                    <ul className="custom-links-list">
                      <li className="menu-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Contact Us</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">FAQ</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Privacy Policy</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Shop</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Newsletter Subscription Form */}
                <div className="tie-col-sm-3 normal-side">
                  <div
                    id="tie-newsletter-4"
                    className="container-wrapper widget subscribe-widget"
                  >
                    <div className="widget-inner-wrap">
                      <div id="mc_embed_signup-tie-newsletter-4">
                        <form
                          onSubmit={handleSubmit}
                          className="subscribe-form validate"
                          target="_blank"
                          noValidate
                        >
                          <div className="mc-field-group">
                            <label
                              className="screen-reader-text"
                              htmlFor="mce-EMAIL-tie-newsletter-4"
                            >
                              Enter your Email address
                            </label>
                            <input
                              type="email"
                              id="email-input"
                              placeholder="Enter your Email address"
                              value={email}
                              name="EMAIL"
                              onChange={handleEmailChange}
                              onBlur={handleEmailBlur}
                              className="subscribe-input required email"
                              required
                            />
                          </div>
                          <input
                            type="submit"
                            value={buttonText}
                            name="subscribe"
                            className="button subscribe-submit"
                            disabled={isButtonDisabled}
                          />
                        </form>

                        {/* Disclaimer */}
                        <p
                          style={{
                            fontSize: "12px",
                            color: "#666",
                            marginTop: "8px",
                          }}
                        >
                          By continuing, you agree to our{" "}
                          <Link to="/privacy-page">Privacy Policy </Link>&amp;{" "}
                          <Link to="/termscondition-page">
                            Terms & Condition
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div id="site-info" className="site-info site-info-layout-2">
          <div className="container">
            <div className="tie-row">
              <div className="tie-col-md-12">
                <div className="copyright-text copyright-text-first">
                  © Copyright 2025, All Rights Reserved
                </div>
                <div className="footer-menu">
                  <ul id="menu-bottom-menu" className="menu">
                    <li className="menu-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/termscondition-page">Terms & Condition</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/about-page">About</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/privacy-page">Privacy</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/disclaimer-page">Disclaimer</Link>
                    </li>
                  </ul>
                </div>
                <ul className="social-icons">
                  <li className="social-icons-item">
                    <a
                      className="social-link youtube-social-icon"
                      target="_blank"
                      href="https://www.youtube.com/"
                      rel="noreferrer"
                    >
                      <span className="tie-social-icon tie-icon-youtube" />
                      <span className="screen-reader-text">YouTube</span>
                    </a>
                  </li>
                  <li className="social-icons-item">
                    <a
                      className="social-link facebook-social-icon"
                      target="_blank"
                      href="https://www.facebook.com/share/16pB9MHAni"
                      rel="noreferrer"
                    >
                      <span className="tie-social-icon tie-icon-facebook" />
                      <span className="screen-reader-text">Facebook</span>
                    </a>
                  </li>
                  <li className="social-icons-item">
                    <a
                      className="social-link twitter-social-icon"
                      target="_blank"
                      href="#"
                      rel="noreferrer"
                    >
                      <span className="tie-social-icon tie-icon-twitter" />
                      <span className="screen-reader-text">X</span>
                    </a>
                  </li>
                  <li className="social-icons-item">
                    <a
                      className="social-link instagram-social-icon"
                      target="_blank"
                      href="https://www.instagram.com/p/DNQB1l1xrzD/"
                      rel="noreferrer"
                    >
                      <span className="tie-social-icon tie-icon-instagram" />
                      <span className="screen-reader-text">Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
