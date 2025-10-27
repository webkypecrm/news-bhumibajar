import React, { Fragment, useEffect, useState } from "react";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import { Helmet } from "react-helmet-async";

const TermsCondition = () => {
  const [activeTab, setActiveTab] = useState("Popular");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  // Modal
  const openPopup = () => setIsOpenModal(true);
  const closePopup = () => setIsOpenModal(false);

  // Sidebar
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

  const ogImage =
    "https://res.cloudinary.com/drj0uehgx/image/upload/v1753508730/feviconsamachar-06_mkn9yc.png";

  return (
    <Fragment>
      <Helmet>
        <title>{"Terms & Conditions | Realty Samachar"}</title>
        <meta
          name="description"
          content={
            "Review the Terms and Conditions governing your use of Realty Samachar. Understand your rights, responsibilities, and our service policies."
          }
        />
        <meta name="keywords" content={""} />

        {/* Canonical (in case ConanicalTag didn't catch it) */}
        <link
          rel="canonical"
          href={`https://www.realtysamachar.com${location.pathname}`}
        />

        {/* Open Graph */}
        <meta property="og:title" content={""} />
        <meta property="og:description" content={""} />
        <meta property="og:image" content={ogImage} />
        <meta
          property="og:url"
          content={`https://www.realtysamachar.com${location.pathname}`}
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={""} />
        <meta name="twitter:description" content={""} />
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
                      <h2>Terms and Conditions</h2>
                      <p>
                        <strong>Effective Date:</strong> July 18, 2025
                      </p>

                      <h4>1. Introduction</h4>
                      <p>
                        We are Realty Samachar ("we," "us," "our"), and these
                        Terms apply to your use of our website (the "Platform").
                        By using the Platform, you agree to follow these terms.
                        If you disagree, please stop using our services.
                      </p>

                      <h4>2. Eligibility</h4>
                      <p>
                        You must be at least 18 years old or use the Platform
                        with permission from a parent or guardian.
                      </p>

                      <h4>3. Agreement Formation</h4>
                      <p>
                        When you register or use our Platform, you must agree
                        with our terms to ensure valid acceptance under Indian
                        and international law.
                      </p>

                      <h4>4. Access and Account Security</h4>
                      <p>
                        Keep your login details safe. You are responsible for
                        any activity linked to your account. Inform us
                        immediately of any unauthorised use. If you violate
                        these terms, we may suspend or terminate your account
                        without notice.
                      </p>

                      <h4>5. Acceptable Use</h4>
                      <p>Do not misuse our Platform. You agree not to:</p>
                      <ul>
                        <li>
                          Post illegal, abusive, defamatory, or infringing
                          content
                        </li>
                        <li>Attempt hacking or interfering with security</li>
                        <li>Use automated tools or scraping</li>
                        <li>Impersonate others or violate privacy of users</li>
                      </ul>
                      <p>
                        We reserve the right to remove content or take legal
                        action for violations.
                      </p>

                      <h4>6. Content Rights</h4>
                      <p>
                        We or our partners own all articles, images, and videos.
                        You may view or share public content with attribution
                        but cannot reproduce, modify, or distribute it without
                        permission.
                      </p>

                      <h4>7. User Content</h4>
                      <p>
                        You retain ownership of comments or material you post.
                        However, you grant us permission to display, distribute,
                        adapt, and promote that content. You confirm it is your
                        own work and does not infringe others’ rights.
                      </p>

                      <h4>8. Links to Other Sites</h4>
                      <p>
                        Our Platform may link to other websites. We do not
                        control them and are not responsible for their content
                        or privacy practices. Access them at your own risk.
                      </p>

                      <h4>9. Paid Services and Subscriptions</h4>
                      <p>
                        Any paid content or subscription is governed by
                        additional terms. Payments are processed through secure
                        services, and we never store complete payment details.
                      </p>

                      <h4>10. Disclaimers and Liability</h4>
                      <p>
                        The Platform is provided "as is." We do not guarantee it
                        will be uninterrupted or error-free. We are not liable
                        for any losses arising from your use of the platform,
                        including data loss or reputational harm. Our liability
                        is capped at the amount you paid in the last 12 months,
                        or zero if you have not paid anything.
                      </p>

                      <h4>11. Indemnity</h4>
                      <p>
                        You agree to indemnify us for any claims or costs
                        arising from your breach of these Terms or misuse of the
                        Platform.
                      </p>

                      <h4>12. Modifications and Disruption</h4>
                      <p>
                        We may update these Terms; changes will be posted on
                        this page and communicated openly. Unexpected
                        disruptions such as maintenance or upgrades may occur,
                        and we will aim to notify you where feasible.
                      </p>

                      <h4>13. Termination</h4>
                      <p>
                        We may suspend or end your access at any time if you
                        violate these Terms or for any other reason.
                      </p>

                      <h4>14. Dispute Resolution and Governing Law</h4>
                      <p>
                        The Terms are governed by Indian law. Any disputes will
                        be resolved through courts or mutual agreements.
                      </p>

                      <h4>15. Accessibility</h4>
                      <p>
                        We are committed to ensuring our Platform is accessible.
                        If you encounter difficulties accessing content, contact
                        us at grievance@realtysamachar.in
                      </p>

                      <h4>16. Entire Agreement</h4>
                      <p>
                        These Terms, together with our Privacy Policy and any
                        paid content terms, form the entire agreement between
                        you and us.
                      </p>

                      <h4>17. Contact Us</h4>
                      <p>
                        Email:{" "}
                        <a href="mailto:grievance@realtysamachar.in">
                          grievance@realtysamachar.in
                        </a>
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

export default TermsCondition;
