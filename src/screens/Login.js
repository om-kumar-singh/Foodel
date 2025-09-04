import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password
        })
      });
      const json = await response.json();
      
      if (!json.success) {
        setError(json.errors || "Invalid credentials");
      } else {
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        navigate("/");
      }
    } catch (error) {
      setError("Server error. Please try again later.");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0" style={{ overflow: 'hidden', borderRadius: '15px' }}>
            <div className="card-header text-white text-center py-4" style={{ backgroundColor: '#10b981' }}>
              <h2 className="fw-bold mb-0">Welcome Back!</h2>
              <p className="mb-0 mt-1">Login to your GoFood account</p>
            </div>
            <div className="card-body p-5" style={{ backgroundColor: '#f0f9f6' }}>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-bold" style={{ color: '#374151' }}>Email address</label>
                  <input type="email" className="form-control py-2 border-0 shadow-sm" style={{ backgroundColor: '#ffffff' }} id="email" name="email" value={credentials.email} onChange={onChange} placeholder="Enter your email" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-bold" style={{ color: '#374151' }}>Password</label>
                  <input type="password" className="form-control py-2 border-0 shadow-sm" style={{ backgroundColor: '#ffffff' }} id="password" name="password" value={credentials.password} onChange={onChange} placeholder="Enter your password" required />
                </div>
                <div className="d-grid gap-2 mt-5">
                  <button type="submit" className="btn btn-lg rounded-pill fw-medium py-3" style={{ backgroundColor: '#10b981', color: 'white', boxShadow: '0 4px 6px rgba(16, 185, 129, 0.25)' }}>Login</button>
                </div>
              </form>
            </div>
            <div className="card-footer text-center py-4" style={{ backgroundColor: '#f1f5f9' }}>
              <p className="mb-0" style={{ color: '#4b5563' }}>Don't have an account? <Link to="/createuser" style={{ color: '#10b981', fontWeight: 'bold', textDecoration: 'none' }}>Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
