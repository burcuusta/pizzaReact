import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "../button";

const ProductDetailPage = ({ match }) => {
  const { productId } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/foodData.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find((item) => item.id === parseInt(productId));
        setProduct(foundProduct);
      })
      .catch((err) => console.error("Ürün verisi yüklenirken hata oluştu:", err));
  }, [productId]);

  if (!product) {
    return <p>Ürün bulunamadı...</p>;
  }

  const handleOrderClick = () => {
    history.push({
      pathname: "/siparis",
      state: { product },
    });
  };

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p><strong>Fiyat:</strong> {product.price}₺</p>
      <p><strong>Değerlendirme:</strong> {product.rating} ⭐ ({product.votes} oy)</p>
      <p>{product.description}</p>
      <Button onClick={handleOrderClick}>Sipariş Ver</Button>
    </div>
  );
};

export default ProductDetailPage;
