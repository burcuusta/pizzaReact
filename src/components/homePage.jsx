import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <img
        src="./images/iteration-1-images/home-banner.png"
        alt="home-banner"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          textAlign: "center",
          paddingTop: "20%",
        }}
      >
        <h1>Teknolojik Yemekler</h1>
        <p style={{ fontSize: "24px", margin: "20px 0" }}>
          KOD ACIKTIRIR
          <br />
          PİZZA DOYURUR
        </p>
        <Link to="/siparis">
          <button
            style={{
              backgroundColor: "#ff0",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Acıktım
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
