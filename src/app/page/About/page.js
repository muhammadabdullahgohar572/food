"use client"
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-black mt-[25%] sm:mt-[10%] text-white min-h-screen">
      {/* Header */}
      <header className="text-center py-16 bg-red-600">
        <h1 className="text-5xl text-yellow-400">Contact Us</h1>
      </header>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-red-600 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl text-yellow-400 mb-6">We'd love to hear from you!</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg mb-2">Your Name:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-black text-white border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-white focus:text-black transition duration-300" 
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-lg mb-2">Your Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-black text-white border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-white focus:text-black transition duration-300" 
                required
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-6">
              <label htmlFor="phone" className="block text-lg mb-2">Your Phone Number:</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                className="w-full p-3 bg-black text-white border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-white focus:text-black transition duration-300" 
                placeholder="123-456-7890"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-lg mb-2">Your Message:</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows="6" 
                className="w-full p-3 bg-black text-white border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-white focus:text-black transition duration-300" 
                required
              />
            </div>

            <button type="submit" className="w-full py-3 bg-yellow-400 text-black font-bold rounded-md hover:bg-red-600 transition duration-300">Send Message</button>
          </form>
        </div>
      </div>

      
    </div>
  );
};

export default ContactUs;
