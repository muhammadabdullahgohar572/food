"use client"
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function PlaceOrder() {
  const searchParams = useSearchParams();
  const image = searchParams.get("image");
  const title = searchParams.get("title");
  const prices = searchParams.get("prices");
  const category = searchParams.get("category");
  const offer = searchParams.get("offer");

  const [Increase, setIncrease] = useState(0);
  const total = (parseFloat(prices) || 0) * Increase + 100;

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="relative">
          <Image
            src={image || "/fallback-image.png"}
            alt={title || "Product Image"}
            className="w-full rounded-lg"
            width={400}
            height={400}
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">{title || "Product Title"}</h1>
          <p className="text-gray-400">{category || "Category"}</p>
          <p className="text-white font-bold">{offer || "Offer Details"}</p>
          <p className="text-2xl font-bold">
            Rs {prices || 0} + Delivery charges Rs 100
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-gray-700 rounded-md">
              <button
                onClick={() => {
                  if (Increase > 0) setIncrease(Increase - 1);
                }}
                aria-label="Decrease quantity"
                className="p-2 text-white bg-gray-800 hover:bg-gray-700 rounded-l-md"
              >
                -
              </button>
              <span className="w-12 text-center">{Increase}</span>
              <button
                onClick={() => setIncrease(Increase + 1)}
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
  );
}
