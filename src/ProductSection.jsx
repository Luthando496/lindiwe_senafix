import React from 'react';
import nutImage from './assets/senafix_nut.png';
import soapImage from './assets/senafix_soap.png';

const products = [
  {
    title: "Senafix Body Loss Capsules",
    description: "Advanced formula for healthy fat reduction and metabolism boost. Achieve your ideal weight naturally.",
    price: "R270",
    image: nutImage,
    featured: false,
  },
  {
    title: "Senafix Body Gain Capsules",
    description: "Supports lean muscle development and healthy weight gain. Perfect for toning and strength building.",
    price: "R270",
    image: "https://www.senafixproducts.co.za/images/DayFatBurner.jpeg",
    featured: false,
  },
  {
    title: "Senafix Turmeric Skin Combo",
    description: "Ultimate Turmeric Trio: a powerful combination of Turmeric Soap, Turmeric Oil and Dark Inner Thigh Cream.",
    price: "R345",
    image: soapImage,
    featured: true, // This marks it as the featured product
  },
];

const ProductSection = () => {
  return (
    <section id='products' className="bg-slate-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif text-center text-[#1A202C] mb-10 md:mb-16">
          Senafix Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative group p-6 md:p-10 rounded-[2rem] shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 ${
                product.featured 
                ? 'bg-gray-800 ring-4 ring-[#E69B56] ring-offset-2 shadow-orange-100' 
                : 'bg-gray-600 shadow-gray-200/50'
              }`}
            >
              {/* Featured Badge */}
              {product.featured && (
                <div className="absolute -top-4 right-6 bg-[#E69B56] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg uppercase tracking-widest z-20">
                  Best Seller
                </div>
              )}

              {/* Product Image Container */}
              <div className="h-48 md:h-64 w-full flex items-center justify-center mb-6 md:mb-8 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Product Info */}
              <h3 className="text-xl md:text-2xl font-serif text-white mb-3 md:mb-4 min-h-[3.5rem] flex items-center justify-center">
                {product.title}
              </h3>

              <p className="text-gray-200 text-sm leading-relaxed mb-6 px-2 opacity-90">
                {product.description}
              </p>

              <div className="grow"></div>

              <div className="flex flex-col items-center gap-4 mt-auto w-full">
                <span className={`text-2xl md:text-3xl font-bold ${product.featured ? 'text-orange-400' : 'text-[#60A5FA]'}`}>
                  {product.price}
                </span>

                <button className={`w-full sm:w-auto font-bold px-10 py-4 rounded-2xl shadow-lg transition-all active:scale-95 ${
                  product.featured 
                  ? 'bg-white text-gray-800 hover:bg-gray-100' 
                  : 'bg-[#E69B56] text-white hover:bg-[#d48a47]'
                }`}>
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;