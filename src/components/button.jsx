import React, { useState } from "react";
import { Link } from "react-router-dom";

const Button = ({ children, to, onClick, style, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (to) {
    return (
      <Link
        to={to}
        style={{
          ...styles.button,
          ...(isHovered ? styles.buttonHover : {}),
          ...style,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...styles.button,
        ...(isHovered ? styles.buttonHover : {}),
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

const styles = {
  button: {
    backgroundColor: "#FDC913",
    border: "none",
    padding: "15px 30px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "all 0.3s ease-in-out",
    borderRadius: "5px",
    textDecoration: "none",
    textAlign: "center",
    color: "#000",
    width: "fit-content",
  },
  buttonHover: {
    backgroundColor: "yellow",
    boxShadow: "0px 8px 20px rgba(255, 193, 7, 0.5)",
    transform: "scale(1.05)",
  },
};

export default Button;
