import React, { useState } from 'react';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <h1>Paradise Nursery</h1>
        <button onClick={() => setShowCart(false)}>Bitkiler</button>
        <button onClick={() => setShowCart(true)}>Sepet</button>
      </nav>
      {showCart ? <CartItem /> : <ProductList />}
    </div>
  );
}
export default App;