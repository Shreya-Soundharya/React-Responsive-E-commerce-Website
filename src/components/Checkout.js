// Checkout.js
import React from 'react';

const Checkout = ({ cart }) => {
  // Calculate the total price
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>${(product.price * product.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="checkout-total">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Checkout;
