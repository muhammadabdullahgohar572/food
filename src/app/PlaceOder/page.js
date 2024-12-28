"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function PlaceOrder() {
  const searchParams = useSearchParams();

  const [title, setTitle] = useState("Chicken Corn Soup");
  const [prices, setPrices] = useState("Rs. 299");
  const [image, setImage] = useState("/placeholder.svg");

  // Handle the client-side data fetching or initialization
  useEffect(() => {
    const fetchedTitle = searchParams.get("title") || "Chicken Corn Soup";
    const fetchedPrices = searchParams.get("prices") || "Rs. 299";
    const fetchedImage = searchParams.get("image") || "/placeholder.svg";

    setTitle(fetchedTitle);
    setPrices(fetchedPrices);
    setImage(fetchedImage);
  }, [searchParams]);

  const price = parseInt(prices.replace(/[^\d]/g, ''), 10);
  const [Increase, setincrese] = useState(0);

  const total = price * Increase + 100; // Rs. 100 delivery charge

  return (
    <>
      <div className="min-h-screen md:mt-[12%] mt-[35%] ssml:mt-[17%] bg-black text-white p-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left Image Section */}
          <div className="relative">
            <Image
              src={image}
              alt="Product Image"
              className="w-full rounded-lg"
              width={400}
              height={400}
            />
          </div>

          {/* Right Content Section */}
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-bold">{title}</h1>
              <div className="flex gap-2">
                <Link href="/">
                  <button
                    aria-label="Close"
                    className="text-white border p-2 rounded-full hover:bg-gray-800"
                  >
                    Close
                  </button>
                </Link>
              </div>
            </div>

            <p className="text-2xl font-bold">
              {prices} + Delivery charges Rs 100
            </p>

            <p className="text-gray-400">
              Indulge in the comforting flavors of our Chicken Corn Soup, a rich
              and hearty blend of tender chicken, sweet corn, and aromatic herbs
              and spices.
            </p>

            {/* Input Fields */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block">
                  Name
                </label>
                <input
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="current" className="block">
                  Current Location
                </label>
                <input
                  id="current"
                  placeholder="Enter your current location"
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="instructions" className="block">
                  Special Instructions
                </label>
                <textarea
                  id="instructions"
                  placeholder="Please enter instructions about this item"
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded min-h-[100px]"
                />
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-700 rounded-md">
                <button
                  onClick={() => {
                    if (Increase > 0) {
                      setincrese(Increase - 1);
                    }
                  }}
                  aria-label="Decrease quantity"
                  className="p-2 text-white bg-gray-800 hover:bg-gray-700 rounded-l-md"
                >
                  -
                </button>
                <span className="w-12 text-center">{Increase}</span>
                <button
                  onClick={() => setincrese(Increase + 1)}
                  aria-label="Increase quantity"
                  className="p-2 text-white bg-gray-800 hover:bg-gray-700 rounded-r-md"
                >
                  +
                </button>
              </div>
              <button className="flex-1 p-3 bg-red-600 hover:bg-red-700 rounded-md">
                Order Now - Rs {total}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
