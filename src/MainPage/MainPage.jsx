import React, { Fragment, useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "react-slick";

import { Link, useLocation } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { NewsList } from "../apis/axios";
// import './WebStories.css';
// import throttle from "lodash.throttle";
import { FixedSizeList as List } from "react-window";
import useIsMobile from "../useIsMobile/useIsMobile";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import ReelModal from "../components/ReelModal";

const MainPage = () => {
  const [activeTab, setActiveTab] = useState("Popular");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [newsList, setNewsList] = useState([]);
  const [categoryBasedNewsList, setCategoryBasednewsList] = useState([]);
  const [categoryDataList, setCategoryDataList] = useState([]);
  const [popularRecentNewsList, setPopularRecentNewsList] = useState([]);
  const [popularRecentNewsScrollerList, setPopularRecentNewsScrollerList] =
    useState([]);
  const [popularScrollerPage, setPopularScrollerPage] = useState(1);
  const SCROLLER_PAGE_LIMIT = 3;
  const [recentNewsPage, setRecentNewsPage] = useState(1);
  const [recentNewsLoading, setRecentNewsLoading] = useState(false);
  const [recentNewsTotalCount, setRecentNewsTotalCount] = useState(0);

  const RECENT_NEWS_LIMIT = 3;

  const [featurePostNewsList, setfeaturePostNewsList] = useState([]);
  const [newLaunchProjectList, setnewLaunchProjectList] = useState([]);
  const [webStoriesList, setWebStoriesList] = useState([]);
  const [catBasedNewsList, setCatBasedNewsList] = useState([]);
  const [popularLimit, setPopularLimit] = useState(5);
  const [popularTotalCount, setPopularTotalCount] = useState(null);
  const [popularTotalScrollerCount, setPopularTotalScrollerCount] =
    useState(null);
  const [popularLoading, setPopularLoading] = useState(false);
  const [popularScrollerLoading, setPopularScrollerLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [homepageLoading, setHomepageLoading] = useState([]);

  const [recentNewsList, setRecentNewsList] = useState([]);
  const [recentScrollerPage, setRecentScrollerPage] = useState(1);
  const [recentScrollerLoading, setRecentScrollerLoading] = useState(false);
  const [recentTotalScrollerCount, setRecentTotalScrollerCount] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const initialHomepageSeoFormData = {
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    // ogImage: "",
  };

  const [homepageSeoFormData, setHomepageSeoFormData] = useState(
    initialHomepageSeoFormData
  );

  const location = useLocation();

  const isMobile = useIsMobile();

  const apiUrl = import.meta.env.VITE_API_URL;

  const categoryScrollRef = useRef(null);

  const scrollAmount = 100;

  const handlePrevCategory = (e) => {
    e.preventDefault();
    if (categoryScrollRef.current) {
      categoryScrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // console.log("webStoriesList..", webStoriesList);

  const handleNextCategory = (e) => {
    e.preventDefault();
    if (categoryScrollRef.current) {
      categoryScrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleSlideClick = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    // Update body class names
    let bodyClass = document.body.className;

    bodyClass = bodyClass.replace(/woocommerce-no-js/, "woocommerce-js");
    bodyClass = bodyClass.replace(/tie-no-js/, "tie-js");
    bodyClass = bodyClass.replace(/bbp-no-js/, "bbp-js");

    document.body.className = bodyClass;
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      origin: "auto",
      perView: 5,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1 },
      },
      "(min-width: 769px) and (max-width: 1024px)": {
        slides: { perView: 2 },
      },
    },
  });

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Stories
  const storyDuration = 5000;

  const swiperRef = useRef(null);
  const timeoutRef = useRef(null);
  const progressContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const slides2 = [
    { id: 10, img: "https://picsum.photos/id/10/800/1600", alt: "Story 1" },
    { id: 11, img: "https://picsum.photos/id/11/800/1600", alt: "Story 2" },
    { id: 12, img: "https://picsum.photos/id/12/800/1600", alt: "Story 3" },
  ];

  const slidesCount = slides2.length;

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper", {
      allowTouchMove: false,
      speed: 300,
      slidesPerView: 1,
    });

    if (progressContainerRef.current) {
      progressContainerRef.current.innerHTML = "";
      for (let i = 0; i < slidesCount; i++) {
        const bar = document.createElement("div");
        bar.className = "progress-bar";
        bar.innerHTML = `<div class="progress-bar-fill" id="progressFill${i}"></div>`;
        progressContainerRef.current.appendChild(bar);
      }
    }

    startProgress(0);

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const startProgress = (index) => {
    clearTimeout(timeoutRef.current);

    document.querySelectorAll(".progress-bar-fill").forEach((el, i) => {
      el.style.transition = "none";
      el.style.width = i < index ? "100%" : "0%";
    });

    const activeBar = document.getElementById(`progressFill${index}`);
    if (!activeBar) return;

    void activeBar.offsetWidth;
    activeBar.style.transition = `width ${storyDuration}ms linear`;
    activeBar.style.width = "100%";

    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        if (index < slidesCount - 1) {
          swiperRef.current.slideTo(index + 1);
          startProgress(index + 1);
        } else {
        }
      }, storyDuration);
    }
  };

  // console.log("catBasedNewsList..", catBasedNewsList);

  const pauseProgress = () => {
    clearTimeout(timeoutRef.current);
    setIsPaused(true);

    document.querySelectorAll(".progress-bar-fill").forEach((el) => {
      const computedWidth = window.getComputedStyle(el).width;
      el.style.transition = "none";
      el.style.width = computedWidth;
    });
  };

  const resumeProgress = () => {
    if (!isPaused) return;
    setIsPaused(false);
    startProgress(swiperRef.current.activeIndex);
  };

  const goNext = () => {
    if (swiperRef.current.activeIndex < slidesCount - 1) {
      swiperRef.current.slideTo(swiperRef.current.activeIndex + 1);
      startProgress(swiperRef.current.activeIndex + 1);
    }
  };

  const goPrev = () => {
    if (swiperRef.current.activeIndex > 0) {
      swiperRef.current.slideTo(swiperRef.current.activeIndex - 1);
      startProgress(swiperRef.current.activeIndex - 1);
    }
  };

  const getNewsListData = async () => {
    try {
      const response = await NewsList.getNewsCatSubCatListMain();
      const data = response?.data?.data;

      setNewsList(data);
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  const getCategoryData = async () => {
    console.log("Fetching news list...");

    try {
      const response = await NewsList.getCategoryData();
      const data = response?.data?.data;

      setCategoryDataList(data);
    } catch (error) {}
  };

  const getNewsListDataCatBased = async (name, id) => {
    setActiveCategory(id);

    try {
      const response = await NewsList.getNewsCatSubCatList(name, id);
      const data = response?.data?.data;
      setCategoryBasednewsList(data);
    } catch (error) {}
  };

  // popular recent list
  const getPopularRecenNewstList = async () => {
    if (popularLoading) return;

    setPopularLoading(true);

    try {
      const response = await NewsList.getNewsPopularRecentList(popularLimit);

      const data = response?.data?.data;
      const totalCount = response?.data?.totalCount;

      if (data && data.length > 0) {
        setPopularRecentNewsList(data);
        setPopularTotalCount(totalCount);
      }
    } catch (error) {
    } finally {
      setPopularLoading(false);
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
        setPopularScrollerPage(page); // update page
      }
    } catch (error) {
      console.error("Failed to fetch popular news", error);
    } finally {
      setPopularScrollerLoading(false);
    }
  };

  console.log(
    "popularRecentNewsScrollerList....",
    popularRecentNewsScrollerList
  );

  const PopularNewsItem = React.memo(({ data, index, popularClickCount }) => {
    return (
      <li
        key={index}
        className="widget-single-post-item widget-post-list tie-standard"
        style={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          backgroundColor: "#fff",
          // padding: "12px",
        }}
      >
        <div className="post-widget-thumbnail">
          <Link
            to={`/news/${data.blogCategory?.slug}/${data.blogSubCategory?.slug}/${data.slug}`}
            onClick={() => popularClickCount(data.id)}
            className="post-thumb"
          >
            <img
              // width={220}
              // height={150}
              src={`${apiUrl}/uploads/${data?.image}`}
              loading="lazy"
              decoding="async"
              className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
              alt={data?.image_alt}
              style={{
                borderRadius: "10px",
                width: "110px",
                height: "70px",
                objectFit: "cover",
              }}
            />
          </Link>
        </div>
        <div className="post-widget-body">
          <h2 className="post-title" style={{ fontSize: "13px" }}>
            <Link
              to={`/news/${data.blogCategory?.slug}/${data.blogSubCategory?.slug}/${data.slug}`}
              onClick={() => popularClickCount(data.id)}
            >
              {data?.title?.split(" ").length > 7
                ? `${data.title.split(" ").slice(0, 8).join(" ")}... `
                : data?.title}
            </Link>
          </h2>
          <div className="post-meta">
            <span className="date meta-item tie-icon">
              {new Date(data?.createdAt).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            {/* <div className="post-rating image-stars">
                <div className="stars-rating-bg" />
                <div
                  className="stars-rating-active"
                  data-rate-val="91.833333333333%"
                  data-lazy-percent={1}
                >
                  <div className="stars-rating-active-inner" />
                </div>
              </div> */}
          </div>
        </div>
      </li>
    );
  });

  const RecentNewsItem = React.memo(
    ({ data, index, apiUrl, popularClickCount }) => {
      return (
        <li
          key={index}
          className="widget-single-post-item widget-post-list tie-standard"
          style={{
            boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            backgroundColor: "#fff",
            // padding: "2px",
          }}
        >
          <div className="post-widget-thumbnail">
            <Link
              to={`/news/${data.blogCategory?.slug}/${data.blogSubCategory?.slug}/${data.slug}`}
              onClick={() => popularClickCount(data.id)}
              className="post-thumb"
            >
              <img
                src={`${apiUrl}/uploads/${data?.image}`}
                loading="lazy"
                decoding="async"
                className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                alt={data?.image_alt}
                style={{
                  borderRadius: "10px",
                  objectFit: "cover",
                  width: "110px",
                  height: "70px",
                }}
              />
            </Link>
          </div>
          <div className="post-widget-body">
            <h2 className="post-title" style={{ fontSize: "13px" }}>
              <Link
                to={`/news/${data.blogCategory?.slug}/${data.blogSubCategory?.slug}/${data.slug}`}
                onClick={() => popularClickCount(data.id)}
              >
                {data?.title?.split(" ").length > 7
                  ? `${data.title.split(" ").slice(0, 8).join(" ")}... `
                  : data?.title}
              </Link>
            </h2>
            <div className="post-meta">
              <span className="date meta-item tie-icon">
                {new Date(data?.createdAt).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              {/* <div className="post-rating image-stars">
                <div className="stars-rating-bg" />
                <div
                  className="stars-rating-active"
                  data-rate-val="91.833333333333%"
                  data-lazy-percent={1}
                >
                  <div className="stars-rating-active-inner" />
                </div>
              </div> */}
            </div>
          </div>
        </li>
      );
    }
  );

  // const throttledClick = useCallback(
  //   throttle((id) => {
  //     popularClickCount(id);
  //   }, 500),
  //   []
  // );

  useEffect(() => {
    getPopularRecenNewstList();
  }, [popularLimit]);

  useEffect(() => {
    getPopularRecenNewstScrollerList(1);
  }, []);

  const handleLoadMore = () => {
    setPopularLimit((prevLimit) => prevLimit + 2);
  };

  const getRecenNewstList = async (page = 1) => {
    if (recentNewsLoading) return;

    setRecentNewsLoading(true);

    try {
      const response = await NewsList.getNewsRecentList(
        RECENT_NEWS_LIMIT,
        page
      );

      const data = response?.data?.data;
      const totalCount = response?.data?.totalCount;

      if (data && data.length > 0) {
        setRecentNewsList((prev) => [...prev, ...data]);
        setRecentNewsTotalCount(totalCount);
        setRecentNewsPage(page);
      }
    } catch (error) {
      console.error("Failed to fetch recent news", error);
    } finally {
      setRecentNewsLoading(false);
    }
  };

  const getNewsFeaturePostList = async () => {
    try {
      const response = await NewsList.getNewsFeaturePostList();

      const data = response?.data?.data;

      setfeaturePostNewsList(data);
    } catch (error) {}
  };

  const getNewLaunchProjectList = async () => {
    try {
      const response = await NewsList.getNewLaunchProjectList();

      const data = response?.data?.data;

      setnewLaunchProjectList(data);
    } catch (error) {}
  };

  const getWebStoriesList = async () => {
    try {
      const response = await NewsList.getWebStoriesList();

      const data = response?.data?.data;

      setWebStoriesList(data);
    } catch (error) {}
  };
  const getCatBasedNewsList = async () => {
    try {
      const response = await NewsList.getCatBasedNewsList();

      const data = response?.data?.data;

      setCatBasedNewsList(data);
    } catch (error) {}
  };

  useEffect(() => {
    getPopularRecenNewstList();
  }, [activeTab]);

  useEffect(() => {
    getNewsListData();
    getCategoryData();
    getNewsListDataCatBased();
    getPopularRecenNewstList();
    getNewsFeaturePostList();
    getNewLaunchProjectList();
    getCatBasedNewsList();
    getWebStoriesList();
    getRecenNewstList(1);
  }, []);

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

      setCategoryBasednewsList(resData?.data);
    } catch (error) {}
  };

  // const handlePrevCategory = () => {
  //   if (activeCategoryIndex > 0) {
  //     const newIndex = activeCategoryIndex - 1;
  //     setActiveCategoryIndex(newIndex);
  //     const prevCategorySlug = categoryDataList[newIndex]?.slug;
  //     getNewsListDataCatBased("category", prevCategorySlug);
  //   }
  // };

  // const handleNextCategory = () => {
  //   if (activeCategoryIndex < categoryDataList.length - 1) {
  //     const newIndex = activeCategoryIndex + 1;
  //     setActiveCategoryIndex(newIndex);
  //     const nextCategorySlug = categoryDataList[newIndex]?.slug;
  //     getNewsListDataCatBased("category", nextCategorySlug);
  //   }
  // };

  const handleCategoryClick = (slug) => {
    const clickedCategoryIndex = categoryDataList.findIndex(
      (category) => category.slug === slug
    );
    setActiveCategoryIndex(clickedCategoryIndex);
    getNewsListDataCatBased("category", slug);
  };

  const ogImage =
    "https://res.cloudinary.com/drj0uehgx/image/upload/v1753508730/feviconsamachar-06_mkn9yc.png";

  const getHomepageSeoData = async () => {
    setHomepageLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/homeMeta/getHomeDescription`);

      const data = response.data?.data ?? response.data;

      // Populate form state
      setHomepageSeoFormData({
        metaTitle: data.metaTitle || "",
        metaDescription: data.metaDescription || "",
        metaKeywords: data.metaKeywords || "",
        // Uncomment and add ogImage if needed
        // ogImage: data.ogImage || "",
      });

      setHomepageLoading(false);
      // setActivityHomepageSeoToggle(false);
    } catch (error) {
      console.error("Error fetching homepage SEO data:", error);
      setHomepageLoading(false);
    }
  };

  console.log("homepageSeoFormData...", homepageSeoFormData);

  useEffect(() => {
    getHomepageSeoData();
  }, []);

  return (
    <Fragment>
      <Helmet>
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://res.cloudinary.com/drj0uehgx/image/upload/v1753508730/feviconsamachar-06_mkn9yc.png"
        />
        <title>{homepageSeoFormData?.metaTitle}</title>
        <meta
          name="description"
          content={homepageSeoFormData?.metaDescription}
        />
        <meta name="keywords" content={homepageSeoFormData?.metaKeywords} />

        {/* Canonical (in case ConanicalTag didn't catch it) */}
        <link
          rel="canonical"
          href={`https://www.realtysamachar.com${location.pathname}`}
        />

        {/* Open Graph */}
        <meta property="og:title" content={homepageSeoFormData?.metaTitle} />
        <meta
          property="og:description"
          content={homepageSeoFormData?.metaDescription}
        />
        <meta property="og:image" content={ogImage} />
        <meta
          property="og:url"
          content={`https://www.realtysamachar.com${location.pathname}`}
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={homepageSeoFormData?.metaTitle} />
        <meta
          name="twitter:description"
          content={homepageSeoFormData?.metaDescription}
        />
        <meta name="twitter:image" content={ogImage} />

        {homepageSeoFormData?.schema && (
          <script type="application/ld+json">
            {JSON.stringify(schema?.schema)}
          </script>
        )}
      </Helmet>
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
                id="tiepost-831-section-1785"
                className="section-wrapper container-full without-background"
              >
                <div className="section-item is-first-section full-width">
                  <div
                    className="container"
                    style={{
                      // border: "2px solid black",
                      backgroundColor: "white",
                    }}
                  >
                    <div className="tie-row main-content-row">
                      <div className="main-content tie-col-md-12">
                        <div
                          className="scrolling-slider scrolling-box-slider"
                          style={
                            {
                              // border: "2px solid black"
                            }
                          }
                        >
                          <Slider {...settings2}>
                            {newsList?.slice(0, 10).map((data, index) => {
                              return (
                                <div
                                  className="slide tie-video slider_width"
                                  style={{
                                    borderRadius: "8px",
                                    width: "100%",
                                  }}
                                  key={data.id}
                                >
                                  <div className="slide-img">
                                    <Link
                                      to={`/news/${data.blogCategory?.slug}/${data.blogSubCategory?.slug}/${data.slug}`}
                                      onClick={() => popularClickCount(data.id)}
                                      aria-label={data?.title}
                                      className="post-thumb"
                                      style={{
                                        position: "relative",
                                        width: "100%",
                                        height: "100%",
                                        // border: "2px solid black",
                                      }}
                                    >
                                      <img
                                        className="landing-slider-image attachment-jannah-image-large size-jannah-image-large lazy-img wp-post-image"
                                        alt={data?.image_alt}
                                        src={`${apiUrl}/uploads/${data?.image}`}
                                      />
                                    </Link>
                                  </div>
                                  <div className="slide-content slide slide-image overlay">
                                    <h2
                                      className="post-title"
                                      style={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                      }}
                                    >
                                      <Link
                                        to={`/news/${data.blogCategory?.slug}/${data.blogSubCategory?.slug}/${data.slug}`}
                                        onClick={() =>
                                          popularClickCount(data.id)
                                        }
                                      >
                                        {data?.title?.split(" ").length > 8
                                          ? `${data.title
                                              .split(" ")
                                              .slice(0, 9)
                                              .join(" ")}...`
                                          : data?.title}
                                      </Link>
                                    </h2>
                                    <div className="post-meta" />
                                  </div>
                                </div>
                              );
                            })}
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="tiepost-2488-section-3166"
                className="section-wrapper container normal-width without-background"
              >
                <div
                  className="section-item sidebar-right has-sidebar"
                  style={{ paddingTop: 0 }}
                >
                  <div className="container-normal">
                    <div className="tie-row main-content-row">
                      <div
                        className="main-content tie-col-md-12 tie-col-xs-12"
                        role="main"
                      >
                        <div
                          className=" tie-row row"
                          style={{
                            marginTop: "29px",
                            marginBottom: "0px",
                            // border: "2px solid black",
                            // padding: "0",
                          }}
                        >
                          <div
                            id="tie-block_3151"
                            className="mag-box big-post-left-box big-thumb-left-box first-post-gradient tie-col-md-8"
                            data-current={1}
                            style={{
                              // border: "2px solid black",
                              marginBlock: "0px",
                            }}
                          >
                            <div
                              className="container-wrapper"
                              style={{
                                // border: "2px solid black",
                                marginBlock: "0px",
                              }}
                            >
                              <div className="mag-box-title the-global-title new-globl-tittle">
                                <h1
                                  style={{
                                    color: "#0669ff",
                                    fontSize: "25px",
                                    width: "auto",
                                    wordWrap: "normal",
                                  }}
                                >
                                  Real Estate News
                                </h1>
                                <div className="tie-alignright">
                                  <div className="mag-box-options new-mag-box-options">
                                    <ul
                                      className="mag-box-filter-links is-flex-tabs new-tabs-flex"
                                      style={{ opacity: 1 }}
                                      ref={categoryScrollRef}
                                    >
                                      <li>
                                        <a
                                          href="#"
                                          className={`block-ajax-term ${
                                            activeCategoryIndex === -1
                                              ? "block-all-term active"
                                              : ""
                                          }`}
                                          onClick={() => {
                                            setActiveCategoryIndex(-1);
                                            getNewsListDataCatBased();
                                          }}
                                        >
                                          All
                                        </a>
                                      </li>
                                      {categoryDataList?.map(
                                        (categoryData, index) => (
                                          <li key={index}>
                                            <a
                                              href="#"
                                              className={`block-ajax-term ${
                                                activeCategoryIndex === index
                                                  ? "block-all-term active"
                                                  : ""
                                              }`}
                                              onClick={() =>
                                                handleCategoryClick(
                                                  categoryData?.slug
                                                )
                                              }
                                            >
                                              {categoryData?.name}
                                            </a>
                                          </li>
                                        )
                                      )}
                                    </ul>

                                    <ul className="slider-arrow-nav">
                                      <li>
                                        <a
                                          className="block-pagination prev-posts"
                                          href="#"
                                          onClick={handlePrevCategory}
                                        >
                                          <span
                                            className="tie-icon-angle-left"
                                            aria-hidden="true"
                                          />
                                          <span className="screen-reader-text">
                                            Previous category
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="block-pagination next-posts"
                                          href="#"
                                          onClick={handleNextCategory}
                                        >
                                          <span
                                            className="tie-icon-angle-right"
                                            aria-hidden="true"
                                          />
                                          <span className="screen-reader-text">
                                            Next category
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="mag-box-container clearfix">
                                <ul
                                  className="posts-items posts-list-container"
                                  // style={{
                                  //   border: "10px solid black",
                                  //   maxHeight: "950px", // Shows approx 5 items
                                  //   overflowY: "auto",
                                  //   // padding: 0,
                                  //   // margin: 0,
                                  // }}
                                >
                                  <li className="post-item tie-standard">
                                    <div
                                    // className="big-thumb-left-box-inner"
                                    // style={{
                                    //   backgroundImage: `url(${bgimg})`,
                                    //   backgroundSize: "cover",
                                    //   backgroundPosition: "center",
                                    // }}
                                    >
                                      <div
                                        id="posts-list-widget-6"
                                        className="container-wrapper widget posts-list"
                                      >
                                        {/* <div className="widget-title">
                                          <div className="the-subtitle" >
                                            Web Stories
                                            <span className="widget-title-icon tie-icon" />
                                          </div>
                                        </div> */}

                                        <div className="mag-box-container clearfix">
                                          <div className="loader-overlay">
                                            <div className="spinner-circle" />
                                          </div>
                                          <div className="featured-posts-swiper">
                                            <div
                                              className="progress-container"
                                              ref={progressContainerRef}
                                            ></div>

                                            <div className="swiper">
                                              <div className="swiper-wrapper">
                                                {categoryBasedNewsList
                                                  ?.slice(0, 5)
                                                  ?.map((item, index) => (
                                                    <div
                                                      className="slide-story swiper-slide"
                                                      key={index}
                                                      style={{
                                                        // height: "480px",
                                                        // width: "220px",
                                                        position: "relative",
                                                        borderRadius: "10px",
                                                        overflow: "hidden",
                                                      }}
                                                    >
                                                      <Link
                                                        to={`/news/${item.blogCategory?.slug}/${item.blogSubCategory?.slug}/${item.slug}`}
                                                        onClick={() =>
                                                          popularClickCount(
                                                            item.id
                                                          )
                                                        }
                                                        style={{
                                                          display: "block",
                                                          height: "100%",
                                                          position: "relative",
                                                          background:
                                                            "#c7d9f3ff",
                                                          display: "flex",
                                                          justifyContent:
                                                            "center",
                                                          alignItems: "center",
                                                        }}
                                                      >
                                                        {/* Category Label */}
                                                        <div
                                                          style={{
                                                            position:
                                                              "absolute",
                                                            top: "10px",
                                                            left: "10px",
                                                            backgroundColor:
                                                              "rgba(0,0,0,0.7)",
                                                            color: "#fff",
                                                            padding: "4px 10px",
                                                            borderRadius: "6px",
                                                            zIndex: 10,
                                                            fontSize: "14px",
                                                          }}
                                                        >
                                                          {item.category}
                                                        </div>

                                                        {/* Post Image */}
                                                        <img
                                                          src={`${apiUrl}/uploads/${item?.image}`}
                                                          alt={item.image_alt}
                                                          style={
                                                            {
                                                              // width: "100%",
                                                              // height: "100%",
                                                              // objectFit: "cover",
                                                              // borderRadius:
                                                              //   "10px",
                                                            }
                                                          }
                                                        />

                                                        {/* Purple Overlay */}
                                                        <div
                                                          style={{
                                                            position:
                                                              "absolute",
                                                            top: "0",
                                                            left: "0",
                                                            width: "100%",
                                                            height: "100%",
                                                            // background:
                                                            //   "linear-gradient(to top, rgba(0, 102, 204, 0.4), transparent)",
                                                            zIndex: 1,
                                                          }}
                                                        />

                                                        {/* Post Title at Bottom */}
                                                        <div
                                                          style={{
                                                            position:
                                                              "absolute",
                                                            bottom: "0px",
                                                            left: "0",
                                                            width: "100%",
                                                            background:
                                                              "linear-gradient(to top, black",

                                                            color: "#fff",
                                                            padding: "8px",
                                                            fontSize: "16px",
                                                            zIndex: 2,
                                                          }}
                                                        >
                                                          <h2
                                                            className="post-title"
                                                            style={{
                                                              fontSize: "13px",
                                                            }}
                                                          >
                                                            {item?.title?.split(
                                                              " "
                                                            ).length > 10
                                                              ? item.title
                                                                  .split(" ")
                                                                  .slice(0, 25)
                                                                  .join(" ")
                                                              : item.title}
                                                          </h2>
                                                        </div>
                                                      </Link>
                                                    </div>
                                                  ))}
                                              </div>

                                              {/* Navigation Arrows */}
                                              <div
                                                className="nav-zone-new nav-left"
                                                onClick={goPrev}
                                                onMouseDown={pauseProgress}
                                                onMouseUp={resumeProgress}
                                                onTouchStart={pauseProgress}
                                                onTouchEnd={resumeProgress}
                                              ></div>

                                              <div
                                                className="nav-zone-new nav-right"
                                                onClick={goNext}
                                                onMouseDown={pauseProgress}
                                                onMouseUp={resumeProgress}
                                                onTouchStart={pauseProgress}
                                                onTouchEnd={resumeProgress}
                                              ></div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="clearfix" />
                                      </div>
                                    </div>
                                  </li>

                                  {categoryBasedNewsList

                                    ?.slice(0, 5)
                                    ?.map((data, index) => {
                                      return (
                                        <li
                                          key={index}
                                          className="post-item is-trending tie-video"
                                          style={{
                                            boxShadow:
                                              "0 2px 2px rgba(0, 0, 0, 0.1)",
                                            borderRadius: "8px",
                                            backgroundColor: "#fff",
                                            padding: "1px",
                                            marginTop: "24px",
                                            // border: "2px solid black",
                                          }}
                                        >
                                          <Link
                                            to={`/news/${data.blogCategory?.slug}/${data.blogSubCategory?.slug}/${data.slug}`}
                                            onClick={() =>
                                              popularClickCount(data.id)
                                            }
                                            className="post-thumb relative"
                                            style={{
                                              // objectFit: "cover",
                                              borderRadius: "10px",
                                              // border: "2px solid black",
                                              // width: "100%",
                                              // height: "100%",
                                            }}
                                          >
                                            <img
                                              alt={data?.image_alt}
                                              decoding="async"
                                              src={`${apiUrl}/uploads/${data?.image}`}
                                              loading="lazy"
                                              style={{
                                                objectFit: "cover",
                                                borderRadius: "10px",
                                                // border: "2px solid black",
                                                width: "110px",
                                                height: "70px",
                                              }}
                                            />
                                          </Link>
                                          <div className="post-details">
                                            <div className="post-meta clearfix">
                                              <span
                                                className="trending-post tie-icon-bolt trending-sm meta-item"
                                                aria-hidden="true"
                                              />
                                              <span className="date meta-item tie-icon">
                                                {new Date(
                                                  data?.createdAt
                                                ).toLocaleDateString("en-US", {
                                                  weekday: "long",
                                                  year: "numeric",
                                                  month: "long",
                                                  day: "numeric",
                                                })}
                                              </span>
                                            </div>
                                            <h2
                                              className="post-title"
                                              style={{ fontSize: "13px" }}
                                            >
                                              <Link
                                                to={`/news/${data.blogCategory?.slug}/${data.blogSubCategory?.slug}/${data.slug}`}
                                                onClick={() =>
                                                  popularClickCount(data.id)
                                                }
                                              >
                                                {data?.title?.split(" ")
                                                  .length > 7
                                                  ? `${data.title
                                                      .split(" ")
                                                      .slice(0, 8)
                                                      .join(" ")}... `
                                                  : data?.title}
                                              </Link>
                                            </h2>
                                          </div>
                                        </li>
                                      );
                                    })}
                                </ul>

                                <div className="clearfix" />
                              </div>
                            </div>
                          </div>

                          <div className="tie-col-md-4 new-popular-recent-section">
                            <div
                              id="widget_tabs-2"
                              className="container-wrapper tabs-container-wrapper tabs-container-4"
                            >
                              <div className="widget tabs-widget">
                                <div className="widget-container">
                                  <div className="tabs-widget">
                                    <div className="tabs-wrapper">
                                      <ul className="tabs new-tablist ">
                                        <li
                                          className={
                                            activeTab === "Popular"
                                              ? "active"
                                              : ""
                                          }
                                          style={{ width: "50%" }}
                                        >
                                          <Link
                                            to="#widget_tabs-2-popular"
                                            onClick={(e) => {
                                              e.preventDefault();
                                              setActiveTab("Popular");
                                            }}
                                            className={
                                              activeTab === "Popular"
                                                ? "active"
                                                : ""
                                            }
                                          >
                                            Popular
                                          </Link>
                                        </li>

                                        <li
                                          className={
                                            activeTab === "Recent"
                                              ? "active"
                                              : ""
                                          }
                                          style={{ width: "50%" }}
                                        >
                                          <Link
                                            to="#widget_tabs-2-recent"
                                            onClick={(e) => {
                                              e.preventDefault();
                                              setActiveTab("Recent");
                                            }}
                                            className={
                                              activeTab === "Recent"
                                                ? "active"
                                                : ""
                                            }
                                          >
                                            Recent
                                          </Link>
                                        </li>
                                      </ul>
                                      {activeTab === "Popular" && (
                                        <div
                                          id="widget_tabs-2-recent"
                                          className="tab-content tab-content-recent"
                                        >
                                          <List
                                            height={500}
                                            itemCount={
                                              popularRecentNewsScrollerList.length
                                            }
                                            itemSize={101}
                                            width={"100%"}
                                            onItemsRendered={({
                                              visibleStopIndex,
                                            }) => {
                                              const isNearBottom =
                                                visibleStopIndex >=
                                                popularRecentNewsScrollerList.length -
                                                  1;

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
                                            {({ index, style }) => (
                                              <div style={style}>
                                                <PopularNewsItem
                                                  data={
                                                    popularRecentNewsScrollerList[
                                                      index
                                                    ]
                                                  }
                                                  index={index}
                                                  popularClickCount={
                                                    popularClickCount
                                                  }
                                                />
                                              </div>
                                            )}
                                          </List>
                                        </div>
                                      )}
                                      {activeTab === "Recent" && (
                                        <div
                                          id="widget_tabs-2-recent"
                                          className="tab-content tab-content-recent"
                                        >
                                          <List
                                            height={500}
                                            itemCount={recentNewsList.length}
                                            itemSize={102}
                                            width="100%"
                                            onItemsRendered={({
                                              visibleStopIndex,
                                            }) => {
                                              const isNearBottom =
                                                visibleStopIndex >=
                                                recentNewsList.length - 1;
                                              const hasMore =
                                                recentNewsList.length <
                                                recentNewsTotalCount;

                                              if (
                                                isNearBottom &&
                                                hasMore &&
                                                !recentNewsLoading
                                              ) {
                                                getRecenNewstList(
                                                  recentNewsPage + 1
                                                );
                                              }
                                            }}
                                          >
                                            {({ index, style }) => (
                                              <div style={style}>
                                                <RecentNewsItem
                                                  data={recentNewsList[index]}
                                                  index={index}
                                                  apiUrl={apiUrl}
                                                  popularClickCount={
                                                    popularClickCount
                                                  }
                                                />
                                              </div>
                                            )}
                                          </List>
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
                                                  the best WordPress News and
                                                  M...
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* prodcast */}
              <div
                id="tiepost-2488-section-3166"
                className=" container normal-width without-background"
                style={{
                  // border: "2px solid black",
                  padding: "0px",
                }}
              >
                <div
                  className="section-item sidebar-right has-sidebar"
                  style={{ paddingTop: 0 }}
                >
                  <div className="container-normal">
                    <div
                      className="row"
                      style={{
                        marginTop: "-7px",
                        // border: "2px solid black"
                      }}
                    >
                      <div className={isMobile ? "tie-col-md-12" : ""}>
                        <div
                          id="tie-block_1160"
                          className="mag-box big-post-top-box has-first-big-post"
                          data-current={1}
                          style={{
                            // padding: "6px",
                            // backgroundColor: "#f2f2f2",
                            marginBottom: "0px",
                            // border: "2px solid black",
                          }}
                        >
                          {/* <div className="mag-box-title the-global-title">
                            <h3 style={{ fontSize: "25px" }}>Prodcast</h3>
                          </div> */}
                          {(() => {
                            const allBlogs = catBasedNewsList
                              ?.filter(
                                (cat) =>
                                  cat?.name === "Videos" ||
                                  cat?.BlogSubCategory?.some(
                                    (sub) =>
                                      sub?.name?.toLowerCase() === "youtube"
                                  )
                              )
                              ?.flatMap((cat) => cat?.blog || []);

                            if (!allBlogs || allBlogs.length === 0) return null;

                            const firstBlog = allBlogs[0];

                            return (
                              <>
                                <div
                                  className="mag-box-title the-global-title new-globl-tittle"
                                  style={{
                                    display: "flex",
                                    justifyContent: "start",
                                  }}
                                >
                                  <h2
                                    style={{
                                      marginTop: "13px",
                                      color: "#0669ff",
                                    }}
                                  >
                                    Realty Samachar TV
                                  </h2>
                                </div>
                              </>
                            );
                          })()}

                          <div className="container-wrapper">
                            <div className="video-section-container">
                              {(() => {
                                const allBlogs = catBasedNewsList
                                  ?.filter(
                                    (cat) =>
                                      cat?.name === "Videos" ||
                                      cat?.BlogSubCategory?.some(
                                        (sub) =>
                                          sub?.name?.toLowerCase() === "youtube"
                                      )
                                  )
                                  ?.flatMap((cat) => cat?.blog || []);

                                if (!allBlogs || allBlogs.length === 0)
                                  return null;

                                const firstBlog = allBlogs[0];
                                const remainingBlogs = allBlogs.slice(1, 4);

                                const getYouTubeId = (url) => {
                                  const regex =
                                    /(?:youtube\.com\/(?:[^/]+\/\S+\/|(?:v|embed)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
                                  const match = url?.match(regex);
                                  return match ? match[1] : null;
                                };

                                return (
                                  <>
                                    {/* Main video block */}
                                    <div className="video-section-main">
                                      <Link
                                        to={`/news/${firstBlog.blogCategory?.slug}/${firstBlog.blogSubCategory?.slug}/${firstBlog.slug}`}
                                        aria-label={firstBlog?.title}
                                        // className="post-thumb"
                                      >
                                        <iframe
                                          className="responsive-iframe"
                                          src={`https://www.youtube.com/embed/${getYouTubeId(
                                            firstBlog?.youtubeLink
                                          )}`}
                                          title={firstBlog?.title}
                                          frameBorder="0"
                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                          allowFullScreen
                                          style={{
                                            // borderRadius: "10px",
                                            backgroundSize: "none",
                                          }}
                                        />
                                      </Link>
                                    </div>

                                    {/* Remaining videos list */}
                                    <ul className="video-section-list">
                                      {remainingBlogs.map((blog) => (
                                        <li
                                          className="video-section-item"
                                          key={blog.id}
                                        >
                                          <Link
                                            aria-label={blog?.title}
                                            to={`/news/${blog.blogCategory?.slug}/${blog.blogSubCategory?.slug}/${blog.slug}`}
                                            className="post-thumb"
                                            style={{ marginRight: "0px" }}
                                          >
                                            <iframe
                                              className="sub-responsive-iframe"
                                              src={`https://www.youtube.com/embed/${getYouTubeId(
                                                blog?.youtubeLink
                                              )}`}
                                              title={blog?.title}
                                              frameBorder="0"
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                              allowFullScreen
                                              style={{
                                                borderRadius: "10px",
                                              }}
                                            />
                                          </Link>
                                          <div style={{ flex: 1 }}>
                                            <h4
                                              className="post-title"
                                              style={{
                                                fontSize: "14px",
                                                margin: "0 0 5px 0",
                                              }}
                                            >
                                              <Link
                                                to={`/news/${blog.blogCategory?.slug}/${blog.blogSubCategory?.slug}/${blog.slug}`}
                                              >
                                                {blog?.title}
                                              </Link>
                                            </h4>
                                            <div className="post-meta clearfix">
                                              <span className="date meta-item tie-icon">
                                                {new Date(
                                                  blog?.createdAt
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
                                      ))}

                                      {/* Centered View More button */}
                                      {/* <div
                                        style={{
                                          // textAlign: "center",
                                          width: "100%",
                                          marginTop: "10px",
                                        }}
                                      >
                                        <Link
                                          id="show-comments-section"
                                          to={`/${remainingBlogs?.[0]?.blogCategory?.slug}`}
                                          state={{ name: "category" }}
                                          className="button"
                                          style={{
                                            fontSize: "15px",
                                            padding: "8px 16px",
                                            width: "150px",
                                            display: "inline-block",
                                          }}
                                          data-text="View More"
                                        >
                                          View More
                                        </Link>
                                      </div> */}
                                    </ul>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        width: "100%",
                                        marginTop: "15px",
                                      }}
                                    >
                                      <Link
                                        id="show-comments-section"
                                        to={`/${remainingBlogs?.[0]?.blogCategory?.slug}`}
                                        state={{ name: "category" }}
                                        className="button"
                                        style={{
                                          fontSize: "15px",
                                          padding: "8px 16px",
                                          width: "150px",
                                          textAlign: "center",
                                        }}
                                        data-text="View More"
                                      >
                                        View More
                                      </Link>
                                    </div>
                                  </>
                                );
                              })()}
                            </div>

                            <div className="clearfix" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* prodcast */}

              <div
                id="tiepost-2488-section-3166"
                className="section-wrapper  normal-width without-background"
              >
                <div
                  className="section-item sidebar-right has-sidebar"
                  style={{ paddingTop: 0 }}
                >
                  <div className="container-normal">
                    <div className="row" style={{ marginTop: "0PX" }}>
                      {/* residential */}
                      <div
                        className="tie-col-md-8"
                        // style={{ border: "2px solid black" }}
                      >
                        <div
                          id="tie-block_1160"
                          className="mag-box big-post-top-box has-first-big-post"
                          data-current={1}
                        >
                          {catBasedNewsList?.slice(0, 3)?.map((data, index) => {
                            const firstBlog = data?.blog?.[0];
                            const remainingBlogs = data?.blog?.slice(1);

                            return (
                              <div className="container-wrapper" key={index}>
                                {/* Category Title */}
                                <div className="mag-box-title the-global-title">
                                  <h3
                                    style={{
                                      marginTop: "13px",
                                      fontSize: "25px",
                                    }}
                                  >
                                    {data?.name}
                                  </h3>
                                </div>

                                <div className="mag-box-container clearfix">
                                  <ul className="posts-items posts-list-container">
                                    {/* Featured (First) Blog */}
                                    {firstBlog && (
                                      <li
                                        className="post-item tie-standard"
                                        style={{
                                          boxShadow:
                                            "0 4px 8px rgba(0, 0, 0, 0.1)",
                                          borderRadius: "8px",
                                          backgroundColor: "#fff",
                                          // padding: "2px",
                                          // marginBottom: "10px",
                                          // border: "2px solid black",
                                          padding: "10px",
                                        }}
                                      >
                                        <Link
                                          to={`/news/${firstBlog.blogCategory?.slug}/${firstBlog.blogSubCategory?.slug}/${firstBlog.slug}`}
                                          aria-label={firstBlog?.title}
                                          className="post-thumb"
                                        >
                                          <span className="post-cat-wrap">
                                            <span className="post-cat tie-cat-139">
                                              {firstBlog?.blogSubCategory?.name}
                                            </span>
                                          </span>
                                          <img
                                            width={390}
                                            height={220}
                                            src={`${apiUrl}/uploads/${firstBlog?.image}`}
                                            className="attachment-jannah-image-large size-jannah-image-large lazy-img wp-post-image"
                                            alt={firstBlog?.image_alt}
                                            decoding="async"
                                            loading="lazy"
                                            style={{
                                              // objectFit: "cover",
                                              borderRadius: "10px",
                                              width: "390px",
                                              height: "220px",
                                            }}
                                          />
                                        </Link>
                                        <div className="post-details">
                                          <div className="post-meta clearfix">
                                            <span className="author-meta single-author no-avatars">
                                              <span className="meta-item meta-author-wrapper meta-author-1">
                                                <span className="meta-author">
                                                  <a
                                                    href="#"
                                                    className="author-name tie-icon"
                                                    title="Realty Samachar"
                                                  >
                                                    Realty Samachar
                                                  </a>
                                                </span>
                                              </span>
                                            </span>
                                            <span className="date meta-item tie-icon">
                                              {new Date(
                                                firstBlog?.createdAt
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
                                                {firstBlog?.views}
                                              </span>
                                            </div>
                                          </div>
                                          <h2 className="post-title">
                                            <Link
                                              to={`/news/${firstBlog.blogCategory?.slug}/${firstBlog.blogSubCategory?.slug}/${firstBlog.slug}`}
                                            >
                                              {firstBlog?.title}
                                            </Link>
                                          </h2>
                                          <p className="post-excerpt">
                                            {firstBlog?.shortDescription
                                              ?.split(" ")
                                              .slice(0, 28)
                                              .join(" ") +
                                              (firstBlog?.shortDescription?.split(
                                                " "
                                              ).length > 28
                                                ? "..."
                                                : "")}
                                          </p>

                                          <Link
                                            className="more-link  new-btn-readmpore"
                                            to={`/news/${firstBlog.blogCategory?.slug}/${firstBlog.blogSubCategory?.slug}/${firstBlog.slug}`}
                                          >
                                            Read More »
                                          </Link>
                                        </div>
                                      </li>
                                    )}

                                    {/* Sublist of remaining blogs */}
                                    {remainingBlogs
                                      ?.slice(0, 4)
                                      .map((subCat, subIndex) => (
                                        <li
                                          className="post-item tie-video responsive-box-list"
                                          key={subIndex}
                                          // style={{border: "2px solid black",}}
                                        >
                                          <Link
                                            aria-label={subCat?.title}
                                            to={`/news/${subCat.blogCategory?.slug}/${subCat.blogSubCategory?.slug}/${subCat.slug}`}
                                            className="post-thumb"
                                            style={{
                                              display: "block",
                                              width: "150px",
                                              height: "100px",
                                              overflow: "hidden",
                                              borderRadius: "10px",
                                              position: "relative",
                                            }}
                                          >
                                            {/* Subcategory tag */}
                                            <span
                                              className="post-cat-wrap"
                                              style={{
                                                position: "absolute",
                                                // top: "0px",
                                                // bottom: "8px",
                                                right: "8px",
                                                zIndex: 2,
                                              }}
                                            >
                                              <span className="post-cat tie-cat-139">
                                                {subCat?.blogSubCategory?.name}
                                              </span>
                                            </span>

                                            <img
                                              src={`${apiUrl}/uploads/${subCat?.image}`}
                                              alt={subCat?.image_alt}
                                              decoding="async"
                                              loading="lazy"
                                              style={{
                                                minWidth: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                borderRadius: "10px",
                                              }}
                                            />
                                          </Link>

                                          <div className="post-details">
                                            <div className="post-meta clearfix">
                                              <span className="date meta-item tie-icon">
                                                {new Date(
                                                  subCat?.createdAt
                                                ).toLocaleDateString("en-US", {
                                                  weekday: "long",
                                                  year: "numeric",
                                                  month: "long",
                                                  day: "numeric",
                                                })}
                                              </span>
                                            </div>
                                            <h2
                                              className="post-title"
                                              style={{ fontSize: "13px" }}
                                            >
                                              <Link
                                                to={`/news/${subCat.blogCategory?.slug}/${subCat.blogSubCategory?.slug}/${subCat.slug}`}
                                              >
                                                {subCat?.title?.split(" ")
                                                  .length > 7
                                                  ? `${subCat.title
                                                      .split(" ")
                                                      .slice(0, 8)
                                                      .join(" ")}`
                                                  : subCat?.title}
                                              </Link>
                                            </h2>
                                          </div>
                                        </li>
                                      ))}
                                  </ul>

                                  <div className="clearfix" />
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      marginTop: "15px",
                                    }}
                                  >
                                    <Link
                                      id="show-comments-section"
                                      to={`/${remainingBlogs?.[0]?.blogCategory?.slug}`}
                                      state={{ name: "category" }}
                                      className="button"
                                      style={{
                                        fontSize: "15px",
                                        padding: "8px 16px",
                                        width: "150px",
                                      }}
                                      data-text={"View More"}
                                    >
                                      View More
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div
                          id="tie-block_1160"
                          className="mag-box big-post-top-box has-first-big-post"
                          data-current={1}
                        ></div>
                      </div>

                      {/* residential */}
                      <div className="tie-col-md-4 ">
                        <div
                          id="posts-list-widget-6"
                          className="container-wrapper widget posts-list"
                        >
                          <div className="widget-title the-global-title">
                            <div className="the-subtitle">
                              Web Stories
                              {/* <span className="widget-title-icon tie-icon" /> */}
                            </div>
                          </div>

                          <div className="mag-box-container clearfix">
                            <div className="loader-overlay">
                              <div className="spinner-circle" />
                            </div>

                            <div className="new-web-stories">
                              <div
                                className="progress-container"
                                ref={progressContainerRef}
                              ></div>

                              <div className="swiper">
                                <div
                                  className="swiper-wrapper"
                                  style={
                                    {
                                      // display: "flex",
                                      // overflowX: "scroll",
                                    }
                                  }
                                >
                                  {webStoriesList.map((item, index) => (
                                    <div
                                      className="slide-story swiper-slide"
                                      key={index}
                                      onClick={() => handleSlideClick(index)}
                                      style={{
                                        height: "500px",
                                        cursor: "pointer",
                                      }}
                                    >
                                      <video
                                        className="story-video"
                                        src={`${apiUrl}/uploads/${item.video}`}
                                        muted
                                        playsInline
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          objectFit: "cover",
                                        }}
                                      />
                                    </div>
                                  ))}
                                </div>

                                {/* Modal with vertical swiper */}
                                <ReelModal
                                  open={isModalOpen}
                                  onClose={() => setIsModalOpen(false)}
                                  stories={webStoriesList}
                                  startIndex={currentIndex}
                                />

                                <div
                                  className="nav-zone-new nav-left"
                                  onClick={goPrev}
                                  onMouseDown={pauseProgress}
                                  onMouseUp={resumeProgress}
                                  onTouchStart={pauseProgress}
                                  onTouchEnd={resumeProgress}
                                ></div>

                                <div
                                  className="nav-zone-new nav-right"
                                  onClick={goNext}
                                  onMouseDown={pauseProgress}
                                  onMouseUp={resumeProgress}
                                  onTouchStart={pauseProgress}
                                  onTouchEnd={resumeProgress}
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="clearfix" />
                        </div>

                        {/* Swiper JS (CDN) */}
                        <div
                          id="posts-list-widget-50"
                          className="container-wrapper widget posts-list"
                          style={{ marginTop: 50 }}
                        >
                          {/* Widget Title */}
                          <div className="widget-title the-global-title">
                            <div className="the-subtitle">
                              Featured Posts
                              <span className="widget-title-icon tie-icon" />
                            </div>
                          </div>

                          {/* Scrollable Featured Posts Section */}
                          <div
                            className="widget-posts-list-wrapper"
                            // style={{ height: 600, overflow: "auto" }}
                          >
                            <List
                              height={900}
                              itemCount={featurePostNewsList.length}
                              itemSize={101}
                              width={"100%"}
                            >
                              {({ index, style }) => {
                                const data = featurePostNewsList[index];
                                return (
                                  <div style={style} key={index}>
                                    <li
                                      className="widget-single-post-item widget-post-list tie-standard"
                                      style={{
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.1)",
                                        borderRadius: "8px",
                                        backgroundColor: "#fff",
                                        // padding: "6px",
                                        marginBottom: "15px",
                                        marginLeft: "10px",
                                        marginRight: "10px",
                                      }}
                                    >
                                      <div className="post-widget-thumbnail">
                                        <Link
                                          to={`/news/${data.blogCategory?.slug}/${data.blogSubCategory?.slug}/${data.slug}`}
                                          onClick={() =>
                                            popularClickCount(data.id)
                                          }
                                          className="post-thumb"
                                        >
                                          <img
                                            src={`${apiUrl}/uploads/${data?.image}`}
                                            className="attachment-jannah-image-small size-jannah-image-small lazy-img tie-small-image wp-post-image"
                                            alt={data?.image_alt}
                                            loading="lazy"
                                            decoding="async"
                                            style={{
                                              borderRadius: "10px",
                                              objectFit: "cover",
                                              width: "110px",
                                              height: "70px",
                                            }}
                                          />
                                        </Link>
                                      </div>
                                      <div className="post-widget-body">
                                        <Link
                                          to={`/news/${data.blogCategory?.slug}/${data.blogSubCategory?.slug}/${data.slug}`}
                                          onClick={() =>
                                            popularClickCount(data.id)
                                          }
                                          style={{ fontSize: "13px" }}
                                        >
                                          {data?.title?.split(" ").length > 5
                                            ? `${data.title
                                                .split(" ")
                                                .slice(0, 5)
                                                .join(" ")}... `
                                            : data?.title}
                                        </Link>
                                        <div className="post-meta">
                                          <span className="date meta-item tie-icon">
                                            {new Date(
                                              data?.createdAt
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
                                  </div>
                                );
                              }}
                            </List>
                          </div>

                          <div className="clearfix" />
                        </div>
                        {/* <div
                          id="stream-item-widget-15"
                          className="widget stream-item-widget widget-content-only"
                          style={{ marginTop: 50 }}
                        >
                          <div className="stream-item-widget-content">
                            <span className="stream-title">Advertisement</span>
                            <a
                              href="http://tielabs.com/buy/jannah?utm_source=demos&utm_campaign=jannah&utm_content=demo&utm_medium=ads"
                              target="_blank"
                              rel="nofollow noopener"
                            >
                              <img
                                className="widget-stream-image"
                                src="/images/sidebar-1.jpg"
                                loading="lazy"
                                width={336}
                                height={280}
                                alt=""
                              />
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className="clearfix half-box-clearfix" />
                    {/* <div
                      id="tie-block_2223"
                      className="mag-box stream-item-mag stream-item"
                    >
                      <div className="container-wrapper">
                        {" "}
                        <a
                          href="http://tielabs.com/buy/jannah?utm_source=demos&utm_campaign=jannah&utm_content=demo&utm_medium=ads"
                          title="Buy Jannah Theme"
                          target="_blank"
                        >
                          <img
                            loading="lazy"
                            src="/images/2.jpg"
                            alt="Buy Jannah Theme"
                            width={729}
                            height={91}
                          />
                        </a>{" "}
                      </div>
                    </div> */}

                    {/* New Launched Projects */}
                    <div
                      id="tie-s_1441"
                      className="mag-box scrolling-box"
                      style={{
                        // border: "2px solid black",
                        padding: "0px 15px",
                      }}
                    >
                      <div className="container-wrapper">
                        <div className="mag-box-title the-global-title">
                          <h3> New Launched Projects</h3>
                          <div className="tie-alignright">
                            <div className="mag-box-options">
                              <ul className="slider-arrow-nav" />
                            </div>
                          </div>
                        </div>
                        <div className="mag-box-container clearfix">
                          {/* <div className="loader-overlay">
                            <div className="spinner-circle" />
                          </div> */}
                          <div
                            className="scrolling-slider scrolling-box-slider"
                            style={{}}
                          >
                            <Slider {...settings}>
                              {newLaunchProjectList?.map((data, index) => {
                                return (
                                  <div
                                    className="slide tie-video slider_width"
                                    style={{
                                      boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
                                      borderRadius: "8px",
                                      backgroundColor: "#fff",
                                      padding: "6px",
                                      marginBottom: "10px",
                                      // border: "2px solid black",
                                    }}
                                  >
                                    <div className="slide-img">
                                      {" "}
                                      <Link
                                        to={`/news/${data.blogCategory?.slug}/${data.blogSubCategory?.slug}/${data.slug}`}
                                        onClick={() =>
                                          popularClickCount(data.id)
                                        }
                                        aria-label={data?.title}
                                        className="post-thumb"
                                      >
                                        <img
                                          // width={390}
                                          // height={200}
                                          className="attachment-jannah-image-large size-jannah-image-large lazy-img wp-post-image"
                                          alt={data?.image_alt}
                                          // decoding="async"
                                          src={`${apiUrl}/uploads/${data?.image}`}
                                          style={{
                                            width: "420px",
                                            height: "220px",
                                            // objectFit: "cover",
                                            borderRadius: "10px",
                                          }}
                                          // loading="lazy"
                                        />
                                      </Link>{" "}
                                    </div>
                                    <div className="slide-content">
                                      <div className="post-meta clearfix">
                                        <span className="date meta-item tie-icon">
                                          {new Date(
                                            data?.createdAt
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
                                            {data?.views}
                                          </span>
                                        </div>
                                      </div>
                                      <h2 className="post-title">
                                        <Link
                                          to={`/news/${data.blogCategory?.slug}/${data.blogSubCategory?.slug}/${data.slug}`}
                                          onClick={() =>
                                            popularClickCount(data.id)
                                          }
                                        >
                                          {data?.title}
                                        </Link>
                                      </h2>
                                      <div className="post-meta" />
                                    </div>
                                  </div>
                                );
                              })}
                            </Slider>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* New Launched Projects */}

                    {/* popular news */}
                    <div
                      id="tie-block_553"
                      className="mag-box wide-post-box top-news-box"
                      data-current={1}
                      style={{
                        // border: "2px solid black",
                        padding: "0px 14px",
                      }}
                    >
                      <div className="container-wrapper">
                        <div className="mag-box-title the-global-title">
                          <h3> Popular News </h3>
                        </div>
                        <div className="mag-box-container clearfix">
                          <ul className="posts-items posts-list-container">
                            {popularRecentNewsList?.map((data, index) => {
                              return (
                                <li
                                  key={index}
                                  className="post-item post-1806 post type-post status-publish format-standard has-post-thumbnail category-life-style category-travel tag-life-style tag-timeline tie-standard"
                                  style={{
                                    boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "8px",
                                    backgroundColor: "#fff",
                                    padding: "6px",
                                    marginBottom: "15px",
                                  }}
                                >
                                  <a
                                    aria-label="One man with courage makes a majority"
                                    href="../2018/10/27/after-all-is-said-and-done-more-is-done/index.html"
                                    className="post-thumb"
                                  >
                                    <div className="post-rating image-stars">
                                      {/* <div className="stars-rating-bg" /> */}
                                      <div
                                        className="stars-rating-active"
                                        data-rate-val="91.833333333333%"
                                        data-lazy-percent={1}
                                      >
                                        <div className="stars-rating-active-inner">
                                          {" "}
                                        </div>
                                      </div>
                                    </div>{" "}
                                    <span className="post-cat-wrap">
                                      <span className="post-cat tie-cat-6">
                                        {data?.blogCategory?.name}
                                      </span>
                                    </span>
                                    <img
                                      className="attachment-jannah-image-large size-jannah-image-large lazy-img wp-post-image"
                                      alt="Custom Alternative Text"
                                      decoding="async"
                                      src={`${apiUrl}/uploads/${data?.image}`}
                                      loading="lazy"
                                      style={{
                                        // objectFit: "cover",
                                        borderRadius: "10px",
                                        width: "420px",
                                        height: "220px",
                                      }}
                                    />
                                  </a>
                                  <div className="post-details">
                                    <div className="post-meta clearfix">
                                      <span className="author-meta single-author no-avatars">
                                        <span className="meta-item meta-author-wrapper meta-author-1">
                                          <span className="meta-author">
                                            <a
                                              href="#"
                                              className="author-name tie-icon"
                                              title="Realty Samachar"
                                            >
                                              Realty Samachar
                                            </a>
                                          </span>
                                        </span>
                                      </span>
                                      <span className="date meta-item tie-icon">
                                        {new Date(
                                          data?.createdAt
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
                                          {data?.views}
                                        </span>
                                      </div>
                                    </div>
                                    <h2 className="post-title">
                                      <Link
                                        to={`/news/${data.blogCategory?.slug}/${data.blogSubCategory?.slug}/${data.slug}`}
                                        onClick={() =>
                                          popularClickCount(data.id)
                                        }
                                      >
                                        {data?.title}
                                      </Link>
                                    </h2>
                                    <p className="post-excerpt">
                                      {data?.description
                                        ? data.description
                                            .replace(/<[^>]+>/g, "")
                                            .split(" ")
                                            .slice(0, 73)
                                            .join(" ") +
                                          (data.description.split(" ").length >
                                          73
                                            ? ""
                                            : "")
                                        : ""}
                                    </p>{" "}
                                    {/* <a
                                      className="more-link  new-btn-readmpore"
                                      href="../2018/10/27/after-all-is-said-and-done-more-is-done/index.html"
                                    >
                                      Read More »
                                    </a> */}
                                    <Link
                                      className="more-link  new-btn-readmpore"
                                      to={`/news/${data.blogCategory?.slug}/${data.blogSubCategory?.slug}/${data.slug}`}
                                      onClick={() => popularClickCount(data.id)}
                                    >
                                      Read More »
                                    </Link>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                          <div className="clearfix" />
                        </div>{" "}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "15px",
                          }}
                        >
                          <a
                            id="show-comments-section"
                            href="#"
                            className="button"
                            onClick={(e) => {
                              e.preventDefault();
                              handleLoadMore();
                            }}
                            data-text={
                              popularLoading ? "Loading..." : "View More"
                            }
                            style={{
                              fontSize: "15px",
                              padding: "8px 16px",
                              width: "150px",
                            }}
                          >
                            {popularLoading ? "Loading..." : "View More"}
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* popular news */}
                  </div>
                </div>
              </div>

              {/* <Footer /> */}
              <Link
                id="go-to-top"
                className="go-to-top-button"
                to="#go-to-tie-body"
              >
                {" "}
                <span className="tie-icon-angle-up" />{" "}
                <span className="screen-reader-text">Back to top button</span>
              </Link>
            </div>
          </div>
        </div>
        <div id="tie-popup-demos" style={{ display: "none" }}>
          <div id="panel-bottom-gradient" />{" "}
          <Link to="#" className="panel-btn-close">
            {" "}
            <span className="tie-icon-cross" aria-hidden="true" />{" "}
            <span className="screen-reader-text">Close</span>{" "}
          </Link>
          <div className="popup-content">
            <div className="container-wrapper">
              <div className="demo-panel-header">
                <h4 className="demos-panel-head brand-title">Jannah</h4>
                <p className="amazing-title">Amazing Installable Demos</p>
                <p className="theme-desc">
                  {" "}
                  Jannah is a Clean Responsive WordPress Newspaper, Magazine,
                  News and Blog theme. Packed with options that allow you to
                  completely customize your website to your needs.
                </p>
              </div>
              <ul className="demos-list">
                <li className="demodemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/demo"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/demo.jpg"
                      alt="Preview Image of Main Demo"
                    />{" "}
                    <span>Main Demo</span>{" "}
                  </Link>{" "}
                </li>
                <li className="techdemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/tech"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/tech.jpg"
                      alt="Preview Image of Tech"
                    />{" "}
                    <span>Tech</span>{" "}
                  </Link>{" "}
                </li>
                <li className="videos-2demo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/videos-2"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/videos-2.jpg"
                      alt="Preview Image of Videos 2"
                    />{" "}
                    <span>Videos 2</span>{" "}
                  </Link>{" "}
                </li>
                <li className="geodemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/geo"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/geo.jpg"
                      alt="Preview Image of Geo"
                    />{" "}
                    <span>Geo</span>{" "}
                  </Link>{" "}
                </li>
                <li className="salad-dashdemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/salad-dash"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/salad-dash.jpg"
                      alt="Preview Image of Salad Dash"
                    />{" "}
                    <span>Salad Dash</span>{" "}
                    <small className="demo-badge new">
                      new
                      <span className="inner-arrow" />
                    </small>{" "}
                  </Link>{" "}
                </li>
                <li className="fitnessdemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/fitness"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/fitness.jpg"
                      alt="Preview Image of Fitness"
                    />{" "}
                    <span>Fitness</span>{" "}
                    <small className="demo-badge new">
                      new
                      <span className="inner-arrow" />
                    </small>{" "}
                  </Link>{" "}
                </li>
                <li className="cryptocurrencydemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/cryptocurrency"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/cryptocurrency.jpg"
                      alt="Preview Image of Cryptocurrency"
                    />{" "}
                    <span>Cryptocurrency</span>{" "}
                  </Link>{" "}
                </li>
                <li className="gamesdemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/games"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/games.jpg"
                      alt="Preview Image of Games"
                    />{" "}
                    <span>Games</span>{" "}
                    <small className="demo-badge Hot">
                      Hot
                      <span className="inner-arrow" />
                    </small>{" "}
                  </Link>{" "}
                </li>
                <li className="foodsdemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/foods"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/foods.jpg"
                      alt="Preview Image of Recipes & Tips"
                    />{" "}
                    <span>Recipes &amp; Tips</span>{" "}
                  </Link>{" "}
                </li>
                <li className="creativedemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/creative"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/creative.jpg"
                      alt="Preview Image of Creative"
                    />{" "}
                    <span>Creative</span>{" "}
                    <small className="demo-badge Hot">
                      Hot
                      <span className="inner-arrow" />
                    </small>{" "}
                  </Link>{" "}
                </li>
                <li className="photographydemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/photography"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/photography.jpg"
                      alt="Preview Image of Photography"
                    />{" "}
                    <span>Photography</span>{" "}
                  </Link>{" "}
                </li>
                <li className="hotelsdemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/hotels"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/hotels.jpg"
                      alt="Preview Image of Hotels"
                    />{" "}
                    <span>Hotels</span>{" "}
                    <small className="demo-badge Hot">
                      Hot
                      <span className="inner-arrow" />
                    </small>{" "}
                  </Link>{" "}
                </li>
                <li className="housedemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/house"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/house.jpg"
                      alt="Preview Image of House"
                    />{" "}
                    <span>House</span>{" "}
                  </Link>{" "}
                </li>
                <li className="sportdemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/sport"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/sport.jpg"
                      alt="Preview Image of Sports"
                    />{" "}
                    <span>Sports</span>{" "}
                    <small className="demo-badge Hot">
                      Hot
                      <span className="inner-arrow" />
                    </small>{" "}
                  </Link>{" "}
                </li>
                <li className="traveldemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/travel"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/travel.jpg"
                      alt="Preview Image of Travel"
                    />{" "}
                    <span>Travel</span>{" "}
                  </Link>{" "}
                </li>
                <li className="autodemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/auto"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/auto.jpg"
                      alt="Preview Image of Auto"
                    />{" "}
                    <span>Auto</span>{" "}
                  </Link>{" "}
                </li>
                <li className="petsdemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/pets"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/pets.jpg"
                      alt="Preview Image of Pets"
                    />{" "}
                    <span>Pets</span>{" "}
                  </Link>{" "}
                </li>
                <li className="schooldemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/school"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/school.jpg"
                      alt="Preview Image of School"
                    />{" "}
                    <span>School</span>{" "}
                  </Link>{" "}
                </li>
                <li className="travelingdemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/traveling"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/traveling.jpg"
                      alt="Preview Image of Traveling"
                    />{" "}
                    <span>Traveling</span>{" "}
                  </Link>{" "}
                </li>
                <li className="sciencedemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/science"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/science.jpg"
                      alt="Preview Image of Science"
                    />{" "}
                    <span>Science</span>{" "}
                  </Link>{" "}
                </li>
                <li className="healthdemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/health"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/health.jpg"
                      alt="Preview Image of Health"
                    />{" "}
                    <span>Health</span>{" "}
                  </Link>{" "}
                </li>
                <li className="videosdemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/videos"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/videos.jpg"
                      alt="Preview Image of Videos"
                    />{" "}
                    <span>Videos</span>{" "}
                    <small className="demo-badge Hot">
                      Hot
                      <span className="inner-arrow" />
                    </small>{" "}
                  </Link>{" "}
                </li>
                <li className="timesdemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/times"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/times.jpg"
                      alt="Preview Image of Times"
                    />{" "}
                    <span>Times</span>{" "}
                    <small className="demo-badge Hot">
                      Hot
                      <span className="inner-arrow" />
                    </small>{" "}
                  </Link>{" "}
                </li>
                <li className="minimal-blogdemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/minimal-blog"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/minimal-blog.jpg"
                      alt="Preview Image of Minimal Blog"
                    />{" "}
                    <span>Minimal Blog</span>{" "}
                  </Link>{" "}
                </li>
                <li className="blogdemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/blog"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/blog.jpg"
                      alt="Preview Image of Personal Blog"
                    />{" "}
                    <span>Personal Blog</span>{" "}
                  </Link>{" "}
                </li>
                <li className="citydemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/city"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/city.jpg"
                      alt="Preview Image of City Magazine"
                    />{" "}
                    <span>City Magazine</span>{" "}
                  </Link>{" "}
                </li>
                <li className="seodemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/seo"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/seo.jpg"
                      alt="Preview Image of SEO"
                    />{" "}
                    <span>SEO</span>{" "}
                  </Link>{" "}
                </li>
                <li className="rtldemo-item">
                  {" "}
                  <Link
                    to="https://jannah.tielabs.com/rtl"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {" "}
                    <img
                      className="demo-lazy-img"
                      width={870}
                      height={731}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                      data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/rtl.jpg"
                      alt="Preview Image of RTL Demo"
                    />{" "}
                    <span>RTL Demo</span>{" "}
                  </Link>{" "}
                </li>
                <li className="demos-soondemo-item">
                  {" "}
                  <img
                    className="demo-lazy-img"
                    width={870}
                    height={731}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                    data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/demos-soon.jpg"
                    alt="Preview Image of Coming Soon"
                  />{" "}
                  <span>Coming Soon</span>{" "}
                </li>
                <li className="demos-soondemo-item">
                  {" "}
                  <img
                    className="demo-lazy-img"
                    width={870}
                    height={731}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCJljYAAAAAIAAfRxZKYAAAAASUVORK5CYII="
                    data-demosrc="//s3-us-west-2.amazonaws.com/tielabs/jannah/images/demos-screenshots/demos-soon.jpg"
                    alt="Preview Image of Coming Soon"
                  />{" "}
                  <span>Coming Soon</span>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          id="autocomplete-suggestions"
          className="autocomplete-suggestions"
        ></div>
        <div id="is-scroller-outer">
          <div id="is-scroller"></div>
        </div>
        <div id="fb-root"></div>
        {/* <div
          id="tie-popup-search-mobile"
          className="tie-popup tie-popup-search-wrap"
          style={{ display: "none" }}
        >
          {" "}
          <Link to="#" className="tie-btn-close remove big-btn light-btn">
            {" "}
            <span className="screen-reader-text">Close</span>{" "}
          </Link>
          <div className="popup-search-wrap-inner">
            <div
              className="live-search-parent pop-up-live-search"
              data-skin="live-search-popup"
              aria-label="Search"
            >
              <form
                method="get"
                className="tie-popup-search-form"
                action="https://jannah.tielabs.com/demo/"
              >
                {" "}
                <input
                  className="tie-popup-search-input is-ajax-search"
                  inputMode="search"
                  type="text"
                  name="s"
                  title="Search for"
                  autoComplete="off"
                  placeholder="Search for"
                />{" "}
                <button className="tie-popup-search-submit" type="submit">
                  {" "}
                  <span
                    className="tie-icon-search tie-search-icon"
                    aria-hidden="true"
                  />{" "}
                  <span className="screen-reader-text">Search for</span>{" "}
                </button>
              </form>
            </div>
          </div>
        </div> */}
        {isOpenModal && (
          <div
            id="tie-popup-login"
            className="tie-popup"
            style={{ display: "block", transition: "all 0.3s ease" }}
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

export default MainPage;
