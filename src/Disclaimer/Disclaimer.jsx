import React, { Fragment, useEffect, useState } from "react";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";

const Disclaimer = () => {
  const [activeTab, setActiveTab] = useState("Popular");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const openPopup = () => setIsOpenModal(true);
  const closePopup = () => setIsOpenModal(false);

  const openSideBar = () => setOpenSidebar(true);
  const closeSideBar = () => setOpenSidebar(false);

  useEffect(() => {
    let bodyClass = document.body.className;
    bodyClass = bodyClass.replace(/woocommerce-no-js/, "woocommerce-js");
    bodyClass = bodyClass.replace(/tie-no-js/, "tie-js");
    bodyClass = bodyClass.replace(/bbp-no-js/, "bbp-js");
    document.body.className = bodyClass;
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <div
        id="tie-body"
        className="bp-nouveau wp-singular post-template-default single single-post postid-1868 single-format-standard wp-theme-jannah theme-jannah tie-no-js woocommerce-no-js wrapper-has-shadow block-head-1 magazine2 is-lazyload is-thumb-overlay-disabled is-desktop is-header-layout-3 has-header-ad one-column-no-sidebar post-layout-1 narrow-title-narrow-media is-standard-format has-mobile-share post-has-toggle hide_breaking_news is-ajax-parent-post"
      >
        <div className="background-overlay">
          <div id="tie-container" className="site tie-container">
            <div>
              <Header
                tieSkin="dark"
                openPopup={openPopup}
                openSideBar={openSideBar}
              />
              <div id="content" className="site-content container">
                <div id="main-content-row" className="tie-row main-content-row">
                  <div
                    className="main-content tie-col-md-8 tie-col-xs-12"
                    role="main"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        padding: "30px",
                        fontSize: "15px",
                        backgroundColor: "#fff",
                        color: "#000",
                        borderRadius: "8px",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
                        lineHeight: "2",
                      }}
                    >
                      <h3>General Disclaimer</h3>
                      <p className="paragraph-spacing">
                        News Bhumibajar is a news and information platform
                        dedicated to sharing real estate updates from across
                        India. The information, articles, and opinions published
                        on this website are for general awareness only and
                        should not be treated as professional advice or a
                        substitute for legal or financial consultation.
                      </p>
                      <br />
                      <p className="paragraph-spacing">
                        While we strive to verify and present accurate and
                        timely information, News Bhumibajar does not guarantee
                        the completeness, reliability, or absolute accuracy of
                        any content. We are not responsible for any loss,
                        damage, or consequences arising from the use of
                        information provided on our platform.
                      </p>
                      <br />
                      <p className="paragraph-spacing">
                        Any grievances, complaints, or news reports submitted by
                        users through our email addresses or forms are published
                        only after editorial review and verification. Realty
                        Samachar is not liable for the authenticity of claims
                        made by third parties or contributors.
                      </p>
                      <br />
                      <p>
                        Users are advised to carry out their own due diligence
                        and consult appropriate professionals before making any
                        property-related decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Disclaimer;
