import nutImage from './assets/senafix_nut.png';
import soapImage from './assets/senafix_soap.png';


const products = [
  {
    title: "Senafix Body Loss Capsules",
    description:
      "Advanced formula for healthy fat reduction and metabolism boost. Achieve your ideal weight naturally.",
    price: "R270",
    image: nutImage, // Replace with your actual image path
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
      "Introducing the Ultimate Turmeric Skincare Trio: a powerful combination of Turmeric Soap, Turmeric Oil and Dark Inner Thigh Cream. ",
    price: "R345",
    image: soapImage, // Replace with your actual image path
  },
];

const ProductSection = () => {
  return (
    <section id='products' className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif text-center text-[#1A202C] mb-12">
          Senafix Solutions
        </h2>

        {/* Grid changes from 1 column (mobile) to 2 columns (md+) */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              /* w-full = 1 column on mobile 
                 md:w-[calc(33.333%-2rem)] = 3 columns on desktop (accounting for gap)
              */
              className="flex-none w-full md:w-[calc(33.333%-32px)] bg-gray-600 p-10 overflow-hidden rounded-3xl shadow-lg shadow-gray-100 border border-gray-50 flex flex-col items-center text-center"
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
              <h3 className="text-2xl font-serif text-white mb-4">
                {product.title}
              </h3>

              <p className="text-white text-sm leading-relaxed mb-6 px-4">
                {product.description}
              </p>

              {/* spacer to push button to bottom if descriptions vary in length */}
              <div className="grow"></div>

              <span className="text-[#3B82F6] text-3xl font-medium mb-2">
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
