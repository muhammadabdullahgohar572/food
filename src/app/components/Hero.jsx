"use client";
import Image from "next/image";
import Hero from "../img/Navbar/Black Minimalist Modern Best Fast Food Instagram Post.png";
import { useEffect, useState } from "react";

export const Heroo = () => {
  const [getData, setData] = useState([]);

  // Fetching data from the API
  const CardsData = async () => {
    try {
      const response = await fetch('https://foodbackhand.vercel.app/getOderDeatils');
      const data = await response.json();
      console.log('Fetched data:', data); // Log the response to check the structure
      if (data && Array.isArray(data)) {
        setData(data); // Only set data if it's an array
      } else {
        console.error('Invalid data structure');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    CardsData(); // Call the function when the component mounts
  }, []);

  return (
    <>
      <div className="mt-32">
        <Image
          src={Hero}
          alt="Hero Image"
          layout="responsive"
          width={1200}
          height={600}
          className="w-full"
        />
      </div>

      <div className="bg-black min-h-screen p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white text-center text-2xl font-bold mb-4">Midnight Deals</h1>
          <div className="grid mt-[5%] grid-cols-1 md:grid-cols-2 gap-4">
            {getData && getData.length > 0 ? (
              getData.map((deal, index) => (
                <div
                  key={deal.title || index} // Use title or index as key
                  className="bg-gray-800 flex flex-col md:flex-row p-4 rounded-lg"
                >
                  <div className="flex-1 md:mr-4">
                    <h2 className="text-white text-xl font-semibold">{deal.title}</h2>
                    <p className="text-gray-400">{deal.category}</p>
                    <p className="text-gray-400">{deal.offer}</p>
                    <p className="text-white font-bold mt-2">{deal.prices}</p>

                    {/* Button for adding to cart */}
                    <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                      Add to Cart
                    </button>
                  </div>

                  <div className="mt-4 md:mt-0">
                    {/* Image for the deal */}
                    <Image
                      src={deal.image.startsWith('http') ? deal.image : `https://yourdomain.com/${deal.image}`}
                      alt={`Image for ${deal.title}`}
                      width={100}
                      height={100}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white text-center">No deals available at the moment.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
