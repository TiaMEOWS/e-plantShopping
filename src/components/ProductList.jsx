import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';

const plants = [
  { name: "Aloe Vera", price: 15, category: "Succulents" },
  { name: "Snake Plant", price: 20, category: "Indoor" },
  { name: "Cactus", price: 10, category: "Succulents" },
  { name: "Fern", price: 25, category: "Indoor" },
  { name: "Basil", price: 8, category: "Outdoor" },
  { name: "Lavender", price: 12, category: "Outdoor" }
];

export const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  return (
    <div>
      {plants.map(p => (
        <div key={p.name}>
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button 
            disabled={cartItems.some(i => i.name === p.name)}
            onClick={() => dispatch(addItem(p))}>
            {cartItems.some(i => i.name === p.name) ? "Eklendi" : "Sepete Ekle"}
          </button>
        </div>
      ))}
    </div>
  );
};