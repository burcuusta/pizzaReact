import React, { useState, useEffect } from "react";

const categories = [
  { name: "Tüm ürünler", icon: "🍽️" },
  { name: "Ramen", icon: "🍜" },
  { name: "Pizza", icon: "🍕" },
  { name: "Burger", icon: "🍔" },
  { name: "French fries", icon: "🍟" },
  { name: "Fast food", icon: "🌭" },
  { name: "Soft drinks", icon: "🥤" }
];

const CategorySelector = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category.name}
          className={`category-btn ${activeCategory === category.name ? "active" : ""}`}
          onClick={() => onSelectCategory(category.name)}
        >
          {category.icon} {category.name}
        </button>
      ))}
    </div>
  );
};

const FoodCard = ({ item }) => {
  return (
    <div className="food-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.rating} ⭐ ({item.votes})</p>
      <p><strong>{item.price}</strong></p>
    </div>
  );
};

const FoodList = ({ items, activeCategory }) => {
  return (
    <div className="food-grid">
      {items
        .filter((item) => activeCategory === "Tüm ürünler" || item.category === activeCategory)
        .map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
    </div>
  );
};

const HomePage_3 = () => {
  const [activeCategory, setActiveCategory] = useState("Tüm ürünler");
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetch("/foodData.json")
      .then((res) => res.json())
      .then((data) => setFoodItems(data));
  }, []);

  return (
    <div className="container3">
      <h2>en çok paketlenen menüler</h2>
      <h1>Acıktıran Kodlara Doyuran Lezzetler</h1>

      <CategorySelector activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
      <FoodList items={foodItems} activeCategory={activeCategory} />
    </div>
  );
};

export default HomePage_3;
