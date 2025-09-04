import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation
        })
      });
      const json = await response.json();

      if (!json.success) {
        setError(json.errors || "Failed to create account");
      } else {
        // Store authentication data in localStorage
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        
        setSuccess("Account created successfully! Redirecting to home page...");
        setError("");
        setTimeout(() => {
          navigate("/");
        }, 2000);
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
              <h2 className="fw-bold mb-0">Create Your GoFood Account</h2>
              <p className="mb-0 mt-1">Fresh food delivered to your doorstep</p>
            </div>
            <div className="card-body p-5" style={{ backgroundColor: '#f0f9f6' }}>
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label fw-bold" style={{ color: '#374151' }}>Name</label>
                  <input type="text" className="form-control py-2 border-0 shadow-sm" style={{ backgroundColor: '#ffffff' }} id="name" name="name" value={credentials.name} onChange={onChange} placeholder="Enter your name" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-bold" style={{ color: '#374151' }}>Email address</label>
                  <input type="email" className="form-control py-2 border-0 shadow-sm" style={{ backgroundColor: '#f9fafb' }} id="email" name="email" value={credentials.email} onChange={onChange} placeholder="Enter your email" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-bold" style={{ color: '#374151' }}>Password</label>
                  <input type="password" className="form-control py-2 border-0 shadow-sm" style={{ backgroundColor: '#f9fafb' }} id="password" name="password" value={credentials.password} onChange={onChange} placeholder="Create a password" required />
                  <div className="form-text" style={{ color: '#6b7280' }}>Password must be at least 6 characters long</div>
                </div>
                <div className="mb-4">
                  <label htmlFor="geolocation" className="form-label fw-bold" style={{ color: '#374151' }}>Address</label>
                  <input type="text" className="form-control py-2 border-0 shadow-sm" style={{ backgroundColor: '#f9fafb' }} id="geolocation" name="geolocation" value={credentials.geolocation} onChange={onChange} placeholder="Enter your address" required />
                </div>
                <div className="d-grid gap-2 mt-5">
                  <button type="submit" className="btn btn-lg rounded-pill fw-medium py-3" style={{ backgroundColor: '#10b981', color: 'white', boxShadow: '0 4px 6px rgba(16, 185, 129, 0.25)' }}>Create Account</button>
                </div>
              </form>
            </div>
            <div className="card-footer text-center py-4" style={{ backgroundColor: '#f1f5f9' }}>
              <p className="mb-0" style={{ color: '#4b5563' }}>Already have an account? <Link to="/login" style={{ color: '#10b981', fontWeight: 'bold', textDecoration: 'none' }}>Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
