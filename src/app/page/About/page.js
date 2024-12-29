"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
    phoneNumber: "",
  });
  const router = useRouter(); // Use the router from next/navigation
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("https://foodbackhand.vercel.app/contectus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          message: formData.message,
          PhoneNumber: formData.phoneNumber,
        }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong, please try again.");
      }

      setSuccess(true);
      setFormData({ username: "", email: "", message: "", phoneNumber: "" });
      alert("Your Message Send ")
      router.push("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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

          

          {error && (
            <div className="mb-6 text-red-500">
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="username" className="block text-lg mb-2">
                Your Name:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
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
              <label className="block text-sm font-medium text-gray-700" htmlFor="phoneNumber">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                pattern="03[0-9]{9}"
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
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
