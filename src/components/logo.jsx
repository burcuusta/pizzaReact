import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo" style={{ textAlign: "center", marginBottom: "20px" }}>
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
const styles = {
  "@media (max-width: 768px)": { 
    logo: {
      height: "40px", 
      width: "auto", 
    },
  },
};
export default Logo;
