import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          src="./images/iteration-1-images/logo.svg"
          alt="Logo"
          className="logo"
          style={{ cursor: "pointer", fontSize:"5px"}}
        />
      </Link>
    </div>
  );
};
export default Logo;
