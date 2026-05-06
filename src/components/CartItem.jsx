import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/CartSlice';

export const CartItem = () => {
  const cart = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      {cart.map(item => (
        <div key={item.name}>
          <p>{item.name} - ${item.price} x {item.quantity}</p>
          <button onClick={() => dispatch(updateQuantity({name: item.name, quantity: item.quantity + 1}))}>+</button>
          <button onClick={() => dispatch(updateQuantity({name: item.name, quantity: Math.max(1, item.quantity - 1)}))}>-</button>
          <button onClick={() => dispatch(removeItem(item.name))}>Sil</button>
        </div>
      ))}
      <h3>Toplam: ${total}</h3>
      <button onClick={() => alert("Yakında geliyor!")}>Ödeme Yap</button>
    </div>
  );
};