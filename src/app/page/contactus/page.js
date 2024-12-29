"use client";

import my from "../../img/WhatsApp Image 2024-12-18 at 9.28.47 PM.jpeg";
import Image from "next/image";


const ContactUs = () => {


  return (
    <div className="bg-black mt-10 font-sans">
      <header className="bg-red-500 text-white py-6">
        <h1 className="text-4xl font-bold text-center">About Us</h1>
      </header>

      <section className="container mx-auto flex flex-wrap py-12 px-4">
        <div className="flex-1 max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
          <h2 className="text-3xl text-red-600 font-semibold mb-4">
            Welcome to Abdullah Fast Food
          </h2>
          <p className="mb-4 text-yellow-500">
            At Abdullah Fast Food, we pride ourselves on delivering delicious
            and freshly prepared meals that satisfy your cravings. From juicy
            burgers to crispy broasts and everything in between, we aim to
            create an exceptional dining experience for all our customers.
          </p>
          <p className="mb-4 text-yellow-500">
            Established with a passion for quality and taste, our journey
            started right here in Karachi. Over the years, we’ve grown to become
            a favorite spot for food enthusiasts, thanks to our commitment to
            using the finest ingredients and innovative recipes.
          </p>
          <p className="mb-4 text-yellow-500">
            Our dedicated team works tirelessly to ensure every meal is a
            masterpiece, crafted to bring joy to your taste buds. Whether you’re
            visiting us for a quick bite or a family feast, Abdullah Fast Food
            is your ultimate destination for flavors you’ll never forget.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 max-w-md mx-auto mt-8 md:mt-0 md:ml-8">
          <Image
            src={my}
            alt="About Abdullah Fast Food"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

 
    </div>
  );
};

export default ContactUs;
