import Image from "next/image";
import Hero from "../img/Navbar/Black Minimalist Modern Best Fast Food Instagram Post.png";
import cards from "../img/Navbar/1f.webp";
import Mide from "../img/winter/1732539831-banner-weekday.webp";
import Winder from "../img/winter/1734515477-banner-soup.webp";
import soup from "../img/Navbar/1734515294-chk-corn-soup.webp";
import express from "../img/winter/1730536763-ZINGO-WITH-DRINK.webp";
import borast from "../img/winter/1734865685-broast-2.webp";

import no1 from "../img/winter/all/1686207532-3.webp";
import no2 from "../img/winter/all/1686209389-Beef%20Burger.webp";
import no3 from "../img/winter/all/1686210160-Tikkah%20Boti.webp";
import no4 from "../img/winter/all/1686210299-Chicken20roll.webp";
import no5 from "../img/winter/all/1686211861-Bihari%20Boti.webp";
import no7 from "../img/winter/all/1730550079-LEMON%20250ML.webp";
import no6 from "../img/winter/all/1730550079-LEMON%20250ML.webp";


export const Heroo = () => {
  const deals = [
    {
      id: 1,
      title: "Midnight Deal 1",
      cards: cards,
      description: "2 chicken Chutney Roll",
      price: "Rs. 499",
    },
    {
      id: 2,
      title: "Midnight Deal 2",
      cards: cards,
      description: "1 Alfredo Pasta",
      price: "Rs. 599",
    },
    {
      id: 3,
      title: "Midnight Deal 3",
      cards: cards,
      description: "1 classic chowmein",
      price: "Rs. 499",
    },
    {
      id: 4,
      title: "Midnight Deal 4",
      cards: cards,
      description: "1 Shashlik with rice",
      price: "Rs. 599",
    },
  ];

  const expressDeals = [
    {
      name: "Express Deal 1",
      price: "Rs. 499",
      description: "1 Zingo Burger + 1 Regular Drink",
      image: express,
    },
    {
      name: "Express Deal 2",
      price: "Rs. 599",
      description: "1 Chicken Chatni Roll + 1 Regular Drink",
      image: express,
    },
    {
      name: "Express Deal 3",
      price: "Rs. 649",
      description: "1 Zingo Burger + 1 Chicken Chatni Roll",
      image: express,
    },
    {
      name: "Express Deal 4",
      price: "Rs. 799",
      description: "1 Zingo Burger + 1 Turkish Kabab Roll + 1 Drink",
      image: express,
    },
    {
      name: "Express Deal 5",
      price: "Rs. 899",
      description: "1 Chicken Zingo Burger + 1 Regular Drink + Fries",
      image: express,
    },
    {
      name: "Express Deal 6",
      price: "Rs. 999",
      description: "2 Zingo Burgers + 1 Drink",
      image: express,
    },
    {
      name: "Express Deal 7",
      price: "Rs. 1099",
      description: "2 Chicken Chatni Rolls + 1 Drink + Fries",
      image: express,
    },
  ];
  const broastMenu = [
    {
      name: "Classic Broast",
      price: "Rs. 499",
      description: "Crispy fried chicken with a deliciously seasoned coating.",
      image: borast,
    },
    {
      name: "Spicy Broast",
      price: "Rs. 549",
      description:
        "Fried chicken with extra spice and flavor for spice lovers.",
      image: borast,
    },
    {
      name: "BBQ Broast",
      price: "Rs. 599",
      description: "Broast chicken smothered in smoky BBQ sauce.",
      image: borast,
    },
    {
      name: "Garlic Broast",
      price: "Rs. 599",
      description: "Broast chicken with a strong garlic seasoning.",
      image: borast,
    },
    {
      name: "Zinger Broast",
      price: "Rs. 649",
      description:
        "Broast chicken in a zinger-style sandwich with lettuce and sauces.",
      image: borast,
    },
    {
      name: "Chicken Broast Combo",
      price: "Rs. 749",
      description: "Two pieces of crispy chicken with fries and a drink.",
      image: borast,
    },
    {
      name: "Family Broast",
      price: "Rs. 999",
      description:
        "A large serving of broast chicken pieces for the whole family.",
      image: borast,
    },
  ];

  const startersMenu = [
    {
      name: "Spring Rolls",
      price: "Rs. 249",
      description:
        "Crispy rolls filled with fresh vegetables and served with a tangy dip.",
      image: no1,
    },
    {
      name: "Chicken Wings",
      price: "Rs. 299",
      description: "Tender chicken wings coated in a smoky, spicy sauce.",
      image: no1,
    },
    {
      name: "Samosas",
      price: "Rs. 199",
      description:
        "Golden-fried pastry pockets filled with spicy meat or vegetables.",
      image: no1,
    },
    {
      name: "Cheese Sticks",
      price: "Rs. 269",
      description:
        "Deep-fried cheese sticks with a crispy coating and melted cheese inside.",
      image: no1,
    },
    {
      name: "Chili Paneer",
      price: "Rs. 349",
      description:
        "Paneer cubes cooked in a spicy chili sauce with vegetables.",
      image: no1,
    },
    {
      name: "Garlic Bread",
      price: "Rs. 199",
      description: "Toasted bread with garlic butter and a hint of seasoning.",
      image: no1,
    },
    {
      name: "French Fries",
      price: "Rs. 179",
      description: "Crispy and golden fries, seasoned with salt.",
      image: no1,
    },
  ];

  const pastaMenu = [
    {
      name: "Spaghetti Bolognese",
      price: "Rs. 499",
      description:
        "Classic Italian pasta served with a rich and savory meat sauce.",
      image: no2,
    },
    {
      name: "Chicken Alfredo",
      price: "Rs. 559",
      description:
        "Creamy Alfredo sauce served with grilled chicken and fettuccine pasta.",
      image: no2,
    },
    {
      name: "Penne Arrabbiata",
      price: "Rs. 459",
      description:
        "Spicy tomato sauce with garlic, olive oil, and red chili served with penne pasta.",
      image: no2,
    },
    {
      name: "Mac & Cheese",
      price: "Rs. 399",
      description:
        "Cheesy pasta baked to perfection, topped with a crispy golden crust.",
      image: no2,
    },
    {
      name: "Lasagna",
      price: "Rs. 649",
      description:
        "Layered pasta with rich meat sauce, béchamel, and melted cheese.",
      image: no2,
    },
    {
      name: "Pasta Primavera",
      price: "Rs. 499",
      description:
        "Fresh vegetables sautéed in olive oil with a light garlic and herb sauce.",
      image: no2,
    },
    {
      name: "Shrimp Scampi",
      price: "Rs. 599",
      description:
        "Pasta with shrimp cooked in a garlic butter sauce with a hint of lemon.",
      image: no2,
    },
  ];

  const burgerMenu = [
    {
      name: "Classic Cheeseburger",
      price: "Rs. 399",
      description:
        "Juicy beef patty with melted cheese, lettuce, tomato, and a soft bun.",
      image: no3,
    },
    {
      name: "BBQ Bacon Burger",
      price: "Rs. 459",
      description:
        "Beef patty topped with crispy bacon, BBQ sauce, lettuce, and cheese.",
      image: no3,
    },
    {
      name: "Chicken Burger",
      price: "Rs. 359",
      description: "Grilled chicken fillet with lettuce, mayo, and pickles.",
      image: no3,
    },
    {
      name: "Veggie Burger",
      price: "Rs. 299",
      description:
        "A wholesome veggie patty served with fresh veggies and a creamy sauce.",
      image: no3,
    },
    {
      name: "Spicy Jalapeno Burger",
      price: "Rs. 499",
      description:
        "Beef patty topped with spicy jalapenos, cheese, and a tangy sauce.",
      image: no3,
    },
    {
      name: "Double Cheeseburger",
      price: "Rs. 559",
      description:
        "Two beef patties with melted cheese, pickles, onions, and ketchup.",
      image: no3,
    },
    {
      name: "Mushroom Swiss Burger",
      price: "Rs. 519",
      description:
        "Beef patty with sautéed mushrooms and Swiss cheese, topped with creamy sauce.",
      image: no3,
    },
  ];

  const wrapsMenu = [
    {
      name: "Chicken Shawarma Wrap",
      price: "Rs. 499",
      description:
        "Grilled chicken shawarma with garlic sauce, lettuce, and pickles in a soft flatbread.",
      image: no4,
    },
    {
      name: "Beef Fajita Wrap",
      price: "Rs. 549",
      description:
        "Seasoned beef strips with bell peppers, onions, and salsa wrapped in a tortilla.",
      image: no4,
    },
    {
      name: "Veggie Wrap",
      price: "Rs. 399",
      description:
        "A healthy mix of grilled vegetables, hummus, and lettuce in a soft wrap.",
      image: no4,
    },
    {
      name: "Chicken Caesar Wrap",
      price: "Rs. 499",
      description:
        "Grilled chicken, Caesar dressing, lettuce, and Parmesan cheese wrapped in a flour tortilla.",
      image: no4,
    },
    {
      name: "Falafel Wrap",
      price: "Rs. 429",
      description:
        "Crispy falafel balls with lettuce, tomatoes, and tahini sauce wrapped in pita bread.",
      image: no4,
    },
    {
      name: "BBQ Chicken Wrap",
      price: "Rs. 539",
      description:
        "Grilled chicken tossed in BBQ sauce with cheddar cheese and coleslaw in a soft wrap.",
      image: no4,
    },
    {
      name: "Buffalo Chicken Wrap",
      price: "Rs. 499",
      description:
        "Spicy buffalo chicken with lettuce, tomato, and blue cheese dressing in a wrap.",
      image: no4,
    },
  ];

  const rollsMenu = [
    {
      name: "Chicken Roll",
      price: "Rs. 449",
      description:
        "Tender chicken pieces wrapped in a soft paratha with onions, lettuce, and sauces.",
      image: no5,
    },
    {
      name: "Beef Roll",
      price: "Rs. 499",
      description:
        "Juicy beef slices with onions, lettuce, and a tangy sauce, wrapped in a soft paratha.",
      image: no5,
    },
    {
      name: "Paneer Roll",
      price: "Rs. 399",
      description:
        "Grilled paneer with veggies and mint chutney, wrapped in a paratha.",
      image: no5,
    },
    {
      name: "Egg Roll",
      price: "Rs. 379",
      description:
        "Scrambled eggs with tomatoes, onions, and sauces, wrapped in a paratha.",
      image: no5,
    },
    {
      name: "Chicken Seekh Roll",
      price: "Rs. 499",
      description:
        "Spicy chicken seekh kebabs wrapped with fresh onions, cilantro, and sauces in a paratha.",
      image: no5,
    },
    {
      name: "Fish Roll",
      price: "Rs. 549",
      description:
        "Crispy fish fillets with a tangy sauce and fresh veggies wrapped in a paratha.",
      image: no5,
    },
    {
      name: "Shawarma Roll",
      price: "Rs. 549",
      description:
        "Shawarma spiced chicken or beef with garlic sauce, wrapped in a soft flatbread.",
      image: no5,
    },
  ];

  const bbqMenu = [
    {
      name: "Chicken Tikka",
      price: "Rs. 599",
      description: "Juicy, marinated chicken pieces grilled to perfection.",
      image: no7,
    },
    {
      name: "Beef Seekh Kebab",
      price: "Rs. 499",
      description:
        "Spicy and flavorful minced beef skewers, grilled over charcoal.",
      image: no6,
    },
    {
      name: "Malai Boti",
      price: "Rs. 649",
      description:
        "Creamy, tender chicken cubes with mild spices, cooked over flames.",
      image: no6,
    },
    {
      name: "Chicken Reshmi Kebab",
      price: "Rs. 549",
      description:
        "Delicate, melt-in-your-mouth chicken kebabs with a rich flavor.",
      image: no6,
    },
    {
      name: "Beef Bihari Boti",
      price: "Rs. 699",
      description:
        "Thinly sliced beef marinated with spices and grilled to perfection.",
      image: no6,
    },
    {
      name: "Grilled Prawns",
      price: "Rs. 899",
      description:
        "Fresh prawns marinated in BBQ spices and grilled till tender.",
      image: no6,
    },
    {
      name: "Mutton Chops",
      price: "Rs. 849",
      description:
        "Succulent mutton chops marinated in BBQ spices and grilled over a flame.",
      image: no6,
    },
  ];

  const beveragesMenu = [
    {
      name: "Fresh Lime Soda",
      price: "Rs. 199",
      description: "Refreshing soda with a hint of fresh lime.",
      image: "path_to_image/beverage1.jpg",
    },
    {
      name: "Mint Margarita",
      price: "Rs. 249",
      description: "Chilled, tangy drink with fresh mint and a twist of lemon.",
      image: "path_to_image/beverage2.jpg",
    },
    {
      name: "Cold Coffee",
      price: "Rs. 299",
      description: "Rich and creamy cold coffee topped with frothy milk.",
      image: "path_to_image/beverage3.jpg",
    },
    {
      name: "Hot Chocolate",
      price: "Rs. 349",
      description: "Warm and comforting chocolate drink made with rich cocoa.",
      image: "path_to_image/beverage4.jpg",
    },
    {
      name: "Soft Drink (Can)",
      price: "Rs. 99",
      description: "Chilled canned soft drink in various flavors.",
      image: "path_to_image/beverage5.jpg",
    },
    {
      name: "Mineral Water",
      price: "Rs. 59",
      description: "Pure and refreshing mineral water bottle.",
      image: "path_to_image/beverage6.jpg",
    },
    {
      name: "Iced Tea",
      price: "Rs. 249",
      description: "Cool and refreshing iced tea with a hint of lemon.",
      image: "path_to_image/beverage7.jpg",
    },
  ];

  const winter = [
    {
      id: 1,
      title: "Winter special Deal 1",
      cards: soup,
      description: "2 chicken Chutney Roll",
      price: "Rs. 499",
    },
    {
      id: 2,
      title: "Winter special Deal 2",
      cards: soup,
      description: "1 Alfredo Pasta",
      price: "Rs. 599",
    },
    {
      id: 3,
      title: "Winter special Deal 3",
      cards: soup,
      description: "1 classic chowmein",
      price: "Rs. 499",
    },
    {
      id: 4,
      title: "Winter special Deal 4",
      cards: soup,
      description: "1 Shashlik with rice",
      price: "Rs. 599",
    },
  ];
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
        <div className="max-w-4xl  mx-auto">
          <h1 className="text-white  text-center text-2xl font-bold mb-4">
            Midnight Deals
          </h1>
          <Image src={Mide} />
          <div className="grid mt-[5%] grid-cols-1 md:grid-cols-2 gap-4">
            {deals.map((deal) => (
              <div
                key={deal.id}
                className="bg-gray-800 flex flex-col md:flex-row p-4 rounded-lg"
              >
                <div className="flex-1 md:mr-4">
                  <h2 className="text-white text-xl font-semibold">
                    {deal.title}
                  </h2>
                  <p className="text-gray-400">{deal.description}</p>
                  <p className="text-white font-bold mt-2">{deal.price}</p>

                  {/* Button for adding to cart */}
                  <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                    Add to Cart
                  </button>
                </div>

                <div className="mt-4 md:mt-0">
                  {/* Image for the deal */}
                  <Image
                    src={deal.cards}
                    alt={`Image for ${deal.title}`}
                    width={100}
                    height={100}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black min-h-screen p-4">
        <div className="max-w-4xl  mx-auto">
          <h1 className="text-white  text-center text-2xl font-bold mb-4">
            Winter special
          </h1>
          <Image src={Winder} />
          <div className="grid mt-[5%] grid-cols-1 md:grid-cols-2 gap-4">
            {winter.map((deal) => (
              <div
                key={deal.id}
                className="bg-gray-800 flex flex-col md:flex-row p-4 rounded-lg"
              >
                <div className="flex-1 md:mr-4">
                  <h2 className="text-white text-xl font-semibold">
                    {deal.title}
                  </h2>
                  <p className="text-gray-400">{deal.description}</p>
                  <p className="text-white font-bold mt-2">{deal.price}</p>

                  {/* Button for adding to cart */}
                  <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                    Add to Cart
                  </button>
                </div>

                <div className="mt-4 md:mt-0">
                  {/* Image for the deal */}
                  <Image
                    src={deal.cards}
                    alt={`Image for ${deal.title}`}
                    width={100}
                    height={100}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black min-h-screen p-4">
        <div className="max-w-4xl  mx-auto">
          <h1 className="text-white  text-center text-2xl font-bold mb-4">
            Express Deals
          </h1>
          <Image src={Winder} />
          <div className="grid mt-[5%] grid-cols-1 md:grid-cols-2 gap-4">
            {expressDeals.map((deal) => (
              <div
                key={deal.id}
                className="bg-gray-800 flex flex-col md:flex-row p-4 rounded-lg"
              >
                <div className="flex-1 md:mr-4">
                  <h2 className="text-white text-xl font-semibold">
                    {deal.title}
                  </h2>
                  <p className="text-gray-400">{deal.description}</p>
                  <p className="text-white font-bold mt-2">{deal.price}</p>

                  {/* Button for adding to cart */}
                  <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                    Add to Cart
                  </button>
                </div>

                <div className="mt-4 md:mt-0">
                  {/* Image for the deal */}
                  <Image
                    src={deal.image}
                    alt={`Image for ${deal.title}`}
                    width={100}
                    height={100}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black min-h-screen p-4">
        <div className="max-w-4xl  mx-auto">
          <h1 className="text-white  text-center text-2xl font-bold mb-4">
            Broast Menu
          </h1>
          <Image src={Winder} />
          <div className="grid mt-[5%] grid-cols-1 md:grid-cols-2 gap-4">
            {broastMenu.map((deal) => (
              <div
                key={deal.id}
                className="bg-gray-800 flex flex-col md:flex-row p-4 rounded-lg"
              >
                <div className="flex-1 md:mr-4">
                  <h2 className="text-white text-xl font-semibold">
                    {deal.title}
                  </h2>
                  <p className="text-gray-400">{deal.description}</p>
                  <p className="text-white font-bold mt-2">{deal.price}</p>

                  {/* Button for adding to cart */}
                  <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                    Add to Cart
                  </button>
                </div>

                <div className="mt-4 md:mt-0">
                  {/* Image for the deal */}
                  <Image
                    src={deal.image}
                    alt={`Image for ${deal.title}`}
                    width={100}
                    height={100}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>














      <div className="bg-black min-h-screen p-4">
        <div className="max-w-4xl  mx-auto">
          <h1 className="text-white  text-center text-2xl font-bold mb-4">
            Starters Menu
          </h1>
          <Image src={Winder} />
          <div className="grid mt-[5%] grid-cols-1 md:grid-cols-2 gap-4">
            {startersMenu.map((deal) => (
              <div
                key={deal.id}
                className="bg-gray-800 flex flex-col md:flex-row p-4 rounded-lg"
              >
                <div className="flex-1 md:mr-4">
                  <h2 className="text-white text-xl font-semibold">
                    {deal.title}
                  </h2>
                  <p className="text-gray-400">{deal.description}</p>
                  <p className="text-white font-bold mt-2">{deal.price}</p>

                  {/* Button for adding to cart */}
                  <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                    Add to Cart
                  </button>
                </div>

                <div className="mt-4 md:mt-0">
                  {/* Image for the deal */}
                  <Image
                    src={deal.image}
                    alt={`Image for ${deal.title}`}
                    width={100}
                    height={100}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>





      <div className="bg-black min-h-screen p-4">
        <div className="max-w-4xl  mx-auto">
          <h1 className="text-white  text-center text-2xl font-bold mb-4">
            PastaMenu
          </h1>
          <Image src={Winder} />
          <div className="grid mt-[5%] grid-cols-1 md:grid-cols-2 gap-4">
            {pastaMenu.map((deal) => (
              <div
                key={deal.id}
                className="bg-gray-800 flex flex-col md:flex-row p-4 rounded-lg"
              >
                <div className="flex-1 md:mr-4">
                  <h2 className="text-white text-xl font-semibold">
                    {deal.title}
                  </h2>
                  <p className="text-gray-400">{deal.description}</p>
                  <p className="text-white font-bold mt-2">{deal.price}</p>

                  {/* Button for adding to cart */}
                  <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                    Add to Cart
                  </button>
                </div>

                <div className="mt-4 md:mt-0">
                  {/* Image for the deal */}
                  <Image
                    src={deal.image}
                    alt={`Image for ${deal.title}`}
                    width={100}
                    height={100}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black min-h-screen p-4">
        <div className="max-w-4xl  mx-auto">
          <h1 className="text-white  text-center text-2xl font-bold mb-4">
            Burger Menu
          </h1>
          <Image src={Winder} />
          <div className="grid mt-[5%] grid-cols-1 md:grid-cols-2 gap-4">
            {burgerMenu.map((deal) => (
              <div
                key={deal.id}
                className="bg-gray-800 flex flex-col md:flex-row p-4 rounded-lg"
              >
                <div className="flex-1 md:mr-4">
                  <h2 className="text-white text-xl font-semibold">
                    {deal.title}
                  </h2>
                  <p className="text-gray-400">{deal.description}</p>
                  <p className="text-white font-bold mt-2">{deal.price}</p>

                  {/* Button for adding to cart */}
                  <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                    Add to Cart
                  </button>
                </div>

                <div className="mt-4 md:mt-0">
                  {/* Image for the deal */}
                  <Image
                    src={deal.image}
                    alt={`Image for ${deal.title}`}
                    width={100}
                    height={100}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black min-h-screen p-4">
        <div className="max-w-4xl  mx-auto">
          <h1 className="text-white  text-center text-2xl font-bold mb-4">
            Wraps Menu
          </h1>
          <Image src={Winder} />
          <div className="grid mt-[5%] grid-cols-1 md:grid-cols-2 gap-4">
            {wrapsMenu.map((deal) => (
              <div
                key={deal.id}
                className="bg-gray-800 flex flex-col md:flex-row p-4 rounded-lg"
              >
                <div className="flex-1 md:mr-4">
                  <h2 className="text-white text-xl font-semibold">
                    {deal.title}
                  </h2>
                  <p className="text-gray-400">{deal.description}</p>
                  <p className="text-white font-bold mt-2">{deal.price}</p>

                  {/* Button for adding to cart */}
                  <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                    Add to Cart
                  </button>
                </div>

                <div className="mt-4 md:mt-0">
                  {/* Image for the deal */}
                  <Image
                    src={deal.image}
                    alt={`Image for ${deal.title}`}
                    width={100}
                    height={100}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black min-h-screen p-4">
        <div className="max-w-4xl  mx-auto">
          <h1 className="text-white  text-center text-2xl font-bold mb-4">
            Rolls Menu
          </h1>
          <Image src={Winder} />
          <div className="grid mt-[5%] grid-cols-1 md:grid-cols-2 gap-4">
            {rollsMenu.map((deal) => (
              <div
                key={deal.id}
                className="bg-gray-800 flex flex-col md:flex-row p-4 rounded-lg"
              >
                <div className="flex-1 md:mr-4">
                  <h2 className="text-white text-xl font-semibold">
                    {deal.title}
                  </h2>
                  <p className="text-gray-400">{deal.description}</p>
                  <p className="text-white font-bold mt-2">{deal.price}</p>

                  {/* Button for adding to cart */}
                  <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                    Add to Cart
                  </button>
                </div>

                <div className="mt-4 md:mt-0">
                  {/* Image for the deal */}
                  <Image
                    src={deal.image}
                    alt={`Image for ${deal.title}`}
                    width={100}
                    height={100}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black min-h-screen p-4">
        <div className="max-w-4xl  mx-auto">
          <h1 className="text-white  text-center text-2xl font-bold mb-4">
            BBQ Menu
          </h1>
          <Image src={Winder} />
          <div className="grid mt-[5%] grid-cols-1 md:grid-cols-2 gap-4">
            {bbqMenu.map((deal) => (
              <div
                key={deal.id}
                className="bg-gray-800 flex flex-col md:flex-row p-4 rounded-lg"
              >
                <div className="flex-1 md:mr-4">
                  <h2 className="text-white text-xl font-semibold">
                    {deal.title}
                  </h2>
                  <p className="text-gray-400">{deal.description}</p>
                  <p className="text-white font-bold mt-2">{deal.price}</p>

                  {/* Button for adding to cart */}
                  <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                    Add to Cart
                  </button>
                </div>

                <div className="mt-4 md:mt-0">
                  {/* Image for the deal */}
                  <Image
                    src={deal.image}
                    alt={`Image for ${deal.title}`}
                    width={100}
                    height={100}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black min-h-screen p-4">
        <div className="max-w-4xl  mx-auto">
          <h1 className="text-white  text-center text-2xl font-bold mb-4">
            Beverages Menu
          </h1>
          <Image src={Winder} />
          <div className="grid mt-[5%] grid-cols-1 md:grid-cols-2 gap-4">
            {beveragesMenu.map((deal) => (
              <div
                key={deal.id}
                className="bg-gray-800 flex flex-col md:flex-row p-4 rounded-lg"
              >
                <div className="flex-1 md:mr-4">
                  <h2 className="text-white text-xl font-semibold">
                    {deal.title}
                  </h2>
                  <p className="text-gray-400">{deal.description}</p>
                  <p className="text-white font-bold mt-2">{deal.price}</p>

                  {/* Button for adding to cart */}
                  <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                    Add to Cart
                  </button>
                </div>

                <div className="mt-4 md:mt-0">
                  {/* Image for the deal */}
                  <Image
                    src={deal.cards}
                    alt={`Image for ${deal.title}`}
                    width={100}
                    height={100}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
