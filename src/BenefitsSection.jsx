import React from 'react';

const benefits = [
  {
    title: "Clinically Proven Formulas",
    description: "Backed by rigorous scientific research for safe and effective results.",
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: "Personalized Support",
    description: "Dedicated coaches guide you through every step of your journey.",
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Natural & Pure Ingredients",
    description: "Ethically sourced, high-quality compounds for optimal health.",
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "Holistic Well-being",
    description: "Programs designed for mental, emotional, and physical harmony.",
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Sustainable Results",
    description: "Tools and knowledge for long-term health and vitality.",
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Community & Motivation",
    description: "Join a supportive network on your path to a healthier you.",
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

const BenefitsSection = () => {
  return (
    <section id="features" className="bg-[#F0F7FF] py-16 md:py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif text-center text-[#1A202C] mb-12 md:mb-16 leading-tight">
          Why Choose Senafix?<br className="md:hidden" /> Our Premium Benefits
        </h2>

        {/* Updated Grid for better responsive flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-white hover:border-blue-100 group"
            >
              {/* Icon with soft background circle */}
              <div className="mb-6 w-14 h-14 md:w-16 md:h-16 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-[#3B82F6]/10 transition-colors">
                {benefit.icon}
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;