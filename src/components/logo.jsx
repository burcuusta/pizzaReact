import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <Link to="/"> {/* Logoya tıklanınca anasayfaya yönlendir */}
        <img
          src="./images/iteration-1-images/logo.svg"
          alt="Logo"
          style={{ height: "60px", cursor: "pointer" }} 
        />
      </Link>
    </div>
  );
};

export default Logo;
