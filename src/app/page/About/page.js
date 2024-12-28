"use client";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent
    const requestData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      // Send POST request to the backend
      const response = await fetch(
        "https://foodbackhand.vercel.app/contectus",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Message sent successfully:", data);
        // You can display a success message or clear the form here
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form fields
      } else {
        console.error("Error submitting form:", response);
        // Handle error response (e.g., display an error message)
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle network error or other issues
      alert("Network error. Please try again later.");
    }
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
          <h2 className="text-3xl text-yellow-400 mb-6">
            We'd love to hear from you!
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg mb-2">
                Your Name:
              </label>
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
              <label htmlFor="email" className="block text-lg mb-2">
                Your Email:
              </label>
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

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="03[0-9]{9}" // This pattern ensures the phone number starts with 03 and has 9 digits
                className="w-full p-3 bg-black text-white border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-white focus:text-black transition duration-300"
                placeholder="03xxxxxxxx"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-lg mb-2">
                Your Message:
              </label>
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

            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-black font-bold rounded-md hover:bg-blue-600  hover:text-white transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
