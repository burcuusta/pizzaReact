import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";
import Button from "./button";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <img
        src="./images/iteration-1-images/home-banner.png"
        alt="home-banner"
        style={styles.backgroundImage}
      />
      <div style={styles.content}>
        <Logo />
        <p style={styles.subtitle}>
          KOD ACIKTIRIR, <br /> PİZZA DOYURUR
        </p>
        <Link to="/siparis">
        <Button>Acıktım</Button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    overflow: "hidden",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  },
  content: {
    position: "relative",
    zIndex: 1,
    color: "#fff",
    textAlign: "center",
    paddingTop: "5%",
  },
  title: {
    fontSize: "48px", 
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "2px",
    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)", 
  },
  subtitle: {
    fontSize: "26px",
    margin: "20px 0",
    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.6)",
  },
  button: {
    backgroundColor: "#FDC913",
    border: "none",
    padding: "15px 30px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "all 0.3s ease-in-out",
  },
  buttonHover: {
    backgroundColor: "#FFC107",
    boxShadow: "0px 8px 20px rgba(255, 193, 7, 0.5)",
    transform: "scale(1.05)",
  },
};

export default HomePage;
