import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';

export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();
  let data = useCart();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-sm" style={{ backgroundColor: '#10b981' }}>
        <div className="container">
          <Link className="navbar-brand fs-2 fw-bold text-white" to="/">
            <span style={{ fontFamily: 'Poppins, sans-serif' }}>GoFood</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {(localStorage.getItem("authToken")) ?
                <li className="nav-item">
                  <Link className="nav-link text-white fw-medium mx-1 px-3" aria-current="page" to="/myOrder">
                    My Orders
                  </Link>
                </li>
                : ""}
            </ul>
            {(!localStorage.getItem("authToken")) ?
              <div className="d-flex">
                <Link className="btn mx-2 px-4 rounded-pill fw-medium"
                  style={{ backgroundColor: '#ffffff', color: '#10b981' }}
                  to="/login">Login</Link>
                <Link className="btn mx-2 px-4 rounded-pill fw-medium"
                  style={{ backgroundColor: '#f8fafc', color: '#10b981', border: '2px solid #ffffff' }}
                  to="/createuser">Sign Up</Link>
              </div>
              :
              <div className="d-flex align-items-center">
                <button className="btn rounded-pill mx-2 px-4 fw-medium d-flex align-items-center"
                  style={{ backgroundColor: '#ffffff', color: '#10b981' }}
                  onClick={() => { setCartView(true) }}>
                  <i className="bi bi-cart me-2"></i> Cart {" "}
                  {data.length > 0 ?
                    <Badge pill bg="danger" className="ms-2">{data.length}</Badge> : null}
                </button>
                <button className="btn rounded-pill mx-2 px-4 fw-medium"
                  style={{ backgroundColor: '#f8fafc', color: '#ef4444', border: '2px solid #ffffff' }}
                  onClick={handleLogout}>
                  Logout
                </button>
              </div>
            }
          </div>
        </div>
      </nav>
      {cartView ? <Modal onClose={() => setCartView(false)}><Cart /></Modal> : null}
    </div>
  );
}
