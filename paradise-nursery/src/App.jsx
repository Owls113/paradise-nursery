import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

const Navbar = () => {
  const cartItems = store.getState().cart.cartItems;
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
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
  );
};

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>🌿 Paradise Nursery</h1>
        <p>
          Bring nature into your home with our curated collection of beautiful,
          healthy houseplants. Your indoor paradise starts here.
        </p>
        <Link to="/plants">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/plants" element={<ProductList />} />
            <Route path="/cart" element={<CartItem />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
