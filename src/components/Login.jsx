// // src/components/Login.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = ({ history }) => {
//   const [credentials, setCredentials] = useState({ username: '', password: '' });

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/auth/login', credentials);
//       localStorage.setItem('token', response.data.token);
//       history.push('/dashboard');
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;









// src/components/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', credentials);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard'); // Redirect using navigate
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
