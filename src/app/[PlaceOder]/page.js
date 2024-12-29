"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function PlaceOrder() {
  const [GetData, setData] = useState({
    Tittle: "",
    username: "",
    location: "",
    Phone_Number: "",
    Instructions: "",
  });
  const router = useRouter();

  const searchParams = useSearchParams();
  const image = searchParams.get("image");
  const title = searchParams.get("title");
  const prices = searchParams.get("prices");

  const [Increase, setIncrease] = useState(1); // Ensure quantity starts at 1, not 0
  const total = (parseFloat(prices) || 0) * Increase + 100; // Delivery charges Rs 100

  const DataSendApi = async () => {
    const { username, location, Phone_Number, Instructions } = GetData;
    const Rates = total; // Total value from the price calculation
    const Quntity = Increase; // Quantity from state

    if (!username || !Phone_Number || !location || Quntity === 0 || Rates === 0) {
      alert("Please fill all the required fields.");
      return;
    }

    const payload = {
      Tittle: title,
      username,
      location,
      Phone_Number,
      Instructions,
      Rates: String(Rates), // Ensure Rates is a string in the payload
      Quntity: String(Quntity), // Ensure Quntity is a string in the payload
    };

    console.log("Payload being sent:", JSON.stringify(payload, null, 2)); // Debugging payload

    try {
      const response = await fetch("https://foodbackhand.vercel.app/anyoderbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const responseText = await response.text();
        console.error("Raw API response:", responseText);

        try {
          const errorJson = JSON.parse(responseText);
          throw new Error(errorJson.message || "Order failed");
        } catch (parseError) {
          throw new Error(responseText || "Order failed");
        }
      }

      const result = await response.json();
      console.log("API Response:", result);
      localStorage.setItem("Oder",JSON.stringify(result))
      alert("Order placed successfully!");
      router.push("/")

    } catch (error) {
      console.error("Error sending order:", error.message);
      alert(`Failed to place the order: ${error.message}`);
    }
  };



  useEffect(()=>{
    DataSendApi()
  },[])
  return (
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
                onChange={(e) =>
                  setData({ ...GetData, username: e.target.value })
                }
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
                onChange={(e) =>
                  setData({ ...GetData, Phone_Number: e.target.value })
                }
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
                onChange={(e) =>
                  setData({ ...GetData, location: e.target.value })
                }
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
                onChange={(e) =>
                  setData({ ...GetData, Instructions: e.target.value })
                }
              />
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-gray-700 rounded-md">
              <button
                onClick={() => {
                  if (Increase > 1) {
                    setIncrease(Increase - 1);
                  }
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
            <button
              onClick={DataSendApi}
              className="flex-1 p-3 bg-red-600 hover:bg-red-700 rounded-md"
            >
              Order Now - Rs {total}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
