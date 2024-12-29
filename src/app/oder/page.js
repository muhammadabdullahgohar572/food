"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Cart() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Get order data from localStorage
    const storedOrders = localStorage.getItem("Oder");

    // If storedOrders is not null and is a valid JSON, parse it. Otherwise, use an empty array.
    if (storedOrders) {
      try {
        const parsedOrders = JSON.parse(storedOrders);
        if (Array.isArray(parsedOrders)) {
          setOrders(parsedOrders); // Set orders state if it's an array
        } else {
          setOrders([]); // If not an array, reset to empty array
        }
      } catch (error) {
        console.error("Error parsing orders from localStorage:", error);
        setOrders([]); // In case of any JSON parsing error, reset to empty array
      }
    } else {
      setOrders([]); // No orders in localStorage, set empty array
    }
  }, []);

  // If no orders exist in the cart, display a loading or empty cart message
  if (orders.length === 0) {
    return (
      <div className="flex text-white bg-black justify-center items-center min-h-screen">
        <p>No orders found. Please add items to your cart.</p>
      </div>
    );
  }

  return (
    <div className="flex text-white bg-black justify-center md:mt-[12%] mt-[35%] ssml:mt-[17%] items-center min-h-screen">
      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg w-full max-w-7xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Your Oder</h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Iterate over all orders and display them */}
          {orders.map((order, index) => {
            const { tittle, rates, quntity, image } = order;

            const itemPrice = parseFloat(rates) || 0;
            const quantity = parseInt(quntity) || 1;
            const taxRate = 0;
            const deliveryFee = 100;
            const tax = itemPrice * taxRate;
            const total = itemPrice * quantity + tax;

            return (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col justify-between"
              >
                <Image
                  src={image || "/path/to/default/image.webp"} // Fallback to a default image if not found
                  alt="Product Image"
                  width={128}
                  height={128}
                  className="w-full h-48 object-cover rounded-md mb-6"
                />
                <div className="flex-1 text-center">
                  <p className="text-lg font-semibold text-white">{tittle}</p>
                  <p className="text-sm text-gray-300">{`Rs. ${itemPrice}`}</p>

                  <div className="mt-4">
                    <p className="text-sm text-gray-400 flex justify-between">
                      <span>Quantity:</span> <span>{quantity}</span>
                    </p>
                    <p className="text-sm text-gray-400 flex justify-between">
                      <span>Total:</span> <span>Rs. {itemPrice * quantity}</span>
                    </p>
                    <p className="text-sm text-gray-400 flex justify-between">
                      <span>Delivery Fee:</span> <span>Rs. {deliveryFee}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-100 flex justify-between">
                      <span>Grand Total:</span> <span>Rs. {total.toFixed(2)}</span>
                    </p>
                  </div>

                  <button className="mt-6 py-2 bg-red-500 text-white rounded-md w-full hover:bg-red-600">
                    Cancel Order
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
