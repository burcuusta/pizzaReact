import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      {/* Logo */}
      <div className="logo-container">
        <img
          src="./images/iteration-1-images/logo.svg" // Logonuzun doğru yolunu buraya yazın
          alt="Logo"
        />
      </div>

      {/* Menü */}
      <nav className="menu-container">
        <ul>
          <li>
            <a href="#anasayfa">Anasayfa</a>
          </li>
          <li>
            <a href="#secenekler">Seçenekler</a>
          </li>
          <li>
            <a href="#siparis">Sipariş Oluştur</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
