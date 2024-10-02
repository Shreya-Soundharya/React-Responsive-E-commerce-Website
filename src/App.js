import React, { useState } from 'react';
import './App.css';
import ProductQuantity from './components/ProductQuantity';
import LoginSignup from './components/LoginSignup.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import Footer from './components/Footer.js';
import Checkout from './components/Checkout.js';
import { Link } from 'react-router-dom';


const products = [
  { id: 1, name: 'Black Clover Keychain', description: "Asta's Anti-Magic Sword", price: 10.00, image: '/images/bc1.png' },
  { id: 2, name: 'Black Clover Mug', description: "Black Bull's Team Mug", price: 20.00, image: '/images/bc2.png' },
  { id: 3, name: 'Black Clover Necklace', description: 'Five Clover Necklace', price: 15.00, image: '/images/bc3.png' },
  { id: 4, name: 'Black Clover Poster', description: "Asta's Demon Form Poster", price: 15.00, image: '/images/bc4.jpg' },
  { id: 5, name: 'Attack on Titan Cape', description: 'Survey Corps Robe', price: 45.00, image: '/images/aot1.png' },
  { id: 6, name: 'Attack on Titan Keychain', description: 'Key to Basement Keychain', price: 25.00, image: '/images/aot2.png' },
  { id: 7, name: 'Attack on Titan Necklace', description: 'Survey Corps Symbol', price: 18.00, image: '/images/aot3.png' },
  { id: 8, name: 'Attack on Titan Poster', description: 'Happy Childhood Poster', price: 22.00, image: '/images/aot4.png' },
  { id: 9, name: 'One Piece Keycaps', description: 'Keycaps of Ace,Law & Luffy', price: 60.00, image: '/images/op1.png' },
  { id: 10, name: 'One Piece Keychain', description: 'Keychain of Law', price: 15.00, image: '/images/op2.jpg' },
  { id: 11, name: 'One Piece Necklace', description: " Pendant of Ace's Cap", price: 20.00, image: '/images/op3.jpg' },
  { id: 12, name: 'One Piece Poster', description: 'Poster of Zoro', price: 25.00, image: '/images/op4.jpg' },
  { id: 13, name: 'Jujutsu Kaisen Keycaps', description: 'Keycaps of Gojo & Geto', price: 35.00, image: '/images/jjk1.png' },
  { id: 14, name: 'Jujutsu Kaisen Keychain', description: 'Keychain of Gojo Satoru', price: 12.00, image: '/images/jjk2.png' },
  { id: 15, name: 'Jujutsu Kaisen Keychain', description: 'Keychain of FToji', price: 20.00, image: '/images/jjk3.png' },
  { id: 16, name: 'Jujutsu Kaisen Poster', description: 'JJK Poster', price: 45.00, image: '/images/jjk4.png' },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]); // State to manage cart items
  const [showLoginSignup, setShowLoginSignup] = useState(false); // State to manage login/signup visibility
  const [showCheckout, setShowCheckout] = useState(false); // State to manage checkout page visibility

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search submitted:', searchTerm);
  };

  // Function to add a product to the cart
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, increment its quantity
      existingProduct.quantity += product.quantity; // Add the specified quantity
      setCart([...cart]); // Trigger a re-render
    } else {
      // If it's a new product, add it to the cart with the specified quantity
      setCart([...cart, product]);
    }
  };

  // Calculate total items in the cart
  const cartTotalItems = cart.reduce((total, product) => total + product.quantity, 0);

  // Calculate total price in the cart
  const cartTotalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          {/* Logo wrapped in Link to redirect to homepage */}
          <div className="logo">
            <Link to="/">
              <img src="/images/logo.jpg" alt="Logo" />
            </Link>
          </div>

          {/* Centered "Welcome" and search box */}
          <div className="header-content">
            <h1>Welcome to Our E-commerce Store</h1>
            <form onSubmit={handleSubmit} className="search-form">
              <input
                type="text"
                placeholder="Search products"
                value={searchTerm}
                onChange={handleSearch}
              />
              <button type="submit">Search</button>
            </form>
          </div>

          {/* Icons on the right */}
          <div className="header-icons">
            {/* Create Account Icon */}
            <FontAwesomeIcon icon={faUser} className="icon" title="Create Account" onClick={() => setShowLoginSignup(true)} />

            {/* Cart Icon with Total */}
            <div className="cart-icon" onClick={() => setShowCheckout(!showCheckout)}>
              <FontAwesomeIcon icon={faShoppingCart} className="icon" title="View Cart" />
              <span className="cart-total">({cartTotalItems}) - ${cartTotalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Toggle between product list and checkout page */}
      <main>
        {showCheckout ? (
          <Checkout cart={cart} />
        ) : (
          <>
            <h2>Our Products</h2>
            <div className="product-list">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p><strong>${product.price.toFixed(2)}</strong></p>
                    <ProductQuantity product={product} addToCart={addToCart} />
                  </div>
                ))
              ) : (
                <p>No products found.</p>
              )}
            </div>
          </>
        )}
      </main>

      {/* Show Login/Signup modal if triggered */}
      {showLoginSignup && <LoginSignup onClose={() => setShowLoginSignup(false)} />}
      <Footer />
    </div>
  );
}

export default App;
