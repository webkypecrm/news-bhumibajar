import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Listing from "./Listing/Listing.jsx";
import ListingDetails from "./Listing/ListingDetails.jsx";
import VideoDetails from "./Video/VideoDetails.jsx";
import Podcast from "./Podcast/Podcast.jsx";
import HeaderSearchList from "./SearchList/HeaderSearchList.jsx";
import Privacy from "./Privacy/Privacy.jsx";
import About from "./About/About.jsx";
import TermsCondition from "./TermsCondition/TermsCondition.jsx";
import { HelmetProvider } from "react-helmet-async";
import Disclaimer from "./Disclaimer/Disclaimer.jsx";
import TagList from "./TagList/TagList.jsx";
import ConanicalTag from "./Conanical/ConanicalTag.jsx";
import PageNotFound from "./404/PageNotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ConanicalTag />
        <Routes>
          <Route path="/" element={<App />} />

          {/* More specific first */}
          <Route
            path="/news/:category/:subcategory/:slug"
            element={<ListingDetails />}
          />

          {/* Less specific after */}
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/video-details" element={<VideoDetails />} />
          <Route path="/news-search-list" element={<HeaderSearchList />} />
          <Route path="/tag-list" element={<TagList />} />
          <Route path="/privacy-page" element={<Privacy />} />
          <Route path="/about-page" element={<About />} />
          <Route path="/disclaimer-page" element={<Disclaimer />} />
          <Route path="/termscondition-page" element={<TermsCondition />} />

          <Route path="/:slug" element={<Listing />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
