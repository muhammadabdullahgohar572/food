// Add this directive at the top to mark the file as a client component
"use client";

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function PlaceOrder() {
  const searchParams = useSearchParams();
  
  const title = searchParams.get('title');
  const category = searchParams.get('category');
  const offer = searchParams.get('offer');
  const prices = searchParams.get('prices');
  const image = searchParams.get('image');

  return (
    <div className="mt-[25%]">
      <div className="mt-[25%] bg-black text-white">Title: {title}</div>
      <div className="mt-[25%] bg-black text-white">Category: {category}</div>
      <div className="mt-[25%] bg-black text-white">Offer: {offer}</div>
      <div className="mt-[25%] bg-black text-white">Price: {prices}</div>
      <div className="mt-[25%] bg-black text-white">
        <Image src={image} alt={`Image of ${title}`} width={100} height={100} />
      </div>
    </div>
  );
}
