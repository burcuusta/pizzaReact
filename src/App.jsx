import React from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import HomePage from "./components/homePage";
import PizzaOrderPage from "./components/PizzaOrderPage";
import Header from "./components/header";

const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Header yalnızca anasayfa dışında gösterilecek */}
      {location.pathname !== "/" && <Header />}
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/siparis" component={PizzaOrderPage} />
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
