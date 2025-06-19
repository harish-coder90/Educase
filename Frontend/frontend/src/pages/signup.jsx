

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: false,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'radio' ? value === 'yes' : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/educase/signup', {
        ...formData,
        agency: formData.agency === 'yes',
      });
      console.log('Signup successful:', response.data);
      navigate('/settings');
    } catch (error) {
      console.error('Signup error:', error.response?.data || error.message);
      alert('Signup failed. Please check your details.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" flex flex-col bg-gray-50">
      <div className="flex-grow flex justify-center p-6">
        <div className="w-[300px] text-left space-y-6">
          <h1 className="text-xl font-semibold text-gray-900 mb-2">
            Create your <br />
            PopX account
          </h1>

          <div className="space-y-4 mt-4">
        
            <InputField label="Full Name*" name="fullname" value={formData.fullname} onChange={handleChange} required />

          
            <InputField label="Phone Number*" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
            <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />

    
            <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required />


            <InputField label="Company Name" name="company" value={formData.company} onChange={handleChange} />

            
            <div className="my-[8px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">Are you an agency?</label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="agency"
                    value="yes"
                    checked={formData.agency === 'yes'}
                    onChange={handleChange}
                    className="form-radio text-purple-600"
                  />
                  <span className="text-sm text-gray-700">Yes</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="agency"
                    value="no"
                    checked={formData.agency === 'no'}
                    onChange={handleChange}
                    className="form-radio text-purple-600"
                  />
                  <span className="text-sm text-gray-700">No</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-[240px] flex justify-center mb-6">
        <button
          type="submit"
          className="bg-[#6c25ff] text-white w-[325px] h-[45px] rounded-[5px] font-semibold"
          style={{color:"white"}}
        >
          Create Account
        </button>
      </div>
    </form>
    
  );
};

// Reusable input field component
const InputField = ({ label, name, type = 'text', value, onChange, required }) => (
  <div className="relative w-full mb-6">
    <label
      htmlFor={name}
      className="absolute left-3 -top-2 bg-white text-sm px-[5px] font-medium"
      style={{
        position: 'relative',
        top: '9px',
        left: '8px',
        background: 'white',
        color: 'purple',
      }}
    >
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={`Enter ${label.toLowerCase().replace('*', '').trim()}`}
      className="w-full h-[30px] rounded-[5px] outline-none focus:ring-2 focus:ring-purple-300"
    />
  </div>
);

export default Signup;
