import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../button";
import axios from "axios";
import "./orderForm.css";


const PizzaSizeSelector = ({ selectedSize, setSelectedSize }) => {
  const sizes = ["S", "M", "L"];
  return (
    <div className="selector">
      <h3 className="title">
        Boyut Seç <span className="required">*</span>
      </h3>
      <div className="size-options">
        {sizes.map((size) => (
          <label
            key={size}
            className={`size-option ${selectedSize === size ? "selected" : ""}`}
            onClick={() => setSelectedSize(size)}
          >
            <input
              type="radio"
              name="size"
              value={size}
              checked={selectedSize === size}
              onChange={(e) => setSelectedSize(e.target.value)}
            />
            {size}
          </label>
        ))}
      </div>
    </div>
  );
};

const PizzaDoughSelector = ({ selectedDough, setSelectedDough }) => {
  const doughTypes = ["Süpper İnce","İnce", "Orta", "Kalın"];

  return (
    <div className="selector">
      <h3 className="title">Hamur Seç<span className="required">*</span>
      </h3>
      <select
        className="dough-dropdown"
        value={selectedDough}
        onChange={(e) => setSelectedDough(e.target.value)}
      >
        <option value="" >--Hamur Kalınlığı--</option>
        {doughTypes.map((dough) => (
          <option key={dough} value={dough}>
            {dough}
          </option>
        ))}
      </select>
    </div>
  );
};

const PizzaToppings = ({ selectedToppings, toggleTopping }) => {
  const toppingsList = [
    "Pepperoni",
    "Domates",
    "Biber",
    "Mısır",
    "Sucuk",
    "Kanada Jambonu",
    "Ananas",
    "Tavuk Tandır",
    "Jalapeno",
    "Kabak",
    "Soğan",
    "Sarımsak",
  ];

  const handleToppingChange = (topping) => {
    if (selectedToppings.length >= 10 && !selectedToppings.includes(topping)) {
      alert("En fazla 10 malzeme seçebilirsiniz.");
      return;
    }
    toggleTopping(topping);
  };

    return (
      <div className="selector">
        <h3 className="title">Ek Malzemeler</h3>
        {selectedToppings.length < 4 && (
          <p className="toppings-info">En az 4 en fazla 10 malzeme seçebilirsiniz. 5₺</p>
        )}
        <div className="toppings-grid">
          {toppingsList.map((topping) => (
            <label key={topping} className="topping-option">
              <input
                type="checkbox"
                value={topping}
                checked={selectedToppings.includes(topping)}
                onChange={() => handleToppingChange(topping)}
              />
              {topping}
            </label>
          ))}
        </div>
      </div>
    );
  };

  const OrderNote = ({ note, setNote }) => {
    return (
      <div className="selector">
        <h3 className="title">Sipariş Notu</h3>
        <textarea
          className="order-note-textarea"
          placeholder="Siparişe eklemek istediğiniz bir not var mı?"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
    );
  };
  const OrderQuantity = ({ quantity, setQuantity }) => {
    return (
      <div className="quantity-container">
        <button
          type="button"
          className="quantity-button"
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
        >
          -
        </button>
        <span className="quantity-value">{quantity}</span>
        <button
          type="button"
          className="quantity-button"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </button>
      </div>
    );
  };

  const OrderSummary = ({ basePrice, extraPrice, quantity }) => {
    const totalPrice = (basePrice + extraPrice) * quantity;
  
    return (
      <div className="order-summary-container">
        <h2 className="title">Sipariş Toplamı</h2>
        <p className="order-summary-extra">Seçimler: {extraPrice.toFixed(2)}₺</p>
        <p className="order-summary-total">Toplam: {totalPrice.toFixed(2)}₺</p>
      </div>
    );
  };
  

const PizzaOrderForm = () => {
  const [name, setName] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedDough, setSelectedDough] = useState("");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showNameError, setShowNameError] = useState(false);
  const history = useHistory();
  const { state } = history.location;
  const product = state?.product || null;
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setShowNameError(true);
  }, []);

  if (!product) {
    return <p>Ürün bilgisi bulunamadı.</p>;
  }

  const basePrice = parseInt(product.price.replace("₺", ""));
  const sizePrices = { S: 0, M: 10, L: 20 };
  const extraPrice = selectedToppings.length * 5 + sizePrices[selectedSize || "S"];

  const toggleTopping = (topping) => {
    setSelectedToppings((prev) =>
      prev.includes(topping)
        ? prev.filter((item) => item !== topping)
        : [...prev, topping]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (name.length < 3) errors.name = "Adınız en az 3 karakter olmalıdır.";
    if (!selectedSize) errors.size = "Lütfen bir boyut seçin.";
    if (!selectedDough) errors.dough = "Lütfen bir hamur tipi seçin.";
    if (selectedToppings.length < 4) errors.toppings = "En az 4 malzeme seçmelisiniz.";
    
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const orderData = {
      pizzaName: product.name,
      size: selectedSize,
      crust: selectedDough,
      toppings: selectedToppings,
      extraPrice: extraPrice,
      totalPrice: (basePrice + extraPrice) * quantity,
      quantity: quantity,
      note: note,
    };

    axios
      .post("https://reqres.in/api/pizza", orderData)
      .then((response) => {
        console.log("Sipariş Alındı:", response.data);
        history.push({ pathname: "/success", state: { orderData } });
      })
      .catch((error) => {
        console.error("Hata oluştu:", error);
        alert("Siparişiniz alınırken bir hata oluştu.");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <h2 className="order-form-title">{product.name}</h2>
      <div className="order-form-section">
        <PizzaSizeSelector selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
        {errors.size && <p className="order-form-error">{errors.size}</p>}
        <PizzaDoughSelector selectedDough={selectedDough} setSelectedDough={setSelectedDough} />
        {errors.dough && <p className="order-form-error">{errors.dough}</p>}
      </div>
      <PizzaToppings selectedToppings={selectedToppings} toggleTopping={toggleTopping} />
      {errors.toppings && <p className="order-form-error">{errors.toppings}</p>}
      <div className="order-form-field">
        <h3>Adınız:</h3>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        {errors.name && <p className="order-form-error">{errors.name}</p>}
        {showNameError && name.length < 3 && <p className="order-form-error">Adınız en az 3 karakter olmalıdır.</p>}
      </div>
      <div className="order-form-note">
        <OrderNote note={note} setNote={setNote} />
      </div>
      <hr />
      <div className="order-form-summary">
  <OrderQuantity quantity={quantity} setQuantity={setQuantity} />
       <div className="order-summary">
          <OrderSummary basePrice={basePrice} extraPrice={extraPrice} quantity={quantity} />
       </div>
      </div>
      <div className="order-form-submit">
        <Button type="submit">Sipariş Ver</Button>
      </div>
    </form>
  );
};

export default PizzaOrderForm;
