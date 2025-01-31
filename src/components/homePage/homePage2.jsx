import React from "react";
import { Link } from "react-router-dom";
import Button from "../button";

const categories = [
  { name: "Pizza", icon: "🍕" },
  { name: "Burger", icon: "🍔" },
  { name: "Kızartmalar", icon: "🍟" },
  { name: "Fast food", icon: "🌭" },
  { name: "Gazlı İçecek", icon: "🥤" },
];

const products = [
  { id: 1, title: "Özel Lezzetus", image: "images/iteration-2-images/cta/kart-1.png", link: "/siparis" },
  { id: 2, title: "Hackathon Burger Menüsü", image: "images/iteration-2-images/cta/kart-2.png", link: "/siparis" },
  { id: 3, title: "Çooook hızlı npm gibi kurye", image: "images/iteration-2-images/cta/kart-3.png", link: "/siparis" },
];

const HomePage2 = () => {
  return (
    <div className="home-container">
      <div className="category-menu">
        {categories.map((category, index) => (
          <Link key={index} to={`/kategori/${category.name}`} className="category-item">
            <span>{category.icon}</span> {category.name}
          </Link>
        ))}
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-content">
              <h2>{product.title}</h2>
              <Button to={product.link} style={{ alignItems: "center" }}>SİPARİŞ VER</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage2;
