import React from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import HomePage from "/src/components/homePage/homePage.jsx";
import PizzaOrderPage from "/src/components/main/PizzaOrderPage.jsx";
import Header from "./components/header";
import SuccessPage from "./components/successPage";
import CategoryPage from "/src/components/main/categoryPage.jsx";
import ProductDetailPage from "/src/components/main/productDetails.jsx";
import "./App.css";
import Footer from "./components/footer";

const App = () => {
  const location = useLocation();
  const excludedPaths = ["/success", "/"];

  return (
    <>
    
    {!excludedPaths.includes(location.pathname) && <Header />} 
      <main>
      <Switch>
  <Route exact path="/" component={HomePage} />
  <Route path="/urunler" component={CategoryPage} />
  <Route path="/kategori/:categoryName" component={CategoryPage} />
  <Route path="/urun/:productId" component={ProductDetailPage} />
  <Route path="/siparis" component={PizzaOrderPage} />
  <Route path="/success" component={SuccessPage} />
</Switch>
      </main>
      <Footer />
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
