// ProductQuantity.js
import React, { useState } from "react";

function ProductQuantity({ product, addToCart }) {
  // Initialize state for quantity
  const [quantity, setQuantity] = useState(0);

  // Function to handle increment
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle decrement
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  // Function to handle adding to cart
  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({ ...product, quantity });
      setQuantity(0); // Reset quantity after adding to cart
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        {/* Decrease Button */}
        <button onClick={decreaseQuantity} style={styles.button}>
          -
        </button>

        {/* Display Current Quantity */}
        <span style={styles.quantityDisplay}>{quantity}</span>

        {/* Increase Button */}
        <button onClick={increaseQuantity} style={styles.button}>
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button onClick={handleAddToCart} style={styles.addToCartButton}>
        Add {quantity} to Cart
      </button>
    </div>
  );
}

// Simple inline styles for the buttons and container
const styles = {
  container: {
    border: "1px solid #ddd",
    width: "200px",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0",
  },
  button: {
    padding: "10px",
    fontSize: "18px",
    cursor: "pointer",
  },
  quantityDisplay: {
    margin: "0 10px",
    fontSize: "18px",
  },
  addToCartButton: {
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default ProductQuantity;
