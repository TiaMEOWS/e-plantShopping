import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/CartSlice'; // Yolu kontrol et

const plants = [
  { id: 1, name: "Aloe Vera", price: 15, category: "Succulents", image: "url1" },
  { id: 2, name: "Snake Plant", price: 20, category: "Indoor", image: "url2" },
  { id: 3, name: "Cactus", price: 10, category: "Succulents", image: "url3" },
  { id: 4, name: "Fern", price: 25, category: "Indoor", image: "url4" },
  { id: 5, name: "Basil", price: 8, category: "Outdoor", image: "url5" },
  { id: 6, name: "Lavender", price: 12, category: "Outdoor", image: "url6" }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      {/* Navbar Görev 6 Kriteri */}
      <nav className="navbar">
        <a href="/">Ana Sayfa</a> | <a href="/products">Bitkiler</a> | <a href="/cart">Sepet</a>
      </nav>

      {/* Kategori Gruplama Görev 6 Kriteri */}
      {["Succulents", "Indoor", "Outdoor"].map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>
          {plants.filter(p => p.category === cat).map(p => (
            <div key={p.name}>
              <img src={p.image} alt={p.name} />
              <h3>{p.name} - ${p.price}</h3>
              <button 
                disabled={cartItems.some(i => i.name === p.name)}
                onClick={() => handleAddToCart(p)}>
                {cartItems.some(i => i.name === p.name) ? "Eklendi" : "Sepete Ekle"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default ProductList;
