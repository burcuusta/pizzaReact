import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <Logo />
      </div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li
            style={styles.navItem}
            onMouseEnter={() => setHoveredItem("anasayfa")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link
              to="/"
              style={{
                ...styles.navLink,
                ...(hoveredItem === "anasayfa" ? styles.navLinkHover : {}),
              }}
            >
              Anasayfa
            </Link>
          </li>
          <li
            style={styles.navItem}
            onMouseEnter={() => setHoveredItem("siparis")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link
              to="/siparis"
              style={{
                ...styles.navLink,
                ...(hoveredItem === "siparis" ? styles.navLinkHover : {}),
              }}
            >
              Sipariş Oluştur
            </Link>
          </li>
          <li
            style={styles.navItem}
            onMouseEnter={() => setHoveredItem("secenekler")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link
              to="/secenekler"
              style={{
                ...styles.navLink,
                ...(hoveredItem === "secenekler" ? styles.navLinkHover : {}),
              }}
            >
              Seçenekler
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: " #CE2829",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  navList: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
    padding: "0.5rem",
    transition: "all 0.3s ease",
  },
  navLinkHover: {
    transform: "scale(1.1)", 
    color: "#FFC107", 
  },
};

export default Header;
