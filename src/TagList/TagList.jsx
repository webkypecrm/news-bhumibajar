import React, { Fragment, useEffect, useState } from "react";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import img1 from "../assets/8/2016/10/post-1-780x470.jpg";
import img2 from "../assets/8/2016/10/11-1-780x470.jpg";
import img3 from "../assets/8/2016/10/imag6-min-780x470.jpg";
import img4 from "../assets/8/2016/10/robert-zunikoff-2-780x470.jpg";
import { Link, useLocation, useParams } from "react-router-dom";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NewsList } from "../apis/axios";
import parse from "html-react-parser";
import { Helmet } from "react-helmet-async";

const TagList = () => {
  const [activeTab, setActiveTab] = useState("popular");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [popularLimit, setPopularLimit] = useState(5);
  const [popularTotalCount, setPopularTotalCount] = useState(null);
  const [popularLoading, setPopularLoading] = useState(false);
  const [categoryPopularLoading, setCategoryPopularLoading] = useState(false);
  const [popularRecentNewsList, setPopularRecentNewsList] = useState([]);
  const [popularCategoryRecentNewsList, setPopularCategoryRecentNewsList] =
    useState([]);

  const [popularScrollerLoading, setPopularScrollerLoading] = useState(false);
  const SCROLLER_PAGE_LIMIT = 3;
  const [popularRecentNewsScrollerList, setPopularRecentNewsScrollerList] =
    useState([]);
  const [popularTotalScrollerCount, setPopularTotalScrollerCount] =
    useState(null);
  const [popularScrollerPage, setPopularScrollerPage] = useState(1);

  const { slug } = useParams();
  const location = useLocation();
  const { name } = location.state || {};

  const apiUrl = import.meta.env.VITE_API_URL;
  const { state } = useLocation();
  const searchResults = state?.results || [];
  console.log("news results", searchResults);

  const [categoryBasedNewsList, setCategoryBasednewsList] = useState([]);
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

  const trimToWords = (htmlString, wordLimit = 100) => {
    if (!htmlString) return "";
    const text = htmlString.replace(/<\/?[^>]+(>|$)/g, "");
    const words = text.split(/\s+/).filter(Boolean);

    if (words?.length <= wordLimit) {
      return parse(htmlString);
    }
    const trimmedText = words.slice(0, wordLimit).join(" ") + "...";
    return trimmedText;
  };

  function getYouTubeEmbedUrl(url) {
    if (!url) return null;
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${id}`;
    }
    return url;
  }

  const getNewsListData = async (name, slug) => {
    console.log("Fetching news list...");

    try {
      const response = await NewsList.getNewsCatSubCatTagList(name, slug);
      console.log("API Response:", response);
      const data = response?.data?.data;

      setCategoryBasednewsList(data);
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  console.log("categoryBasedNewsList....", categoryBasedNewsList);

  const popularClickCount = async (id) => {
    // event.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/blog/blogCount`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ blogId: id }),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.message || "Failed to delete department");
      }

      console.log("newslist details....", resData);

      setCategoryBasednewsList(resData?.data);
    } catch (error) {}
  };

  useEffect(() => {
    if (slug && name) {
      getNewsListData(name, slug);
    }
  }, [slug, name]);

  const getPopularRecenNewstList = async () => {
    if (popularLoading) return;

    setPopularLoading(true);

    try {
      const response = await NewsList.getNewsPopularRecentList(5);

      const data = response?.data?.data;
      const totalCount = response?.data?.totalCount;

      if (data && data.length > 0) {
        setPopularRecentNewsList(data);
        // setPopularTotalCount(totalCount);
      }
    } catch (error) {
    } finally {
      setPopularLoading(false);
    }
  };

  const getCategoryPopularRecenNewstList = async (name, slug) => {
    if (popularLoading) return;

    setCategoryPopularLoading(true);

    try {
      const response = await NewsList.getCategoryPopularRecentList(name, slug);

      const data = response?.data?.data;
      const totalCount = response?.data?.totalCount;
      console.log("name and slug", name, slug);

      if (data && data.length > 0) {
        setPopularCategoryRecentNewsList(data);
        // setPopularTotalCount(totalCount);
      }
    } catch (error) {
    } finally {
      setCategoryPopularLoading(false);
    }
  };
  const getPopularRecenNewstScrollerList = async (page = 1) => {
    if (popularScrollerLoading) return;

    setPopularScrollerLoading(true);

    try {
      const response = await NewsList.getNewsPopularRecentScrollerList(
        SCROLLER_PAGE_LIMIT,
        page
      );

      const data = response?.data?.data;
      const totalCount = response?.data?.totalCount;

      if (data && data.length > 0) {
        setPopularRecentNewsScrollerList((prev) => [...prev, ...data]);
        setPopularTotalScrollerCount(totalCount);
        setPopularScrollerPage(page);
      }
    } catch (error) {
      console.error("Failed to fetch popular news", error);
    } finally {
      setPopularScrollerLoading(false);
    }
  };

  console.log(
    "popularCategoryRecentNewsList...",
    popularCategoryRecentNewsList
  );

  useEffect(() => {
    getPopularRecenNewstList();
    getPopularRecenNewstScrollerList(1);

    getCategoryPopularRecenNewstList(name, slug);
  }, [name, slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      {categoryBasedNewsList.length > 0 &&
        categoryBasedNewsList[0]?.blogCategory && (
          <Helmet>
            <title>
              {categoryBasedNewsList[0].blogCategory.categoryMetaTitle ||
                "default title"}
            </title>
            <meta
              name="description"
              content={
                categoryBasedNewsList[0].blogCategory.categoryMetaDescription ||
                "newsData.summary"
              }
            />
            <meta
              name="keywords"
              content={categoryBasedNewsList[0].blogCategory.categoryKeywords}
            />

            {categoryBasedNewsList[0].blogCategory?.schema && (
              <script type="application/ld+json">
                {JSON.stringify(schema?.schema)}
              </script>
            )}
          </Helmet>
        )}
      <div
        id="tie-body"
        className="bp-nouveau page-template-default page page-id-2488 theme-jannah tie-no-js woocommerce-no-js boxed-layout framed-layout wrapper-has-shadow block-head-1 magazine2 is-thumb-overlay-disabled is-desktop is-header-layout-3 has-header-ad has-builder hide_breaking_news"
      >
        <div className="background-overlay">
          <div id="tie-container" className="site tie-container">
            <div id="tie-wrapper">
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
                  >
                    <header
                      id="category-title-section"
                      className="entry-header-outer container-wrapper archive-title-wrapper"
                    >
                      <nav id="breadcrumb">
                        <Link to="/">
                          <span className="tie-icon-home" aria-hidden="true" />{" "}
                          Home
                        </Link>

                        {/* <em className="delimiter">/</em>
                                              <Link to="../index.html">World</Link> */}
                        {/*  */}
                      </nav>
                      <Link to="#">
                        {/* <span style={{ fontWeight: 600, fontSize: "14px" }}>
                          {`tag news${searchResults?.length} `}
                        </span> */}
                        {/* <span style={{ fontWeight: 500, fontSize: "14px" }}>
                          Tag Results..
                        </span> */}
                      </Link>
                    </header>
                    <div className="mag-box small-wide-post-box wide-post-box top-news-box">
                      <div className="container-wrapper">
                        <div
                          className="mag-box-container clearfix"
                          // style={{ border: "2px solid black" }}
                        >
                          {searchResults?.map((categoryBasedNews) => {
                            return (
                              <ul
                                id="posts-container"
                                data-layout="default"
                                data-settings="{'uncropped_image':'jannah-image-post','category_meta':false,'post_meta':true,'excerpt':'true','excerpt_length':'20','read_more':'true','read_more_text':false,'media_overlay':false,'title_length':0,'is_full':false,'is_category':true}"
                                className="posts-items"
                                key={categoryBasedNews?.id}
                              >
                                <li
                                  className="post-item post-1997 post type-post status-publish format-standard has-post-thumbnail category-creative category-life-style category-travel tag-olympics tag-race is-trending tie-standard"
                                  style={{
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "8px",
                                    backgroundColor: "#fff",
                                    padding: "6px",
                                    marginBottom: "15px",
                                  }}
                                >
                                  <Link
                                    aria-label={categoryBasedNews?.title}
                                    to={`/news/${categoryBasedNews.id}`}
                                    onClick={() =>
                                      popularClickCount(categoryBasedNews.id)
                                    }
                                    className="post-thumb"
                                  >
                                    {/* <span
                                      className="trending-post tie-icon-bolt trending-lg"
                                      aria-hidden="true"
                                    /> */}
                                    {categoryBasedNews.blogSubCategory?.name ===
                                    "Youtube" ? (
                                      <iframe
                                        width="100%"
                                        height="140"
                                        src={getYouTubeEmbedUrl(
                                          categoryBasedNews?.youtubeLink
                                        )}
                                        title="YouTube video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{ marginTop: "10px" }}
                                      ></iframe>
                                    ) : (
                                      <img
                                        // width={390}
                                        // height={220}
                                        src={`${apiUrl}/uploads/${categoryBasedNews?.image}`}
                                        alt=""
                                        style={{
                                          // objectFit: "cover",
                                          borderRadius: "10px",
                                          // width: "490px",
                                          height: "174px",
                                          // border: "2px solid black",
                                        }}
                                      />
                                    )}
                                  </Link>

                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="author-meta single-author no-avatars">
                                        <span className="meta-item meta-author-wrapper meta-author-1">
                                          <span className="meta-author">
                                            <Link
                                              to="#"
                                              className="author-name tie-icon"
                                              title="Realty Samachar"
                                            >
                                              Realty Samachar
                                            </Link>
                                          </span>
                                        </span>
                                      </span>
                                      <span className="date meta-item tie-icon">
                                        {new Date(
                                          categoryBasedNews?.createdAt
                                        ).toLocaleDateString("en-US", {
                                          weekday: "long",
                                          year: "numeric",
                                          month: "long",
                                          day: "numeric",
                                        })}
                                      </span>
                                      <div className="tie-alignright">
                                        <span className="meta-comment tie-icon meta-item fa-before">
                                          0
                                        </span>
                                        <span className="meta-views meta-item very-hot">
                                          <i
                                            className="fa-solid fa-eye"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          {categoryBasedNews?.views}
                                        </span>
                                      </div>
                                    </div>
                                    <h2 className="post-title">
                                      <Link
                                        to={`/news/${categoryBasedNews?.blogCategory?.slug}/${categoryBasedNews?.blogSubCategory?.slug}/${categoryBasedNews?.slug}`}
                                        onClick={() =>
                                          popularClickCount(
                                            categoryBasedNews.id
                                          )
                                        }
                                      >
                                        {categoryBasedNews?.title}
                                      </Link>
                                    </h2>
                                    <p className="post-excerpt">
                                      {trimToWords(
                                        categoryBasedNews?.description,
                                        29
                                      )}
                                    </p>
                                    <Link
                                      className="more-link new-btn-readmpore"
                                      to={`/news/${categoryBasedNews?.blogCategory?.slug}/${categoryBasedNews?.blogSubCategory?.slug}/${categoryBasedNews?.slug}`}
                                      onClick={() =>
                                        popularClickCount(categoryBasedNews.id)
                                      }
                                    >
                                      Read More »
                                    </Link>
                                  </div>
                                </li>
                              </ul>
                            );
                          })}

                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <aside
                    className="sidebar tie-col-md-4 tie-col-xs-12 normal-side is-sticky"
                    aria-label="Primary Sidebar"
                  >
                    <div className="theiaStickySidebar">
                      <link
                        rel="stylesheet"
                        id="tie-css-widgets-css"
                        to="../../../wp-content/themes/jannah/assets/css/widgets.min.css"
                        type="text/css"
                        media="all"
                      />
                      <div
                        id="posts-list-widget-34"
                        className="container-wrapper widget posts-list"
                      >
                        {/* {slug !== "web-stories" && ( */}
                        <div className="widget-title the-global-title">
                          <div className="the-subtitle">
                            Most Popular
                            <span className="widget-title-icon tie-icon" />
                          </div>
                        </div>
                        {/* )} */}
                        {/* {slug !== "web-stories" && ( */}
                        <div className="widget-posts-list-wrapper">
                          <div
                            className="widget-posts-list-container posts-list-counter"
                            style={{
                              maxHeight: "400px",
                              // width: "100%",
                              padding: "18px",
                              overflowY: "auto",
                              // border: "2px solid black",
                            }}
                            onScroll={(e) => {
                              const { scrollTop, scrollHeight, clientHeight } =
                                e.currentTarget;

                              const isNearBottom =
                                scrollTop + clientHeight >= scrollHeight - 50;
                              const hasMore =
                                popularRecentNewsScrollerList.length <
                                popularTotalScrollerCount;

                              if (
                                isNearBottom &&
                                hasMore &&
                                !popularScrollerLoading
                              ) {
                                getPopularRecenNewstScrollerList(
                                  popularScrollerPage + 1
                                );
                              }
                            }}
                          >
                            <ul
                              className="posts-list-items widget-posts-wrapper"
                              // style={{ border: "2px solid black" }}
                            >
                              {popularRecentNewsScrollerList?.map(
                                (categoryBasedNews, index) => {
                                  return (
                                    <li
                                      key={index}
                                      className="widget-single-post-item widget-post-list tie-standard"
                                      style={{
                                        boxShadow:
                                          "0 2px 2px rgba(0, 0, 0, 0.1)",
                                        borderRadius: "8px",
                                        backgroundColor: "#fff",
                                        padding: "0px",
                                        marginBottom: "15px",
                                      }}
                                    >
                                      <div className="post-widget-thumbnail">
                                        <Link
                                          aria-label="One man with courage makes a majority"
                                          to={`/news/${categoryBasedNews.blogCategory?.slug}/${categoryBasedNews.blogSubCategory?.slug}/${categoryBasedNews.slug}`}
                                          onClick={() =>
                                            popularClickCount(
                                              categoryBasedNews.id
                                            )
                                          }
                                          className="post-thumb"
                                        >
                                          <img
                                            src={`${apiUrl}/uploads/${categoryBasedNews?.image}`}
                                            className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                            alt={categoryBasedNews?.image_alt}
                                            decoding="async"
                                            loading="lazy"
                                            data-src={`${apiUrl}/uploads/${categoryBasedNews?.image}`}
                                            style={{
                                              objectFit: "cover",
                                              borderRadius: "10px",
                                              width: "110px",
                                              height: "70px",
                                            }}
                                          />
                                        </Link>
                                      </div>
                                      <div className="post-widget-body ">
                                        <Link
                                          style={{
                                            fontSize: "13px",
                                            fontWeight: 500,
                                          }}
                                          to={`/news/${categoryBasedNews.blogCategory?.slug}/${categoryBasedNews.blogSubCategory?.slug}/${categoryBasedNews.slug}`}
                                          onClick={() =>
                                            popularClickCount(
                                              categoryBasedNews.id
                                            )
                                          }
                                        >
                                          {categoryBasedNews?.title?.split(" ")
                                            .length > 6
                                            ? `${categoryBasedNews.title
                                                .split(" ")
                                                .slice(0, 6)
                                                .join(" ")}... `
                                            : categoryBasedNews?.title}
                                        </Link>
                                        <div className="post-meta">
                                          <span className="date meta-item tie-icon">
                                            {new Date(
                                              categoryBasedNews?.createdAt
                                            ).toLocaleDateString("en-US", {
                                              weekday: "long",
                                              year: "numeric",
                                              month: "long",
                                              day: "numeric",
                                            })}
                                          </span>
                                        </div>
                                      </div>
                                    </li>
                                  );
                                }
                              )}
                            </ul>

                            {popularScrollerLoading && (
                              <div
                                style={{ textAlign: "center", padding: "10px" }}
                              >
                                <span>Loading more...</span>
                              </div>
                            )}
                          </div>
                        </div>
                        {/* )} */}
                        <div className="clearfix" />
                      </div>
                    </div>
                  </aside>
                </div>
              </div>

              <div
                id="category-slider"
                className="section-wrapper container-full without-background "
                style={{ marginTop: "10px" }}
              >
                <div className="section-item full-width is-first-section ">
                  <div className="container">
                    <section
                      id="tie-category-videos"
                      className="slider-area mag-box media-overlay"
                    >
                      <div className="slider-area-inner">
                        <div
                          id="tie-main-slider-7-category-videos"
                          className="tie-main-slider main-slider boxed-four-taller-slider boxed-slider slide-mask tie-slick-slider-wrapper"
                          data-slider-id={7}
                          data-speed={3000}
                        >
                          <div className="main-slider-inner">
                            <ul className="tie-slider-nav"></ul>
                            <div className="containercategory-videos">
                              <div
                                className="tie-slick-slider"
                                style={{
                                  display: "flex",
                                  borderRadius: "10px",
                                  width: "100%",
                                }}
                              >
                                <Swiper
                                  spaceBetween={20}
                                  slidesPerView={1}
                                  // navigation
                                  // pagination={{ clickable: true }}
                                  loop={true}
                                  autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                  }}
                                  modules={[Pagination, Autoplay]}
                                  className="custom-swiper"
                                  breakpoints={{
                                    768: {
                                      slidesPerView: 1,
                                      spaceBetween: 10,
                                    },
                                    1024: {
                                      slidesPerView: 2,
                                      spaceBetween: 20,
                                    },

                                    1025: {
                                      slidesPerView: 4,
                                      spaceBetween: 20,
                                    },
                                  }}
                                >
                                  {popularCategoryRecentNewsList.map(
                                    (item, index) => (
                                      <SwiperSlide key={index}>
                                        <div
                                          className={`slide slide-id-${index} tie-slide is-trending tie-standard`}
                                          style={{
                                            // backgroundImage: `url(${apiUrl}/uploads/${item?.image})`,
                                            // width: "100%",
                                            borderRadius: "10px",
                                          }}
                                        >
                                          <img
                                            src={`${apiUrl}/uploads/${item?.image}`}
                                            alt=""
                                            style={{
                                              position: "absolute",
                                              top: "20%",
                                            }}
                                          />
                                          <Link
                                            to={`/news/${item.blogCategory?.slug}/${item.blogSubCategory?.slug}/${item.slug}`}
                                            className="all-over-thumb-link"
                                            aria-label={item.title}
                                          />
                                          <div className="thumb-overlay">
                                            <span className="tie-icon tie-media-icon" />
                                            <span className="post-cat-wrap">
                                              <Link
                                                className="post-cat tie-cat-75"
                                                to={`/news/${item.blogCategory?.slug}/${item.blogSubCategory?.slug}/${item.slug}`}
                                              >
                                                {item?.blogCategory?.name}
                                              </Link>
                                            </span>
                                            <div className="thumb-content">
                                              <div className="thumb-meta">
                                                <span
                                                  className="trending-post tie-icon-bolt"
                                                  aria-hidden="true"
                                                />
                                                <span className="date meta-item tie-icon">
                                                  {item.date}
                                                </span>
                                              </div>
                                              <h2 className="thumb-title">
                                                <Link
                                                  to={`/news/${item.blogCategory?.slug}/${item.blogSubCategory?.slug}/${item.slug}`}
                                                >
                                                  {item.title}
                                                </Link>
                                              </h2>
                                              <div className="thumb-desc">
                                                {item.desc}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </SwiperSlide>
                                    )
                                  )}
                                </Swiper>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
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

export default TagList;
