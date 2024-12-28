"use client";
// pages/cart.js
import { useState } from "react";
import no from "../img/Navbar/1734515294-chk-corn-soup.webp";
import Image from "next/image";
export default function Cart() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const itemPrice = 299;
  const taxRate = 0.15;
  const deliveryFee = 100;
  const tax = itemPrice * taxRate;
  const total = itemPrice * quantity + tax + deliveryFee;

  return (
    <div className="flex text-white bg-black justify-center md:mt-[12%] mt-[35%] ssml:mt-[17%] items-center min-h-screen ">
      <div className="bg-gray-800 border border-gray-700  p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <div className="flex items-center justify-between mb-4">
          <Image
            src={no}
            alt="Chicken Corn Soup"
            className="w-16 h-16 rounded-md"
          />
          <div className="flex-1 mx-4">
            <p className="text-lg font-semibold">Chicken Corn Soup</p>
            <p className="">Rs. {itemPrice}</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="flex justify-between">
            <span>Total:</span> <span>Rs. {itemPrice * quantity}</span>
          </p>
          <p className="flex justify-between">
            <span>Delivery Fee:</span> <span>Rs. {deliveryFee}</span>
          </p>
          <p className="flex justify-between font-bold text-lg">
            <span>Grand Total:</span> <span>Rs. {total.toFixed(2)}</span>
          </p>
        </div>

        <button className="w-full py-2 bg-red-500 text-white rounded-md mb-4">
          Cencel Oder
        </button>
      </div>
    </div>
  );
}
