import React, { Fragment, useEffect, useState } from "react";
import Header from "../MainPage/Header";
import img1 from "../assets/8/2016/10/demo-image-1-780x470.jpg";
import img2 from "../assets/8/2016/10/demo-new-11-780x470.jpg";
import img3 from "../assets/8/2016/10/demo-image-2-780x470.jpg";
import img4 from "../assets/8/2016/10/new-demo-3-780x470.jpg";
import img5 from "../assets/8/2016/10/new-demo-1-780x470.jpg";
import img6 from "../assets/8/2016/10/demo-new-2-780x470.jpg";
import image1 from "../assets/8/2016/10/11-1.jpg";
import image2 from "../assets/8/2016/10/pexels-photo-89699.jpg";
import image3 from "../assets/8/2016/10/slide-27.jpg";
import image4 from "../assets/8/2016/10/demo-new-11.jpg";
import Footer from "../MainPage/Footer";
import { Link } from "react-router-dom";

const Podcast = () => {
  const [activeTab, setActiveTab] = useState("popular");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  // Modal
  const openPopup = () => {
    setIsOpenModal(true);
  };

  const closePopup = () => {
    setIsOpenModal(false);
  };
  // Sidebar
  const openSideBar = () => {
    setOpenSidebar(true);
  };

  const closeSideBar = () => {
    setOpenSidebar(false);
  };

  useEffect(() => {
    // Lazy load images if supported
    if ("loading" in HTMLImageElement.prototype) {
      document.querySelectorAll("[data-src]").forEach((img) => {
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
      });
    }

    // Update body class names
    let bodyClass = document.body.className;

    bodyClass = bodyClass.replace(/woocommerce-no-js/, "woocommerce-js");
    bodyClass = bodyClass.replace(/tie-no-js/, "tie-js");
    bodyClass = bodyClass.replace(/bbp-no-js/, "bbp-js");

    document.body.className = bodyClass;
  }, []);
  return (
    <Fragment>
      <div
        id="tie-body"
        className="bp-nouveau page-template-default page page-id-2488 theme-jannah tie-no-js woocommerce-no-js boxed-layout framed-layout wrapper-has-shadow block-head-1 magazine2 is-lazyload is-thumb-overlay-disabled is-desktop is-header-layout-3 has-header-ad has-builder hide_breaking_news"
      >
        <div className="background-overlay">
          <div id="tie-container" className="site tie-container">
            <div id="tie-wrapper">
              <Header
                tieSkin="dark"
                openPopup={openPopup}
                openSideBar={openSideBar}
              />
              <div
                id="tiepost-131-section-3286"
                className="section-wrapper container-full without-background"
              >
                <div className="section-item is-first-section full-width">
                  <div className="container">
                    <div className="tie-row main-content-row">
                      <div className="main-content tie-col-md-12">
                        <section
                          id="tie-block_1354"
                          className="slider-area mag-box"
                        >
                          <div className="slider-area-inner">
                            <div
                              id="tie-main-slider-16-block_1354"
                              className="tie-main-slider main-slider grid-4-big-first-half-second boxed-slider grid-slider-wrapper tie-slick-slider-wrapper"
                              data-slider-id={16}
                              data-speed={3000}
                            >
                              <div className="main-slider-inner">
                                <div className="containerblock_1354">
                                  <div className="tie-slick-slider">
                                    <ul className="tie-slider-nav" />
                                    <div className="slide">
                                      <div
                                        style={{
                                          backgroundImage: `url(${img1})`,
                                          //   "url(wp-content/uploads/sites/8/2016/10/demo-image-1-780x470.jpg)"
                                        }}
                                        className="grid-item slide-id-1806 tie-slide-1 tie-standard"
                                      >
                                        <a
                                          href="/video-details"
                                          className="all-over-thumb-link"
                                          aria-label="One man with courage makes a majority"
                                        />
                                        <div className="thumb-overlay">
                                          <span className="post-cat-wrap">
                                            <a
                                              className="post-cat tie-cat-6"
                                              href="category/life-style/index.html"
                                            >
                                              Life Style
                                            </a>
                                          </span>
                                          <div className="thumb-content">
                                            <div className="thumb-meta">
                                              <span className="date meta-item tie-icon">
                                                Oct 27, 2018
                                              </span>
                                            </div>
                                            <h2 className="thumb-title">
                                              <a href="/video-details">
                                                One man with courage makes a
                                                majority
                                              </a>
                                            </h2>
                                            <div className="thumb-desc">
                                              Stay focused and remember we
                                              design the best WordPress News and
                                              Magazine Themes. It’s the…
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        style={{
                                          backgroundImage: `url(${img2})`,
                                          //   "url(wp-content/uploads/sites/8/2016/10/demo-new-11-780x470.jpg)"
                                        }}
                                        className="grid-item slide-id-1959 tie-slide-2 is-trending tie-video"
                                      >
                                        <a
                                          href="2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html"
                                          className="all-over-thumb-link"
                                          aria-label="Success is not a good teacher failure makes you humble"
                                        />
                                        <div className="thumb-overlay">
                                          <span className="post-cat-wrap">
                                            <a
                                              className="post-cat tie-cat-84"
                                              href="category/world/travel/index.html"
                                            >
                                              Travel
                                            </a>
                                          </span>
                                          <div className="thumb-content">
                                            <div className="thumb-meta">
                                              <span
                                                className="trending-post tie-icon-bolt "
                                                aria-hidden="true"
                                              />
                                              <span className="date meta-item tie-icon">
                                                Oct 28, 2016
                                              </span>
                                            </div>
                                            <h2 className="thumb-title">
                                              <a href="2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html">
                                                Success is not a good teacher
                                                failure makes you humble
                                              </a>
                                            </h2>
                                            <div className="thumb-desc">
                                              Stay focused and remember we
                                              design the best WordPress News and
                                              Magazine Themes. It’s the…
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        style={{
                                          backgroundImage: `url(${img3})`,
                                          //   "url(wp-content/uploads/sites/8/2016/10/demo-image-2-780x470.jpg)"
                                        }}
                                        className="grid-item slide-id-1787 tie-slide-3 is-trending tie-standard"
                                      >
                                        <a
                                          href="2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html"
                                          className="all-over-thumb-link"
                                          aria-label="Budget issues force the Tour to be cancelled"
                                        />
                                        <div className="thumb-overlay">
                                          <span className="post-cat-wrap">
                                            <a
                                              className="post-cat tie-cat-84"
                                              href="category/world/travel/index.html"
                                            >
                                              Travel
                                            </a>
                                          </span>
                                          <div className="thumb-content">
                                            <div className="thumb-meta">
                                              <span
                                                className="trending-post tie-icon-bolt "
                                                aria-hidden="true"
                                              />
                                              <span className="date meta-item tie-icon">
                                                Oct 25, 2016
                                              </span>
                                            </div>
                                            <h2 className="thumb-title">
                                              <a href="2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html">
                                                Budget issues force the Tour to
                                                be cancelled
                                              </a>
                                            </h2>
                                            <div className="thumb-desc">
                                              Stay focused and remember we
                                              design the best WordPress News and
                                              Magazine Themes. It’s the…
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        style={{
                                          backgroundImage: `url(${img4})`,
                                          //   "url(wp-content/uploads/sites/8/2016/10/new-demo-3-780x470.jpg)"
                                        }}
                                        className="grid-item slide-id-2269 tie-slide-4 tie-video"
                                      >
                                        <a
                                          href="2016/10/21/instagrams-big-redesign-goes-live-with-black-and-white-app/index.html"
                                          className="all-over-thumb-link"
                                          aria-label="Instagram’s big redesign goes live with black-and-white app"
                                        />
                                        <div className="thumb-overlay">
                                          <span className="post-cat-wrap">
                                            <a
                                              className="post-cat tie-cat-64"
                                              href="category/technology/index.html"
                                            >
                                              Technology
                                            </a>
                                          </span>
                                          <div className="thumb-content">
                                            <div className="thumb-meta">
                                              <span className="date meta-item tie-icon">
                                                Oct 21, 2016
                                              </span>
                                            </div>
                                            <h2 className="thumb-title">
                                              <a href="2016/10/21/instagrams-big-redesign-goes-live-with-black-and-white-app/index.html">
                                                Instagram’s big redesign goes
                                                live with black-and-white app
                                              </a>
                                            </h2>
                                            <div className="thumb-desc">
                                              Stay focused and remember we
                                              design the best WordPress News and
                                              Magazine Themes. It’s the…
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="tiepost-131-section-749"
                className="section-wrapper container normal-width without-background"
              >
                <div className="section-item sidebar-right has-sidebar">
                  <div className="container-normal">
                    <div className="tie-row main-content-row">
                      <div
                        className="main-content tie-col-md-8 tie-col-xs-12"
                        role="main"
                      >
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n\t\t\t\t\t\t\t\t\t\thtml #tie-block_3151 {\n\t\t\t\t\t\t\t\t\t\t\t--brand-color: #f45b50;\n\t\t\t\t\t\t\t\t\t\t\t--dark-brand-color: #d63d32;\n\t\t\t\t\t\t\t\t\t\t\t--bright-color: #FFFFFF;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t",
                          }}
                        />
                        <div
                          id="tie-block_3151"
                          className="mag-box big-post-left-box big-thumb-left-box first-post-gradient has-custom-color"
                          data-current={1}
                        >
                          <div className="container-wrapper">
                            <div className="mag-box-title the-global-title">
                              <h3> Trending News </h3>
                              <div className="tie-alignright">
                                <div className="mag-box-options">
                                  <ul
                                    className="mag-box-filter-links is-flex-tabs"
                                    style={{ opacity: 1 }}
                                  >
                                    <li>
                                      <a
                                        href="#"
                                        className="block-ajax-term block-all-term active"
                                      >
                                        All
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-id={48}
                                        className="block-ajax-term"
                                      >
                                        Foods
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-id={6}
                                        className="block-ajax-term"
                                      >
                                        Life Style
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-id={139}
                                        className="block-ajax-term"
                                      >
                                        Racing
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-id={8}
                                        className="block-ajax-term"
                                      >
                                        Sports
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-id={140}
                                        className="block-ajax-term"
                                      >
                                        Swimming
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-id={64}
                                        className="block-ajax-term"
                                      >
                                        Technology
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-id={84}
                                        className="block-ajax-term"
                                      >
                                        Travel
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-id={1}
                                        className="block-ajax-term"
                                      >
                                        World
                                      </a>
                                    </li>
                                  </ul>
                                  <ul className="slider-arrow-nav">
                                    <li>
                                      {" "}
                                      <a
                                        className="block-pagination prev-posts pagination-disabled"
                                        href="#"
                                      >
                                        {" "}
                                        <span
                                          className="tie-icon-angle-left"
                                          aria-hidden="true"
                                        />{" "}
                                        <span className="screen-reader-text">
                                          Previous page
                                        </span>
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a
                                        className="block-pagination next-posts"
                                        href="#"
                                      >
                                        {" "}
                                        <span
                                          className="tie-icon-angle-right"
                                          aria-hidden="true"
                                        />{" "}
                                        <span className="screen-reader-text">
                                          Next page
                                        </span>{" "}
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="mag-box-container clearfix">
                              <ul className="posts-items posts-list-container">
                                <li className="post-item is-trending tie-standard">
                                  <div
                                    className="big-thumb-left-box-inner"
                                    //   data-lazy-bg="https://jannah.tielabs.com/demo/wp-content/uploads/sites/8/2016/10/post-1-780x470.jpg"
                                    style={{
                                      backgroundImage: `url(${image1})`,
                                    }}
                                  >
                                    <a
                                      aria-label="Not who has much is rich, but who gives much"
                                      href="2016/10/20/not-who-has-much-is-rich-but-who-gives-much/index.html"
                                      className="post-thumb"
                                    >
                                      <span
                                        className="trending-post tie-icon-bolt trending-lg"
                                        aria-hidden="true"
                                      />
                                    </a>
                                    <div className="post-overlay">
                                      <div className="post-content">
                                        {" "}
                                        <a
                                          className="post-cat tie-cat-75"
                                          href="category/world/creative/index.html"
                                        >
                                          Creative
                                        </a>
                                        <h2 className="post-title">
                                          <a href="2016/10/20/not-who-has-much-is-rich-but-who-gives-much/index.html">
                                            Not who has much is rich, but who
                                            gives much
                                          </a>
                                        </h2>
                                        <div className="thumb-meta">
                                          <div className="post-meta clearfix">
                                            <span className="author-meta single-author no-avatars">
                                              <span className="meta-item meta-author-wrapper meta-author-1">
                                                <span className="meta-author">
                                                  <a
                                                    href="members/admin/index.html"
                                                    className="author-name tie-icon"
                                                    title="Tony Stark"
                                                  >
                                                    Tony Stark
                                                  </a>
                                                </span>
                                              </span>
                                            </span>
                                            <span className="date meta-item tie-icon">
                                              Oct 20, 2016
                                            </span>
                                            <div className="tie-alignright">
                                              <span className="meta-comment tie-icon meta-item fa-before">
                                                0
                                              </span>
                                              <span className="meta-views meta-item very-hot">
                                                <span
                                                  className="tie-icon-fire"
                                                  aria-hidden="true"
                                                />
                                                70,377{" "}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="post-item tie-standard">
                                  {" "}
                                  <a
                                    aria-label="The Top 10 Best Computer Speakers in the Market"
                                    href="2016/10/19/the-top-10-best-computer-speakers-in-the-market/index.html"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/slide-27-220x150.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="date meta-item tie-icon">
                                        Oct 19, 2016
                                      </span>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/19/the-top-10-best-computer-speakers-in-the-market/index.html">
                                        The Top 10 Best Computer Speakers in the
                                        Market
                                      </a>
                                    </h2>
                                  </div>
                                </li>
                                <li className="post-item is-trending tie-video">
                                  {" "}
                                  <a
                                    aria-label="Play This Game for Free on Steam This Weekend"
                                    href="2016/10/17/play-this-game-for-free-on-steam-this-weekend/index.html"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/11-1-220x150.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span
                                        className="trending-post tie-icon-bolt trending-sm meta-item"
                                        aria-hidden="true"
                                      />
                                      <span className="date meta-item tie-icon">
                                        Oct 17, 2016
                                      </span>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/17/play-this-game-for-free-on-steam-this-weekend/index.html">
                                        Play This Game for Free on Steam This
                                        Weekend
                                      </a>
                                    </h2>
                                  </div>
                                </li>
                                <li className="post-item is-trending tie-video">
                                  {" "}
                                  <a
                                    aria-label="At Value-Focused Hotels, the Free Breakfast Gets Bigger"
                                    href="2016/10/16/at-value-focused-hotels-the-free-breakfast-gets-bigger/index.html"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/slide-27-220x150.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span
                                        className="trending-post tie-icon-bolt trending-sm meta-item"
                                        aria-hidden="true"
                                      />
                                      <span className="date meta-item tie-icon">
                                        Oct 16, 2016
                                      </span>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/16/at-value-focused-hotels-the-free-breakfast-gets-bigger/index.html">
                                        At Value-Focused Hotels, the Free
                                        Breakfast Gets Bigger
                                      </a>
                                    </h2>
                                  </div>
                                </li>
                                <li className="post-item tie-video">
                                  {" "}
                                  <a
                                    aria-label="There May Be No Consoles in the Future, EA Exec Says"
                                    href="2016/10/15/there-may-be-no-consoles-in-the-future-ea-exec-says/index.html"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/demo-image-3-220x150.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="date meta-item tie-icon">
                                        Oct 15, 2016
                                      </span>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/15/there-may-be-no-consoles-in-the-future-ea-exec-says/index.html">
                                        There May Be No Consoles in the Future,
                                        EA Exec Says
                                      </a>
                                    </h2>
                                  </div>
                                </li>
                                <li className="post-item tie-video">
                                  {" "}
                                  <a
                                    aria-label="Failure is the condiment that gives success its flavor"
                                    href="2016/10/15/failure-is-the-condiment-that-gives-success-its-flavor/index.html"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/slide-27-220x150.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="date meta-item tie-icon">
                                        Oct 15, 2016
                                      </span>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/15/failure-is-the-condiment-that-gives-success-its-flavor/index.html">
                                        Failure is the condiment that gives
                                        success its flavor
                                      </a>
                                    </h2>
                                  </div>
                                </li>
                              </ul>
                              <div className="clearfix" />
                            </div>
                          </div>
                        </div>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n\t\t\t\t\t\t\t\t\t\thtml #tie-block_1160 {\n\t\t\t\t\t\t\t\t\t\t\t--brand-color: #00a950;\n\t\t\t\t\t\t\t\t\t\t\t--dark-brand-color: #008b32;\n\t\t\t\t\t\t\t\t\t\t\t--bright-color: #FFFFFF;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t",
                          }}
                        />
                        <div
                          id="tie-block_1160"
                          className="mag-box big-post-top-box has-first-big-post box-dark-skin dark-skin has-custom-color"
                          data-current={1}
                        >
                          <div className="container-wrapper">
                            <div className="mag-box-title the-global-title">
                              <h3> Sports </h3>
                              <div className="tie-alignright">
                                <div className="mag-box-options">
                                  <ul className="mag-box-filter-links is-flex-tabs">
                                    <li>
                                      <a
                                        href="#"
                                        className="block-ajax-term block-all-term active"
                                      >
                                        All
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-id={138}
                                        className="block-ajax-term"
                                      >
                                        Football
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-id={139}
                                        className="block-ajax-term"
                                      >
                                        Racing
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-id={8}
                                        className="block-ajax-term"
                                      >
                                        Sports
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-id={140}
                                        className="block-ajax-term"
                                      >
                                        Swimming
                                      </a>
                                    </li>
                                  </ul>
                                  <ul className="slider-arrow-nav">
                                    <li>
                                      {" "}
                                      <a
                                        className="block-pagination prev-posts pagination-disabled"
                                        href="#"
                                      >
                                        {" "}
                                        <span
                                          className="tie-icon-angle-left"
                                          aria-hidden="true"
                                        />{" "}
                                        <span className="screen-reader-text">
                                          Previous page
                                        </span>
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a
                                        className="block-pagination next-posts"
                                        href="#"
                                      >
                                        {" "}
                                        <span
                                          className="tie-icon-angle-right"
                                          aria-hidden="true"
                                        />{" "}
                                        <span className="screen-reader-text">
                                          Next page
                                        </span>{" "}
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="mag-box-container clearfix">
                              <ul className="posts-items posts-list-container">
                                <li className="post-item tie-video">
                                  {" "}
                                  <a
                                    aria-label="Les nouveaux maillots du Real Madrid pour la saison"
                                    href="2016/10/06/drug-testing-scarce-in-scottish-football/index.html"
                                    className="post-thumb"
                                  >
                                    <span className="post-cat-wrap">
                                      <span className="post-cat tie-cat-138">
                                        Football
                                      </span>
                                    </span>
                                    <img
                                      width={390}
                                      height={220}
                                      className="attachment-jannah-image-large size-jannah-image-large lazy-img wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/slide15-390x220.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="author-meta single-author no-avatars">
                                        <span className="meta-item meta-author-wrapper meta-author-1">
                                          <span className="meta-author">
                                            <a
                                              href="members/admin/index.html"
                                              className="author-name tie-icon"
                                              title="Tony Stark"
                                            >
                                              Tony Stark
                                            </a>
                                          </span>
                                        </span>
                                      </span>
                                      <span className="date meta-item tie-icon">
                                        Oct 6, 2016
                                      </span>
                                      <div className="tie-alignright">
                                        <span className="meta-comment tie-icon meta-item fa-before">
                                          0
                                        </span>
                                        <span className="meta-views meta-item very-hot">
                                          <span
                                            className="tie-icon-fire"
                                            aria-hidden="true"
                                          />{" "}
                                          22,758{" "}
                                        </span>
                                      </div>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/06/drug-testing-scarce-in-scottish-football/index.html">
                                        Les nouveaux maillots du Real Madrid
                                        pour la saison
                                      </a>
                                    </h2>
                                    <p className="post-excerpt">
                                      Stay focused and remember we design the
                                      best WordPress News and Magazine Themes.
                                      It’s the ones closest to you that want to…
                                    </p>{" "}
                                    <a
                                      className="more-link  new-btn-readmpore"
                                      href="2016/10/06/drug-testing-scarce-in-scottish-football/index.html"
                                    >
                                      Read More »
                                    </a>
                                  </div>
                                </li>
                                <li className="post-item tie-standard">
                                  {" "}
                                  <a
                                    aria-label="I enjoy hard work I love setting goals and achieving them"
                                    href="2016/10/06/i-enjoy-hard-work-i-love-setting-goals-and-achieving-them/index.html"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src={img1}
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="date meta-item tie-icon">
                                        Oct 6, 2016
                                      </span>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/06/i-enjoy-hard-work-i-love-setting-goals-and-achieving-them/index.html">
                                        I enjoy hard work I love setting goals
                                        and achieving them
                                      </a>
                                    </h2>
                                  </div>
                                </li>
                                <li className="post-item tie-video">
                                  {" "}
                                  <a
                                    aria-label="Here What’s in Battlefield 1’s $80 Deluxe Edition"
                                    href="2016/10/04/here-whats-in-battlefield-1s-80-deluxe-edition/index.html"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src={img2}
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="date meta-item tie-icon">
                                        Oct 4, 2016
                                      </span>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/04/here-whats-in-battlefield-1s-80-deluxe-edition/index.html">
                                        Here What’s in Battlefield 1’s $80
                                        Deluxe Edition
                                      </a>
                                    </h2>
                                  </div>
                                </li>
                                <li className="post-item tie-thumb">
                                  {" "}
                                  <a
                                    aria-label="World champion Bingham knocks out Trump"
                                    href="2016/10/03/world-champion-bingham-knocks-out-trump/index.html"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/image1-min-220x150.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="date meta-item tie-icon">
                                        Oct 3, 2016
                                      </span>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/03/world-champion-bingham-knocks-out-trump/index.html">
                                        World champion Bingham knocks out Trump
                                      </a>
                                    </h2>
                                  </div>
                                </li>
                                <li className="post-item tie-standard">
                                  {" "}
                                  <a
                                    aria-label="Saturday’s non-league football"
                                    href="2016/10/03/saturdays-non-league-football/index.html"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src={img3}
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="date meta-item tie-icon">
                                        Oct 3, 2016
                                      </span>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/03/saturdays-non-league-football/index.html">
                                        Saturday’s non-league football
                                      </a>
                                    </h2>
                                  </div>
                                </li>
                              </ul>
                              <div className="clearfix" />
                            </div>
                          </div>
                        </div>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n\t\t\t\t\t\t\t\t\t\thtml #tie-block_1810 {\n\t\t\t\t\t\t\t\t\t\t\t--brand-color: #00afd8;\n\t\t\t\t\t\t\t\t\t\t\t--dark-brand-color: #0091ba;\n\t\t\t\t\t\t\t\t\t\t\t--bright-color: #FFFFFF;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t",
                          }}
                        />
                        <div
                          id="tie-block_1810"
                          className="mag-box tie-col-sm-6 half-box has-first-big-post has-custom-color first-half-box"
                          data-current={1}
                        >
                          <div className="container-wrapper">
                            <div className="mag-box-title the-global-title">
                              <h3> Racing </h3>
                              <div className="tie-alignright">
                                <div className="mag-box-options">
                                  <ul className="slider-arrow-nav">
                                    <li>
                                      {" "}
                                      <a
                                        className="block-pagination prev-posts pagination-disabled"
                                        href="#"
                                      >
                                        {" "}
                                        <span
                                          className="tie-icon-angle-left"
                                          aria-hidden="true"
                                        />{" "}
                                        <span className="screen-reader-text">
                                          Previous page
                                        </span>
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a
                                        className="block-pagination next-posts"
                                        href="#"
                                      >
                                        {" "}
                                        <span
                                          className="tie-icon-angle-right"
                                          aria-hidden="true"
                                        />{" "}
                                        <span className="screen-reader-text">
                                          Next page
                                        </span>{" "}
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="mag-box-container clearfix">
                              <ul className="posts-items posts-list-container">
                                <li className="post-item is-trending tie-video">
                                  {" "}
                                  <a
                                    aria-label="Play This Game for Free on Steam This Weekend"
                                    href="2016/10/17/play-this-game-for-free-on-steam-this-weekend/index.html"
                                    className="post-thumb"
                                  >
                                    <span
                                      className="trending-post tie-icon-bolt trending-lg"
                                      aria-hidden="true"
                                    />
                                    <span className="post-cat-wrap">
                                      <span className="post-cat tie-cat-75">
                                        Creative
                                      </span>
                                    </span>
                                    <img
                                      width={390}
                                      height={220}
                                      className="attachment-jannah-image-large size-jannah-image-large lazy-img wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/11-1-390x220.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="author-meta single-author no-avatars">
                                        <span className="meta-item meta-author-wrapper meta-author-1">
                                          <span className="meta-author">
                                            <a
                                              href="members/admin/index.html"
                                              className="author-name tie-icon"
                                              title="Tony Stark"
                                            >
                                              Tony Stark
                                            </a>
                                          </span>
                                        </span>
                                      </span>
                                      <span className="date meta-item tie-icon">
                                        Oct 17, 2016
                                      </span>
                                      <div className="tie-alignright">
                                        <span className="meta-comment tie-icon meta-item fa-before">
                                          0
                                        </span>
                                        <span className="meta-views meta-item very-hot">
                                          <span
                                            className="tie-icon-fire"
                                            aria-hidden="true"
                                          />{" "}
                                          47,568{" "}
                                        </span>
                                      </div>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/17/play-this-game-for-free-on-steam-this-weekend/index.html">
                                        Play This Game for Free on Steam This
                                        Weekend
                                      </a>
                                    </h2>
                                    <p className="post-excerpt">
                                      Stay focused and remember we design the
                                      best WordPress News and Magazine Themes.
                                      It’s the ones closest to you that…
                                    </p>{" "}
                                    <a
                                      className="more-link  new-btn-readmpore"
                                      href="2016/10/17/play-this-game-for-free-on-steam-this-weekend/index.html"
                                    >
                                      Read More »
                                    </a>
                                  </div>
                                </li>
                                <li className="post-item is-trending tie-video">
                                  {" "}
                                  <a
                                    aria-label="At Value-Focused Hotels, the Free Breakfast Gets Bigger"
                                    href="2016/10/16/at-value-focused-hotels-the-free-breakfast-gets-bigger/index.html"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src={img4}
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span
                                        className="trending-post tie-icon-bolt trending-sm meta-item"
                                        aria-hidden="true"
                                      />
                                      <span className="date meta-item tie-icon">
                                        Oct 16, 2016
                                      </span>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/16/at-value-focused-hotels-the-free-breakfast-gets-bigger/index.html">
                                        At Value-Focused Hotels, the Free
                                        Breakfast Gets Bigger
                                      </a>
                                    </h2>
                                  </div>
                                </li>
                                <li className="post-item tie-video">
                                  {" "}
                                  <a
                                    aria-label="There May Be No Consoles in the Future, EA Exec Says"
                                    href="2016/10/15/there-may-be-no-consoles-in-the-future-ea-exec-says/index.html"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src={img5}
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="date meta-item tie-icon">
                                        Oct 15, 2016
                                      </span>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/15/there-may-be-no-consoles-in-the-future-ea-exec-says/index.html">
                                        There May Be No Consoles in the Future,
                                        EA Exec Says
                                      </a>
                                    </h2>
                                  </div>
                                </li>
                              </ul>
                              <div className="clearfix" />
                            </div>
                          </div>
                        </div>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n\t\t\t\t\t\t\t\t\t\thtml #tie-block_304 {\n\t\t\t\t\t\t\t\t\t\t\t--brand-color: #f9ae00;\n\t\t\t\t\t\t\t\t\t\t\t--dark-brand-color: #db9000;\n\t\t\t\t\t\t\t\t\t\t\t--bright-color: #FFFFFF;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t",
                          }}
                        />
                        <div
                          id="tie-block_304"
                          className="mag-box tie-col-sm-6 half-box has-first-big-post has-custom-color second-half-box"
                          data-current={1}
                        >
                          <div className="container-wrapper">
                            <div className="mag-box-title the-global-title">
                              <h3> LifeStyle </h3>
                              <div className="tie-alignright">
                                <div className="mag-box-options">
                                  <ul className="slider-arrow-nav">
                                    <li>
                                      {" "}
                                      <a
                                        className="block-pagination prev-posts pagination-disabled"
                                        href="#"
                                      >
                                        {" "}
                                        <span
                                          className="tie-icon-angle-left"
                                          aria-hidden="true"
                                        />{" "}
                                        <span className="screen-reader-text">
                                          Previous page
                                        </span>
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a
                                        className="block-pagination next-posts"
                                        href="#"
                                      >
                                        {" "}
                                        <span
                                          className="tie-icon-angle-right"
                                          aria-hidden="true"
                                        />{" "}
                                        <span className="screen-reader-text">
                                          Next page
                                        </span>{" "}
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="mag-box-container clearfix">
                              <ul className="posts-items posts-list-container">
                                <li className="post-item is-trending tie-standard">
                                  {" "}
                                  <a
                                    aria-label="Budget issues force the Tour to be cancelled"
                                    href="2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html"
                                    className="post-thumb"
                                  >
                                    <span
                                      className="trending-post tie-icon-bolt trending-lg"
                                      aria-hidden="true"
                                    />
                                    <span className="post-cat-wrap">
                                      <span className="post-cat tie-cat-84">
                                        Travel
                                      </span>
                                    </span>
                                    <img
                                      width={390}
                                      height={220}
                                      className="attachment-jannah-image-large size-jannah-image-large lazy-img wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/demo-image-2-390x220.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="author-meta single-author no-avatars">
                                        <span className="meta-item meta-author-wrapper meta-author-46">
                                          <span className="meta-author">
                                            <a
                                              href="members/yahia/index.html"
                                              className="author-name tie-icon"
                                              title="Peter Parker"
                                            >
                                              Peter Parker
                                            </a>
                                          </span>
                                        </span>
                                      </span>
                                      <span className="date meta-item tie-icon">
                                        Oct 25, 2016
                                      </span>
                                      <div className="tie-alignright">
                                        <span className="meta-comment tie-icon meta-item fa-before">
                                          0
                                        </span>
                                        <span className="meta-views meta-item very-hot">
                                          <span
                                            className="tie-icon-fire"
                                            aria-hidden="true"
                                          />{" "}
                                          55,661{" "}
                                        </span>
                                      </div>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html">
                                        Budget issues force the Tour to be
                                        cancelled
                                      </a>
                                    </h2>
                                    <p className="post-excerpt">
                                      Stay focused and remember we design the
                                      best WordPress News and Magazine Themes.
                                      It’s the ones closest to you that…
                                    </p>{" "}
                                    <a
                                      className="more-link  new-btn-readmpore"
                                      href="2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html"
                                    >
                                      Read More »
                                    </a>
                                  </div>
                                </li>
                                <li className="post-item is-trending tie-standard">
                                  {" "}
                                  <a
                                    aria-label="Not who has much is rich, but who gives much"
                                    href="2016/10/20/not-who-has-much-is-rich-but-who-gives-much/index.html"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/post-1-220x150.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span
                                        className="trending-post tie-icon-bolt trending-sm meta-item"
                                        aria-hidden="true"
                                      />
                                      <span className="date meta-item tie-icon">
                                        Oct 20, 2016
                                      </span>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/20/not-who-has-much-is-rich-but-who-gives-much/index.html">
                                        Not who has much is rich, but who gives
                                        much
                                      </a>
                                    </h2>
                                  </div>
                                </li>
                                <li className="post-item tie-standard">
                                  {" "}
                                  <a
                                    aria-label="The Top 10 Best Computer Speakers in the Market"
                                    href="2016/10/19/the-top-10-best-computer-speakers-in-the-market/index.html"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/slide-27-220x150.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="date meta-item tie-icon">
                                        Oct 19, 2016
                                      </span>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/19/the-top-10-best-computer-speakers-in-the-market/index.html">
                                        The Top 10 Best Computer Speakers in the
                                        Market
                                      </a>
                                    </h2>
                                  </div>
                                </li>
                              </ul>
                              <div className="clearfix" />
                            </div>
                          </div>
                        </div>
                        <div className="clearfix half-box-clearfix" />
                      </div>
                      <aside
                        className="sidebar tie-col-md-4 tie-col-xs-12 normal-side is-sticky"
                        aria-label="Primary Sidebar"
                      >
                        <div className="theiaStickySidebar">
                          <link
                            rel="stylesheet"
                            id="tie-css-widgets-css"
                            href="wp-content/themes/jannah/assets/css/widgets.min.css"
                            type="text/css"
                            media="all"
                          />
                          <div
                            id="social-statistics-21"
                            className="container-wrapper widget social-statistics-widget"
                          >
                            <div className="widget-title the-global-title">
                              <div className="the-subtitle">
                                Follow Us
                                <span className="widget-title-icon tie-icon" />
                              </div>
                            </div>
                            <div className="social-counter-total">
                              {" "}
                              <span className="tie-icon-heart" />
                              <span className="counter-total-text">
                                Join <strong>1.4M</strong>
                                Followers
                              </span>{" "}
                            </div>
                            <ul className="solid-social-icons two-cols transparent-icons Arqam-Lite">
                              <li className="social-icons-item">
                                {" "}
                                <a
                                  className="facebook-social-icon"
                                  href="http://www.facebook.com/WordPress"
                                  rel="nofollow noopener"
                                  target="_blank"
                                >
                                  {" "}
                                  <span className="counter-icon tie-icon-facebook" />{" "}
                                  <span className="followers">
                                    {" "}
                                    <span className="followers-num">1.3M</span>
                                    <span className="followers-name">
                                      Fans
                                    </span>{" "}
                                  </span>{" "}
                                </a>{" "}
                              </li>
                              <li className="social-icons-item">
                                {" "}
                                <a
                                  className="twitter-social-icon"
                                  href="http://twitter.com/TieLabs"
                                  rel="nofollow noopener"
                                  target="_blank"
                                >
                                  {" "}
                                  <span className="counter-icon tie-icon-twitter" />{" "}
                                  <span className="followers">
                                    {" "}
                                    <span className="followers-num">1,300</span>
                                    <span className="followers-name">
                                      Followers
                                    </span>{" "}
                                  </span>{" "}
                                </a>
                              </li>
                              <li className="social-icons-item">
                                {" "}
                                <a
                                  className="youtube-social-icon"
                                  href="http://youtube.com/user/TEAMMESAI"
                                  rel="nofollow noopener"
                                  target="_blank"
                                >
                                  {" "}
                                  <span className="counter-icon tie-icon-youtube" />{" "}
                                  <span className="followers">
                                    {" "}
                                    <span className="followers-num">
                                      52,500
                                    </span>
                                    <span className="followers-name">
                                      Followers
                                    </span>{" "}
                                  </span>{" "}
                                </a>
                              </li>
                              <li className="social-icons-item">
                                {" "}
                                <a
                                  className="vimeo-social-icon"
                                  href="http://vimeo.com/channels/kidproof"
                                  rel="nofollow noopener"
                                  target="_blank"
                                >
                                  {" "}
                                  <span className="counter-icon tie-icon-vimeo" />{" "}
                                  <span className="followers">
                                    {" "}
                                    <span className="followers-num">1,467</span>
                                    <span className="followers-name">
                                      Subscribers
                                    </span>{" "}
                                  </span>{" "}
                                </a>
                              </li>
                              <li className="social-icons-item">
                                {" "}
                                <a
                                  className="behance-social-icon"
                                  href="http://www.behance.net/matiascorea"
                                  rel="nofollow noopener"
                                  target="_blank"
                                >
                                  {" "}
                                  <span className="counter-icon tie-icon-behance" />{" "}
                                  <span className="followers">
                                    {" "}
                                    <span className="followers-num">
                                      63,185
                                    </span>
                                    <span className="followers-name">
                                      Followers
                                    </span>{" "}
                                  </span>{" "}
                                </a>
                              </li>
                              <li className="social-icons-item">
                                {" "}
                                <a
                                  className="instagram-social-icon"
                                  href="http://instagram.com/tiedemos"
                                  rel="nofollow noopener"
                                  target="_blank"
                                >
                                  {" "}
                                  <span className="counter-icon tie-icon-instagram" />{" "}
                                  <span className="followers">
                                    {" "}
                                    <span className="followers-num">4,561</span>
                                    <span className="followers-name">
                                      Followers
                                    </span>{" "}
                                  </span>{" "}
                                </a>
                              </li>
                            </ul>
                            <div className="clearfix" />
                          </div>
                          <style
                            scoped=""
                            type="text/css"
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n\t\t\t\t\t\t\t\t\t\t\t#tie-weather-widget-13 {\n\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: #5424fb !important;\n\t\t\t\t\t\t\t\t\t\t\t\tborder: none;\n\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t#tie-weather-widget-13.widget-content-only {\n\t\t\t\t\t\t\t\t\t\t\t\tpadding: 20px;\n\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t#tie-weather-widget-13 {\n\t\t\t\t\t\t\t\t\t\t\t\tbackground: #5424fb;\n\t\t\t\t\t\t\t\t\t\t\t\tbackground: -webkit-linear-gradient(135deg, #9836e6, #5424fb);\n\t\t\t\t\t\t\t\t\t\t\t\tbackground: -moz-linear-gradient(135deg, #9836e6, #5424fb);\n\t\t\t\t\t\t\t\t\t\t\t\tbackground: -o-linear-gradient(135deg, #9836e6, #5424fb);\n\t\t\t\t\t\t\t\t\t\t\t\tbackground: linear-gradient(135deg, #5424fb, #9836e6);\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t",
                            }}
                          />
                          <div
                            id="tie-weather-widget-13"
                            className="widget tie-weather-widget"
                          >
                            <div className="widget-title the-global-title">
                              <div className="the-subtitle">
                                Weather
                                <span className="widget-title-icon tie-icon" />
                              </div>
                            </div>
                            <span
                              className="tie-weather-user-location has-title"
                              data-options="{'location':'Cairo','units':'C','forecast_days':'5','custom_name':'Cairo','animated':'true'}"
                            >
                              <span className="tie-icon-gps" />
                            </span>
                            <div
                              id="tie-weather-cairo"
                              className="weather-wrap is-animated"
                            >
                              <div className="weather-icon-and-city">
                                <div className="weather-icon">
                                  <div className="icon-moon" />
                                </div>
                                <div className="weather-name the-subtitle">
                                  Cairo
                                </div>
                                <div className="weather-desc">Clear Sky</div>
                              </div>
                              <div className="weather-todays-stats">
                                <div className="weather-current-temp">
                                  {" "}
                                  17 <sup>℃</sup>{" "}
                                </div>
                                <div className="weather-more-todays-stats">
                                  <div className="weather_highlow">
                                    {" "}
                                    <span
                                      aria-hidden="true"
                                      className="tie-icon-thermometer-half"
                                    />{" "}
                                    34º - 17º{" "}
                                  </div>
                                  <div className="weather_humidty">
                                    {" "}
                                    <span
                                      aria-hidden="true"
                                      className="tie-icon-raindrop"
                                    />{" "}
                                    <span className="screen-reader-text" /> 88%{" "}
                                  </div>
                                  <div className="weather_wind">
                                    {" "}
                                    <span
                                      aria-hidden="true"
                                      className="tie-icon-wind"
                                    />{" "}
                                    <span className="screen-reader-text" /> 1.03
                                    km/h
                                  </div>
                                </div>
                              </div>
                              <div className="weather-forecast small-weather-icons weather_days_5">
                                <div className="weather-forecast-day">
                                  <div className="weather-icon">
                                    <div className="icon-sun" />
                                  </div>
                                  <div className="weather-forecast-day-temp">
                                    34<sup>℃</sup>
                                  </div>
                                  <div className="weather-forecast-day-abbr">
                                    Sat
                                  </div>
                                </div>
                                <div className="weather-forecast-day">
                                  <div className="weather-icon">
                                    <div className="icon-cloud" />
                                    <div className="icon-cloud-behind" />
                                    <div className="icon-basecloud-bg" />
                                    <div className="icon-sun-animi" />
                                  </div>
                                  <div className="weather-forecast-day-temp">
                                    33<sup>℃</sup>
                                  </div>
                                  <div className="weather-forecast-day-abbr">
                                    Sun
                                  </div>
                                </div>
                                <div className="weather-forecast-day">
                                  <div className="weather-icon">
                                    <div className="icon-cloud" />
                                    <div className="icon-cloud-behind" />
                                    <div className="icon-basecloud-bg" />
                                    <div className="icon-sun-animi" />
                                  </div>
                                  <div className="weather-forecast-day-temp">
                                    35<sup>℃</sup>
                                  </div>
                                  <div className="weather-forecast-day-abbr">
                                    Mon
                                  </div>
                                </div>
                                <div className="weather-forecast-day">
                                  <div className="weather-icon">
                                    <div className="icon-cloud" />
                                    <div className="icon-cloud-behind" />
                                    <div className="icon-basecloud-bg" />
                                    <div className="icon-sun-animi" />
                                  </div>
                                  <div className="weather-forecast-day-temp">
                                    41<sup>℃</sup>
                                  </div>
                                  <div className="weather-forecast-day-abbr">
                                    Tue
                                  </div>
                                </div>
                                <div className="weather-forecast-day">
                                  <div className="weather-icon">
                                    <div className="icon-cloud" />
                                    <div className="icon-cloud-behind" />
                                    <div className="icon-basecloud-bg" />
                                    <div className="icon-sun-animi" />
                                  </div>
                                  <div className="weather-forecast-day-temp">
                                    36<sup>℃</sup>
                                  </div>
                                  <div className="weather-forecast-day-abbr">
                                    Wed
                                  </div>
                                </div>
                              </div>
                            </div>
                            <style
                              scoped=""
                              type="text/css"
                              dangerouslySetInnerHTML={{
                                __html:
                                  "\n\t\t\t\t\t\t\t\t\t\t\t\t#tie-weather-widget-13 {\n\t\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: #5424fb;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t#tie-weather-widget-13 .icon-basecloud-bg:after {\n\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: #5424fb;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t#tie-weather-widget-13 {\n\t\t\t\t\t\t\t\t\t\t\t\t\tbackground: #5424fb;\n\t\t\t\t\t\t\t\t\t\t\t\t\tbackground: -webkit-linear-gradient(135deg, #9836e6, #5424fb);\n\t\t\t\t\t\t\t\t\t\t\t\t\tbackground: -moz-linear-gradient(135deg, #9836e6, #5424fb);\n\t\t\t\t\t\t\t\t\t\t\t\t\tbackground: -o-linear-gradient(135deg, #9836e6, #5424fb);\n\t\t\t\t\t\t\t\t\t\t\t\t\tbackground: linear-gradient(135deg, #5424fb, #9836e6);\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t#tie-weather-widget-13 .icon-basecloud-bg:after {\n\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: inherit;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t",
                              }}
                            />
                            <div className="clearfix" />
                          </div>

                          <div
                            id="widget_tabs-2"
                            className="container-wrapper tabs-container-wrapper tabs-container-4"
                          >
                            <div className="widget tabs-widget">
                              <div className="widget-container">
                                <div className="tabs-widget">
                                  <div className="tabs-wrapper">
                                    <ul className="tabs">
                                      <li>
                                        <Link
                                          to="#widget_tabs-2-popular"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setActiveTab("popular");
                                          }}
                                          className={
                                            activeTab === "popular"
                                              ? "active"
                                              : ""
                                          }
                                        >
                                          Popular
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="#widget_tabs-2-recent"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setActiveTab("recent");
                                          }}
                                          className={
                                            activeTab === "recent"
                                              ? "active"
                                              : ""
                                          }
                                        >
                                          Recent
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="#widget_tabs-2-comments"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setActiveTab("comments");
                                          }}
                                          className={
                                            activeTab === "comments"
                                              ? "active"
                                              : ""
                                          }
                                        >
                                          Comments
                                        </Link>
                                      </li>
                                    </ul>
                                    {activeTab === "popular" && (
                                      <div
                                        id="widget_tabs-2-popular"
                                        className="tab-content tab-content-popular"
                                      >
                                        <ul className="tab-content-elements">
                                          <li className="widget-single-post-item widget-post-list tie-standard">
                                            <div className="post-widget-thumbnail">
                                              {" "}
                                              <Link
                                                aria-label="One man with courage makes a majority"
                                                to="../2018/10/27/after-all-is-said-and-done-more-is-done/index.html"
                                                className="post-thumb"
                                              >
                                                <img
                                                  width={220}
                                                  height={150}
                                                  // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABLAQMAAACr9CA9AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUOI1jYMADmEe5o9xR7iiXQi4A4BsA388WUyMAAAAASUVORK5CYII="
                                                  className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                                  alt="Custom Alternative Text"
                                                  decoding="async"
                                                  src="8/2016/10/demo-image-1-220x150.jpg"
                                                  loading="lazy"
                                                />
                                              </Link>{" "}
                                            </div>
                                            <div className="post-widget-body ">
                                              {" "}
                                              <Link
                                                className="post-title the-subtitle"
                                                to="../2018/10/27/after-all-is-said-and-done-more-is-done/index.html"
                                              >
                                                One man with courage makes a
                                                majority
                                              </Link>
                                              <div className="post-meta">
                                                {" "}
                                                <span className="date meta-item tie-icon">
                                                  Oct 27, 2018
                                                </span>
                                                <div className="post-rating image-stars">
                                                  <div className="stars-rating-bg" />
                                                  <div
                                                    className="stars-rating-active"
                                                    data-rate-val="91.833333333333%"
                                                    data-lazy-percent={1}
                                                  >
                                                    <div className="stars-rating-active-inner"></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li className="widget-single-post-item widget-post-list is-trending tie-video">
                                            <div className="post-widget-thumbnail">
                                              {" "}
                                              <Link
                                                aria-label="Success is not a good teacher failure makes you humble"
                                                to="../2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html"
                                                className="post-thumb"
                                              >
                                                <img
                                                  width={220}
                                                  height={150}
                                                  // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABLAQMAAACr9CA9AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUOI1jYMADmEe5o9xR7iiXQi4A4BsA388WUyMAAAAASUVORK5CYII="
                                                  className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                                  alt=""
                                                  decoding="async"
                                                  src="8/2016/10/demo-new-11-220x150.jpg"
                                                  loading="lazy"
                                                />
                                              </Link>{" "}
                                            </div>
                                            <div className="post-widget-body ">
                                              {" "}
                                              <Link
                                                className="post-title the-subtitle"
                                                to="../2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html"
                                              >
                                                Success is not a good teacher
                                                failure makes you humble
                                              </Link>
                                              <div className="post-meta">
                                                {" "}
                                                <span className="date meta-item tie-icon">
                                                  Oct 28, 2016
                                                </span>{" "}
                                              </div>
                                            </div>
                                          </li>
                                          <li className="widget-single-post-item widget-post-list is-trending tie-standard">
                                            <div className="post-widget-thumbnail">
                                              {" "}
                                              <Link
                                                aria-label="Not who has much is rich, but who gives much"
                                                to="../2016/10/20/not-who-has-much-is-rich-but-who-gives-much/index.html"
                                                className="post-thumb"
                                              >
                                                <img
                                                  width={220}
                                                  height={150}
                                                  // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABLAQMAAACr9CA9AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUOI1jYMADmEe5o9xR7iiXQi4A4BsA388WUyMAAAAASUVORK5CYII="
                                                  className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                                  alt=""
                                                  decoding="async"
                                                  src="8/2016/10/post-1-220x150.jpg"
                                                  loading="lazy"
                                                />
                                              </Link>{" "}
                                            </div>
                                            <div className="post-widget-body ">
                                              {" "}
                                              <Link
                                                className="post-title the-subtitle"
                                                to="../2016/10/20/not-who-has-much-is-rich-but-who-gives-much/index.html"
                                              >
                                                Not who has much is rich, but
                                                who gives much
                                              </Link>
                                              <div className="post-meta">
                                                {" "}
                                                <span className="date meta-item tie-icon">
                                                  Oct 20, 2016
                                                </span>{" "}
                                              </div>
                                            </div>
                                          </li>
                                          <li className="widget-single-post-item widget-post-list is-trending tie-standard">
                                            <div className="post-widget-thumbnail">
                                              {" "}
                                              <Link
                                                aria-label="Budget issues force the Tour to be cancelled"
                                                to="../2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html"
                                                className="post-thumb"
                                              >
                                                <img
                                                  width={220}
                                                  height={150}
                                                  // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABLAQMAAACr9CA9AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUOI1jYMADmEe5o9xR7iiXQi4A4BsA388WUyMAAAAASUVORK5CYII="
                                                  className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                                  alt=""
                                                  decoding="async"
                                                  src="8/2016/10/demo-image-2-220x150.jpg"
                                                  loading="lazy"
                                                />
                                              </Link>{" "}
                                            </div>
                                            <div className="post-widget-body ">
                                              {" "}
                                              <Link
                                                className="post-title the-subtitle"
                                                to="../2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html"
                                              >
                                                Budget issues force the Tour to
                                                be cancelled
                                              </Link>
                                              <div className="post-meta">
                                                {" "}
                                                <span className="date meta-item tie-icon">
                                                  Oct 25, 2016
                                                </span>{" "}
                                              </div>
                                            </div>
                                          </li>
                                          <li className="widget-single-post-item widget-post-list is-trending tie-video">
                                            <div className="post-widget-thumbnail">
                                              {" "}
                                              <Link
                                                aria-label="Play This Game for Free on Steam This Weekend"
                                                to="../2016/10/17/play-this-game-for-free-on-steam-this-weekend/index.html"
                                                className="post-thumb"
                                              >
                                                <img
                                                  width={220}
                                                  height={150}
                                                  // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABLAQMAAACr9CA9AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUOI1jYMADmEe5o9xR7iiXQi4A4BsA388WUyMAAAAASUVORK5CYII="
                                                  className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                                  alt=""
                                                  decoding="async"
                                                  src="8/2016/10/11-1-220x150.jpg"
                                                  loading="lazy"
                                                />
                                              </Link>{" "}
                                            </div>
                                            <div className="post-widget-body ">
                                              {" "}
                                              <Link
                                                className="post-title the-subtitle"
                                                to="../2016/10/17/play-this-game-for-free-on-steam-this-weekend/index.html"
                                              >
                                                Play This Game for Free on Steam
                                                This Weekend
                                              </Link>
                                              <div className="post-meta">
                                                {" "}
                                                <span className="date meta-item tie-icon">
                                                  Oct 17, 2016
                                                </span>{" "}
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    )}
                                    {activeTab === "recent" && (
                                      <div
                                        id="widget_tabs-2-recent"
                                        className="tab-content tab-content-recent"
                                      >
                                        <ul className="tab-content-elements">
                                          <li className="widget-single-post-item widget-post-list tie-standard">
                                            <div className="post-widget-thumbnail">
                                              {" "}
                                              <Link
                                                aria-label="One man with courage makes a majority"
                                                to="../2018/10/27/after-all-is-said-and-done-more-is-done/index.html"
                                                className="post-thumb"
                                              >
                                                <img
                                                  width={220}
                                                  height={150}
                                                  // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABLAQMAAACr9CA9AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUOI1jYMADmEe5o9xR7iiXQi4A4BsA388WUyMAAAAASUVORK5CYII="
                                                  className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                                  alt="Custom Alternative Text"
                                                  decoding="async"
                                                  src="8/2016/10/demo-image-1-220x150.jpg"
                                                  loading="lazy"
                                                />
                                              </Link>{" "}
                                            </div>
                                            <div className="post-widget-body ">
                                              {" "}
                                              <Link
                                                className="post-title the-subtitle"
                                                to="../2018/10/27/after-all-is-said-and-done-more-is-done/index.html"
                                              >
                                                One man with courage makes a
                                                majority
                                              </Link>
                                              <div className="post-meta">
                                                {" "}
                                                <span className="date meta-item tie-icon">
                                                  Oct 27, 2018
                                                </span>
                                                <div className="post-rating image-stars">
                                                  <div className="stars-rating-bg" />
                                                  <div
                                                    className="stars-rating-active"
                                                    data-rate-val="91.833333333333%"
                                                    data-lazy-percent={1}
                                                  >
                                                    <div className="stars-rating-active-inner"></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li className="widget-single-post-item widget-post-list is-trending tie-video">
                                            <div className="post-widget-thumbnail">
                                              {" "}
                                              <Link
                                                aria-label="Success is not a good teacher failure makes you humble"
                                                to="../2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html"
                                                className="post-thumb"
                                              >
                                                <img
                                                  width={220}
                                                  height={150}
                                                  // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABLAQMAAACr9CA9AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUOI1jYMADmEe5o9xR7iiXQi4A4BsA388WUyMAAAAASUVORK5CYII="
                                                  className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                                  alt=""
                                                  decoding="async"
                                                  src="8/2016/10/demo-new-11-220x150.jpg"
                                                  loading="lazy"
                                                />
                                              </Link>{" "}
                                            </div>
                                            <div className="post-widget-body ">
                                              {" "}
                                              <Link
                                                className="post-title the-subtitle"
                                                to="../2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html"
                                              >
                                                Success is not a good teacher
                                                failure makes you humble
                                              </Link>
                                              <div className="post-meta">
                                                {" "}
                                                <span className="date meta-item tie-icon">
                                                  Oct 28, 2016
                                                </span>{" "}
                                              </div>
                                            </div>
                                          </li>
                                          <li className="widget-single-post-item widget-post-list is-trending tie-standard">
                                            <div className="post-widget-thumbnail">
                                              {" "}
                                              <Link
                                                aria-label="Budget issues force the Tour to be cancelled"
                                                to="../2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html"
                                                className="post-thumb"
                                              >
                                                <img
                                                  width={220}
                                                  height={150}
                                                  // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABLAQMAAACr9CA9AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUOI1jYMADmEe5o9xR7iiXQi4A4BsA388WUyMAAAAASUVORK5CYII="
                                                  className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                                  alt=""
                                                  decoding="async"
                                                  src="8/2016/10/demo-image-2-220x150.jpg"
                                                  loading="lazy"
                                                />
                                              </Link>{" "}
                                            </div>
                                            <div className="post-widget-body ">
                                              {" "}
                                              <Link
                                                className="post-title the-subtitle"
                                                to="../2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html"
                                              >
                                                Budget issues force the Tour to
                                                be cancelled
                                              </Link>
                                              <div className="post-meta">
                                                {" "}
                                                <span className="date meta-item tie-icon">
                                                  Oct 25, 2016
                                                </span>{" "}
                                              </div>
                                            </div>
                                          </li>
                                          <li className="widget-single-post-item widget-post-list tie-video">
                                            <div className="post-widget-thumbnail">
                                              {" "}
                                              <Link
                                                aria-label="Instagram’s big redesign goes live with black-and-white app"
                                                to="../2016/10/21/instagrams-big-redesign-goes-live-with-black-and-white-app/index.html"
                                                className="post-thumb"
                                              >
                                                <img
                                                  width={220}
                                                  height={150}
                                                  // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABLAQMAAACr9CA9AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUOI1jYMADmEe5o9xR7iiXQi4A4BsA388WUyMAAAAASUVORK5CYII="
                                                  className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                                  alt=""
                                                  decoding="async"
                                                  src="8/2016/10/new-demo-3-220x150.jpg"
                                                  loading="lazy"
                                                />
                                              </Link>{" "}
                                            </div>
                                            <div className="post-widget-body ">
                                              {" "}
                                              <Link
                                                className="post-title the-subtitle"
                                                to="../2016/10/21/instagrams-big-redesign-goes-live-with-black-and-white-app/index.html"
                                              >
                                                Instagram’s big redesign goes
                                                live with black-and-white app
                                              </Link>
                                              <div className="post-meta">
                                                {" "}
                                                <span className="date meta-item tie-icon">
                                                  Oct 21, 2016
                                                </span>{" "}
                                              </div>
                                            </div>
                                          </li>
                                          <li className="widget-single-post-item widget-post-list tie-video">
                                            <div className="post-widget-thumbnail">
                                              {" "}
                                              <Link
                                                aria-label="The only thing that overcomes hard luck is hard work"
                                                to="../2016/10/20/the-only-thing-that-overcomes-hard-luck-is-hard-work/index.html"
                                                className="post-thumb"
                                              >
                                                <img
                                                  width={220}
                                                  height={150}
                                                  // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABLAQMAAACr9CA9AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUOI1jYMADmEe5o9xR7iiXQi4A4BsA388WUyMAAAAASUVORK5CYII="
                                                  className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                                  alt=""
                                                  decoding="async"
                                                  src="8/2016/05/7040731-cam-newton-220x150.jpg"
                                                  loading="lazy"
                                                />
                                              </Link>{" "}
                                            </div>
                                            <div className="post-widget-body ">
                                              {" "}
                                              <Link
                                                className="post-title the-subtitle"
                                                to="../2016/10/20/the-only-thing-that-overcomes-hard-luck-is-hard-work/index.html"
                                              >
                                                The only thing that overcomes
                                                hard luck is hard work
                                              </Link>
                                              <div className="post-meta">
                                                {" "}
                                                <span className="date meta-item tie-icon">
                                                  Oct 20, 2016
                                                </span>{" "}
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    )}
                                    {activeTab === "comments" && (
                                      <div
                                        id="widget_tabs-2-comments"
                                        className="tab-content tab-content-comments"
                                      >
                                        <ul className="tab-content-elements">
                                          <li>
                                            <div
                                              className="post-widget-thumbnail"
                                              style={{ width: 70 }}
                                            >
                                              {" "}
                                              <Link
                                                className="author-avatar"
                                                to="#comment-20605"
                                              >
                                                {" "}
                                                <img
                                                  alt=""
                                                  // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                                                  src="//themes.tielabs.com/data/avatar-1.jpg"
                                                  className="lazy-img avatar avatar-70 photo"
                                                  height={70}
                                                  width={70}
                                                  loading="lazy"
                                                />{" "}
                                              </Link>{" "}
                                            </div>
                                            <div className="post-widget-body ">
                                              {" "}
                                              <Link
                                                className="comment-author"
                                                to="#comment-20605"
                                              >
                                                {" "}
                                              </Link>
                                              <p>...</p>
                                            </div>
                                          </li>
                                          <li>
                                            <div
                                              className="post-widget-thumbnail"
                                              style={{ width: 70 }}
                                            >
                                              {" "}
                                              <Link
                                                className="author-avatar"
                                                to="../2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html#comment-18586"
                                              >
                                                <img
                                                  alt=""
                                                  // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                                                  src="//themes.tielabs.com/data/avatar-1.jpg"
                                                  className="lazy-img avatar avatar-70 photo"
                                                  height={70}
                                                  width={70}
                                                  loading="lazy"
                                                />{" "}
                                              </Link>{" "}
                                            </div>
                                            <div className="post-widget-body ">
                                              {" "}
                                              <Link
                                                className="comment-author"
                                                to="../2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html#comment-18586"
                                              >
                                                Fouad Badawy{" "}
                                              </Link>
                                              <p>
                                                focused and remember we design
                                                the best WordPress News and M...
                                              </p>
                                            </div>
                                          </li>
                                          <li>
                                            <div
                                              className="post-widget-thumbnail"
                                              style={{ width: 70 }}
                                            >
                                              {" "}
                                              <Link
                                                className="author-avatar"
                                                to="../2016/10/21/instagrams-big-redesign-goes-live-with-black-and-white-app/index.html#comment-18573"
                                              >
                                                <img
                                                  alt=""
                                                  // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                                                  src="//themes.tielabs.com/data/avatar-1.jpg"
                                                  className="lazy-img avatar avatar-70 photo"
                                                  height={70}
                                                  width={70}
                                                  loading="lazy"
                                                />{" "}
                                              </Link>{" "}
                                            </div>
                                            <div className="post-widget-body ">
                                              {" "}
                                              <Link
                                                className="comment-author"
                                                to="../2016/10/21/instagrams-big-redesign-goes-live-with-black-and-white-app/index.html#comment-18573"
                                              >
                                                Fouad Badawy{" "}
                                              </Link>
                                              <p>Great...</p>
                                            </div>
                                          </li>
                                          <li>
                                            <div
                                              className="post-widget-thumbnail"
                                              style={{ width: 70 }}
                                            >
                                              {" "}
                                              <Link
                                                className="author-avatar"
                                                to="../2016/10/21/instagrams-big-redesign-goes-live-with-black-and-white-app/index.html#comment-15735"
                                              >
                                                <img
                                                  alt=""
                                                  // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                                                  src="//themes.tielabs.com/data/avatar-1.jpg"
                                                  className="lazy-img avatar avatar-70 photo"
                                                  height={70}
                                                  width={70}
                                                  loading="lazy"
                                                />{" "}
                                              </Link>{" "}
                                            </div>
                                            <div className="post-widget-body ">
                                              {" "}
                                              <Link
                                                className="comment-author"
                                                to="../2016/10/21/instagrams-big-redesign-goes-live-with-black-and-white-app/index.html#comment-15735"
                                              >
                                                Fouad Badawy{" "}
                                              </Link>
                                              <p>
                                                Check the main demo here
                                                https://jannah.tielabs.com/demo...
                                              </p>
                                            </div>
                                          </li>
                                          <li>
                                            <div
                                              className="post-widget-thumbnail"
                                              style={{ width: 70 }}
                                            >
                                              {" "}
                                              <Link
                                                className="author-avatar"
                                                to="../2016/10/21/instagrams-big-redesign-goes-live-with-black-and-white-app/index.html#comment-8507"
                                              >
                                                <img
                                                  alt=""
                                                  // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                                                  src="//themes.tielabs.com/data/avatar-1.jpg"
                                                  className="lazy-img avatar avatar-70 photo"
                                                  height={70}
                                                  width={70}
                                                  loading="lazy"
                                                />{" "}
                                              </Link>{" "}
                                            </div>
                                            <div className="post-widget-body ">
                                              {" "}
                                              <Link
                                                className="comment-author"
                                                to="../2016/10/21/instagrams-big-redesign-goes-live-with-black-and-white-app/index.html#comment-8507"
                                              >
                                                Fouad Badawy{" "}
                                              </Link>
                                              <p>
                                                Great Post, test Comment....
                                              </p>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="tiepost-131-section-8509"
                className="section-wrapper container-full has-background"
              >
                <div
                  className="section-item full-width"
                  style={{
                    backgroundColor: "#eeeeee",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="container">
                    <div className="tie-row main-content-row">
                      <div className="main-content tie-col-md-12">
                        <section
                          id="tie-block_3032"
                          className="slider-area mag-box media-overlay"
                        >
                          <div className="slider-area-inner">
                            <div
                              id="tie-main-slider-9-block_3032"
                              className="tie-main-slider main-slider grid-2-big boxed-slider grid-slider-wrapper tie-slick-slider-wrapper"
                              data-slider-id={9}
                              data-speed={3000}
                            >
                              <div className="main-slider-inner">
                                <div className="containerblock_3032">
                                  <div className="tie-slick-slider">
                                    <ul className="tie-slider-nav" />
                                    <div className="slide">
                                      <div
                                        style={{
                                          backgroundImage: `url(${img5})`,
                                        }}
                                        className="grid-item slide-id-1982 tie-slide-1 tie-standard"
                                      >
                                        <a
                                          href="2016/10/03/saturdays-non-league-football/index.html"
                                          className="all-over-thumb-link"
                                          aria-label="Saturday’s non-league football"
                                        />
                                        <div className="thumb-overlay">
                                          {" "}
                                          <span className="tie-icon tie-media-icon" />
                                          <span className="post-cat-wrap">
                                            <a
                                              className="post-cat tie-cat-8"
                                              href="category/sports/index.html"
                                            >
                                              Sports
                                            </a>
                                          </span>
                                          <div className="thumb-content">
                                            <div className="thumb-meta">
                                              <span className="date meta-item tie-icon">
                                                Oct 3, 2016
                                              </span>
                                            </div>
                                            <h2 className="thumb-title">
                                              <a href="2016/10/03/saturdays-non-league-football/index.html">
                                                Saturday’s non-league football
                                              </a>
                                            </h2>
                                            <div className="thumb-desc">
                                              Stay focused and remember we
                                              design the best WordPress News and
                                              Magazine Themes. It’s the ones
                                              closest to you that…
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        style={{
                                          backgroundImage: `url(${img6})`,
                                        }}
                                        className="grid-item slide-id-1830 tie-slide-2 is-trending tie-video"
                                      >
                                        <a
                                          href="2016/10/02/chinese-tourists-pump-cash-into-a-hot-destination-china/index.html"
                                          className="all-over-thumb-link"
                                          aria-label="Chinese Tourists Pump Cash Into a Hot Destination China"
                                        />
                                        <div className="thumb-overlay">
                                          {" "}
                                          <span className="tie-icon tie-media-icon" />
                                          <span className="post-cat-wrap">
                                            <a
                                              className="post-cat tie-cat-8"
                                              href="category/sports/index.html"
                                            >
                                              Sports
                                            </a>
                                          </span>
                                          <div className="thumb-content">
                                            <div className="thumb-meta">
                                              <span
                                                className="trending-post tie-icon-bolt "
                                                aria-hidden="true"
                                              />
                                              <span className="date meta-item tie-icon">
                                                Oct 2, 2016
                                              </span>
                                            </div>
                                            <h2 className="thumb-title">
                                              <a href="2016/10/02/chinese-tourists-pump-cash-into-a-hot-destination-china/index.html">
                                                Chinese Tourists Pump Cash Into
                                                a Hot Destination China
                                              </a>
                                            </h2>
                                            <div className="thumb-desc">
                                              Stay focused and remember we
                                              design the best WordPress News and
                                              Magazine Themes. It’s the ones
                                              closest to you that…
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="tiepost-131-section-6559"
                className="section-wrapper container normal-width without-background"
              >
                <div className="section-item sidebar-right has-sidebar">
                  <div className="container-normal">
                    <div className="tie-row main-content-row">
                      <div
                        className="main-content tie-col-md-8 tie-col-xs-12"
                        role="main"
                      >
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n\t\t\t\t\t\t\t\t\t\thtml #tie-block_611 {\n\t\t\t\t\t\t\t\t\t\t\t--brand-color: #0ab3af;\n\t\t\t\t\t\t\t\t\t\t\t--dark-brand-color: #009591;\n\t\t\t\t\t\t\t\t\t\t\t--bright-color: #FFFFFF;\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t#tie-block_611 {\n\t\t\t\t\t\t\t\t\t\t\tcolor: #000000;\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t#tie-block_611 .container-wrapper,\n\t\t\t\t\t\t\t\t\t\t#tie-block_611 .flexMenu-popup,\n\t\t\t\t\t\t\t\t\t\t#tie-block_611.full-overlay-title li:not(.no-post-thumb) .block-title-overlay {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #e4f7f6;\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t#tie-block_611 .slider-arrow-nav a:not(:hover),\n\t\t\t\t\t\t\t\t\t\t#tie-block_611 .pagination-disabled,\n\t\t\t\t\t\t\t\t\t\t#tie-block_611 .pagination-disabled:hover {\n\t\t\t\t\t\t\t\t\t\t\tcolor: #000000 !important;\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t#tie-block_611 a:not(:hover):not(.button) {\n\t\t\t\t\t\t\t\t\t\t\tcolor: #000000;\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t#tie-block_611 .entry,\n\t\t\t\t\t\t\t\t\t\t#tie-block_611 .post-excerpt,\n\t\t\t\t\t\t\t\t\t\t#tie-block_611 .post-meta,\n\t\t\t\t\t\t\t\t\t\t#tie-block_611 .day-month,\n\t\t\t\t\t\t\t\t\t\t#tie-block_611 .post-meta a:not(:hover) {\n\t\t\t\t\t\t\t\t\t\t\tcolor: #000000 !important;\n\t\t\t\t\t\t\t\t\t\t\topacity: 0.9;\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t#tie-block_611.first-post-gradient .posts-items li:first-child a:not(:hover),\n\t\t\t\t\t\t\t\t\t\t#tie-block_611.first-post-gradient li:first-child .post-meta {\n\t\t\t\t\t\t\t\t\t\t\tcolor: #ffffff !important;\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t#tie-block_611 .slider-arrow-nav a,\n\t\t\t\t\t\t\t\t\t\t#tie-block_611 .pages-nav .pages-numbers a,\n\t\t\t\t\t\t\t\t\t\t#tie-block_611 .show-more-button {\n\t\t\t\t\t\t\t\t\t\t\tborder-color: #c6d9d8;\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.block-head-1 #tie-block_611 .the-global-title {\n\t\t\t\t\t\t\t\t\t\t\tborder-color: #c6d9d8;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t",
                          }}
                        />
                        <div
                          id="tie-block_611"
                          className="mag-box big-post-left-box has-first-big-post has-custom-color has-custom-bg-color"
                          data-current={1}
                        >
                          <div className="container-wrapper">
                            <div className="mag-box-title the-global-title">
                              <h3> Technology </h3>
                              <div className="tie-alignright">
                                <div className="mag-box-options">
                                  <ul
                                    className="mag-box-filter-links is-flex-tabs"
                                    style={{ opacity: 1 }}
                                  >
                                    <li>
                                      <a
                                        href="#"
                                        className="block-ajax-term block-all-term active"
                                      >
                                        All
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-id={75}
                                        className="block-ajax-term"
                                      >
                                        Creative
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-id={64}
                                        className="block-ajax-term"
                                      >
                                        Technology
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-id={1}
                                        className="block-ajax-term"
                                      >
                                        World
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="mag-box-container clearfix">
                              <ul className="posts-items posts-list-container">
                                <li className="post-item is-trending tie-video">
                                  {" "}
                                  <a
                                    aria-label="Success is not a good teacher failure makes you humble"
                                    href="2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html"
                                    className="post-thumb"
                                  >
                                    <span
                                      className="trending-post tie-icon-bolt trending-lg"
                                      aria-hidden="true"
                                    />
                                    <span className="post-cat-wrap">
                                      <span className="post-cat tie-cat-84">
                                        Travel
                                      </span>
                                    </span>
                                    <img
                                      width={390}
                                      height={220}
                                      className="attachment-jannah-image-large size-jannah-image-large lazy-img wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/demo-new-11-390x220.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="author-meta single-author no-avatars">
                                        <span className="meta-item meta-author-wrapper meta-author-1">
                                          <span className="meta-author">
                                            <a
                                              href="members/admin/index.html"
                                              className="author-name tie-icon"
                                              title="Tony Stark"
                                            >
                                              Tony Stark
                                            </a>
                                          </span>
                                        </span>
                                      </span>
                                      <span className="date meta-item tie-icon">
                                        Oct 28, 2016
                                      </span>
                                      <div className="tie-alignright">
                                        <span className="meta-comment tie-icon meta-item fa-before">
                                          1
                                        </span>
                                        <span className="meta-views meta-item very-hot">
                                          <span
                                            className="tie-icon-fire"
                                            aria-hidden="true"
                                          />{" "}
                                          105,139{" "}
                                        </span>
                                      </div>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html">
                                        Success is not a good teacher failure
                                        makes you humble
                                      </a>
                                    </h2>
                                    <p className="post-excerpt">
                                      Stay focused and remember we design the
                                      best WordPress News and Magazine Themes.
                                      It’s the ones closest to you that want to…
                                    </p>{" "}
                                    <a
                                      className="more-link  new-btn-readmpore"
                                      href="2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html"
                                    >
                                      Read More »
                                    </a>
                                  </div>
                                </li>
                                <li className="post-item is-trending tie-standard">
                                  {" "}
                                  <a
                                    aria-label="Budget issues force the Tour to be cancelled"
                                    href="2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/demo-image-2-220x150.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span
                                        className="trending-post tie-icon-bolt trending-sm meta-item"
                                        aria-hidden="true"
                                      />
                                      <span className="date meta-item tie-icon">
                                        Oct 25, 2016
                                      </span>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html">
                                        Budget issues force the Tour to be
                                        cancelled
                                      </a>
                                    </h2>
                                  </div>
                                </li>
                                <li className="post-item tie-video">
                                  {" "}
                                  <a
                                    aria-label="Instagram’s big redesign goes live with black-and-white app"
                                    href="2016/10/21/instagrams-big-redesign-goes-live-with-black-and-white-app/index.html"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/new-demo-3-220x150.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="date meta-item tie-icon">
                                        Oct 21, 2016
                                      </span>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/21/instagrams-big-redesign-goes-live-with-black-and-white-app/index.html">
                                        Instagram’s big redesign goes live with
                                        black-and-white app
                                      </a>
                                    </h2>
                                  </div>
                                </li>
                                <li className="post-item is-trending tie-standard">
                                  {" "}
                                  <a
                                    aria-label="Not who has much is rich, but who gives much"
                                    href="2016/10/20/not-who-has-much-is-rich-but-who-gives-much/index.html"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/post-1-220x150.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span
                                        className="trending-post tie-icon-bolt trending-sm meta-item"
                                        aria-hidden="true"
                                      />
                                      <span className="date meta-item tie-icon">
                                        Oct 20, 2016
                                      </span>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/20/not-who-has-much-is-rich-but-who-gives-much/index.html">
                                        Not who has much is rich, but who gives
                                        much
                                      </a>
                                    </h2>
                                  </div>
                                </li>
                                <li className="post-item tie-standard">
                                  {" "}
                                  <a
                                    aria-label="The Top 10 Best Computer Speakers in the Market"
                                    href="2016/10/19/the-top-10-best-computer-speakers-in-the-market/index.html"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/slide-27-220x150.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="date meta-item tie-icon">
                                        Oct 19, 2016
                                      </span>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/19/the-top-10-best-computer-speakers-in-the-market/index.html">
                                        The Top 10 Best Computer Speakers in the
                                        Market
                                      </a>
                                    </h2>
                                  </div>
                                </li>
                              </ul>
                              <div className="clearfix" />
                            </div>
                            <div className="pages-nav">
                              <div className="pages-numbers pages-standard">
                                {" "}
                                <span className="first-page first-last-pages">
                                  {" "}
                                  <a
                                    className="block-pagination prev-posts pagination-disabled"
                                    href="#"
                                  >
                                    {" "}
                                    <span
                                      className="pagination-icon"
                                      aria-hidden="true"
                                    />{" "}
                                    Previous{" "}
                                  </a>{" "}
                                </span>{" "}
                                <span className="last-page first-last-pages">
                                  {" "}
                                  <a
                                    className="block-pagination next-posts"
                                    href="#"
                                  >
                                    {" "}
                                    <span
                                      className="pagination-icon"
                                      aria-hidden="true"
                                    />{" "}
                                    Next
                                  </a>{" "}
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n\t\t\t\t\t\t\t\t\t\thtml #tie-block_1837 {\n\t\t\t\t\t\t\t\t\t\t\t--brand-color: #9b59b6;\n\t\t\t\t\t\t\t\t\t\t\t--dark-brand-color: #7d3b98;\n\t\t\t\t\t\t\t\t\t\t\t--bright-color: #FFFFFF;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t",
                          }}
                        />
                        <div
                          id="tie-block_1837"
                          className="mag-box miscellaneous-box first-post-gradient has-first-big-post media-overlay has-custom-color"
                          data-current={1}
                        >
                          <div className="container-wrapper">
                            <div className="mag-box-title the-global-title">
                              <h3> Videos </h3>
                              <div className="tie-alignright">
                                <div className="mag-box-options">
                                  <ul className="slider-arrow-nav">
                                    <li>
                                      {" "}
                                      <a
                                        className="block-pagination prev-posts pagination-disabled"
                                        href="#"
                                      >
                                        {" "}
                                        <span
                                          className="tie-icon-angle-left"
                                          aria-hidden="true"
                                        />{" "}
                                        <span className="screen-reader-text">
                                          Previous page
                                        </span>
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a
                                        className="block-pagination next-posts"
                                        href="#"
                                      >
                                        {" "}
                                        <span
                                          className="tie-icon-angle-right"
                                          aria-hidden="true"
                                        />{" "}
                                        <span className="screen-reader-text">
                                          Next page
                                        </span>{" "}
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="mag-box-container clearfix">
                              <ul className="posts-items posts-list-container">
                                <li className="post-item is-trending tie-video">
                                  {" "}
                                  <a
                                    aria-label="Play This Game for Free on Steam This Weekend"
                                    href="2016/10/17/play-this-game-for-free-on-steam-this-weekend/index.html"
                                    className="post-thumb"
                                  >
                                    <span
                                      className="trending-post tie-icon-bolt trending-lg"
                                      aria-hidden="true"
                                    />
                                    <div className="post-thumb-overlay-wrap">
                                      <div className="post-thumb-overlay">
                                        {" "}
                                        <span className="tie-icon tie-media-icon" />{" "}
                                      </div>
                                    </div>{" "}
                                    <img
                                      width={780}
                                      height={470}
                                      className="attachment-jannah-image-post size-jannah-image-post lazy-img wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/11-1-780x470.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="clearfix" />
                                  <div className="post-overlay">
                                    <div className="post-content">
                                      {" "}
                                      <a
                                        className="post-cat tie-cat-75"
                                        href="category/world/creative/index.html"
                                      >
                                        Creative
                                      </a>
                                      <h2 className="post-title">
                                        <a href="2016/10/17/play-this-game-for-free-on-steam-this-weekend/index.html">
                                          Play This Game for Free on Steam This
                                          Weekend
                                        </a>
                                      </h2>
                                      <div className="thumb-meta">
                                        <div className="post-meta clearfix">
                                          <span className="author-meta single-author no-avatars">
                                            <span className="meta-item meta-author-wrapper meta-author-1">
                                              <span className="meta-author">
                                                <a
                                                  href="members/admin/index.html"
                                                  className="author-name tie-icon"
                                                  title="Tony Stark"
                                                >
                                                  Tony Stark
                                                </a>
                                              </span>
                                            </span>
                                          </span>
                                          <span className="date meta-item tie-icon">
                                            Oct 17, 2016
                                          </span>
                                          <div className="tie-alignright">
                                            <span className="meta-comment tie-icon meta-item fa-before">
                                              0
                                            </span>
                                            <span className="meta-views meta-item very-hot">
                                              <span
                                                className="tie-icon-fire"
                                                aria-hidden="true"
                                              />{" "}
                                              47,568
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="post-item is-trending tie-video">
                                  {" "}
                                  <a
                                    aria-label="At Value-Focused Hotels, the Free Breakfast Gets Bigger"
                                    href="2016/10/16/at-value-focused-hotels-the-free-breakfast-gets-bigger/index.html"
                                    className="post-thumb"
                                  >
                                    <div className="post-thumb-overlay-wrap">
                                      <div className="post-thumb-overlay">
                                        {" "}
                                        <span className="tie-icon tie-media-icon" />{" "}
                                      </div>
                                    </div>{" "}
                                    <img
                                      width={390}
                                      height={220}
                                      className="attachment-jannah-image-large size-jannah-image-large lazy-img wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/garrett-parker-1-390x220.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="clearfix" />
                                  <div className="post-overlay">
                                    <div className="post-content">
                                      <div className="post-meta clearfix">
                                        <span
                                          className="trending-post tie-icon-bolt trending-sm meta-item"
                                          aria-hidden="true"
                                        />
                                        <span className="date meta-item tie-icon">
                                          Oct 16, 2016
                                        </span>
                                        <div className="tie-alignright">
                                          <span className="meta-comment tie-icon meta-item fa-before">
                                            0
                                          </span>
                                        </div>
                                      </div>
                                      <h2 className="post-title">
                                        <a href="2016/10/16/at-value-focused-hotels-the-free-breakfast-gets-bigger/index.html">
                                          At Value-Focused Hotels, the Free
                                          Breakfast Gets Bigger
                                        </a>
                                      </h2>
                                      <div className="post-meta" />
                                    </div>
                                  </div>
                                </li>
                                <li className="post-item tie-video">
                                  {" "}
                                  <a
                                    aria-label="Failure is the condiment that gives success its flavor"
                                    href="2016/10/15/failure-is-the-condiment-that-gives-success-its-flavor/index.html"
                                    className="post-thumb"
                                  >
                                    <div className="post-thumb-overlay-wrap">
                                      <div className="post-thumb-overlay">
                                        {" "}
                                        <span className="tie-icon tie-media-icon" />{" "}
                                      </div>
                                    </div>{" "}
                                    <img
                                      width={390}
                                      height={220}
                                      className="attachment-jannah-image-large size-jannah-image-large lazy-img wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/demo-image-3-390x220.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="clearfix" />
                                  <div className="post-overlay">
                                    <div className="post-content">
                                      <div className="post-meta clearfix">
                                        <span className="date meta-item tie-icon">
                                          Oct 15, 2016
                                        </span>
                                        <div className="tie-alignright">
                                          <span className="meta-comment tie-icon meta-item fa-before">
                                            0
                                          </span>
                                        </div>
                                      </div>
                                      <h2 className="post-title">
                                        <a href="2016/10/15/failure-is-the-condiment-that-gives-success-its-flavor/index.html">
                                          Failure is the condiment that gives
                                          success its flavor
                                        </a>
                                      </h2>
                                      <div className="post-meta" />
                                    </div>
                                  </div>
                                </li>
                                <li className="post-item tie-video">
                                  {" "}
                                  <a
                                    aria-label="Les nouveaux maillots du Real Madrid pour la saison"
                                    href="2016/10/06/drug-testing-scarce-in-scottish-football/index.html"
                                    className="post-thumb"
                                  >
                                    <div className="post-thumb-overlay-wrap">
                                      <div className="post-thumb-overlay">
                                        {" "}
                                        <span className="tie-icon tie-media-icon" />{" "}
                                      </div>
                                    </div>{" "}
                                    <img
                                      width={390}
                                      height={220}
                                      className="attachment-jannah-image-large size-jannah-image-large lazy-img wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/slide15-390x220.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="clearfix" />
                                  <div className="post-overlay">
                                    <div className="post-content">
                                      <div className="post-meta clearfix">
                                        <span className="date meta-item tie-icon">
                                          Oct 6, 2016
                                        </span>
                                        <div className="tie-alignright">
                                          <span className="meta-comment tie-icon meta-item fa-before">
                                            0
                                          </span>
                                        </div>
                                      </div>
                                      <h2 className="post-title">
                                        <a href="2016/10/06/drug-testing-scarce-in-scottish-football/index.html">
                                          Les nouveaux maillots du Real Madrid
                                          pour la saison
                                        </a>
                                      </h2>
                                      <div className="post-meta" />
                                    </div>
                                  </div>
                                </li>
                              </ul>
                              <div className="clearfix" />
                            </div>
                          </div>
                        </div>
                        <div
                          id="tie-block_2223"
                          className="mag-box stream-item-mag stream-item content-only"
                        >
                          <div className="container-wrapper">
                            {" "}
                            <a
                              href="http://themeforest.net/item/i/19659555?ref=tielabs"
                              title="Buy Jannah Theme"
                              target="_blank"
                              rel="nofollow noopener"
                            >
                              <img
                                loading="lazy"
                                src="8/2016/10/1.jpg"
                                alt="Buy Jannah Theme"
                                width={728}
                                height={90}
                              />
                            </a>{" "}
                          </div>
                        </div>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n\t\t\t\t\t\t\t\t\t\thtml #tie-s_1441 {\n\t\t\t\t\t\t\t\t\t\t\t--brand-color: #dd3333;\n\t\t\t\t\t\t\t\t\t\t\t--dark-brand-color: #bf1515;\n\t\t\t\t\t\t\t\t\t\t\t--bright-color: #FFFFFF;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t",
                          }}
                        />
                        <div
                          id="tie-s_1441"
                          className="mag-box big-posts-box has-custom-color"
                          data-current={1}
                        >
                          <div className="container-wrapper">
                            <div className="mag-box-title the-global-title">
                              <h3> What's new </h3>
                            </div>
                            <div className="mag-box-container clearfix">
                              <ul className="posts-items posts-list-container">
                                <li className="post-item post-1887 post type-post status-publish format-standard has-post-thumbnail category-life-style category-technology tag-apple tag-dell tag-tech is-trending tie-standard">
                                  <a
                                    aria-label="25 Tricks That Will Increase Your Productivity"
                                    href="2016/10/12/25-office-design-tricks-that-will-increase-your-productivity-at-work/index.html"
                                    className="post-thumb"
                                  >
                                    <div className="digital-rating">
                                      <div
                                        data-score="8.8"
                                        data-pct="87.5"
                                        data-lazy-pie={1}
                                        className="pie-wrap"
                                      >
                                        {" "}
                                        <svg
                                          width={40}
                                          height={40}
                                          className="pie-svg"
                                        >
                                          <circle
                                            r={19}
                                            cx={20}
                                            cy={20}
                                            fill="transparent"
                                            strokeDasharray="119.38"
                                            strokeDashoffset={0}
                                            className="circle_base"
                                          ></circle>
                                          <circle
                                            r={19}
                                            cx={20}
                                            cy={20}
                                            fill="transparent"
                                            strokeDasharray="119.38"
                                            strokeDashoffset={0}
                                            className="circle_bar"
                                          ></circle>
                                        </svg>{" "}
                                      </div>
                                    </div>{" "}
                                    <span
                                      className="trending-post tie-icon-bolt trending-lg"
                                      aria-hidden="true"
                                    />
                                    <span className="post-cat-wrap">
                                      <span className="post-cat tie-cat-64">
                                        Technology
                                      </span>
                                    </span>
                                    <img
                                      width={390}
                                      height={220}
                                      className="attachment-jannah-image-large size-jannah-image-large lazy-img wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/ben-white-148435-390x220.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="author-meta single-author no-avatars">
                                        <span className="meta-item meta-author-wrapper meta-author-1">
                                          <span className="meta-author">
                                            <a
                                              href="members/admin/index.html"
                                              className="author-name tie-icon"
                                              title="Tony Stark"
                                            >
                                              Tony Stark
                                            </a>
                                          </span>
                                        </span>
                                      </span>
                                      <span className="date meta-item tie-icon">
                                        Oct 12, 2016
                                      </span>
                                      <div className="tie-alignright">
                                        <span className="meta-comment tie-icon meta-item fa-before">
                                          0
                                        </span>
                                        <span className="meta-views meta-item very-hot">
                                          <span
                                            className="tie-icon-fire"
                                            aria-hidden="true"
                                          />{" "}
                                          22,889{" "}
                                        </span>
                                      </div>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/12/25-office-design-tricks-that-will-increase-your-productivity-at-work/index.html">
                                        25 Tricks That Will Increase Your
                                        Productivity
                                      </a>
                                    </h2>
                                    <p className="post-excerpt">
                                      Stay focused and remember we design the
                                      best WordPress News and Magazine Themes.
                                      It’s the ones closest to you that…
                                    </p>
                                  </div>
                                </li>
                                <li className="post-item post-1896 post type-post status-publish format-standard has-post-thumbnail category-life-style category-technology tag-tech tie-standard">
                                  <a
                                    aria-label="The Renault Trezor Concept is a Formula E car for the road"
                                    href="2016/10/10/the-renault-trezor-concept-is-a-formula-e-car-for-the-road/index.html"
                                    className="post-thumb"
                                  >
                                    <div className="post-rating image-stars">
                                      <div className="stars-rating-bg" />
                                      <div
                                        className="stars-rating-active"
                                        data-rate-val="88.166666666667%"
                                        data-lazy-percent={1}
                                      >
                                        <div className="stars-rating-active-inner">
                                          {" "}
                                        </div>
                                      </div>
                                    </div>{" "}
                                    <span className="post-cat-wrap">
                                      <span className="post-cat tie-cat-6">
                                        Life Style
                                      </span>
                                    </span>
                                    <img
                                      width={390}
                                      height={220}
                                      className="attachment-jannah-image-large size-jannah-image-large lazy-img wp-post-image"
                                      alt="ALt Text"
                                      decoding="async"
                                      src="8/2016/10/pexels-photo-1-390x220.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="author-meta single-author no-avatars">
                                        <span className="meta-item meta-author-wrapper meta-author-18">
                                          <span className="meta-author">
                                            <a
                                              href="members/ashraf/index.html"
                                              className="author-name tie-icon"
                                              title="Danny Rand"
                                            >
                                              Danny Rand
                                            </a>
                                          </span>
                                        </span>
                                      </span>
                                      <span className="date meta-item tie-icon">
                                        Oct 10, 2016
                                      </span>
                                      <div className="tie-alignright">
                                        <span className="meta-comment tie-icon meta-item fa-before">
                                          0
                                        </span>
                                        <span className="meta-views meta-item very-hot">
                                          <span
                                            className="tie-icon-fire"
                                            aria-hidden="true"
                                          />{" "}
                                          36,682{" "}
                                        </span>
                                      </div>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/10/the-renault-trezor-concept-is-a-formula-e-car-for-the-road/index.html">
                                        The Renault Trezor Concept is a Formula
                                        E car for the road
                                      </a>
                                    </h2>
                                    <p className="post-excerpt">
                                      Stay focused and remember we design the
                                      best WordPress News and Magazine Themes.
                                      It’s the ones closest to you that…
                                    </p>
                                  </div>
                                </li>
                                <li className="post-item post-1980 post type-post status-publish format-standard has-post-thumbnail category-football tag-video tie-video">
                                  <a
                                    aria-label="Les nouveaux maillots du Real Madrid pour la saison"
                                    href="2016/10/06/drug-testing-scarce-in-scottish-football/index.html"
                                    className="post-thumb"
                                  >
                                    <span className="post-cat-wrap">
                                      <span className="post-cat tie-cat-138">
                                        Football
                                      </span>
                                    </span>
                                    <img
                                      width={390}
                                      height={220}
                                      className="attachment-jannah-image-large size-jannah-image-large lazy-img wp-post-image"
                                      alt=""
                                      decoding="async"
                                      src="8/2016/10/slide15-390x220.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="author-meta single-author no-avatars">
                                        <span className="meta-item meta-author-wrapper meta-author-1">
                                          <span className="meta-author">
                                            <a
                                              href="members/admin/index.html"
                                              className="author-name tie-icon"
                                              title="Tony Stark"
                                            >
                                              Tony Stark
                                            </a>
                                          </span>
                                        </span>
                                      </span>
                                      <span className="date meta-item tie-icon">
                                        Oct 6, 2016
                                      </span>
                                      <div className="tie-alignright">
                                        <span className="meta-comment tie-icon meta-item fa-before">
                                          0
                                        </span>
                                        <span className="meta-views meta-item very-hot">
                                          <span
                                            className="tie-icon-fire"
                                            aria-hidden="true"
                                          />{" "}
                                          22,758{" "}
                                        </span>
                                      </div>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/06/drug-testing-scarce-in-scottish-football/index.html">
                                        Les nouveaux maillots du Real Madrid
                                        pour la saison
                                      </a>
                                    </h2>
                                    <p className="post-excerpt">
                                      Stay focused and remember we design the
                                      best WordPress News and Magazine Themes.
                                      It’s the ones closest to you that…
                                    </p>
                                  </div>
                                </li>
                                <li className="post-item post-1992 post type-post status-publish format-standard has-post-thumbnail category-racing category-sports tag-timeline tie-standard">
                                  <a
                                    aria-label="I enjoy hard work I love setting goals and achieving them"
                                    href="2016/10/06/i-enjoy-hard-work-i-love-setting-goals-and-achieving-them/index.html"
                                    className="post-thumb"
                                  >
                                    <span className="post-cat-wrap">
                                      <span className="post-cat tie-cat-139">
                                        Racing
                                      </span>
                                    </span>
                                    <img
                                      width={390}
                                      height={220}
                                      className="attachment-jannah-image-large size-jannah-image-large lazy-img wp-post-image"
                                      alt=""
                                      decoding="async"
                                      srcSet="https://jannah.tielabs.com/demo/wp-content/uploads/sites/8/2016/10/image9-390x220.jpg 390w, https://jannah.tielabs.com/demo/wp-content/uploads/sites/8/2016/10/image9-300x169.jpg 300w, https://jannah.tielabs.com/demo/wp-content/uploads/sites/8/2016/10/image9-768x432.jpg 768w, https://jannah.tielabs.com/demo/wp-content/uploads/sites/8/2016/10/image9-1024x576.jpg 1024w, https://jannah.tielabs.com/demo/wp-content/uploads/sites/8/2016/10/image9-800x450.jpg 800w, https://jannah.tielabs.com/demo/wp-content/uploads/sites/8/2016/10/image9.jpg 1200w"
                                      sizes="(max-width: 390px) 100vw, 390px"
                                      src="8/2016/10/image9-390x220.jpg"
                                      loading="lazy"
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="author-meta single-author no-avatars">
                                        <span className="meta-item meta-author-wrapper meta-author-1">
                                          <span className="meta-author">
                                            <a
                                              href="members/admin/index.html"
                                              className="author-name tie-icon"
                                              title="Tony Stark"
                                            >
                                              Tony Stark
                                            </a>
                                          </span>
                                        </span>
                                      </span>
                                      <span className="date meta-item tie-icon">
                                        Oct 6, 2016
                                      </span>
                                      <div className="tie-alignright">
                                        <span className="meta-comment tie-icon meta-item fa-before">
                                          0
                                        </span>
                                        <span className="meta-views meta-item very-hot">
                                          <span
                                            className="tie-icon-fire"
                                            aria-hidden="true"
                                          />{" "}
                                          16,187{" "}
                                        </span>
                                      </div>
                                    </div>
                                    <h2 className="post-title">
                                      <a href="2016/10/06/i-enjoy-hard-work-i-love-setting-goals-and-achieving-them/index.html">
                                        I enjoy hard work I love setting goals
                                        and achieving them
                                      </a>
                                    </h2>
                                    <p className="post-excerpt">
                                      Stay focused and remember we design the
                                      best WordPress News and Magazine Themes.
                                      It’s the ones closest to you that…
                                    </p>
                                  </div>
                                </li>
                              </ul>
                              <div className="clearfix" />
                            </div>{" "}
                            <a
                              className="block-pagination next-posts show-more-button load-more-button"
                              href="#"
                              data-text="Load More"
                            >
                              Load More
                            </a>
                          </div>
                        </div>
                      </div>
                      <aside
                        className="sidebar tie-col-md-4 tie-col-xs-12 normal-side is-sticky"
                        aria-label="Primary Sidebar"
                      >
                        <div className="theiaStickySidebar">
                          <div
                            id="posts-list-widget-31"
                            className="container-wrapper widget posts-list"
                          >
                            <div className="widget-title the-global-title">
                              <div className="the-subtitle">
                                Most Viewed
                                <span className="widget-title-icon tie-icon" />
                              </div>
                            </div>
                            <div className="widget-posts-list-wrapper">
                              <div className="widget-posts-list-container posts-list-counter">
                                <ul className="posts-list-items widget-posts-wrapper">
                                  <li className="widget-single-post-item widget-post-list tie-standard">
                                    <div className="post-widget-thumbnail">
                                      {" "}
                                      <a
                                        aria-label="One man with courage makes a majority"
                                        href="/video-details"
                                        className="post-thumb"
                                      >
                                        <img
                                          width={220}
                                          height={150}
                                          className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                          alt="Custom Alternative Text"
                                          decoding="async"
                                          src="8/2016/10/demo-image-1-220x150.jpg"
                                          loading="lazy"
                                        />
                                      </a>{" "}
                                    </div>
                                    <div className="post-widget-body ">
                                      {" "}
                                      <a
                                        className="post-title the-subtitle"
                                        href="/video-details"
                                      >
                                        One man with courage makes a majority
                                      </a>
                                      <div className="post-meta">
                                        {" "}
                                        <span className="date meta-item tie-icon">
                                          Oct 27, 2018
                                        </span>
                                        <div className="post-rating image-stars">
                                          <div className="stars-rating-bg" />
                                          <div
                                            className="stars-rating-active"
                                            data-rate-val="91.833333333333%"
                                            data-lazy-percent={1}
                                          >
                                            <div className="stars-rating-active-inner"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="widget-single-post-item widget-post-list is-trending tie-video">
                                    <div className="post-widget-thumbnail">
                                      {" "}
                                      <a
                                        aria-label="Success is not a good teacher failure makes you humble"
                                        href="2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html"
                                        className="post-thumb"
                                      >
                                        <img
                                          width={220}
                                          height={150}
                                          className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                          alt=""
                                          decoding="async"
                                          src="8/2016/10/demo-new-11-220x150.jpg"
                                          loading="lazy"
                                        />
                                      </a>{" "}
                                    </div>
                                    <div className="post-widget-body ">
                                      {" "}
                                      <a
                                        className="post-title the-subtitle"
                                        href="2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html"
                                      >
                                        Success is not a good teacher failure
                                        makes you humble
                                      </a>
                                      <div className="post-meta">
                                        {" "}
                                        <span className="date meta-item tie-icon">
                                          Oct 28, 2016
                                        </span>{" "}
                                      </div>
                                    </div>
                                  </li>
                                  <li className="widget-single-post-item widget-post-list is-trending tie-standard">
                                    <div className="post-widget-thumbnail">
                                      {" "}
                                      <a
                                        aria-label="Not who has much is rich, but who gives much"
                                        href="2016/10/20/not-who-has-much-is-rich-but-who-gives-much/index.html"
                                        className="post-thumb"
                                      >
                                        <img
                                          width={220}
                                          height={150}
                                          className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                          alt=""
                                          decoding="async"
                                          data-src="8/2016/10/post-1-220x150.jpg"
                                          loading="lazy"
                                        />
                                      </a>{" "}
                                    </div>
                                    <div className="post-widget-body ">
                                      {" "}
                                      <a
                                        className="post-title the-subtitle"
                                        href="2016/10/20/not-who-has-much-is-rich-but-who-gives-much/index.html"
                                      >
                                        Not who has much is rich, but who gives
                                        much
                                      </a>
                                      <div className="post-meta">
                                        {" "}
                                        <span className="date meta-item tie-icon">
                                          Oct 20, 2016
                                        </span>{" "}
                                      </div>
                                    </div>
                                  </li>
                                  <li className="widget-single-post-item widget-post-list is-trending tie-standard">
                                    <div className="post-widget-thumbnail">
                                      {" "}
                                      <a
                                        aria-label="Budget issues force the Tour to be cancelled"
                                        href="2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html"
                                        className="post-thumb"
                                      >
                                        <img
                                          width={220}
                                          height={150}
                                          className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                          alt=""
                                          decoding="async"
                                          src="8/2016/10/demo-image-2-220x150.jpg"
                                          loading="lazy"
                                        />
                                      </a>{" "}
                                    </div>
                                    <div className="post-widget-body ">
                                      {" "}
                                      <a
                                        className="post-title the-subtitle"
                                        href="2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html"
                                      >
                                        Budget issues force the Tour to be
                                        cancelled
                                      </a>
                                      <div className="post-meta">
                                        {" "}
                                        <span className="date meta-item tie-icon">
                                          Oct 25, 2016
                                        </span>{" "}
                                      </div>
                                    </div>
                                  </li>
                                  <li className="widget-single-post-item widget-post-list is-trending tie-video">
                                    <div className="post-widget-thumbnail">
                                      {" "}
                                      <a
                                        aria-label="Play This Game for Free on Steam This Weekend"
                                        href="2016/10/17/play-this-game-for-free-on-steam-this-weekend/index.html"
                                        className="post-thumb"
                                      >
                                        <img
                                          width={220}
                                          height={150}
                                          className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                          alt=""
                                          decoding="async"
                                          src="8/2016/10/11-1-220x150.jpg"
                                          loading="lazy"
                                        />
                                      </a>{" "}
                                    </div>
                                    <div className="post-widget-body ">
                                      {" "}
                                      <a
                                        className="post-title the-subtitle"
                                        href="2016/10/17/play-this-game-for-free-on-steam-this-weekend/index.html"
                                      >
                                        Play This Game for Free on Steam This
                                        Weekend
                                      </a>
                                      <div className="post-meta">
                                        {" "}
                                        <span className="date meta-item tie-icon">
                                          Oct 17, 2016
                                        </span>{" "}
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="clearfix" />
                          </div>
                          <div
                            id="stream-item-widget-14"
                            className="widget stream-item-widget widget-content-only"
                          >
                            <div className="stream-item-widget-content">
                              <span className="stream-title">
                                Advertisement
                              </span>
                              <a
                                href="http://tielabs.com/buy/jannah?utm_source=demos&utm_campaign=jannah&utm_content=demo&utm_medium=ads"
                                target="_blank"
                                rel="nofollow noopener"
                              >
                                <img
                                  className="widget-stream-image"
                                  loading="lazy"
                                  src="/images/sidebar-1.jpg"
                                  width={336}
                                  height={280}
                                  alt="Purchase The Theme NOW!"
                                />
                              </a>
                            </div>
                          </div>
                          <div
                            id="tie-newsletter-6"
                            className="container-wrapper widget subscribe-widget"
                          >
                            <div className="widget-inner-wrap">
                              {" "}
                              <span
                                className="tie-icon-envelope newsletter-icon"
                                aria-hidden="true"
                              />
                              <div className="subscribe-widget-content">
                                {" "}
                                <span className="subscribe-subtitle">
                                  With Product You Purchase
                                </span>
                                <h3>
                                  Subscribe to our mailing list to get the new
                                  updates!
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                              </div>
                              <div id="mc_embed_signup-tie-newsletter-6">
                                <form
                                  action="http://mo3aser.us5.list-manage.com/subscribe/post?u=147e71cd86cb2e17820db601a&id=7bfc095aea"
                                  method="post"
                                  id="mc-embedded-subscribe-form-tie-newsletter-6"
                                  name="mc-embedded-subscribe-form"
                                  className="subscribe-form validate"
                                  target="_blank"
                                  noValidate=""
                                >
                                  <div className="mc-field-group">
                                    {" "}
                                    <label
                                      className="screen-reader-text"
                                      htmlFor="mce-EMAIL-tie-newsletter-6"
                                    >
                                      Enter your Email address
                                    </label>{" "}
                                    <input
                                      type="email"
                                      defaultValue=""
                                      id="mce-EMAIL-tie-newsletter-6"
                                      placeholder="Enter your Email address"
                                      name="EMAIL"
                                      className="subscribe-input required email"
                                    />{" "}
                                  </div>{" "}
                                  <input
                                    type="submit"
                                    defaultValue="Subscribe"
                                    name="subscribe"
                                    className="button subscribe-submit"
                                  />
                                </form>
                              </div>
                            </div>
                            <div className="clearfix" />
                          </div>
                          <div
                            id="tie-widget-categories-grid-2"
                            className="container-wrapper widget tie-widget-categories-grid"
                          >
                            <div className="widget-title the-global-title">
                              <div className="the-subtitle">
                                Categories
                                <span className="widget-title-icon tie-icon" />
                              </div>
                            </div>
                            <div className="categories-block categories-block-horizontal">
                              <ul className="categories-layout-wrap categories-wrap-1">
                                <li
                                  className="cat-block-6 has-icon has-bg"
                                  style={{
                                    backgroundImage: `url(${image1})`,
                                    // "url(wp-content/uploads/sites/8/2016/10/11-1.jpg)"
                                  }}
                                >
                                  <a href="category/life-style/index.html">
                                    <div className="catgeory-icon">
                                      <img
                                        src="images/video-detail-1.png"
                                        alt=""
                                      />
                                    </div>
                                    <div className="catgeory-title">
                                      Life Style
                                    </div>{" "}
                                    <span className="catgeory-count">35</span>
                                  </a>{" "}
                                </li>
                                <li
                                  className="cat-block-8 has-icon has-bg"
                                  style={{
                                    backgroundImage: `url(${image2})`,
                                  }}
                                >
                                  <a href="category/sports/index.html">
                                    <div className="catgeory-icon">
                                      <img
                                        src="images/video-detail-2.png"
                                        alt=""
                                      />
                                    </div>
                                    <div className="catgeory-title">Sports</div>{" "}
                                    <span className="catgeory-count">17</span>
                                  </a>{" "}
                                </li>
                                <li
                                  className="cat-block-64 has-icon has-bg"
                                  style={{
                                    backgroundImage: `url(${image3})`,
                                  }}
                                >
                                  <a href="category/technology/index.html">
                                    <div className="catgeory-icon">
                                      <img
                                        src="images/video-detail-3.png"
                                        alt=""
                                      />
                                    </div>
                                    <div className="catgeory-title">
                                      Technology
                                    </div>{" "}
                                    <span className="catgeory-count">13</span>
                                  </a>{" "}
                                </li>
                                <li
                                  className="cat-block-1 has-icon has-bg"
                                  style={{
                                    backgroundImage: `url(${image4})`,
                                  }}
                                >
                                  <a href="category/world/index.html">
                                    <div className="catgeory-icon">
                                      <img
                                        src="images/video-detail-4.png"
                                        alt=""
                                      />
                                    </div>
                                    <div className="catgeory-title">World</div>{" "}
                                    <span className="catgeory-count">20</span>
                                  </a>{" "}
                                </li>
                              </ul>
                            </div>
                            <div className="clearfix" />
                          </div>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>
              </div>
              {/* <Footer /> */}
            </div>
            {openSidebar && (
              <aside
                className=" side-aside normal-side light-skin slide-sidebar-desktop is-fullwidth appear-from-left"
                aria-label="Secondary Sidebar"
                style={{
                  right: "0",
                  transform: openSidebar
                    ? "translate(0, 0)"
                    : "translate(350px, 0)",
                  transition: "transform 0.3s ease",
                  visibility: openSidebar ? "visible" : "hidden",
                }}
              >
                <div
                  data-height="100%"
                  className="side-aside-wrapper has-custom-scroll"
                >
                  {" "}
                  <Link
                    to="#"
                    className="close-side-aside remove big-btn"
                    onClick={closeSideBar}
                  >
                    {" "}
                    <span className="screen-reader-text">Close</span>{" "}
                  </Link>
                  <div id="mobile-container">
                    <div id="mobile-menu"> </div>
                    <div
                      id="mobile-social-icons"
                      className="social-icons-widget solid-social-icons"
                    >
                      <ul>
                        <li className="social-icons-item">
                          <Link
                            className="social-link facebook-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            to="#"
                          >
                            <span className="tie-social-icon tie-icon-facebook" />
                            <span className="screen-reader-text">Facebook</span>
                          </Link>
                        </li>
                        <li className="social-icons-item">
                          <Link
                            className="social-link twitter-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            to="#"
                          >
                            <span className="tie-social-icon tie-icon-twitter" />
                            <span className="screen-reader-text">X</span>
                          </Link>
                        </li>
                        <li className="social-icons-item">
                          <Link
                            className="social-link dribbble-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            to="#"
                          >
                            <span className="tie-social-icon tie-icon-dribbble" />
                            <span className="screen-reader-text">Dribbble</span>
                          </Link>
                        </li>
                        <li className="social-icons-item">
                          <Link
                            className="social-link soundcloud-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            to="http://soundcloud.com/"
                          >
                            <span className="tie-social-icon tie-icon-soundcloud" />
                            <span className="screen-reader-text">
                              SoundCloud
                            </span>
                          </Link>
                        </li>
                        <li className="social-icons-item">
                          <Link
                            className="social-link instagram-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            to="#"
                          >
                            <span className="tie-social-icon tie-icon-instagram" />
                            <span className="screen-reader-text">
                              Instagram
                            </span>
                          </Link>
                        </li>
                        <li className="social-icons-item">
                          <Link
                            className="social-link tiktok-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            to="http://www.tiktok.com/en/"
                          >
                            <span className="tie-social-icon tie-icon-tiktok" />
                            <span className="screen-reader-text">TikTok</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div id="mobile-search">
                      <form
                        role="search"
                        method="get"
                        className="search-form"
                        action="https://jannah.tielabs.com/demo/"
                      >
                        {" "}
                        <label>
                          {" "}
                          <span className="screen-reader-text">
                            Search for:
                          </span>{" "}
                          <input
                            type="search"
                            className="search-field"
                            placeholder="Search …"
                            defaultValue=""
                            name="s"
                          />{" "}
                        </label>
                        <input
                          type="submit"
                          className="search-submit"
                          defaultValue="Search"
                        />
                      </form>
                    </div>
                  </div>
                  <div id="slide-sidebar-widgets">
                    <div
                      id="posts-list-widget-25"
                      className="container-wrapper widget posts-list"
                    >
                      <div className="widget-title the-global-title">
                        <div className="the-subtitle">
                          Recent Posts
                          <span className="widget-title-icon tie-icon" />
                        </div>
                      </div>
                      <div className="widget-posts-list-wrapper">
                        <div className="widget-posts-list-container">
                          <ul className="posts-list-items widget-posts-wrapper">
                            <li className="widget-single-post-item widget-post-list tie-standard">
                              <div className="post-widget-thumbnail">
                                {" "}
                                <Link
                                  aria-label="One man with courage makes a majority"
                                  to="../2018/10/27/after-all-is-said-and-done-more-is-done/index.html"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABLAQMAAACr9CA9AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUOI1jYMADmEe5o9xR7iiXQi4A4BsA388WUyMAAAAASUVORK5CYII="
                                    className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                    alt="Custom Alternative Text"
                                    decoding="async"
                                    loading="lazy"
                                    src="8/2016/10/demo-image-1-220x150.jpg"
                                  />
                                </Link>
                              </div>
                              <div className="post-widget-body ">
                                {" "}
                                <Link
                                  className="post-title the-subtitle"
                                  to="../2018/10/27/after-all-is-said-and-done-more-is-done/index.html"
                                >
                                  One man with courage makes a majority
                                </Link>
                                <div className="post-meta">
                                  {" "}
                                  <span className="date meta-item tie-icon">
                                    Oct 27, 2018
                                  </span>
                                  <div className="post-rating image-stars">
                                    <div className="stars-rating-bg" />
                                    <div
                                      className="stars-rating-active"
                                      data-rate-val="91.833333333333%"
                                      data-lazy-percent={1}
                                    >
                                      <div className="stars-rating-active-inner">
                                        {" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="widget-single-post-item widget-post-list is-trending tie-video">
                              <div className="post-widget-thumbnail">
                                {" "}
                                <Link
                                  aria-label="Success is not a good teacher failure makes you humble"
                                  to="../2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABLAQMAAACr9CA9AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUOI1jYMADmEe5o9xR7iiXQi4A4BsA388WUyMAAAAASUVORK5CYII="
                                    className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                    src="8/2016/10/demo-new-11-220x150.jpg"
                                  />
                                </Link>
                              </div>
                              <div className="post-widget-body ">
                                {" "}
                                <Link
                                  className="post-title the-subtitle"
                                  to="../2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html"
                                >
                                  Success is not a good teacher failure makes
                                  you humble
                                </Link>
                                <div className="post-meta">
                                  {" "}
                                  <span className="date meta-item tie-icon">
                                    Oct 28, 2016
                                  </span>{" "}
                                </div>
                              </div>
                            </li>
                            <li className="widget-single-post-item widget-post-list is-trending tie-standard">
                              <div className="post-widget-thumbnail">
                                {" "}
                                <Link
                                  aria-label="Budget issues force the Tour to be cancelled"
                                  to="../2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABLAQMAAACr9CA9AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUOI1jYMADmEe5o9xR7iiXQi4A4BsA388WUyMAAAAASUVORK5CYII="
                                    className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                    src="8/2016/10/demo-image-2-220x150.jpg"
                                  />
                                </Link>
                              </div>
                              <div className="post-widget-body ">
                                {" "}
                                <Link
                                  className="post-title the-subtitle"
                                  to="../2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html"
                                >
                                  Budget issues force the Tour to be cancelled
                                </Link>
                                <div className="post-meta">
                                  {" "}
                                  <span className="date meta-item tie-icon">
                                    Oct 25, 2016
                                  </span>{" "}
                                </div>
                              </div>
                            </li>
                            <li className="widget-single-post-item widget-post-list tie-video">
                              <div className="post-widget-thumbnail">
                                {" "}
                                <Link
                                  aria-label="Instagram’s big redesign goes live with black-and-white app"
                                  to="../2016/10/21/instagrams-big-redesign-goes-live-with-black-and-white-app/index.html"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABLAQMAAACr9CA9AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUOI1jYMADmEe5o9xR7iiXQi4A4BsA388WUyMAAAAASUVORK5CYII="
                                    className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                    src="8/2016/10/new-demo-3-220x150.jpg"
                                  />
                                </Link>
                              </div>
                              <div className="post-widget-body ">
                                {" "}
                                <Link
                                  className="post-title the-subtitle"
                                  to="../2016/10/21/instagrams-big-redesign-goes-live-with-black-and-white-app/index.html"
                                >
                                  Instagram’s big redesign goes live with
                                  black-and-white app
                                </Link>
                                <div className="post-meta">
                                  {" "}
                                  <span className="date meta-item tie-icon">
                                    Oct 21, 2016
                                  </span>{" "}
                                </div>
                              </div>
                            </li>
                            <li className="widget-single-post-item widget-post-list tie-video">
                              <div className="post-widget-thumbnail">
                                {" "}
                                <Link
                                  aria-label="The only thing that overcomes hard luck is hard work"
                                  to="../2016/10/20/the-only-thing-that-overcomes-hard-luck-is-hard-work/index.html"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABLAQMAAACr9CA9AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUOI1jYMADmEe5o9xR7iiXQi4A4BsA388WUyMAAAAASUVORK5CYII="
                                    className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                    src="8/2016/05/7040731-cam-newton-220x150.jpg"
                                  />
                                </Link>
                              </div>
                              <div className="post-widget-body ">
                                {" "}
                                <Link
                                  className="post-title the-subtitle"
                                  to="../2016/10/20/the-only-thing-that-overcomes-hard-luck-is-hard-work/index.html"
                                >
                                  The only thing that overcomes hard luck is
                                  hard work
                                </Link>
                                <div className="post-meta">
                                  {" "}
                                  <span className="date meta-item tie-icon">
                                    Oct 20, 2016
                                  </span>{" "}
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div
                      id="posts-list-widget-22"
                      className="container-wrapper widget posts-list"
                    >
                      <div className="widget-title the-global-title">
                        <div className="the-subtitle">
                          Popular Posts
                          <span className="widget-title-icon tie-icon" />
                        </div>
                      </div>
                      <div className="widget-posts-list-wrapper">
                        <div className="widget-posts-list-container posts-list-counter">
                          <ul className="posts-list-items widget-posts-wrapper">
                            <li className="widget-single-post-item widget-post-list tie-standard">
                              <div className="post-widget-thumbnail">
                                {" "}
                                <Link
                                  aria-label="One man with courage makes a majority"
                                  to="../2018/10/27/after-all-is-said-and-done-more-is-done/index.html"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABLAQMAAACr9CA9AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUOI1jYMADmEe5o9xR7iiXQi4A4BsA388WUyMAAAAASUVORK5CYII="
                                    className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                    alt="Custom Alternative Text"
                                    decoding="async"
                                    loading="lazy"
                                    src="8/2016/10/demo-image-1-220x150.jpg"
                                  />
                                </Link>
                              </div>
                              <div className="post-widget-body ">
                                {" "}
                                <Link
                                  className="post-title the-subtitle"
                                  to="../2018/10/27/after-all-is-said-and-done-more-is-done/index.html"
                                >
                                  One man with courage makes a majority
                                </Link>
                                <div className="post-meta">
                                  {" "}
                                  <span className="date meta-item tie-icon">
                                    Oct 27, 2018
                                  </span>
                                  <div className="post-rating image-stars">
                                    <div className="stars-rating-bg" />
                                    <div
                                      className="stars-rating-active"
                                      data-rate-val="91.833333333333%"
                                      data-lazy-percent={1}
                                    >
                                      <div className="stars-rating-active-inner">
                                        {" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="widget-single-post-item widget-post-list is-trending tie-video">
                              <div className="post-widget-thumbnail">
                                {" "}
                                <Link
                                  aria-label="Success is not a good teacher failure makes you humble"
                                  to="../2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABLAQMAAACr9CA9AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUOI1jYMADmEe5o9xR7iiXQi4A4BsA388WUyMAAAAASUVORK5CYII="
                                    className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                    src="8/2016/10/demo-new-11-220x150.jpg"
                                  />
                                </Link>
                              </div>
                              <div className="post-widget-body ">
                                {" "}
                                <Link
                                  className="post-title the-subtitle"
                                  to="../2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html"
                                >
                                  Success is not a good teacher failure makes
                                  you humble
                                </Link>
                                <div className="post-meta">
                                  {" "}
                                  <span className="date meta-item tie-icon">
                                    Oct 28, 2016
                                  </span>{" "}
                                </div>
                              </div>
                            </li>
                            <li className="widget-single-post-item widget-post-list is-trending tie-standard">
                              <div className="post-widget-thumbnail">
                                {" "}
                                <Link
                                  aria-label="Not who has much is rich, but who gives much"
                                  to="../2016/10/20/not-who-has-much-is-rich-but-who-gives-much/index.html"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABLAQMAAACr9CA9AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUOI1jYMADmEe5o9xR7iiXQi4A4BsA388WUyMAAAAASUVORK5CYII="
                                    className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                    src="8/2016/10/post-1-220x150.jpg"
                                  />
                                </Link>
                              </div>
                              <div className="post-widget-body ">
                                {" "}
                                <Link
                                  className="post-title the-subtitle"
                                  to="../2016/10/20/not-who-has-much-is-rich-but-who-gives-much/index.html"
                                >
                                  Not who has much is rich, but who gives much
                                </Link>
                                <div className="post-meta">
                                  {" "}
                                  <span className="date meta-item tie-icon">
                                    Oct 20, 2016
                                  </span>{" "}
                                </div>
                              </div>
                            </li>
                            <li className="widget-single-post-item widget-post-list is-trending tie-standard">
                              <div className="post-widget-thumbnail">
                                {" "}
                                <Link
                                  aria-label="Budget issues force the Tour to be cancelled"
                                  to="../2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABLAQMAAACr9CA9AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUOI1jYMADmEe5o9xR7iiXQi4A4BsA388WUyMAAAAASUVORK5CYII="
                                    className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                    src="8/2016/10/demo-image-2-220x150.jpg"
                                  />
                                </Link>
                              </div>
                              <div className="post-widget-body ">
                                {" "}
                                <Link
                                  className="post-title the-subtitle"
                                  to="../2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html"
                                >
                                  Budget issues force the Tour to be cancelled
                                </Link>
                                <div className="post-meta">
                                  {" "}
                                  <span className="date meta-item tie-icon">
                                    Oct 25, 2016
                                  </span>{" "}
                                </div>
                              </div>
                            </li>
                            <li className="widget-single-post-item widget-post-list is-trending tie-video">
                              <div className="post-widget-thumbnail">
                                {" "}
                                <Link
                                  aria-label="Play This Game for Free on Steam This Weekend"
                                  to="../2016/10/17/play-this-game-for-free-on-steam-this-weekend/index.html"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABLAQMAAACr9CA9AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUOI1jYMADmEe5o9xR7iiXQi4A4BsA388WUyMAAAAASUVORK5CYII="
                                    className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                    src="8/2016/10/11-1-220x150.jpg"
                                  />
                                </Link>
                              </div>
                              <div className="post-widget-body ">
                                {" "}
                                <Link
                                  className="post-title the-subtitle"
                                  to="../2016/10/17/play-this-game-for-free-on-steam-this-weekend/index.html"
                                >
                                  Play This Game for Free on Steam This Weekend
                                </Link>
                                <div className="post-meta">
                                  {" "}
                                  <span className="date meta-item tie-icon">
                                    Oct 17, 2016
                                  </span>{" "}
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div
                      id="tie-widget-categories-7"
                      className="container-wrapper widget widget_categories tie-widget-categories"
                    >
                      <div className="widget-title the-global-title">
                        <div className="the-subtitle">
                          Categories
                          <span className="widget-title-icon tie-icon" />
                        </div>
                      </div>
                      <ul>
                        <li className="cat-item cat-counter tie-cat-item-6">
                          <Link to="../category/life-style/index.html">
                            Life Style
                          </Link>{" "}
                          <span>35</span>{" "}
                        </li>
                        <li className="cat-item cat-counter tie-cat-item-1">
                          <Link to="../category/world/index.html">World</Link>{" "}
                          <span>56</span>
                          <ul className="children">
                            <li className="cat-item cat-counter tie-cat-item-84">
                              <Link to="../category/world/travel/index.html">
                                Travel
                              </Link>{" "}
                              <span>30</span>
                            </li>
                            <li className="cat-item cat-counter tie-cat-item-48">
                              <Link to="../category/world/foods/index.html">
                                Foods
                              </Link>{" "}
                              <span>13</span>
                            </li>
                            <li className="cat-item cat-counter tie-cat-item-75">
                              <Link to="../category/world/creative/index.html">
                                Creative
                              </Link>{" "}
                              <span>6</span>
                            </li>
                          </ul>
                        </li>
                        <li className="cat-item cat-counter tie-cat-item-8">
                          <Link to="../category/sports/index.html">Sports</Link>{" "}
                          <span>28</span>
                          <ul className="children">
                            <li className="cat-item cat-counter tie-cat-item-139">
                              <Link to="../category/sports/racing/index.html">
                                Racing
                              </Link>{" "}
                              <span>15</span>
                            </li>
                            <li className="cat-item cat-counter tie-cat-item-140">
                              <Link to="../category/sports/swimming/index.html">
                                Swimming
                              </Link>
                              <span>8</span>
                            </li>
                            <li className="cat-item cat-counter tie-cat-item-138">
                              <Link to="../category/sports/football/index.html">
                                Football
                              </Link>
                              <span>7</span>
                            </li>
                          </ul>
                        </li>
                        <li className="cat-item cat-counter tie-cat-item-64">
                          <Link to="../category/technology/index.html">
                            Technology
                          </Link>{" "}
                          <span>13</span>{" "}
                        </li>
                      </ul>
                      <div className="clearfix" />
                    </div>
                    <div
                      id="posts-list-widget-24"
                      className="container-wrapper widget posts-list"
                    >
                      <div className="widget-title the-global-title">
                        <div className="the-subtitle">
                          Most Commented
                          <span className="widget-title-icon tie-icon" />
                        </div>
                      </div>
                      <div className="widget-posts-list-wrapper">
                        <div className="widget-posts-list-container timeline-widget">
                          <ul className="posts-list-items widget-posts-wrapper">
                            <li className="widget-single-post-item">
                              {" "}
                              <Link to="../2016/10/21/instagrams-big-redesign-goes-live-with-black-and-white-app/index.html">
                                <span className="date meta-item tie-icon">
                                  Oct 21, 2016
                                </span>
                                <h3>
                                  Instagram’s big redesign goes live with
                                  black-and-white app
                                </h3>
                              </Link>{" "}
                            </li>
                            <li className="widget-single-post-item">
                              {" "}
                              <Link to="../2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html">
                                <span className="date meta-item tie-icon">
                                  Oct 28, 2016
                                </span>
                                <h3>
                                  Success is not a good teacher failure makes
                                  you humble
                                </h3>
                              </Link>{" "}
                            </li>
                            <li className="widget-single-post-item">
                              {" "}
                              <Link to="../2015/09/02/there-is-safety-in-numbers/index.html">
                                {" "}
                                <span className="date meta-item tie-icon">
                                  Sep 2, 2015
                                </span>
                                <h3>
                                  The secret of life is not to do what you like
                                  but to like what you do
                                </h3>
                              </Link>{" "}
                            </li>
                            <li className="widget-single-post-item">
                              {" "}
                              <Link to="../2018/10/27/after-all-is-said-and-done-more-is-done/index.html">
                                <span className="date meta-item tie-icon">
                                  Oct 27, 2018
                                </span>
                                <h3>One man with courage makes a majority</h3>
                              </Link>{" "}
                            </li>
                            <li className="widget-single-post-item">
                              {" "}
                              <Link to="../2015/10/02/education-is-the-best-provision-for-the-journey-to-old-age/index.html">
                                <span className="date meta-item tie-icon">
                                  Oct 2, 2015
                                </span>
                                <h3>
                                  Education is the best provision for the
                                  journey to old age
                                </h3>
                              </Link>{" "}
                            </li>
                            <li className="widget-single-post-item">
                              {" "}
                              <Link to="../2015/10/05/this-is-the-star-wars-r2-d2-coffee-maker-youve-been-looking-for/index.html">
                                <span className="date meta-item tie-icon">
                                  Oct 5, 2015
                                </span>
                                <h3>
                                  What does the iPhone 7 reveal about Apple’s AR
                                  plans?
                                </h3>
                              </Link>{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div
                      id="tag_cloud-5"
                      className="container-wrapper widget widget_tag_cloud"
                    >
                      <div className="widget-title the-global-title">
                        <div className="the-subtitle">
                          Tags
                          <span className="widget-title-icon tie-icon" />
                        </div>
                      </div>
                      <div className="tagcloud">
                        <Link
                          to="../tag/app/index.html"
                          className="tag-cloud-link tag-link-161 tag-link-position-1"
                          style={{ fontSize: "8pt" }}
                          aria-label="app (1 item)"
                        >
                          app
                        </Link>{" "}
                        <Link
                          to="../tag/apple/index.html"
                          className="tag-cloud-link tag-link-17 tag-link-position-2"
                          style={{ fontSize: "11.230769230769pt" }}
                          aria-label="apple (2 items)"
                        >
                          apple
                        </Link>{" "}
                        <Link
                          to="../tag/facebook/index.html"
                          className="tag-cloud-link tag-link-203 tag-link-position-3"
                          style={{ fontSize: "8pt" }}
                          aria-label="Facebook (1 item)"
                        >
                          Facebook
                        </Link>{" "}
                        <Link
                          to="../tag/featured/index.html"
                          className="tag-cloud-link tag-link-162 tag-link-position-4"
                          style={{ fontSize: "16.615384615385pt" }}
                          aria-label="featured (5 items)"
                        >
                          featured
                        </Link>
                        <Link
                          to="../tag/food/index.html"
                          className="tag-cloud-link tag-link-154 tag-link-position-5"
                          style={{ fontSize: "21.282051282051pt" }}
                          aria-label="food (10 items)"
                        >
                          food
                        </Link>{" "}
                        <Link
                          to="../tag/football/index.html"
                          className="tag-cloud-link tag-link-200 tag-link-position-6"
                          style={{ fontSize: "11.230769230769pt" }}
                          aria-label="football (2 items)"
                        >
                          football
                        </Link>
                        <Link
                          to="../tag/instagram/index.html"
                          className="tag-cloud-link tag-link-157 tag-link-position-7"
                          style={{ fontSize: "8pt" }}
                          aria-label="instagram (1 item)"
                        >
                          instagram
                        </Link>{" "}
                        <Link
                          to="../tag/life-style/index.html"
                          className="tag-cloud-link tag-link-155 tag-link-position-8"
                          style={{ fontSize: "19.666666666667pt" }}
                          aria-label="life style (8 items)"
                        >
                          life style
                        </Link>{" "}
                        <Link
                          to="../tag/olympics/index.html"
                          className="tag-cloud-link tag-link-141 tag-link-position-9"
                          style={{ fontSize: "11.230769230769pt" }}
                          aria-label="olympics (2 items)"
                        >
                          olympics
                        </Link>
                        <Link
                          to="../tag/rio-2016/index.html"
                          className="tag-cloud-link tag-link-143 tag-link-position-10"
                          style={{ fontSize: "11.230769230769pt" }}
                          aria-label="rio 2016 (2 items)"
                        >
                          rio 2016
                        </Link>
                        <Link
                          to="../tag/tech/index.html"
                          className="tag-cloud-link tag-link-94 tag-link-position-11"
                          style={{ fontSize: "22pt" }}
                          aria-label="Tech (11 items)"
                        >
                          Tech
                        </Link>{" "}
                        <Link
                          to="../tag/timeline/index.html"
                          className="tag-cloud-link tag-link-163 tag-link-position-12"
                          style={{ fontSize: "22pt" }}
                          aria-label="timeline (11 items)"
                        >
                          timeline
                        </Link>{" "}
                        <Link
                          to="../tag/twitter-video/index.html"
                          className="tag-cloud-link tag-link-199 tag-link-position-13"
                          style={{ fontSize: "11.230769230769pt" }}
                          aria-label="Twitter Video (2 items)"
                        >
                          Twitter Video
                        </Link>{" "}
                        <Link
                          to="../tag/ui/index.html"
                          className="tag-cloud-link tag-link-158 tag-link-position-14"
                          style={{ fontSize: "8pt" }}
                          aria-label="ui (1 item)"
                        >
                          ui
                        </Link>{" "}
                        <Link
                          to="../tag/ux/index.html"
                          className="tag-cloud-link tag-link-159 tag-link-position-15"
                          style={{ fontSize: "8pt" }}
                          aria-label="ux (1 item)"
                        >
                          ux
                        </Link>{" "}
                        <Link
                          to="../tag/video/index.html"
                          className="tag-cloud-link tag-link-62 tag-link-position-16"
                          style={{ fontSize: "20.564102564103pt" }}
                          aria-label="Video (9 items)"
                        >
                          Video
                        </Link>{" "}
                        <Link
                          to="../tag/vimeo/index.html"
                          className="tag-cloud-link tag-link-201 tag-link-position-17"
                          style={{ fontSize: "8pt" }}
                          aria-label="vimeo (1 item)"
                        >
                          vimeo
                        </Link>{" "}
                        <Link
                          to="../tag/yahoo/index.html"
                          className="tag-cloud-link tag-link-202 tag-link-position-18"
                          style={{ fontSize: "8pt" }}
                          aria-label="Yahoo (1 item)"
                        >
                          Yahoo
                        </Link>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="widget social-icons-widget widget-content-only">
                      <ul className="solid-social-icons is-centered">
                        <li className="social-icons-item">
                          <Link
                            className="social-link facebook-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            to="#"
                          >
                            <span className="tie-social-icon tie-icon-facebook" />
                            <span className="screen-reader-text">Facebook</span>
                          </Link>
                        </li>
                        <li className="social-icons-item">
                          <Link
                            className="social-link twitter-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            to="#"
                          >
                            <span className="tie-social-icon tie-icon-twitter" />
                            <span className="screen-reader-text">X</span>
                          </Link>
                        </li>
                        <li className="social-icons-item">
                          <Link
                            className="social-link dribbble-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            to="#"
                          >
                            <span className="tie-social-icon tie-icon-dribbble" />
                            <span className="screen-reader-text">Dribbble</span>
                          </Link>
                        </li>
                        <li className="social-icons-item">
                          <Link
                            className="social-link soundcloud-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            to="http://soundcloud.com/"
                          >
                            <span className="tie-social-icon tie-icon-soundcloud" />
                            <span className="screen-reader-text">
                              SoundCloud
                            </span>
                          </Link>
                        </li>
                        <li className="social-icons-item">
                          <Link
                            className="social-link instagram-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            to="#"
                          >
                            <span className="tie-social-icon tie-icon-instagram" />
                            <span className="screen-reader-text">
                              Instagram
                            </span>
                          </Link>
                        </li>
                        <li className="social-icons-item">
                          <Link
                            className="social-link tiktok-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            to="http://www.tiktok.com/en/"
                          >
                            <span className="tie-social-icon tie-icon-tiktok" />
                            <span className="screen-reader-text">TikTok</span>
                          </Link>
                        </li>
                      </ul>
                      <div className="clearfix" />
                    </div>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
        {isOpenModal && (
          <div
            id="tie-popup-login"
            className="tie-popup"
            style={{ display: "block" }}
          >
            {" "}
            <Link
              to="#"
              className="tie-btn-close remove big-btn light-btn"
              style={{ opacity: "1", transform: "scale(1)" }}
              onClick={closePopup}
            >
              {" "}
              <span className="screen-reader-text">Close</span>{" "}
            </Link>
            <div
              className="tie-popup-container"
              style={{ opacity: "1", transform: "scale(1)" }}
            >
              <div className="container-wrapper" style={{ padding: "60px" }}>
                <div className="widget login-widget">
                  <div className="widget-title the-global-title">
                    <div className="the-subtitle">
                      Log In <span className="widget-title-icon tie-icon" />
                    </div>
                  </div>
                  <div className="widget-container">
                    <div className="login-form">
                      <form
                        name="registerform"
                        action="https://jannah.tielabs.com/demo/elmay/"
                        method="post"
                      >
                        <input
                          type="text"
                          name="log"
                          title="Username"
                          placeholder="Username"
                        />
                        <div className="pass-container">
                          {" "}
                          <input
                            type="password"
                            name="pwd"
                            title="Password"
                            placeholder="Password"
                          />{" "}
                          <Link
                            className="forget-text"
                            to="../my-account/lost-password/index.html"
                          >
                            Forget?
                          </Link>{" "}
                        </div>{" "}
                        <input
                          type="hidden"
                          name="redirect_to"
                          defaultValue="/demo/framed/"
                        />{" "}
                        <label htmlFor="rememberme" className="rememberme">
                          {" "}
                          <input
                            id="rememberme"
                            name="rememberme"
                            type="checkbox"
                            defaultChecked="checked"
                            defaultValue="forever"
                          />{" "}
                          Remember me{" "}
                        </label>{" "}
                        <button
                          type="submit"
                          className="button fullwidth login-submit"
                        >
                          Log In
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Podcast;
