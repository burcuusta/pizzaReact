import React from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import HomePage from "./components/homePage";
import PizzaOrderPage from "./components/PizzaOrderPage";
import Header from "./components/header";
import SuccessPage from "./components/successPage";
import "./App.css";

const App = () => {
  const location = useLocation();
  const excludedPaths = ["/success", "/"];

  return (
    <>
    
    {!excludedPaths.includes(location.pathname) && <Header />} 
      <main>
      <Switch>
  <Route exact path="/" component={HomePage} />
  <Route path="/siparis" component={PizzaOrderPage} />
  <Route path="/success" component={SuccessPage} />
</Switch>
      </main>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
