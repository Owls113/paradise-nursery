import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../store/CartSlice';

const plantsData = {
  indoor: [
    { id: 1, name: 'Monstera Deliciosa', price: 25.00, thumbnail: '🌿', category: 'Indoor' },
    { id: 2, name: 'Snake Plant', price: 18.00, thumbnail: '🪴', category: 'Indoor' },
    { id: 3, name: 'Fiddle Leaf Fig', price: 35.00, thumbnail: '🌳', category: 'Indoor' },
    { id: 4, name: 'Pothos', price: 15.00, thumbnail: '🍃', category: 'Indoor' },
    { id: 5, name: 'Peace Lily', price: 22.00, thumbnail: '🌸', category: 'Indoor' },
    { id: 6, name: 'Rubber Plant', price: 28.00, thumbnail: '🌲', category: 'Indoor' },
    { id: 7, name: 'Spider Plant', price: 12.00, thumbnail: '🕷️', category: 'Indoor' },
  ],
  outdoor: [
    { id: 8, name: 'Rose Bush', price: 30.00, thumbnail: '🌹', category: 'Outdoor' },
    { id: 9, name: 'Lavender', price: 20.00, thumbnail: '💜', category: 'Outdoor' },
    { id: 10, name: 'Hydrangea', price: 32.00, thumbnail: '🌺', category: 'Outdoor' },
    { id: 11, name: 'Gardenia', price: 27.00, thumbnail: '🌼', category: 'Outdoor' },
    { id: 12, name: 'Jasmine', price: 24.00, thumbnail: '🌻', category: 'Outdoor' },
    { id: 13, name: 'Bougainvillea', price: 26.00, thumbnail: '🌷', category: 'Outdoor' },
    { id: 14, name: 'Hibiscus', price: 23.00, thumbnail: '🏵️', category: 'Outdoor' },
  ],
  succulents: [
    { id: 15, name: 'Aloe Vera', price: 16.00, thumbnail: '🌵', category: 'Succulents' },
    { id: 16, name: 'Echeveria', price: 14.00, thumbnail: '🪷', category: 'Succulents' },
    { id: 17, name: 'Jade Plant', price: 19.00, thumbnail: '💎', category: 'Succulents' },
    { id: 18, name: 'String of Pearls', price: 21.00, thumbnail: '📿', category: 'Succulents' },
    { id: 19, name: 'Zebra Plant', price: 17.00, thumbnail: '🦓', category: 'Succulents' },
    { id: 20, name: 'Burro's Tail', price: 15.00, thumbnail: '🐴', category: 'Succulents' },
    { id: 21, name: 'Haworthia', price: 13.00, thumbnail: '⭐', category: 'Succulents' },
  ],
};

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const [addedItems, setAddedItems] = useState(new Set());

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems(prev => new Set(prev).add(plant.id));
  };

  const isAdded = (id) => addedItems.has(id) || cartItems.some(item => item.id === id);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      {/* Navbar with cart icon */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">🌿 Paradise Nursery</Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            <span className="cart-icon">
              🛒
              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}
            </span>
          </Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <div className="product-list-container">
        <h1>🌿 Our Plant Collection</h1>

        {Object.entries(plantsData).map(([category, plants]) => (
          <div key={category} className="category-section">
            <h2 className="category-title">
              {category === 'indoor' && '🏠 '}
              {category === 'outdoor' && '🌳 '}
              {category === 'succulents' && '🌵 '}
              {category.charAt(0).toUpperCase() + category.slice(1)} Plants
            </h2>
            <div className="products-grid">
              {plants.map(plant => (
                <div key={plant.id} className="product-card">
                  <div className="product-thumbnail">{plant.thumbnail}</div>
                  <div className="product-info">
                    <div className="product-name">{plant.name}</div>
                    <div className="product-price">${plant.price.toFixed(2)}</div>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(plant)}
                      disabled={isAdded(plant.id)}
                    >
                      {isAdded(plant.id) ? '✓ Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
