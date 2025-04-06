import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure the file path is correct.

const LoginPage = () => {
  const [loginDetails, setLoginDetails] = useState({ username: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [role, setRole] = useState(''); // Track if user is Admin or Customer

  const navigate = useNavigate(); // React Router navigation hook

  const adminCredentials = { username: 'admin', password: 'admin123' }; // Admin username and password
  const customerCredentials = { username: 'customer', password: 'customer123' }; // Customer username and password

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission reload
    const { username, password } = loginDetails;

    if (username === adminCredentials.username && password === adminCredentials.password) {
      console.log('Logged in as Admin');
      alert('Logged in as Admin!');
      setIsLoggedIn(true); // Set login state to true
      setRole('Admin'); // Set role to Admin
      navigate('/AdminPage');
    } else if (username === customerCredentials.username && password === customerCredentials.password) {
      console.log('Logged in as Customer');
      alert('Logged in as Customer!');
      setIsLoggedIn(true); // Set login state to true
      setRole('Customer'); // Set role to Customer
      navigate('/');
    } else {
      alert('Invalid credentials! Please try again.');
    }
  };

  const handleLogout = () => {
    setLoginDetails({ username: '', password: '' }); // Clear login details
    setIsLoggedIn(false); // Set login state to false
    setRole(''); // Clear the role
    alert('You have successfully logged out!');
    navigate('/'); // Redirect back to the login page
  };

  const handleRegister = () => {
    console.log('Redirecting to Register Page...');
    navigate('/register'); // Navigate to Register Page
  };

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <>
          <h1>Login</h1>
          <form>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={loginDetails.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginDetails.password}
              onChange={handleChange}
              required
            />
            <div className="button-group">
              <button type="submit" onClick={handleLogin}>
                Login
              </button>
              <button type="button" onClick={handleRegister}>
                Sign Up
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <h1>Welcome, {role}!</h1>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default LoginPage;
