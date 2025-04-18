import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../assets/images/Company Banner.jpg'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('isLoggedIn', true);
      navigate('/Stocks');
    } else {
      alert('Please enter credentials');
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      
      {/* Left side: Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 p-2 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-600">Signup</a>
          </p>
        </div>
      </div>

      {/* Right side: Company Banner */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8 border-l-2 border-gray-200">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img
            src={banner}
            alt="Company Banner"
            className="w-full h-[80%] object-cover rounded-lg shadow"
          />
          <h2 className="text-4xl font-bold text-blue-700 mt-4">Vibin Crackers</h2>
          <p className="text-gray-500 mt-2 text-center max-w-md px-4">
            Welcome to the Vibin Crackers ERP system. Please log in to continue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
