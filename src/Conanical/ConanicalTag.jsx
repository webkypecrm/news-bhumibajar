import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const ConanicalTag = () => {
  const location = useLocation();
  const baseUrl = "https://www.realtysamachar.com";
  const canonicalUrl =
    baseUrl + (location.pathname === "/" ? "/" : location.pathname);

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default ConanicalTag;
