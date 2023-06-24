import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = item => {
    setCartItems([...cartItems, item]);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          My Ecommerce Website
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  <FiSearch />
                </button>
              </div>
            </div>
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <FiShoppingCart />
                {cartItems.length > 0 && (
                  <span className="badge badge-pill badge-danger ml-1">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FiUser />
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/account">
                  My Account
                </Link>
                <Link className="dropdown-item" to="/settings">
                  Settings
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/logout">
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;