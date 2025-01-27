import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "red",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="logo-container">
        <img
          src="./images/iteration-1-images/logo.svg" 
          alt="Logo"
          style={{ height: "40px" }}
        />
      </div>
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
              Anasayfa
            </Link>
          </li>
          <li>
            <Link to="/siparis" style={{ color: "#fff", textDecoration: "none" }}>
              Sipariş Oluştur
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
