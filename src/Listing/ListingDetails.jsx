import React, { Fragment, useEffect, useRef, useState } from "react";
import Header from "../MainPage/Header";

import Footer from "../MainPage/Footer";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { NewsList } from "../apis/axios";
import DOMPurify from "dompurify";
//import ShadowRoot from "react-shadow";
// import ShadowRoot from "./ShadowRoot";
// import ShadowRootEditor from "./ShadowRoot";
import ShadowWraper from "./ShadowRoot";
import { Helmet } from "react-helmet-async";
import PageNotFound from "../404/PageNotFound";
import Loader from "../ProgressLoader/Loader";

const ListingDetails = () => {
  const [activeTab, setActiveTab] = useState("popular");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const { slug } = useParams();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [categoryBasedNewsList, setCategoryBasednewsList] = useState();
  const [popularCategoryRecentNewsList, setPopularCategoryRecentNewsList] =
    useState([]);
  const [detailLimit, setDetailLimit] = useState(0);
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchNewsLoading, setSearchNewsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [popularRecentNewsList, setPopularRecentNewsList] = useState([]);
  const [categoryPopularLoading, setCategoryPopularLoading] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();
  const articleRefs = useRef({});

  console.log("articleRefs..", articleRefs);

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
    window.scrollTo(0, 0);
  }, []);

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

  console.log("categoryBasedNewDetailsssss....", categoryBasedNewsList);

  const newsListDetailsData = async () => {
    if (categoryLoading) return;

    setCategoryLoading(true);
    try {
      const response = await fetch(`${apiUrl}/blog/getBlogDetail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug: slug, page: 1, limit: detailLimit }),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.message || "Failed to fetch blog details");
      }

      console.log("newslist details....", resData);
      setCategoryBasednewsList(resData?.data);
    } catch (error) {
      console.error(error.message || "Something went wrong");
    } finally {
      setCategoryLoading(false);
    }
  };

  const handleTagClick = async (tag) => {
    setSearchNewsLoading(true);

    try {
      const response = await NewsList.getTagList(tag);
      const data = response?.data?.data;

      if (data && data.length > 0) {
        setSearchResults(data);
        navigate("/tag-list", { state: { results: data, query: tag } });
        // setShowSearch(false);
      } else {
        setSearchResults([]);
        setNoResults(true);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setSearchNewsLoading(false);
    }
  };

  const handleLoadMore = () => {
    setDetailLimit((prevLimit) => prevLimit + 1);
  };

  useEffect(() => {
    if (!categoryBasedNewsList || categoryBasedNewsList.length === 0) return;

    const posts = document.querySelectorAll("article[id^='the-post-']");
    if (posts.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Consider all entries, not only intersecting ones
        const sorted = entries
          .map((entry) => ({
            entry,
            distanceFromTop: Math.abs(entry.boundingClientRect.top),
          }))
          .sort((a, b) => a.distanceFromTop - b.distanceFromTop);

        const topEntry = sorted[0].entry; // Post closest to top

        const slug = topEntry.target.getAttribute("data-slug");
        const sectionId = topEntry.target.getAttribute("id");

        const parts = location.pathname.split("/").filter(Boolean);
        if (parts.length < 3) return;
        const basePath = `/${parts[0]}/${parts[1]}/${parts[2]}`;

        const newPath = `${basePath}/${slug || sectionId}`;

        if (location.pathname !== newPath) {
          window.history.replaceState(null, "", newPath);
          console.log("Updated URL:", newPath);
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    posts.forEach((post) => observer.observe(post));

    return () => observer.disconnect();
  }, [categoryBasedNewsList]);

  const getCategoryPopularRecenNewstList = async (name, slug) => {
    setCategoryPopularLoading(true);

    try {
      const response = await NewsList.getCategoryPopularRecentList(name, slug);

      const data = response?.data?.data;
      const totalCount = response?.data?.totalCount;

      console.log("data from response of category most.", data);

      if (data && data.length > 0) {
        setPopularCategoryRecentNewsList(data);
        // setPopularTotalCount(totalCount);
      }
    } catch (error) {
      console.error("Error fetching category popular recent list:", error);
    } finally {
      setCategoryPopularLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      newsListDetailsData();
    }
  }, [slug, detailLimit]);

  useEffect(() => {
    if (slug && categoryBasedNewsList?.length > 0) {
      getCategoryPopularRecenNewstList(
        "category",
        categoryBasedNewsList[0]?.blogCategory?.slug
      );
    }
  }, [slug, categoryBasedNewsList]);

  function getYouTubeEmbedUrl(url) {
    if (!url) return "";
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // if (categoryLoading) {
  //   return <Loader />;
  // }

  if (!categoryBasedNewsList) {
    return <Loader />;
  }

  if (!categoryBasedNewsList || categoryBasedNewsList.length === 0) {
    return <PageNotFound />;
  }

  return (
    <Fragment>
      {categoryBasedNewsList?.length > 0 && (
        <Helmet>
          {/* SEO Tags */}
          <title>
            {categoryBasedNewsList[0].newsMetaTitle || "default title"}
          </title>
          <meta
            name="description"
            content={
              categoryBasedNewsList[0].newsMetaDescription || "newsData.summary"
            }
          />
          <meta
            name="keywords"
            content={categoryBasedNewsList[0].newsKeywords}
          />

          {/* Open Graph (for social media sharing) */}
          <meta
            property="og:title"
            content={
              `${categoryBasedNewsList[0].newsMetaTitle} 1` || "default title"
            }
          />
          <meta
            property="og:description"
            content={
              `${categoryBasedNewsList[0].newsMetaDescription} 1` ||
              "newsData.summary"
            }
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:image"
            content={
              `${apiUrl}/uploads/${categoryBasedNewsList[0].image}` ||
              "default-image.jpg"
            }
          />
          <meta property="og:url" content={window.location.href} />

          {/* Twitter Cards */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content={
              `${categoryBasedNewsList[0].newsMetaTitle} 1` || "default title"
            }
          />
          <meta
            name="twitter:description"
            content={
              `${categoryBasedNewsList[0].newsMetaDescription} 1` ||
              "newsData.summary"
            }
          />
          <meta
            name="twitter:image"
            content={
              `${apiUrl}/uploads/${categoryBasedNewsList[0].image}` ||
              "default-image.jpg"
            }
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
        style={{ minHeight: "0", background: "#e2dada" }}
        className="bp-nouveau wp-singular post-template-default single single-post postid-1868 single-format-standard wp-theme-jannah theme-jannah tie-no-js woocommerce-no-js wrapper-has-shadow block-head-1 magazine2 is-lazyload is-thumb-overlay-disabled is-desktop is-header-layout-3 has-header-ad one-column-no-sidebar post-layout-1 narrow-title-narrow-media is-standard-format has-mobile-share post-has-toggle hide_breaking_news is-ajax-parent-post"
      >
        <div className="background-overlay">
          <div id="tie-container" className="container">
            <div id="tie-wrapper-new">
              <Header
                tieSkin="dark"
                openPopup={openPopup}
                openSideBar={openSideBar}
              />
              <div id="content" className="site-content container">
                <div
                  id="main-content-row"
                  className="tie-row main-content-row"
                  style={{ background: "white" }}
                >
                  <div
                    className="main-content tie-col-md-8 tie-col-xs-12"
                    role="main"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      // border: "2px solid black",
                      minWidth: "100%",
                      minHeight: "100%",
                    }}
                  >
                    {categoryBasedNewsList?.map((data) => {
                      return (
                        <article
                          key={data?.id}
                          data-slug={data.slug}
                          data-category={data.blogCategory?.slug}
                          data-subcategory={data.blogSubCategory?.slug}
                          id={`the-post-${data?.id}`}
                          style={{
                            borderWidth: "0",
                            padding: "24px",
                            backgroundColor: "white",
                            // borderRadius: "10px",
                            // border: "2px solid black",
                            minWidth: "50%",
                            marginBottom: "20px",
                            minHeight: "100%",
                          }}
                          className="container-wrapper post-content tie-standard tie-autoloaded-post"
                          data-post-url="https://jannah.tielabs.com/demo/2016/10/01/battlefield-1-officially-announced-watch-the-trailer-here/"
                          data-post-title="Battlefield 1 Officially Announced Watch the Trailer Here"
                          data-post-edit="https://jannah.tielabs.com/demo/wp-admin/post.php?post=1868&action=edit"
                          data-share-title="Battlefield%201%20Officially%20Announced%20Watch%20the%20Trailer%20Here"
                          data-share-link="https://jannah.tielabs.com/demo/2016/10/01/battlefield-1-officially-announced-watch-the-trailer-here/"
                          data-share-image="https://jannah.tielabs.com/demo/wp-content/uploads/sites/8/2016/10/image13.jpg"
                        >
                          <header className="entry-header-outer">
                            <nav id="breadcrumb">
                              <a href="/">
                                <span
                                  className="tie-icon-home"
                                  aria-hidden="true"
                                />{" "}
                                Home
                              </a>
                              <em className="delimiter">/</em>
                              <Link
                                to={`/${data?.blogCategory.slug}`}
                                state={{ name: "category" }}
                                // className="post-cat tie-cat-6"
                              >
                                {data?.blogCategory?.name}
                              </Link>
                              <em className="delimiter">/</em>
                              <Link
                                to={`/${data?.blogSubCategory.slug}`}
                                state={{ name: "subcategory" }}
                                // className="post-cat tie-cat-6"
                              >
                                {data?.blogSubCategory?.name}
                              </Link>
                              <em className="delimiter">/</em>
                              <span className="current">{data?.title}</span>
                            </nav>
                            <div className="entry-header">
                              {" "}
                              <span className="post-cat-wrap">
                                <Link
                                  to={`/${data?.blogSubCategory.slug}`}
                                  state={{ name: "subcategory" }}
                                  className="post-cat tie-cat-6"
                                >
                                  {data?.blogSubCategory?.name}
                                </Link>
                              </span>
                              {
                                <h1
                                  className="new-entry-header new-entry-title"
                                  style={{
                                    fontSize: "30px",
                                    fontWeight: "500",
                                  }}
                                >
                                  {" "}
                                  {data?.title}{" "}
                                </h1>
                              }
                              <h2
                                className="entry-sub-title"
                                style={{ marginTop: "10px" }}
                              >
                                {data?.shortDescription}
                              </h2>
                              <div className="single-post-meta post-meta clearfix">
                                <span className="author-meta single-author with-avatars">
                                  <span className="meta-item meta-author-wrapper meta-author-18">
                                    {" "}
                                    <span
                                      className="meta-author-avatar"
                                      style={{
                                        height: "100px",
                                        width: "100px",
                                      }}
                                    >
                                      {" "}
                                      <a href="/members/ashraf/index.html">
                                        <img
                                          alt=""
                                          src="https://bb.webkype.net/assets/images/logo/images.png"
                                          data-src="https://bb.webkype.net/assets/images/logo/images.png"
                                          // className="lazy-img avatar avatar-140 photo"
                                          height={540}
                                          width={540}
                                          loading="lazy"
                                        />
                                      </a>{" "}
                                    </span>{" "}
                                    <span className="meta-author">
                                      <a
                                        href="#"
                                        className="author-name tie-icon"
                                        title="Realty Samachar"
                                      >
                                        Bhumi Bajar
                                      </a>
                                    </span>{" "}
                                    {/* <a
                                  href="http://twitter.com/tielabs"
                                  className="author-twitter-link"
                                  target="_blank"
                                  rel="nofollow noopener"
                                  title="Follow on X"
                                >
                                  {" "}
                                  <span
                                    className="tie-icon-twitter"
                                    aria-hidden="true"
                                  />{" "}
                                  <span className="screen-reader-text">
                                    Follow on X
                                  </span>{" "}
                                </a>{" "}
                                <a
                                  href="mailto:ashraf@tielabs.com"
                                  className="author-email-link"
                                  target="_blank"
                                  rel="nofollow noopener"
                                  title="Send an email"
                                >
                                  <span
                                    className="tie-icon-envelope"
                                    aria-hidden="true"
                                  />{" "}
                                  <span className="screen-reader-text">
                                    Send an email
                                  </span>{" "}
                                </a> */}
                                  </span>
                                </span>
                                <span className="date meta-item tie-icon">
                                  {new Date(data?.createdAt).toLocaleDateString(
                                    "en-US",
                                    {
                                      weekday: "long",
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    }
                                  )}
                                </span>
                                {/* <span className="meta-item last-updated">
                              Last Updated:{" "}
                              {new Date(
                                data?.createdAt
                              ).toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span> */}
                                <div className="tie-alignright">
                                  {/* <span className="meta-comment tie-icon meta-item fa-before">
                                0
                              </span> */}
                                  <span className="meta-views meta-item very-hot">
                                    <i
                                      className="fa-solid fa-eye"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    {data?.views}
                                  </span>
                                  <span className="meta-reading-time meta-item">
                                    <span
                                      className="tie-icon-bookmark"
                                      aria-hidden="true"
                                    />{" "}
                                    6 minutes
                                  </span>{" "}
                                </div>
                              </div>
                            </div>
                          </header>
                          <div
                            id="share-buttons-top"
                            className="share-buttons share-buttons-top"
                          >
                            <div
                              className="share-links share-centered"
                              style={{
                                // border: "2px solid black",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              {" "}
                              <a
                                href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(
                                  `${import.meta.env.VITE_ROOT_URL}/news/${data.blogCategory?.slug}/${data.blogSubCategory?.slug}/${data.slug}`
                                )}`}
                                rel="external noopener nofollow"
                                title={data.title}
                                target="_blank"
                                className="facebook-share-btn"
                                data-raw={`https://www.facebook.com/sharer.php?u=${import.meta.env.VITE_ROOT_URL}/news/${data.blogCategory?.slug}/${data.blogSubCategory?.slug}/${data.slug}`}
                              >
                                <span className="share-btn-icon tie-icon-facebook" />
                                <span className="social-text">Facebook</span>
                              </a>
                              <a
                                href={`https://x.com/intent/post?text=${encodeURIComponent(
                                  data.title
                                )}&url=${import.meta.env.VITE_ROOT_URL}/news/${
                                  data.blogCategory?.slug
                                }/${data.blogSubCategory?.slug}/${data.slug}`}
                                rel="external noopener nofollow"
                                title={data.title}
                                target="_blank"
                                className="twitter-share-btn large-share-button"
                                data-raw={`https://x.com/intent/post?text=${encodeURIComponent(
                                  data.title
                                )}&url=${import.meta.env.VITE_ROOT_URL}/news/${
                                  data.blogCategory?.slug
                                }/${data.blogSubCategory?.slug}/${data.slug}`}
                              >
                                <span className="share-btn-icon tie-icon-twitter" />
                              </a>
                              <a
                                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                                  `${import.meta.env.VITE_ROOT_URL}/news/${data.blogCategory?.slug}/${data.blogSubCategory?.slug}/${data.slug}`
                                )}&title=${encodeURIComponent(
                                  data.title
                                )}&source=${encodeURIComponent(
                                  "Bhumi Bazar"
                                )}`}
                                rel="external noopener nofollow"
                                title={data.title}
                                target="_blank"
                                className="linkedin-share-btn"
                                data-raw={`https://www.linkedin.com/shareArticle?mini=true&url=${import.meta.env.VITE_ROOT_URL}/news/${
                                  data.blogCategory?.slug
                                }/${data.blogSubCategory?.slug}/${
                                  data.slug
                                }&title=${encodeURIComponent(data.title)}`}
                              >
                                <span className="share-btn-icon tie-icon-linkedin" />
                                <span className="share-btn-text">
                                  {/* {data.title} */}
                                </span>
                              </a>
                              <a
                                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                                  `${data.title} - ${import.meta.env.VITE_ROOT_URL}/news/${data.blogCategory?.slug}/${data.blogSubCategory?.slug}/${data.slug}`
                                )}`}
                                rel="external noopener nofollow"
                                title="Share on WhatsApp"
                                target="_blank"
                                className="whatsapp-share-btn"
                              >
                                <span className="share-btn-icon fa-brands fa-whatsapp" />
                                {/* <span className="share-btn-text">WhatsApp</span> */}
                              </a>
                            </div>
                          </div>
                          <div className="featured-area">
                            {data?.blogSubCategory?.name === "Youtube" ? (
                              <div
                                className="featured-area-inner"
                                style={{ margin: "20px 0px " }}
                              >
                                <div className="tie-full-width-img">
                                  <iframe
                                    width="100%"
                                    height="402"
                                    src={getYouTubeEmbedUrl(data?.youtubeLink)}
                                    title="YouTube video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  ></iframe>
                                </div>
                              </div>
                            ) : data?.isVideo === 1 ? (
                              <div className="">
                                <div className="">
                                  <video
                                    controls
                                    style={{ width: "100%" }}
                                    // height={402}
                                  >
                                    <source
                                      src={`${apiUrl}/uploads/${data?.video}`}
                                      type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                  </video>
                                </div>
                              </div>
                            ) : (
                              <div className="featured-area-inner">
                                <figure className="single-featured-image">
                                  <a
                                    href={data?.image_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    // style={{ border: "2px solid black" }}
                                  >
                                    <img
                                      width={1200}
                                      height={100}
                                      src={`${apiUrl}/uploads/${data?.image}`}
                                      className="attachment-full size-full wp-post-image"
                                      alt={data?.image_alt}
                                      data-main-img={1}
                                      decoding="async"
                                      fetchPriority="high"
                                      srcSet={`${apiUrl}/uploads/${data?.image}`}
                                      // sizes="(max-width: 1200px) 100vw, 1200px"
                                    />
                                  </a>
                                </figure>
                              </div>
                            )}
                          </div>

                          <div
                            className="clearfix"
                            style={{ fontSize: "14px" }}
                          >
                            <ShadowWraper htmlContent={data?.description} />
                            {data?.isVideo === 1 ? (
                              <div
                                className="featured-area-inner"
                                style={{ margin: "20px 0px " }}
                              >
                                <figure className="single-featured-image">
                                  <a
                                    href={data?.image_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <img
                                      width={1200}
                                      height={800}
                                      src={`${apiUrl}/uploads/${data?.image}`}
                                      className="attachment-full size-full wp-post-image"
                                      alt={data?.image_alt}
                                      data-main-img={1}
                                      decoding="async"
                                      fetchPriority="high"
                                      srcSet={`${apiUrl}/uploads/${data?.image}`}
                                      sizes="(max-width: 1200px) 100vw, 1200px"
                                    />
                                  </a>
                                </figure>
                              </div>
                            ) : (
                              <>
                                {data?.video && (
                                  <div
                                    className="tie-full-width-img"
                                    style={{ margin: "20px 0px " }}
                                  >
                                    <video
                                      controls
                                      style={{ width: "100%" }}
                                      // height={402}
                                      // poster={`${apiUrl}/uploads/poster-image.jpg`}
                                    >
                                      <source
                                        src={`${apiUrl}/uploads/${data?.video}`}
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video
                                      tag.
                                    </video>
                                  </div>
                                )}
                              </>
                            )}
                            <ShadowWraper htmlContent={data?.description1} />
                          </div>
                          <div id="post-extra-info"></div>
                          <div className="clear " />
                          {popularCategoryRecentNewsList && (
                            <strong style={{ marginRight: "5px" }}>
                              Most Read in{" "}
                              {
                                popularCategoryRecentNewsList[0]?.blogCategory
                                  ?.name
                              }
                              :
                            </strong>
                          )}
                          <div
                            className="compact-comments"
                            style={{
                              marginBottom: "15px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              flexWrap: "wrap",
                              gap: "8px",
                              marginTop: "10px",
                              alignItems: "flex-start",
                            }}
                          >
                            {popularCategoryRecentNewsList?.length > 0 ? (
                              popularCategoryRecentNewsList
                                .slice(0, 5)
                                .map((data, index) => (
                                  <span
                                    key={index}
                                    onClick={() =>
                                      window.open(
                                        `/news/${data?.blogCategory?.slug}/${data?.blogSubCategory?.slug}/${data?.slug}`,
                                        "_blank"
                                      )
                                    }
                                    style={{
                                      background: "#f0f0f0",
                                      padding: "4px 10px",
                                      borderRadius: "15px",
                                      fontSize: "13px",
                                      color: "#333",
                                      cursor: "pointer",
                                      textDecoration: "underline", // 👈 Added underline
                                    }}
                                  >
                                    {data?.title}
                                  </span>
                                ))
                            ) : (
                              <span>No news available</span>
                            )}
                          </div>

                          <div
                            className="compact-comments"
                            style={{
                              marginBottom: "15px",
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "8px",
                              alignItems: "center",
                            }}
                          >
                            <strong style={{ marginRight: "5px" }}>
                              Tags:
                            </strong>
                            {data?.tag?.length > 0 ? (
                              data.tag.map((tag, index) => (
                                <span
                                  key={index}
                                  onClick={() => handleTagClick(tag)}
                                  style={{
                                    background: "#f0f0f0",
                                    padding: "4px 10px",
                                    borderRadius: "15px",
                                    fontSize: "13px",
                                    color: "#333",
                                    cursor: "pointer",
                                  }}
                                >
                                  {tag}
                                </span>
                              ))
                            ) : (
                              <span>No tags available</span>
                            )}
                          </div>
                        </article>
                      );
                    })}

                    <div
                      className="compact-comments"
                      style={{ marginBottom: "15px" }}
                    >
                      {" "}
                      <a
                        id="show-comments-section"
                        href="#"
                        className="button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLoadMore();
                        }}
                        data-text={categoryLoading ? "Loading..." : "View More"}
                      >
                        {categoryLoading ? "Loading..." : "View More"}
                      </a>
                    </div>

                    <div className="post-components">
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n\t\t\t\t\t\t\t\t\t#comments {\n\t\t\t\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t/* .post-widget-body {\n    padding-left: 125px;\n} */\n\t\t\t\t\t\t\t\t",
                        }}
                      />
                      <div id="comments" className="comments-area">
                        <div
                          id="add-comment-block"
                          className="container-wrapper"
                        >
                          <div id="respond" className="comment-respond">
                            <h3
                              id="reply-title"
                              className="comment-reply-title the-global-title"
                            >
                              Leave a Reply{" "}
                              <small>
                                <a
                                  rel="nofollow"
                                  id="cancel-comment-reply-link"
                                  href="#respond"
                                  style={{ display: "none" }}
                                >
                                  Cancel reply
                                </a>
                              </small>
                            </h3>
                            <form
                              action="https://jannah.tielabs.com/demo/wp-comments-post.php"
                              method="post"
                              id="commentform"
                              className="comment-form"
                              noValidate=""
                            >
                              <p className="comment-notes">
                                <span id="email-notes">
                                  Your email address will not be published.
                                </span>{" "}
                                <span className="required-field-message">
                                  Required fields are marked{" "}
                                  <span className="required">*</span>
                                </span>
                              </p>
                              <p className="comment-form-comment">
                                <label htmlFor="comment">
                                  Comment <span className="required">*</span>
                                </label>{" "}
                                <textarea
                                  id="comment"
                                  name="comment"
                                  cols={45}
                                  rows={8}
                                  maxLength={65525}
                                  required=""
                                  defaultValue={""}
                                />
                              </p>
                              <p className="comment-form-author">
                                <label htmlFor="author">
                                  Name <span className="required">*</span>
                                </label>{" "}
                                <input
                                  id="author"
                                  name="author"
                                  type="text"
                                  defaultValue=""
                                  size={30}
                                  maxLength={245}
                                  autoComplete="name"
                                  required=""
                                />
                              </p>
                              <p className="comment-form-email">
                                <label htmlFor="email">
                                  Email <span className="required">*</span>
                                </label>{" "}
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  defaultValue=""
                                  size={30}
                                  maxLength={100}
                                  aria-describedby="email-notes"
                                  autoComplete="email"
                                  required=""
                                />
                              </p>
                              <p className="comment-form-url">
                                <label htmlFor="url">Website</label>{" "}
                                <input
                                  id="url"
                                  name="url"
                                  type="url"
                                  defaultValue=""
                                  size={30}
                                  maxLength={200}
                                  autoComplete="url"
                                />
                              </p>
                              <p className="form-submit">
                                <input
                                  name="submit"
                                  type="submit"
                                  id="submit"
                                  className="submit"
                                  defaultValue="Post Comment"
                                />{" "}
                                <input
                                  type="hidden"
                                  name="comment_post_ID"
                                  defaultValue={1868}
                                  id="comment_post_ID"
                                />
                                <input
                                  type="hidden"
                                  name="comment_parent"
                                  id="comment_parent"
                                  defaultValue={0}
                                />{" "}
                              </p>
                              <p style={{ display: "none" }}>
                                <input
                                  type="hidden"
                                  id="akismet_comment_nonce"
                                  name="akismet_comment_nonce"
                                  defaultValue="94e8ca7f57"
                                />
                              </p>
                              <p
                                style={{ display: "none !important" }}
                                className="akismet-fields-container"
                                data-prefix="ak_"
                              >
                                <label>
                                  Δ
                                  <textarea
                                    name="ak_hp_textarea"
                                    cols={45}
                                    rows={8}
                                    maxLength={100}
                                    defaultValue={""}
                                  />
                                </label>
                                <input
                                  type="hidden"
                                  id="ak_js_1"
                                  name="ak_js"
                                  defaultValue={72}
                                />
                              </p>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="check-also-box"
                    className="container-wrapper check-also-right"
                  >
                    <div className="widget-title the-global-title">
                      <div className="the-subtitle">Check Also</div>{" "}
                      <a href="#" id="check-also-close" className="remove">
                        {" "}
                        <span className="screen-reader-text">Close</span>{" "}
                      </a>
                    </div>
                    <div className="widget posts-list-big-first has-first-big-post">
                      <ul className="posts-list-items">
                        <li className="widget-single-post-item widget-post-list is-trending tie-standard">
                          <div className="post-widget-thumbnail">
                            {" "}
                            <a
                              aria-label="25 Tricks That Will Increase Your Productivity"
                              href="../../12/25-office-design-tricks-that-will-increase-your-productivity-at-work/index.html"
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
                                    />
                                    <circle
                                      r={19}
                                      cx={20}
                                      cy={20}
                                      fill="transparent"
                                      strokeDasharray="119.38"
                                      strokeDashoffset={0}
                                      className="circle_bar"
                                    />
                                  </svg>{" "}
                                </div>
                              </div>{" "}
                              <span className="post-cat-wrap">
                                <span className="post-cat tie-cat-64">
                                  Technology
                                </span>
                              </span>
                              <img
                                width={390}
                                height={220}
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYYAAADcAQMAAABOLJSDAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACJJREFUaIHtwTEBAAAAwqD1T20ND6AAAAAAAAAAAAAA4N8AKvgAAUFIrrEAAAAASUVORK5CYII="
                                className="attachment-jannah-image-large size-jannah-image-large lazy-img wp-post-image"
                                alt=""
                                decoding="async"
                                loading="lazy"
                                data-src="/images/ben-white-148435-390x220.jpg"
                              />
                            </a>{" "}
                          </div>
                          <div className="post-widget-body ">
                            {" "}
                            <a
                              className="post-title the-subtitle"
                              href="../../12/25-office-design-tricks-that-will-increase-your-productivity-at-work/index.html"
                            >
                              25 Tricks That Will Increase Your Productivity
                            </a>
                            <div className="post-meta">
                              {" "}
                              <span className="date meta-item tie-icon">
                                Oct 12, 2016
                              </span>{" "}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div id="tie-infinte-posts-iframes-wrapper">
                  <div id="tie-infinte-posts-iframes"> </div>
                  <div id="tie-infinte-posts-loading">
                    <div className="loader-overlay">
                      <div className="spinner-circle" />
                    </div>
                  </div>
                </div> */}
              </div>
              {/* <Footer/> */}
              {/* <div
                id="share-buttons-sticky"
                className="share-buttons share-buttons-sticky"
                style={{ border: "2px solid black", marginTop: "0px" }}
              >
                <div className="share-links share-left icons-only">
                  {" "}
                  <a
                    href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(
                      "https://www.realtysamachar.com"
                    )}`}
                    rel="external noopener nofollow"
                    // title={categoryBasedNewsList[0].title}
                    target="_blank"
                    className="facebook-share-btn large-share-button"
                    data-raw={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(
                      "https://www.realtysamachar.com"
                    )}`}
                  >
                    <span className="share-btn-icon tie-icon-facebook" />{" "}
                    <span className="screen-reader-text">Facebook</span>{" "}
                  </a>{" "}
                  <a
                    href={`https://x.com/intent/post?text=${
                      encodeURIComponent()
                      // data.title
                    }&url=${encodeURIComponent(
                      "https://www.realtysamachar.com"
                    )}`}
                    rel="external noopener nofollow"
                    // title={categoryBasedNewsList[0].title}
                    target="_blank"
                    className="twitter-share-btn large-share-button"
                    data-raw={`https://x.com/intent/post?text=${
                      encodeURIComponent()
                      // categoryBasedNewsList[0].title
                    }&url=https://www.realtysamachar.com`}
                  >
                    <span className="share-btn-icon tie-icon-twitter" />{" "}
                    <span className="screen-reader-text">X</span>{" "}
                  </a>{" "}
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                      "https://www.realtysamachar.com"
                    )}&title=${
                      encodeURIComponent()
                      // categoryBasedNewsList[0].title
                    }`}
                    rel="external noopener nofollow"
                    // title={categoryBasedNewsList[0].title}
                    target="_blank"
                    className="linkedin-share-btn"
                    data-raw={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.realtysamachar.com&title=${
                      encodeURIComponent()
                      // categoryBasedNewsList[0].title
                    }`}
                  >
                    <span className="share-btn-icon tie-icon-linkedin" />{" "}
                    <span className="screen-reader-text">LinkedIn</span>{" "}
                  </a>{" "}
                  <a
                    href="http://vk.com/share.php?url=https://jannah.tielabs.com/demo/2016/10/01/battlefield-1-officially-announced-watch-the-trailer-here/"
                    rel="external noopener nofollow"
                    title="VKontakte"
                    target="_blank"
                    className="vk-share-btn "
                    data-raw="https://vk.com/share.php?url={post_link}"
                  >
                    {" "}
                    <span className="share-btn-icon tie-icon-vk" />{" "}
                    <span className="screen-reader-text">VKontakte</span>{" "}
                  </a>{" "}
                  <a
                    href="http://getpocket.com/save?title=Battlefield%201%20Officially%20Announced%20Watch%20the%20Trailer%20Here&url=https://jannah.tielabs.com/demo/2016/10/01/battlefield-1-officially-announced-watch-the-trailer-here/"
                    rel="external noopener nofollow"
                    title="Pocket"
                    target="_blank"
                    className="pocket-share-btn "
                    data-raw="https://getpocket.com/save?title={post_title}&url={post_link}"
                  >
                    {" "}
                    <span className="share-btn-icon tie-icon-get-pocket" />{" "}
                    <span className="screen-reader-text">Pocket</span>{" "}
                  </a>{" "}
                  <a
                    href="fb-messenger_/share/indexea3c.html?app_id=5303202981&display=popup&link=https://jannah.tielabs.com/demo/2016/10/01/battlefield-1-officially-announced-watch-the-trailer-here/&redirect_uri=https://jannah.tielabs.com/demo/2016/10/01/battlefield-1-officially-announced-watch-the-trailer-here/"
                    rel="external noopener nofollow"
                    title="Messenger"
                    target="_blank"
                    className="messenger-mob-share-btn messenger-share-btn "
                    data-raw="fb-messenger://share?app_id=5303202981&display=popup&link={post_link}&redirect_uri={post_link}"
                  >
                    <span className="share-btn-icon tie-icon-messenger" />{" "}
                    <span className="screen-reader-text">Messenger</span>{" "}
                  </a>{" "}
                  <a
                    href="http://www.facebook.com/dialog/send?app_id=5303202981&display=popup&link=https://jannah.tielabs.com/demo/2016/10/01/battlefield-1-officially-announced-watch-the-trailer-here/&redirect_uri=https://jannah.tielabs.com/demo/2016/10/01/battlefield-1-officially-announced-watch-the-trailer-here/"
                    rel="external noopener nofollow"
                    title="Messenger"
                    target="_blank"
                    className="messenger-desktop-share-btn messenger-share-btn "
                    data-raw="https://www.facebook.com/dialog/send?app_id=5303202981&display=popup&link={post_link}&redirect_uri={post_link}"
                  >
                    <span className="share-btn-icon tie-icon-messenger" />{" "}
                    <span className="screen-reader-text">Messenger</span>{" "}
                  </a>{" "}
                </div>
              </div> */}
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
                  <a
                    href="#"
                    className="close-side-aside remove big-btn"
                    onClick={closeSideBar}
                  >
                    {" "}
                    <span className="screen-reader-text">Close</span>{" "}
                  </a>
                  <div id="mobile-container">
                    <div id="mobile-menu"> </div>
                    <div
                      id="mobile-social-icons"
                      className="social-icons-widget solid-social-icons"
                    >
                      <ul>
                        <li className="social-icons-item">
                          <a
                            className="social-link facebook-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            href="#"
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
                            href="#"
                          >
                            <span className="tie-social-icon tie-icon-twitter" />
                            <span className="screen-reader-text">X</span>
                          </a>
                        </li>
                        <li className="social-icons-item">
                          <a
                            className="social-link dribbble-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            href="#"
                          >
                            <span className="tie-social-icon tie-icon-dribbble" />
                            <span className="screen-reader-text">Dribbble</span>
                          </a>
                        </li>
                        <li className="social-icons-item">
                          <a
                            className="social-link soundcloud-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            href="http://soundcloud.com/"
                          >
                            <span className="tie-social-icon tie-icon-soundcloud" />
                            <span className="screen-reader-text">
                              SoundCloud
                            </span>
                          </a>
                        </li>
                        <li className="social-icons-item">
                          <a
                            className="social-link instagram-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            href="#"
                          >
                            <span className="tie-social-icon tie-icon-instagram" />
                            <span className="screen-reader-text">
                              Instagram
                            </span>
                          </a>
                        </li>
                        <li className="social-icons-item">
                          <a
                            className="social-link tiktok-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            href="http://www.tiktok.com/en/"
                          >
                            <span className="tie-social-icon tie-icon-tiktok" />
                            <span className="screen-reader-text">TikTok</span>
                          </a>
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
                                <a
                                  aria-label="One man with courage makes a majority"
                                  href="../2018/10/27/after-all-is-said-and-done-more-is-done/index.html"
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
                                </a>
                              </div>
                              <div className="post-widget-body ">
                                {" "}
                                <a
                                  className="post-title the-subtitle"
                                  href="../2018/10/27/after-all-is-said-and-done-more-is-done/index.html"
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
                                <a
                                  aria-label="Success is not a good teacher failure makes you humble"
                                  href="../2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html"
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
                                </a>
                              </div>
                              <div className="post-widget-body ">
                                {" "}
                                <a
                                  className="post-title the-subtitle"
                                  href="../2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html"
                                >
                                  Success is not a good teacher failure makes
                                  you humble
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
                                  aria-label="Budget issues force the Tour to be cancelled"
                                  href="../2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html"
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
                                </a>
                              </div>
                              <div className="post-widget-body ">
                                {" "}
                                <a
                                  className="post-title the-subtitle"
                                  href="../2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html"
                                >
                                  Budget issues force the Tour to be cancelled
                                </a>
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
                                <a
                                  aria-label="Instagram’s big redesign goes live with black-and-white app"
                                  href="../2016/10/21/instagrams-big-redesign-goes-live-with-black-and-white-app/index.html"
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
                                </a>
                              </div>
                              <div className="post-widget-body ">
                                {" "}
                                <a
                                  className="post-title the-subtitle"
                                  href="../2016/10/21/instagrams-big-redesign-goes-live-with-black-and-white-app/index.html"
                                >
                                  Instagram’s big redesign goes live with
                                  black-and-white app
                                </a>
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
                                <a
                                  aria-label="The only thing that overcomes hard luck is hard work"
                                  href="../2016/10/20/the-only-thing-that-overcomes-hard-luck-is-hard-work/index.html"
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
                                </a>
                              </div>
                              <div className="post-widget-body ">
                                {" "}
                                <a
                                  className="post-title the-subtitle"
                                  href="../2016/10/20/the-only-thing-that-overcomes-hard-luck-is-hard-work/index.html"
                                >
                                  The only thing that overcomes hard luck is
                                  hard work
                                </a>
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
                                <a
                                  aria-label="One man with courage makes a majority"
                                  href="../2018/10/27/after-all-is-said-and-done-more-is-done/index.html"
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
                                </a>
                              </div>
                              <div className="post-widget-body ">
                                {" "}
                                <a
                                  className="post-title the-subtitle"
                                  href="../2018/10/27/after-all-is-said-and-done-more-is-done/index.html"
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
                                <a
                                  aria-label="Success is not a good teacher failure makes you humble"
                                  href="../2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html"
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
                                </a>
                              </div>
                              <div className="post-widget-body ">
                                {" "}
                                <a
                                  className="post-title the-subtitle"
                                  href="../2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html"
                                >
                                  Success is not a good teacher failure makes
                                  you humble
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
                                  href="../2016/10/20/not-who-has-much-is-rich-but-who-gives-much/index.html"
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
                                </a>
                              </div>
                              <div className="post-widget-body ">
                                {" "}
                                <a
                                  className="post-title the-subtitle"
                                  href="../2016/10/20/not-who-has-much-is-rich-but-who-gives-much/index.html"
                                >
                                  Not who has much is rich, but who gives much
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
                                  href="../2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html"
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
                                </a>
                              </div>
                              <div className="post-widget-body ">
                                {" "}
                                <a
                                  className="post-title the-subtitle"
                                  href="../2016/10/25/budget-issues-force-2017-tour-to-be-cancelled/index.html"
                                >
                                  Budget issues force the Tour to be cancelled
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
                                  href="../2016/10/17/play-this-game-for-free-on-steam-this-weekend/index.html"
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
                                </a>
                              </div>
                              <div className="post-widget-body ">
                                {" "}
                                <a
                                  className="post-title the-subtitle"
                                  href="../2016/10/17/play-this-game-for-free-on-steam-this-weekend/index.html"
                                >
                                  Play This Game for Free on Steam This Weekend
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
                          <a href="../category/life-style/index.html">
                            Life Style
                          </a>{" "}
                          <span>35</span>{" "}
                        </li>
                        <li className="cat-item cat-counter tie-cat-item-1">
                          <a href="../category/world/index.html">World</a>{" "}
                          <span>56</span>
                          <ul className="children">
                            <li className="cat-item cat-counter tie-cat-item-84">
                              <a href="../category/world/travel/index.html">
                                Travel
                              </a>{" "}
                              <span>30</span>
                            </li>
                            <li className="cat-item cat-counter tie-cat-item-48">
                              <a href="../category/world/foods/index.html">
                                Foods
                              </a>{" "}
                              <span>13</span>
                            </li>
                            <li className="cat-item cat-counter tie-cat-item-75">
                              <a href="../category/world/creative/index.html">
                                Creative
                              </a>{" "}
                              <span>6</span>
                            </li>
                          </ul>
                        </li>
                        <li className="cat-item cat-counter tie-cat-item-8">
                          <a href="../category/sports/index.html">Sports</a>{" "}
                          <span>28</span>
                          <ul className="children">
                            <li className="cat-item cat-counter tie-cat-item-139">
                              <a href="../category/sports/racing/index.html">
                                Racing
                              </a>{" "}
                              <span>15</span>
                            </li>
                            <li className="cat-item cat-counter tie-cat-item-140">
                              <a href="../category/sports/swimming/index.html">
                                Swimming
                              </a>
                              <span>8</span>
                            </li>
                            <li className="cat-item cat-counter tie-cat-item-138">
                              <a href="../category/sports/football/index.html">
                                Football
                              </a>
                              <span>7</span>
                            </li>
                          </ul>
                        </li>
                        <li className="cat-item cat-counter tie-cat-item-64">
                          <a href="../category/technology/index.html">
                            Technology
                          </a>{" "}
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
                              <a href="../2016/10/21/instagrams-big-redesign-goes-live-with-black-and-white-app/index.html">
                                <span className="date meta-item tie-icon">
                                  Oct 21, 2016
                                </span>
                                <h3>
                                  Instagram’s big redesign goes live with
                                  black-and-white app
                                </h3>
                              </a>{" "}
                            </li>
                            <li className="widget-single-post-item">
                              {" "}
                              <a href="../2016/10/28/success-is-not-a-good-teacher-failure-makes-you-humble/index.html">
                                <span className="date meta-item tie-icon">
                                  Oct 28, 2016
                                </span>
                                <h3>
                                  Success is not a good teacher failure makes
                                  you humble
                                </h3>
                              </a>{" "}
                            </li>
                            <li className="widget-single-post-item">
                              {" "}
                              <a href="../2015/09/02/there-is-safety-in-numbers/index.html">
                                {" "}
                                <span className="date meta-item tie-icon">
                                  Sep 2, 2015
                                </span>
                                <h3>
                                  The secret of life is not to do what you like
                                  but to like what you do
                                </h3>
                              </a>{" "}
                            </li>
                            <li className="widget-single-post-item">
                              {" "}
                              <a href="../2018/10/27/after-all-is-said-and-done-more-is-done/index.html">
                                <span className="date meta-item tie-icon">
                                  Oct 27, 2018
                                </span>
                                <h3>One man with courage makes a majority</h3>
                              </a>{" "}
                            </li>
                            <li className="widget-single-post-item">
                              {" "}
                              <a href="../2015/10/02/education-is-the-best-provision-for-the-journey-to-old-age/index.html">
                                <span className="date meta-item tie-icon">
                                  Oct 2, 2015
                                </span>
                                <h3>
                                  Education is the best provision for the
                                  journey to old age
                                </h3>
                              </a>{" "}
                            </li>
                            <li className="widget-single-post-item">
                              {" "}
                              <a href="../2015/10/05/this-is-the-star-wars-r2-d2-coffee-maker-youve-been-looking-for/index.html">
                                <span className="date meta-item tie-icon">
                                  Oct 5, 2015
                                </span>
                                <h3>
                                  What does the iPhone 7 reveal about Apple’s AR
                                  plans?
                                </h3>
                              </a>{" "}
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
                        <a
                          href="../tag/app/index.html"
                          className="tag-cloud-link tag-link-161 tag-link-position-1"
                          style={{ fontSize: "8pt" }}
                          aria-label="app (1 item)"
                        >
                          app
                        </a>{" "}
                        <a
                          href="../tag/apple/index.html"
                          className="tag-cloud-link tag-link-17 tag-link-position-2"
                          style={{ fontSize: "11.230769230769pt" }}
                          aria-label="apple (2 items)"
                        >
                          apple
                        </a>{" "}
                        <a
                          href="../tag/facebook/index.html"
                          className="tag-cloud-link tag-link-203 tag-link-position-3"
                          style={{ fontSize: "8pt" }}
                          aria-label="Facebook (1 item)"
                        >
                          Facebook
                        </a>{" "}
                        <a
                          href="../tag/featured/index.html"
                          className="tag-cloud-link tag-link-162 tag-link-position-4"
                          style={{ fontSize: "16.615384615385pt" }}
                          aria-label="featured (5 items)"
                        >
                          featured
                        </a>
                        <a
                          href="../tag/food/index.html"
                          className="tag-cloud-link tag-link-154 tag-link-position-5"
                          style={{ fontSize: "21.282051282051pt" }}
                          aria-label="food (10 items)"
                        >
                          food
                        </a>{" "}
                        <a
                          href="../tag/football/index.html"
                          className="tag-cloud-link tag-link-200 tag-link-position-6"
                          style={{ fontSize: "11.230769230769pt" }}
                          aria-label="football (2 items)"
                        >
                          football
                        </a>
                        <a
                          href="../tag/instagram/index.html"
                          className="tag-cloud-link tag-link-157 tag-link-position-7"
                          style={{ fontSize: "8pt" }}
                          aria-label="instagram (1 item)"
                        >
                          instagram
                        </a>{" "}
                        <a
                          href="../tag/life-style/index.html"
                          className="tag-cloud-link tag-link-155 tag-link-position-8"
                          style={{ fontSize: "19.666666666667pt" }}
                          aria-label="life style (8 items)"
                        >
                          life style
                        </a>{" "}
                        <a
                          href="../tag/olympics/index.html"
                          className="tag-cloud-link tag-link-141 tag-link-position-9"
                          style={{ fontSize: "11.230769230769pt" }}
                          aria-label="olympics (2 items)"
                        >
                          olympics
                        </a>
                        <a
                          href="../tag/rio-2016/index.html"
                          className="tag-cloud-link tag-link-143 tag-link-position-10"
                          style={{ fontSize: "11.230769230769pt" }}
                          aria-label="rio 2016 (2 items)"
                        >
                          rio 2016
                        </a>
                        <a
                          href="../tag/tech/index.html"
                          className="tag-cloud-link tag-link-94 tag-link-position-11"
                          style={{ fontSize: "22pt" }}
                          aria-label="Tech (11 items)"
                        >
                          Tech
                        </a>{" "}
                        <a
                          href="../tag/timeline/index.html"
                          className="tag-cloud-link tag-link-163 tag-link-position-12"
                          style={{ fontSize: "22pt" }}
                          aria-label="timeline (11 items)"
                        >
                          timeline
                        </a>{" "}
                        <a
                          href="../tag/twitter-video/index.html"
                          className="tag-cloud-link tag-link-199 tag-link-position-13"
                          style={{ fontSize: "11.230769230769pt" }}
                          aria-label="Twitter Video (2 items)"
                        >
                          Twitter Video
                        </a>{" "}
                        <a
                          href="../tag/ui/index.html"
                          className="tag-cloud-link tag-link-158 tag-link-position-14"
                          style={{ fontSize: "8pt" }}
                          aria-label="ui (1 item)"
                        >
                          ui
                        </a>{" "}
                        <a
                          href="../tag/ux/index.html"
                          className="tag-cloud-link tag-link-159 tag-link-position-15"
                          style={{ fontSize: "8pt" }}
                          aria-label="ux (1 item)"
                        >
                          ux
                        </a>{" "}
                        <a
                          href="../tag/video/index.html"
                          className="tag-cloud-link tag-link-62 tag-link-position-16"
                          style={{ fontSize: "20.564102564103pt" }}
                          aria-label="Video (9 items)"
                        >
                          Video
                        </a>{" "}
                        <a
                          href="../tag/vimeo/index.html"
                          className="tag-cloud-link tag-link-201 tag-link-position-17"
                          style={{ fontSize: "8pt" }}
                          aria-label="vimeo (1 item)"
                        >
                          vimeo
                        </a>{" "}
                        <a
                          href="../tag/yahoo/index.html"
                          className="tag-cloud-link tag-link-202 tag-link-position-18"
                          style={{ fontSize: "8pt" }}
                          aria-label="Yahoo (1 item)"
                        >
                          Yahoo
                        </a>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="widget social-icons-widget widget-content-only">
                      <ul className="solid-social-icons is-centered">
                        <li className="social-icons-item">
                          <a
                            className="social-link facebook-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            href="#"
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
                            href="#"
                          >
                            <span className="tie-social-icon tie-icon-twitter" />
                            <span className="screen-reader-text">X</span>
                          </a>
                        </li>
                        <li className="social-icons-item">
                          <a
                            className="social-link dribbble-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            href="#"
                          >
                            <span className="tie-social-icon tie-icon-dribbble" />
                            <span className="screen-reader-text">Dribbble</span>
                          </a>
                        </li>
                        <li className="social-icons-item">
                          <a
                            className="social-link soundcloud-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            href="http://soundcloud.com/"
                          >
                            <span className="tie-social-icon tie-icon-soundcloud" />
                            <span className="screen-reader-text">
                              SoundCloud
                            </span>
                          </a>
                        </li>
                        <li className="social-icons-item">
                          <a
                            className="social-link instagram-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            href="#"
                          >
                            <span className="tie-social-icon tie-icon-instagram" />
                            <span className="screen-reader-text">
                              Instagram
                            </span>
                          </a>
                        </li>
                        <li className="social-icons-item">
                          <a
                            className="social-link tiktok-social-icon"
                            rel="external noopener nofollow"
                            target="_blank"
                            href="http://www.tiktok.com/en/"
                          >
                            <span className="tie-social-icon tie-icon-tiktok" />
                            <span className="screen-reader-text">TikTok</span>
                          </a>
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
            <a
              href="#"
              className="tie-btn-close remove big-btn light-btn"
              style={{ opacity: "1", transform: "scale(1)" }}
              onClick={closePopup}
            >
              {" "}
              <span className="screen-reader-text">Close</span>{" "}
            </a>
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
                          <a
                            className="forget-text"
                            href="../my-account/lost-password/index.html"
                          >
                            Forget?
                          </a>{" "}
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

export default ListingDetails;
