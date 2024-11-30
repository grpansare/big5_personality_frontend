import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        {/* Image Section */}
        <div className="image-section">
          <img
            src="/big-five-personality.webp" 
            alt="Welcome"
            className="welcome-image"
          />
        </div>

        {/* Form Section */}
        <div className="form-section">
          <h5>🧠<br/> BIG 5<br/>PERSONALITY TEST</h5>
          <h2>Login</h2>
          <form>
            {/* Username Input */}
            <div className="input-group flex items-center">
              <input
                type="text"
                placeholder="Username"
                className="input-box mb-3"
                required
              />
              <span className="icon user-icon">👤</span>
            </div>

            {/* Password Input */}
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                className="input-box mb-3"
                required
              />
              <span className="icon lock-icon">🔒</span>
            </div>

            {/* Login Button */}
            <button type="submit" className="login-button">
              <i className="button-icon">🔑</i> Login
            </button>

            {/* Links */}
            <div className="login-links">
              <a href="#" className="forgot-password">Forgot Password?</a>
              <a href="#" className="register-link">New user? Register here</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
