import React from "react";
import { Link } from "react-router-dom";

const ResponsiveNabBar = () => {
  return (
    <ul className="responsive_nav_li_ul">
      <li>
        <Link className="active" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/">Projects</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Contact </Link>
      </li>
    </ul>
  );
};

export default ResponsiveNabBar;
