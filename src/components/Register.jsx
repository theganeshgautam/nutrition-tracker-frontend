// src/components/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    age: '',
    sex: '',
    height: '',
    weight: '',
    phoneNumber: '',
    activityLevel: '',
    role: 'user'
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // useNavigate for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/auth/register', formData);
      setMessage('Registration successful! Redirecting to the landing page...');
      setTimeout(() => {
        navigate('/'); // Redirect to landing page after successful registration
      }, 1000); // 2-second delay to show the message
    } catch (error) {
      setMessage(`Registration failed: ${error.response?.data?.error || 'An error occurred.'}`);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
      <h2>Register</h2>
      {message && <div style={{ marginBottom: '20px', color: 'red' }}>{message}</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <input type="text" name="sex" placeholder="Sex" value={formData.sex} onChange={handleChange} required />
        <input type="number" name="height" placeholder="Height (cm)" value={formData.height} onChange={handleChange} required />
        <input type="number" name="weight" placeholder="Weight (kg)" value={formData.weight} onChange={handleChange} required />
        <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
        <input type="text" name="activityLevel" placeholder="Activity Level" value={formData.activityLevel} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

