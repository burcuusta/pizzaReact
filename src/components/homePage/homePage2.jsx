import React from "react";
import { Link } from "react-router-dom";
import Button from "../button";

const categories = [
  { name: "YENİ! Kore", icon: "🔥", link: "/kore" },
  { name: "Pizza", icon: "🍕", link: "/pizza" },
  { name: "Burger", icon: "🍔", link: "/burger" },
  { name: "Kızartmalar", icon: "🍟", link: "/kizartmalar" },
  { name: "Fast food", icon: "🌭", link: "/fast-food" },
  { name: "Gazlı İçecek", icon: "🥤", link: "/icecekler" },
];

const products = [
  {
    id: 1,
    title: "Özel Lezzetus",
    description: "Position: Absolute Acı Burger",
    image: "/images/iteration-2-images/cta/kart-1.png",
    link: "/siparis",
  },
  {
    id: 2,
    title: "Hackathon Burger Menüsü",
    image: "/images/iteration-2-images/cta/kart-2.png",
    link: "/siparis",
  },
  {
    id: 3,
    title: "Çooook hızlı npm gibi kurye",
    image: "/images/iteration-2-images/cta/kart-3.png",
    link: "/siparis",
  },
];

const HomePage2 = () => {
  return (
    <div className="home-container">
      {/* Kategori Menüsü */}
      <div className="category-menu">
        {categories.map((category, index) => (
          <Link key={index} to={category.link} className="category-item">
            <span>{category.icon}</span> {category.name}
          </Link>
        ))}
      </div>

      {/* Ürünler */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {/* Ürün resmi */}
            <img src={product.image} alt={product.title} className="product-image" />
            
            {/* Ürün içeriği */}
            <div className="product-content">
              <h2>{product.title}</h2>
              {product.description && <p>{product.description}</p>}
              <Button>
                <Link to={product.link} className="order-button">
                  SİPARİŞ VER
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage2;
