import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from '../store/CartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector(state => state.cart);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleIncrease = (id, currentQty) => {
    dispatch(updateQuantity({ id, quantity: currentQty + 1 }));
  };

  const handleDecrease = (id, currentQty) => {
    if (currentQty > 1) {
      dispatch(updateQuantity({ id, quantity: currentQty - 1 }));
    } else {
      dispatch(removeItem(id));
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon! This feature is under development.');
  };

  return (
    <div>
      {/* Navbar with links to Home, Plants, and Cart */}
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

      <div className="cart-container">
        <h1>🛒 Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty. Start adding some beautiful plants!</p>
            <Link to="/plants" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Show total cart amount */}
            <div className="cart-summary" style={{ marginBottom: '20px' }}>
              <div className="cart-total">
                Total Amount: ${totalAmount.toFixed(2)}
              </div>
            </div>

            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  {/* Thumbnail */}
                  <div className="cart-item-thumbnail">{item.thumbnail}</div>

                  {/* Name and unit price */}
                  <div className="cart-item-details">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-unit-price">
                      ${item.price.toFixed(2)} each
                    </div>
                  </div>

                  {/* Quantity controls (+/- buttons) */}
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => handleDecrease(item.id, item.quantity)}
                    >
                      −
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleIncrease(item.id, item.quantity)}
                    >
                      +
                    </button>
                  </div>

                  {/* Total cost for each plant */}
                  <div className="cart-item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  {/* Delete button */}
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="cart-total">
                Total: ${totalAmount.toFixed(2)}
              </div>
              <div className="cart-actions">
                {/* Checkout button with "Coming Soon" */}
                <button className="checkout-btn" onClick={handleCheckout}>
                  Checkout
                </button>
                {/* Continue shopping button */}
                <Link to="/plants" className="continue-shopping-btn">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartItem;
