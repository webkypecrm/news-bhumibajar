import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NewsList } from "../apis/axios";

const Header = ({ tieSkin = "dark", openPopup, openSideBar }) => {
  const headerRef = useRef(null);
  const [showSearch, setShowSearch] = useState(false);
  const [newsList, setNewsList] = useState([]);
  const [newsListLoading, setNewsListLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchNewsLoading, setSearchNewsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [recentNewsList, setRecentNewsList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const header = headerRef.current;
      if (!header) return;

      const classList = header.classList;

      let mnIsDark = classList.contains("main-nav-default-dark");
      let tnIsDark = classList.contains("top-nav-default-dark");

      if (tieSkin === "dark") {
        classList.add("main-nav-dark", "top-nav-dark");
        classList.remove("main-nav-light", "top-nav-light");
      } else if (tieSkin === "light") {
        if (!mnIsDark) {
          classList.remove("main-nav-dark");
          classList.add("main-nav-light");
        }
        if (!tnIsDark) {
          classList.remove("top-nav-dark");
          classList.add("top-nav-light");
        }
      }
    } catch (err) {
      console.error(err);
    }
  }, [tieSkin]);

  const getNewsListData = async () => {
    setNewsListLoading(true);
    // console.log("Fetching news list...");

    try {
      const response = await NewsList.getCategoryData();
      // console.log("API Response:", response);

      if (response?.data) {
        setNewsList(response.data.data);
      } else {
        console.log("No data in response");
      }
    } catch (error) {
      console.log("Fetch error:", error);
    }

    setNewsListLoading(false);
  };

  // console.log("newsList...", newsList);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchNewsList();
    console.log("Search for:", searchQuery);
  };

  const getSearchNewsList = async () => {
    setSearchNewsLoading(true);
    try {
      const response = await NewsList.getSearchNewsList(searchQuery);
      const data = response?.data?.data;

      if (data && data.length > 0) {
        setSearchResults(data);

        navigate("/news-search-list", { state: { results: data } });
        setShowSearch(false);
      } else {
        setSearchResults([]);
        setNoResults(true);
      }
    } catch (error) {
      console.log("Error fetching news:", error);
    } finally {
      setSearchNewsLoading(false);
    }
  };

  const getRecenNewstList = async () => {
    try {
      const response = await NewsList.getNewsRecentList("Recent");

      const data = response?.data?.data;

      setRecentNewsList(data);
    } catch (error) {}
  };

  // console.log("recentNewsList..", recentNewsList);

  useEffect(() => {
    getNewsListData();
    getRecenNewstList();
  }, []);

  return (
    <Fragment>
      <header
        id="theme-header"
        className="theme-header header-layout-3 main-nav-dark main-nav-default-dark main-nav-below main-nav-boxed has-stream-item top-nav-active top-nav-light top-nav-default-light top-nav-above has-shadow has-normal-width-logo mobile-header-centered"
      >
        <nav
          id="top-nav"
          className="has-date-breaking-components top-nav header-nav has-breaking-news new-sec-has-breaking-news"
          aria-label="Secondary Navigation"
          style={{ border: "none" }}
        >
          <div className="container">
            <div className="topbar-wrapper">
              <div
                id="logo"
                className="image-logo"
                style={{ margin: "5px  0px" }}
              >
                <a title="Realty Samachar" href="/">
                  <picture
                    id="tie-logo-default"
                    className="tie-logo-default tie-logo-picture"
                  >
                    {/* <source
                      className="tie-logo-source-default tie-logo-source"
                      srcSet="Untitled-3-01-01.png"
                    /> */}
                    <img
                      className="tie-logo-img-default tie-logo-img"
                      src="/logo.png"
                      alt="Jannah "
                      width={250}
                      height={35}
                      style={{ maxWidth: 165 }}
                    />
                  </picture>
                  <picture
                    id="tie-logo-inverted"
                    className="tie-logo-inverted tie-logo-picture"
                  >
                    <source
                      className="tie-logo-source-inverted tie-logo-source"
                      id="tie-logo-inverted-source"
                      srcSet="https://res.cloudinary.com/drj0uehgx/image/upload/v1751115972/logo_qrixw3.png"
                    />
                    <img
                      className="tie-logo-img-inverted tie-logo-img"
                      loading="lazy"
                      id="tie-logo-inverted-img"
                      src="/logo.png"
                      alt="Jannah - Blog Magazine Newspaper buddyPress Theme"
                      width={300}
                      height={49}
                      style={{ maxHeight: "49px !important", width: "auto" }}
                    />
                  </picture>
                  <h1 className="h1-off">Framed</h1>
                </a>
              </div>
              <div className="tie-alignright">
                <ul className="components">
                  <li className="social-icons-item">
                    <a
                      className="social-link youtube-social-icon"
                      rel="external noopener nofollow"
                      target="_blank"
                      href="https://www.youtube.com/@RealtyDart"
                    >
                      <span className="tie-social-icon tie-icon-youtube" />
                      <span className="screen-reader-text">YouTube</span>
                    </a>
                  </li>
                  <li className="social-icons-item">
                    <a
                      className="social-link facebook-social-icon"
                      rel="external noopener nofollow"
                      target="_blank"
                      href="https://www.facebook.com/share/16pB9MHAni/"
                    >
                      <span className="tie-social-icon tie-icon-facebook" />
                      <span className="screen-reader-text">Facebook</span>
                    </a>
                  </li>
                  <li className="social-icons-item">
                    <a
                      className="social-link twitter-social-icon"
                      rel="external noopener nofollow"
                      target="_blank"
                      href="https://x.com/realty_samachar"
                    >
                      <span className="tie-social-icon tie-icon-twitter" />
                      <span className="screen-reader-text">X</span>
                    </a>
                  </li>
                  <li className="social-icons-item">
                    <a
                      className="social-link instagram-social-icon"
                      rel="external noopener nofollow"
                      target="_blank"
                      href="https://www.instagram.com/p/DNQB1l1xrzD"
                    >
                      <span className="tie-social-icon tie-icon-instagram" />
                      <span className="screen-reader-text">Instagram</span>
                    </a>
                  </li>
                  <li className=" popup-login-icon menu-item custom-menu-link">
                    {" "}
                    <a
                      href="#"
                      className="lgoin-btn tie-popup-trigger"
                      onClick={() => openPopup(true)}
                    >
                      {" "}
                      <span
                        className="tie-icon-author"
                        aria-hidden="true"
                      />{" "}
                      <span className="screen-reader-text">Log In</span>{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div
          className="container header-container responsive-padding"
          // style={{
          //   padding: "20px 5px",
          //   width: "100%",
          //   // border: "2px solid black",
          // }}
        >
          <div className="tie-row logo-row new-row-flex">
            <div
              className="logo-wrapper tie-col-md-12 "
              style={{
                // padding: "20px 20px",
                width: "100%",
                // border: "2px solid black",
                display: "flex",
                justifyContent: "space-between",
                alignContent: "start",
              }}
            >
              <a href="/" rel="noopener noreferrer">
                <img
                  src="https://res.cloudinary.com/drj0uehgx/image/upload/v1751115972/logo_qrixw3.png"
                  alt="Logo"
                  className="sidebar-logo-outer"
                />
              </a>

              <div
                className="logo-container clearfix"
                style={{ boxShadow: "none" }}
              >
                <div
                  id="mobile-header-components-area_1"
                  className="mobile-header-components"
                >
                  <ul
                    className="components"
                    style={{
                      // padding: "20px 20px",
                      width: "100%",
                      // border: "2px solid black",
                    }}
                  >
                    <li className="mobile-component_menu custom-menu-link">
                      <a
                        href="#"
                        id="mobile-menu-icon"
                        onClick={() => setIsSidebarOpen(true)}
                      >
                        <span className="tie-mobile-menu-icon nav-icon is-layout-1" />
                        <span className="screen-reader-text">Menu</span>
                      </a>
                    </li>
                    <li className="mobile-component_search custom-menu-link">
                      {" "}
                      <a
                        href="#"
                        className="tie-search-trigger-mobile"
                        onClick={() => setShowSearch(true)}
                      >
                        {" "}
                        <span
                          className="tie-icon-search tie-search-icon"
                          aria-hidden="true"
                        />{" "}
                        <span className="screen-reader-text">Search for</span>{" "}
                      </a>{" "}
                    </li>
                  </ul>
                </div>
                <div
                  id="mobile-header-components-area_2"
                  className="mobile-header-components"
                >
                  <ul className="components"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="main-nav-wrapper"
          style={{ backgroundColor: "#077cca" }}
        >
          <nav
            id="main-nav"
            data-skin="search-in-main-nav"
            className="main-nav header-nav live-search-parent menu-style-solid-bg"
            aria-label="Primary Navigation"
          >
            <div className="container">
              <div className="main-menu-wrapper">
                <div id="menu-components-wrap">
                  <div className="main-menu main-menu-wrap">
                    <div
                      id="main-nav-menu"
                      className="main-menu header-menu new-headert-text-font"
                    >
                      <ul id="menu-main-menu" className="menu">
                        {newsList?.map((news) => {
                          return (
                            <li
                              key={news?.id}
                              id="menu-item-499"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-499 mega-menu mega-cat mega-menu-posts"
                              data-id={1}
                            >
                              <Link
                                to={`/${news.slug}`}
                                state={{ name: "category" }}
                              >
                                {news?.name}
                              </Link>

                              <ul className="sub-menu menu-sub-content">
                                {news?.BlogSubCategory?.map((subCat) => (
                                  <li
                                    key={subCat?.id}
                                    className="menu-item menu-item-type-post_type menu-item-object-buddypress"
                                  >
                                    <Link
                                      to={`/${subCat?.slug}`}
                                      state={{ name: "subcategory" }}
                                    >
                                      {subCat?.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <ul className="components">
                    {/* search for the big screen */}
                    <li
                      className="mobile-component_search custom-menu-link new-skin-clr-section"
                      onClick={() => setShowSearch(true)}
                    >
                      {" "}
                      <a
                        href="#"
                        className="tie-search-trigger-mobile "
                        // style={{ border: "2px solid black" }}
                      >
                        {" "}
                        <span
                          className="tie-icon-search disabled-hover"
                          aria-hidden="true"
                        />{" "}
                        <span className="screen-reader-text">Search for</span>{" "}
                      </a>{" "}
                    </li>
                    {/* search for the big screen */}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {showSearch && (
        <div
          id="tie-popup-search-mobile"
          className="tie-popup tie-popup-search-wrap"
          style={{ display: "block" }}
        >
          {/* Close Icon */}
          <a
            href="#"
            className="tie-btn-close remove big-btn light-btn"
            style={{ opacity: 1, transform: "scale(1)" }}
            onClick={() => setShowSearch(false)}
          >
            <span className="screen-reader-text">Close</span>
          </a>

          {/* Search Form */}
          <div className="popup-search-wrap-inner">
            <form
              method="get"
              className="tie-popup-search-form"
              action="https://jannah.tielabs.com/demo/"
              onSubmit={handleSubmit}
            >
              <input
                className="tie-popup-search-input is-ajax-search"
                inputMode="search"
                type="text"
                name="s"
                title="Search for"
                autoComplete="off"
                placeholder="Search for"
                value={searchQuery}
                onChange={handleChange}
              />
              <button className="tie-popup-search-submit" type="submit">
                <span
                  className="tie-icon-search tie-search-icon"
                  aria-hidden="true"
                />
                <span className="screen-reader-text">Search for</span>
              </button>
            </form>

            {noResults ? (
              <div className="popup-message no-data">
                <img
                  src="https://cdn.dribbble.com/userupload/2905340/file/original-10210d8c75d27373e95effe16950b396.png?resize=400x300&vertical=center"
                  alt="No data available"
                  className="no-data-image"
                />
              </div>
            ) : searchNewsLoading ? (
              <div className="popup-message loading">
                <p className="popup-message-text">Search News Loading...</p>
              </div>
            ) : (
              searchResults.length > 0 && (
                <ul className="popup-results-list">
                  {searchResults.map((result, index) => (
                    <li key={index} className="popup-result-item">
                      {result.title}
                    </li>
                  ))}
                </ul>
              )
            )}
          </div>
        </div>
      )}

      {isSidebarOpen && (
        <div
          className="custom-sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
        >
          <aside
            className="custom-sidebar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header inside sidebar */}
            <div className="sidebar-header">
              <img
                src="https://res.cloudinary.com/drj0uehgx/image/upload/v1751115972/logo_qrixw3.png"
                alt="Logo"
                className="sidebar-logo"
              />
              <button
                className="sidebar-close-btn"
                onClick={() => setIsSidebarOpen(false)}
              >
                ×
              </button>
            </div>

            {/* Sidebar Menu */}
            <ul className="sidebar-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              {newsList?.map((news) => {
                const isActive = activeDropdown === news.id;
                return (
                  <li
                    key={news?.id}
                    className={`menu-item ${isActive ? "active-dropdown" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveDropdown(isActive ? null : news.id);
                    }}
                  >
                    <Link
                      to={`/${news.slug}`}
                      state={{ name: "category" }}
                      // className={}
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      {news.name}
                    </Link>

                    <ul
                      className="sub-menu"
                      style={{
                        display: isActive ? "block" : "none",
                        opacity: isActive ? 1 : 0,
                        pointerEvents: isActive ? "auto" : "none",
                        transform: isActive
                          ? "translateY(0)"
                          : "translateY(10px)",
                      }}
                    >
                      {news?.BlogSubCategory?.map((subCat) => (
                        <li key={subCat?.id}>
                          <Link
                            to={`/${subCat?.slug}`}
                            state={{ name: "subcategory" }}
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            {subCat?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      )}

      <div style={{ backgroundColor: "#ddd" }}>
        <div
          className="tie-alignleft"
          style={{
            width: "100%",
            // border: "2px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="breaking"
            style={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              overflow: "hidden",
              whiteSpace: "nowrap",
              // border: "2px solid black",
            }}
          >
            {/* Breaking Title */}
            <span
              style={{ padding: "0px 10px" }}
              className="breaking-title-text new-breaking-title"
            >
              Breaking News :
            </span>

            {/* Ticker Wrapper */}
            <div
              className="ticker-wrapper"
              style={{
                flex: 1,
                overflow: "hidden",
                // verticalAlign: "middle",
                // marginTop: "10px",
              }}
            >
              <div
                className="ticker "
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  whiteSpace: "nowrap",
                  animation: "ticker-slide 50s linear infinite",
                  // border: "2px solid black",
                  height: "40px",
                  marginTop: "15px",
                }}
              >
                ={" "}
                {[
                  ...recentNewsList?.slice(0, 10),
                  ...recentNewsList?.slice(0, 10),
                ].map((newsItem, index) => (
                  <span
                    key={index}
                    style={{
                      marginRight: "0px",
                      marginLeft: "0px",
                      // border: "2px solid black",
                      // height: "40px",
                      // marginTop: "10px",
                    }}
                  >
                    <Link
                      to={`/news/${newsItem.blogCategory?.slug}/${newsItem.blogSubCategory?.slug}/${newsItem.slug}`}
                      state={{ name: "category" }}
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        // border: "2px solid black",
                        // marginTop: "15px",
                        height: "40px",
                      }}
                    >
                      {newsItem.title}
                    </Link>
                    <span
                      style={{
                        margin: "0 ",
                        color: "#999",
                        fontSize: "16px",
                        fontWeight: 600,
                      }}
                    >
                      {"  "}|{"  "}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <style>
            {`
        @keyframes ticker-slide {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}
          </style>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
