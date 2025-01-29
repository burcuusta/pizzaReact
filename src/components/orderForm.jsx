import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "./button";
import axios from "axios";

const PizzaSizeSelector = ({ selectedSize, setSelectedSize }) => {
  const sizes = ["Küçük", "Orta", "Büyük"];
  const sizePrices = { Küçük: 0, Orta: 10, Büyük: 20 };
  return (
    <div>
      <h3>Boyut Seç <span style={{ color: "red" }}>*</span></h3>
      {sizes.map((size) => (
        <label key={size} style={{ display: "block", marginBottom: "0.2rem" }}>
          <input
            type="radio"
            name="size"
            value={size}
            checked={selectedSize === size}
            onChange={(e) => setSelectedSize(e.target.value)}
          />
          {size} - {sizePrices[size]}₺
        </label>
      ))}
    </div>
  );
};

const PizzaDoughSelector = ({ selectedDough, setSelectedDough }) => {
  const doughTypes = ["İnce", "Orta", "Kalın"];
  return (
    <div >
      <h3>Hamur Seç <span style={{ color: "red" }}>*</span></h3>
      <select value={selectedDough} onChange={(e) => setSelectedDough(e.target.value)}>
        <option value="">Hamur Kalınlığı</option>
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
    <div>
      <h3>Ek Malzemeler </h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {toppingsList.map((topping) => (
          <label key={topping} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
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
      {selectedToppings.length < 4 && (
        <p style={{ color: "red" }}>En az 4 malzeme seçmelisiniz.</p>
      )}
    </div>
  );
};

const OrderNote = ({ note, setNote }) => {
  return (
    <div style={{ marginTop: "20px", flex: "1" }}>
      <h3>Sipariş Notu</h3>
      <textarea
        placeholder="Siparişe eklemek istediğiniz bir not var mı?"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{ width: "100%", height: "100px" }}
      />
    </div>
  );
};

const OrderQuantity = ({ quantity, setQuantity }) => {
  return (
    <div style={{ display: "inline-block" }}>
      <h3>Adet</h3>
      <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}  style={{backgroundColor: "yellow"}} >-</button>
      <span style={{ margin: "1rem" }}>{quantity}</span>
      <button onClick={() => setQuantity((prev) => prev + 1)} style={{backgroundColor: "yellow"}} >+</button>
    </div>
  );
};

const OrderSummary = ({ basePrice, extraPrice, quantity }) => {
  const totalPrice = (basePrice + extraPrice) * quantity;
  return (
    <div style={{ display: "inline-block", marginLeft: "20px" }}>
      <h3>Sipariş Özeti</h3>
      <p>Seçimler: {extraPrice.toFixed(2)}₺</p>
      <p>Toplam: {totalPrice.toFixed(2)}₺</p>
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

  useEffect(() => {
    setShowNameError(true);
  }, []);

  const basePrice = 85.5;
  const sizePrices = { Küçük: 0, Orta: 10, Büyük: 20 };
  const extraPrice = selectedToppings.length * 5 + sizePrices[selectedSize || "Küçük"];
  const isFormValid = name.length >= 3 && selectedSize && selectedDough && selectedToppings.length >= 4;

  const toggleTopping = (topping) => {
    setSelectedToppings((prev) =>
      prev.includes(topping)
        ? prev.filter((item) => item !== topping)
        : [...prev, topping]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !selectedSize || !selectedDough || selectedToppings.length < 4) {
      alert("Lütfen tüm alanları doğru şekilde doldurun.");
      return;
    }

    const orderData = {
      isim: name,
      boyut: selectedSize,
      hamur: selectedDough,
      malzemeler: selectedToppings,
      özel: note,
      adet: quantity,
      toplam: (basePrice + extraPrice) * quantity,
    };

    axios
      .post("https://reqres.in/api/pizza", orderData)
      .then((response) => {
        console.log("Sipariş Alındı:", response.data);
        history.push("/success");
      })
      .catch((error) => {
        console.error("Hata oluştu:", error);
        alert("Siparişiniz alınırken bir hata oluştu.");
      });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} style={{ maxWidth: "600px", margin: "50px auto" }}>
      <h2 style={{ textAlign: "center" }}>Position Absolute Acı Pizza</h2>
      

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <PizzaSizeSelector selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
        <PizzaDoughSelector selectedDough={selectedDough} setSelectedDough={setSelectedDough} />
      </div>
        <PizzaToppings selectedToppings={selectedToppings} toggleTopping={toggleTopping} />
      
        <div style={{ textAlign: "left", marginTop: "20px" }}>
        <h3>Adınız:</h3>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        {showNameError && name.length < 3 && <p style={{ color: "red" }}>Adınız en az 3 karakter olmalıdır.</p>}
      </div>
      <div style={{ display: "flex", gap: "10rem", marginTop: "20px", textAlign: "left" }}>
        <OrderNote note={note} setNote={setNote} />
        <div style={{ flex: "1" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px" }}>
        <OrderQuantity quantity={quantity} setQuantity={setQuantity} />
        <OrderSummary basePrice={basePrice} extraPrice={extraPrice} quantity={quantity} />
      </div>
      <div style={{ textAlign: "right", marginTop: "10px" }}>
        <Button type="submit" disabled={!isFormValid} style={{ width: "50%" }}>Sipariş Ver</Button>
      </div>
    </form>
  );
};
export default PizzaOrderForm;