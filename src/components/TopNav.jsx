import React, { useState } from "react";
import "./TopNav.css";
import {
  FaSearch,
  FaRegCommentDots,
  FaBell,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="topnav">
      <div className="topnav-left">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>

      <div className="topnav-right">
        <div className={`topnav-center ${menuOpen ? "active" : ""}`}>
          <Link
            to={"https://partner.bhumibazar.com/new-listing"}
            target="_blank"
            style={{ fontWeight: "bold" }}
          >
            Listings
          </Link>
          <Link
            to={"https://partner.bhumibazar.com/project"}
            target="_blank"
            style={{ fontWeight: "bold" }}
          >
            Projects
          </Link>
          <a href="#" className=""></a>
        </div>
         {/* Mobile menu toggle */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <Link
          className="icon-container"
          to={"https://partner.bhumibazar.com/messaging"}
          target="_blank"
        >
          <MdMessage color="#858080ff" />
        </Link>

        <Link
          className="icon-container bell"
          to={"https://partner.bhumibazar.com/new-listing"}
          target="_blank"
        >
          <FaBell color="#858080ff" />
          <span className="notification-dot"></span>
        </Link>

        <Link
          className="icon-container"
          to={"https://partner.bhumibazar.com/new-listing"}
          target="_blank"
        >
          <FaUser color="#858080ff" />
        </Link>

       
      </div>
    </nav>
  );
};

export default TopNav;
