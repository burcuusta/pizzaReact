import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import PizzaOrderForm from './components/orderForm'
import Header from './components/header'


function App() {
  return (
    
    <div className="App">
       <Header />
      <PizzaOrderForm />
    </div>
  );
}

export default App;