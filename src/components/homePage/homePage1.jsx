import React, { useState } from "react";
import Logo from "../logo";
import Button from "../button";

const HomePage1 = () => {
  return (
    <div style={styles.container}>
      <img
        src="./images/iteration-1-images/home-banner.png"
        alt="home-banner"
        style={styles.backgroundImage}
      />
      <div style={styles.content}>
        <Logo />
        <p style={styles.opp}>Fırsatı Kaçırma...</p>
        <p style={styles.subtitle}>
          KOD ACIKTIRIR, <br /> PİZZA DOYURUR
        </p>
        
        <Button to="/urunler">Acıktım</Button>
       
      </div>
    </div>
  );
};

const styles = {
  container: {
    position:"relative",
    width: "100%",
    height: "100vh",
    display: "flex",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  },
  content: {
    zIndex: 1,
    color: "#fff",
    textAlign: "center",
    width: "100%",  
  },
  subtitle: {
    fontSize: "20px", 
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "2px",
    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)", 
  },
  opp: {
    fontFamily: "satisfy",
    color: "#FDC913",
  },
}
export default HomePage1;
