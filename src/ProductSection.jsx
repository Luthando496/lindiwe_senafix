



const products = [
  {
    title: "Senafix Body Loss Capsules",
    description:
      "Advanced formula for healthy fat reduction and metabolism boost. Achieve your ideal weight naturally.",
    price: "R150",
    image: "../src/assets/senafix_nut.png", // Replace with your actual image path
  },
  {
    title: "Senafix Body Gain Capsules",
    description:
      "Supports lean muscle development and healthy weight gain. Perfect for toning and strength building.",
    price: "R270",
    image: "https://www.senafixproducts.co.za/images/DayFatBurner.jpeg", // Replace with your actual image path
  },
  {
    title: "Senafix Turmeric Skin Combo - Soap Oil & Cream",
    description:
      "Introducing the Ultimate Turmeric Skincare Trio: a powerful combination of Turmeric Soap, Turmeric Oil and Dark Inner Thigh Cream. Unlock the secret to radiant, healthy-looking skin with this premium skincare bundle. Turmeric Soap: Infused with pure turmeric extract, our Turmeric Soap gently cleanses, hydrates, and rejuvenates the skin. Say goodbye to dark spots and blemishes as this luxurious soap works to even out skin tone and improve overall texture.",
    price: "R345",
    image: "../src/assets/senafix_soap.png", // Replace with your actual image path
  },
];

const ProductSection = () => {
  return (
   <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif text-center text-[#1A202C] mb-12">
          Senafix Solutions
        </h2>

        {/* Grid changes from 1 column (mobile) to 2 columns (md+) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl shadow-lg shadow-gray-100 border border-gray-50 flex flex-col items-center text-center"
            >
              {/* Product Image */}
              <div className="h-64 w-full flex items-center justify-center mb-8">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full object-contain"
                />
              </div>

              {/* Product Info */}
              <h3 className="text-2xl font-serif text-[#1A202C] mb-4">
                {product.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-6 px-4">
                {product.description}
              </p>

              <span className="text-[#3B82F6] text-3xl font-medium mb-8">
                {product.price}
              </span>

              {/* Call to Action */}
              <button className="bg-[#E69B56] hover:bg-[#d48a47] text-white font-semibold px-10 py-3 rounded-xl shadow-md transition-all active:scale-95">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
