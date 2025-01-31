import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams(); 
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("/foodData.json") 
  .then((response) => response.json())
  .then((data) => {
    if (categoryName) {
      const filtered = data.filter((item) => item.category === categoryName);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(data);
    }
  })
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, [categoryName]);

  return (
    <div className="container3">
      <h1>{categoryName ? `${categoryName} Ürünleri` : "Tüm Ürünler"}</h1>
      <div className="food-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="food-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <p>{product.rating} ⭐ ({product.votes} oy)</p>
            </div>
          ))
        ) : (
          <p>Bu kategoride ürün bulunamadı.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
