import React, { Fragment, useEffect, useState } from "react";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const About = () => {
  const [activeTab, setActiveTab] = useState("Popular");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const initialaboutUsSeoFormData = {
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    // ogImage: "",
  };

  const [aboutUsSeoFormData, setAboutUsSeoFormData] = useState(
    initialaboutUsSeoFormData
  );

  const [aboutLoading, setAboutLoading] = useState(false);

  const openPopup = () => setIsOpenModal(true);
  const closePopup = () => setIsOpenModal(false);

  const openSideBar = () => setOpenSidebar(true);
  const closeSideBar = () => setOpenSidebar(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    let bodyClass = document.body.className;
    bodyClass = bodyClass.replace(/woocommerce-no-js/, "woocommerce-js");
    bodyClass = bodyClass.replace(/tie-no-js/, "tie-js");
    bodyClass = bodyClass.replace(/bbp-no-js/, "bbp-js");
    document.body.className = bodyClass;
    window.scrollTo(0, 0);
  }, []);

  const getHomepageSeoData = async () => {
    setAboutLoading(true);
    try {
      const response = await axios.get(
        `${apiUrl}/aboutMeta/getAboutDescription`
      );

      const data = response.data?.data ?? response.data;

      // Populate form state
      setAboutUsSeoFormData({
        metaTitle: data.metaTitle || "",
        metaDescription: data.metaDescription || "",
        metaKeywords: data.metaKeywords || "",
        // Uncomment and add ogImage if needed
        // ogImage: data.ogImage || "",
      });

      setAboutLoading(false);
      // setActivityHomepageSeoToggle(false);
    } catch (error) {
      console.error("Error fetching homepage SEO data:", error);
      setAboutLoading(false);
    }
  };
  const ogImage =
    "https://res.cloudinary.com/drj0uehgx/image/upload/v1753508730/feviconsamachar-06_mkn9yc.png";

  console.log("aboutUsSeoFormData...", aboutUsSeoFormData);

  useEffect(() => {
    getHomepageSeoData();
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>{aboutUsSeoFormData?.metaTitle}</title>
        <meta
          name="description"
          content={aboutUsSeoFormData?.metaDescription}
        />
        <meta name="keywords" content={aboutUsSeoFormData?.metaKeywords} />

        {/* Canonical (in case ConanicalTag didn't catch it) */}
        <link
          rel="canonical"
          href={`https://www.realtysamachar.com${location.pathname}`}
        />

        {/* Open Graph */}
        <meta property="og:title" content={aboutUsSeoFormData?.metaTitle} />
        <meta
          property="og:description"
          content={aboutUsSeoFormData?.metaDescription}
        />
        <meta property="og:image" content={ogImage} />
        <meta
          property="og:url"
          content={`https://www.realtysamachar.com${location.pathname}`}
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={aboutUsSeoFormData?.metaTitle} />
        <meta
          name="twitter:description"
          content={aboutUsSeoFormData?.metaDescription}
        />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
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
                      <h2>About Us</h2>
                      <p>
                        <strong>Welcome to Realty Samachar</strong>, your
                        trusted source for real estate news from across India.
                      </p>
                      <p>
                        We are a Noida-based real estate news platform founded
                        by Mr. Rahul Choudhary and Mr. Varun Choudhary with a
                        clear purpose—to bring every real estate update to
                        buyers, investors, and even those who are new to the
                        property world.
                      </p>
                      <br />
                      <p>
                        Our goal is simple. We collect, simplify, and share all
                        types of real estate news so that every person, whether
                        experienced or a first-time reader, can understand what
                        is happening in the market.
                      </p>
                      <br />
                      <p>
                        From commercial and residential news to legal updates
                        like RERA regulations and court judgements, we make sure
                        you get every important update before the rest of the
                        market becomes aware of it.
                      </p>
                      <br />
                      <p>
                        We began our operations on{" "}
                        <strong>July 18, 2025</strong>, and since then, we have
                        worked every day to keep you ahead in the real estate
                        game.
                      </p>
                      <br />
                      <p>
                        Whether you are buying a home, investing in property, or
                        just trying to stay informed, News Bhumibajar is here to
                        help you make better decisions with the right knowledge.
                      </p>
                      <br />
                      <p>
                        <strong>Stay connected with us</strong> and be the first
                        to know what’s changing in the real estate world.
                      </p>

                      <hr />
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

export default About;
