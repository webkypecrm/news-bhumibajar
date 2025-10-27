import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="not-found-wrapper">
      <Helmet>
        <title>404 - Page Not Found | Realty Samachar</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Oops! Page not found.</h2>
        <p className="not-found-message">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="not-found-button">
          ⬅️ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
