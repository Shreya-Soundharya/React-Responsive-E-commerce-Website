// LoginSignup.js
import React, { useState } from 'react';
import styles from './LoginSignup.css'; // Import the CSS Module

function LoginSignup({ onClose }) {
  const [isLogin, setIsLogin] = useState(true); // Track if in login or signup mode
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login with:', formData.email, formData.password);
      // Implement login logic here (e.g., API call)
    } else {
      console.log('Sign Up with:', formData.name, formData.email, formData.password);
      // Implement signup logic here (e.g., API call)
    }
    onClose(); // Close the form after submission
  };

  return (
    <div className="overlay">
      <div className="form-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field" // Add the class for styling
              />
            </div>
          )}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field" // Add the class for styling
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input-field" // Add the class for styling
            />
          </div>
          <button type="submit" className="login-signup-button">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <span onClick={() => setIsLogin(!isLogin)} className="toggle-link">
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
}

export default LoginSignup;
