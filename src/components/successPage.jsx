
import Logo from "./logo";
import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

const SuccessPage = () => {
  const history = useHistory();
  const location = useLocation();
const orderData = location.state?.orderData;
  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/");
    }, 100000);

    return () => clearTimeout(timer);
  }, [history]);

  if (!orderData.pizzaName) {
    return (
      <div style={styles.container}>
        <h1>Hata!</h1>
        <p>Sipariş verisi bulunamadı.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <Logo />
      <h3 style={styles.styled}>lezzetin yolda...</h3>
      <h2 style={styles.message}>SİPARİŞİNİZ ALINDI!</h2>
      <hr size="1" style={{width:"50%"}} />
      <div style={styles.orderBox}>
        <p style={styles.name}>{orderData.pizzaName}</p>
        <p style={styles.spec}>Boyut: <strong>{orderData.size}</strong></p>
        <p style={styles.spec}>Hamur: <strong>{orderData.crust}</strong></p>
        <p style={styles.spec}>Ek Malzemeler: <strong>{orderData.toppings ? orderData.toppings.join(","): "Yok"}</strong></p>
        <p>Adet: {orderData.quantity}</p>
        {orderData.note && <p>Not: {orderData.note}</p>}
        </div>
        <div style={styles.priceBox}>
          <h2>Sipariş Toplamı</h2>
        <p>Seçimler {orderData.extraPrice ? orderData.extraPrice : "0.00"}₺</p>
        <p>Toplam {orderData.totalPrice ? orderData.totalPrice : "0.00"}₺</p>
      </div>
      <p>10 saniye içinde anasayfaya yönlendirileceksiniz...</p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#D32F2F",
    color: "#fff",
    alignItems: "center",
    textAlign: "center",
  },
  styled: {
    fontSize: "20px",
    fontWeight: "bold",
    color:"#FDC913",
    fontFamily: "Satisfy",
  },
  message: {
    fontSize: "40px",
    fontFamily:"Barlow",
    fontStyle:"italic",
  },
  orderBox: {
   fontFamily:"Barlow",
   
  },
  name:{
    marginBottom: "3rem",
  },
  spec:{
  

  },
  priceBox: {
   
    fontFamily:"Barlow",
    border: "1px solid #fff",
    width:"fit-content",
    padding: "1rem 2rem",
    alignItems: "center",
    display: "inline-block",
  },
};

export default SuccessPage;