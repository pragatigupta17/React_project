import React, { useState } from "react";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input type="text"id="name"name="name"value={formData.name} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email"id="email"name="email"value={formData.email} onChange={handleChange} required/>
            
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password"id="password"name="password"value={formData.password} onChange={handleChange} required/>
            </div>
        <button type="submit"><a herf="/login">Sign Up</a></button>
      </form>
      <p>Already have an account? <a href="/login">Log in here</a></p>
    </div>
  );
};

export default Signup;
