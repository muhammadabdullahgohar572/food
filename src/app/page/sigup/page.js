"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";

const Signup = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [Phone_Number, setPhoneNumber] = useState('');
  const router = useRouter(); // Use the router from next/navigation

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle signup logic here (e.g., API call)
    try {
      const response = await fetch('https://foodbackhand.vercel.app/signup', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, location, Phone_Number }) 
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const data = await response.json();
      // Handle successful signup (e.g., display success message)
      console.log('Signup successful:', data); 
      router.push("/");

    } catch (error) {
      console.error('Signup error:', error);
      // Handle signup error (e.g., display error message)
    }
  };

  return (
    <div className="flex pt-[15%] min-h-screen items-center justify-center bg-yellow-50">
      <div className="bg-red-500 p-10 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-6">Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={username}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-white">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-white">
              Location:
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-white">
              Phone Number:
            </label>
            <input
              type="tel" 
              id="phoneNumber"
              value={Phone_Number}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-white hover:bg-gray-100 text-red-500 font-bold py-2 px-4 rounded"
          >
            Signup
          </button>
        </form>
        <div className="mt-4">
          <p className="text-white">
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;