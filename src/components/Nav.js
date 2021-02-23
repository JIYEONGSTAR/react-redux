import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="navbar">
      <Link to="/" className="nav-link">
        추천단어장
      </Link>
      <Link to="/cart" className="nav-link">
        장바구니
      </Link>
    </div>
  );
}

export default Nav;
