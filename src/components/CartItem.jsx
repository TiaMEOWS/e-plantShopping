import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/CartSlice';

const CartItem = () => {
  const cart = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  // 1. Her öğenin toplam maliyetini hesaplayan fonksiyon (Kriter gereği)
  const calculateTotalCost = (item) => {
    return item.price * item.quantity;
  };

  // 2. Miktarı yöneten fonksiyon (0 olursa silme mantığı ile)
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name)); // Miktar 0'a düşerse sil
    }
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const totalCartAmount = cart.reduce((sum, item) => sum + calculateTotalCost(item), 0);

  return (
    <div className="cart-container">
      <h2>Toplam Sepet Tutarı: ${totalCartAmount}</h2>
      {cart.map(item => (
        <div key={item.name} className="cart-item">
          <img src={item.image} alt={item.name} width="50" />
          <span>{item.name} - ${item.price}</span>
          <p>Toplam Maliyet: ${calculateTotalCost(item)}</p> {/* Her öğenin maliyeti */}
          <button onClick={() => handleDecrement(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleIncrement(item)}>+</button>
          <button onClick={() => dispatch(removeItem(item.name))}>Sil</button>
        </div>
      ))}
      <button onClick={() => alert('Yakında Geliyor!')}>Ödeme Yap</button>
    </div>
  );
};
export default CartItem;
