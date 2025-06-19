
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const baseUrl = import.meta.env.RENDER_URL

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${baseUrl}/api/educase/login`, formData);
      console.log('Login successful:', response.data);
      navigate('/settings');
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="h-full flex justify-center p-6 bg-gray-50">
      <div className="w-[300px] text-left space-y-6">
        <h1 className="text-xl font-semibold text-gray-900 mb-2">
          Sign in to your <br />
          PopX account
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit.
        </p>

        <div className="space-y-4 mt-4">
          
          <div className="relative w-full mb-6">
            <label
              htmlFor="email"
              className="absolute left-3 -top-2 bg-white text-sm px-[5px] font-medium"
              style={{
                position: 'relative',
                top: '9px',
                left: '8px',
                background: 'white',
                margin: '0 5px',
                color: 'purple'
              }}
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-[42px] rounded-[5px] outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

    
          <div className="relative w-full mb-6 rounded-3xl">
            <label
              htmlFor="password"
              className="absolute left-3 -top-2 bg-white text-sm px-[5px] font-medium"
              style={{
                position: 'relative',
                top: '9px',
                left: '8px',
                background: 'white',
                margin: '0 5px',
                color: 'purple'
              }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-[42px] rounded-[5px] outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="bg-[#6c25ff] text-[20px] text-white w-[308px] h-[45px] px-5 my-[20px] rounded-[5px] font-semibold"
            style={{ color: 'white' }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
