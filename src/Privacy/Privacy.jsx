import React, { Fragment, useEffect, useState } from "react";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
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
    // Update body class names
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
        <title>{"Privacy Policy | Realty Samachar"}</title>
        <meta
          name="description"
          content={
            "Learn how Realty Samachar collects, uses, and protects your personal information. Your privacy is our priority—read our full Privacy Policy here."
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
                      <h2>Privacy Policy</h2>
                      <p>
                        <strong>Effective Date:</strong> July 18, 2025
                      </p>
                      <p>
                        All data collection, storage, and processing occur
                        exclusively on servers located within India. We do not
                        transfer or store any user data outside India.
                      </p>
                      <br />

                      <h4>1. About Us</h4>
                      <p>
                        We are Realty Samachar (“we”, “our”, “us”), and we care
                        deeply about your privacy. This policy explains how we
                        collect, use, protect, share, and delete your personal
                        data when you use our website (“the Platform”).
                      </p>
                      <br />

                      <h4>2. What We Collect</h4>
                      <ul>
                        <li>
                          <strong>Information you give us:</strong> your name,
                          email, phone number, birth date, gender, location,
                          profile details, documents you upload, survey answers,
                          and preferences.
                        </li>
                        <li>
                          <strong>Information we get automatically:</strong>{" "}
                          your IP address, device details, browser type, pages
                          visited, timestamps, cookies, web beacons, and unique
                          device or advertising IDs.
                        </li>
                        <li>
                          <strong>Information from third parties:</strong> with
                          your consent, we collect data from social logins, CRM
                          or IDX services, public listings, and marketing lists.
                        </li>
                      </ul>
                      <br />

                      <h4>3. Why We Collect Data</h4>
                      <ul>
                        <li>Create and manage your account and access</li>
                        <li>
                          Process subscriptions and payments via secure gateways
                        </li>
                        <li>Personalize content, alerts, and features</li>
                        <li>
                          Improve our site with analytics and fraud prevention
                        </li>
                        <li>Send news, offers, and support messages</li>
                        <li>Follow laws and legal requests</li>
                        <li>And for other marketing purposes</li>
                      </ul>
                      <p>
                        We process your data based on your consent, to fulfil a
                        contract, because of legitimate interest (such as
                        security), and to obey legal obligations, as required by
                        the DPDP Act 2023, the Information Technology Rules
                        2011, and global privacy standards.
                      </p>
                      <br />

                      <h4>4. Consent Notice</h4>
                      <p>
                        By using this site, you agree to let us use your data
                        for marketing purposes and to contact you when needed.
                        You can withdraw your consent at any time by reaching
                        out to us through the contact details provided below. We
                        maintain a record of your consent in compliance with
                        legal requirements.
                      </p>
                      <br />

                      <h4>5. Cookies and Tracking</h4>
                      <p>
                        We use cookies to ensure the site works well (essential
                        cookies), to understand use patterns (analytics
                        cookies), and to show you relevant content (advertising
                        cookies). None are used without your consent, and you
                        can manage them via banner or browser settings.
                      </p>
                      <br />
                      <h4>6. How We Share Your Information</h4>
                      <p>
                        We never sell your personal data. We share it only when
                        needed to:
                      </p>
                      <ul>
                        <li>
                          Provide services through email, analytics, CRM, or
                          hosting providers
                        </li>
                        <li>
                          Send alerts through RERA/IDX partners, with your
                          permission
                        </li>
                        <li>Run marketing campaigns</li>
                        <li>
                          Follow legal orders, protect rights, or follow public
                          safety rules
                        </li>
                        <li>
                          Operate following corporate mergers or asset transfers
                          under the same privacy safeguards
                        </li>
                      </ul>
                      <p>
                        All third parties follow strict agreements that match
                        DPDP safeguards.
                      </p>
                      <br />
                      <h4>7. Security, Logs, and Monitoring</h4>
                      <p>
                        We follow essential security practices to protect your
                        data. Our site uses HTTPS, firewalls, and monitors
                        activity to stay safe. Only our team has access to the
                        data. As per Indian law, we keep website logs for at
                        least 180 days. In case of any data breach, we’ll follow
                        the proper reporting process.
                      </p>
                      <br />
                      <h4>8. Data Retention and Deletion</h4>
                      <p>
                        We keep your data no longer than necessary, usually up
                        to 3 years after the last interaction or as legally
                        required. When you ask to delete your data, we remove it
                        from active systems promptly and from backups within a
                        reasonable time. Anonymised copies may continue to exist
                        solely for compliance purposes.
                      </p>
                      <br />
                      <h4>9. Your Rights</h4>
                      <ul>
                        <li>Know what personal data we have and why</li>
                        <li>Correct or update your data</li>
                        <li>
                          Delete your data (unless needed for legal reasons)
                        </li>
                        <li>Withdraw consent anytime</li>
                        <li>File a complaint with us in case of any dispute</li>
                      </ul>
                      <p>We aim to respond to all requests within 30 days.</p>

                      <h4>10. Children and Sensitive Data</h4>
                      <p>
                        You must be 18 or older to use our Platforms. We don’t
                        knowingly collect data from minors. If we discover the
                        collection of a minor's data without their consent, we
                        promptly delete it.
                      </p>
                      <br />
                      <h4>11. Privacy by Design and Data Records</h4>
                      <p>
                        We follow Privacy by Design principles across our
                        services. We maintain records of our data processing
                        activities, data maps, and privacy impact assessments
                        for high-risk operations.
                      </p>
                      <br />
                      <h4>12. For any Grievance and Concern</h4>
                      <p>
                        Contact:{" "}
                        <a href="mailto:grievance@realtysamachar.in">
                          grievance@realtysamachar.in
                        </a>
                      </p>
                      <br />
                      <h4>13. Changes to this Policy</h4>
                      <p>
                        We will update this page and the Effective Date for
                        major changes and notify you as needed. You should check
                        back regularly for updates.
                      </p>
                      <br />
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

export default Privacy;
