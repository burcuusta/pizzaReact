import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const PizzaSizeSelector = ({ selectedSize, setSelectedSize }) => {
  const sizes = ["Küçük", "Orta", "Büyük"];
  const sizePrices = { Küçük: 0, Orta: 10, Büyük: 20 };
  return (
    <div style={{ display: "inline-block", marginRight: "10rem" }}>
      <h3>Boyut Seç <span style={{ color: "red" }}>*</span></h3>
      {sizes.map((size) => (
        <label key={size} style={{ display: "block", marginBottom: "10px" }}>
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
    <div style={{ display: "inline-block",}}>
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
      <h3>Ek Malzemeler (5₺) <span style={{ color: "red" }}>*</span></h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {toppingsList.map((topping) => (
          <label key={topping} style={{ marginBottom: "10px" }}>
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
    <div style={{ marginTop: "20px" }}>
      <h3>Sipariş Notu</h3>
      <textarea
        placeholder="Siparişe eklemek istediğiniz bir not var mı?"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </div>
  );
};

const OrderQuantity = ({ quantity, setQuantity }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Adet</h3>
      <button
        type="button"
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        style={{ backgroundColor: "yellow" }}
      >
        -
      </button>
      <span style={{ margin: "0 10px" }}>{quantity}</span>
      <button
        type="button"
        onClick={() => setQuantity(quantity + 1)}
        style={{ backgroundColor: "yellow" }}
      >
        +
      </button>
    </div>
  );
};

const OrderSummary = ({ basePrice, extraPrice, quantity }) => {
  const totalPrice = (basePrice + extraPrice) * quantity;
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Sipariş Özeti</h3>
      <p>Ekstralar: {extraPrice.toFixed(2)}₺</p>
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
  const history = useHistory(); 

  const basePrice = 85.5;
  const sizePrices = { Küçük: 0, Orta: 10, Büyük: 20 };
  const extraPrice = selectedToppings.length * 5 + sizePrices[selectedSize || "Küçük"];

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
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "600px", margin: "50px auto", textAlign: "center" }}
    >
      <h2>Position Absolute Acı Pizza</h2>
      <label>
        Adınız:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          minLength="3"
        />
      </label>

      <p>Fiyat: 85.50₺</p>
      <PizzaSizeSelector selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
      <PizzaDoughSelector selectedDough={selectedDough} setSelectedDough={setSelectedDough} />
      <PizzaToppings selectedToppings={selectedToppings} toggleTopping={toggleTopping} />
      <OrderNote note={note} setNote={setNote} />
      <OrderQuantity quantity={quantity} setQuantity={setQuantity} />
      <OrderSummary basePrice={basePrice} extraPrice={extraPrice} quantity={quantity} />
      <button
        type="submit"
        style={{ backgroundColor: "yellow", padding: "10px 20px", border: "none" }}
      >
        Sipariş Ver
      </button>
    </form>
  );
};



export default PizzaOrderForm;
