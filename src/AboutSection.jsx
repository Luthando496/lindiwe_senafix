import React from 'react';

const AboutSection = () => {
  return (
    <section id='about' className="bg-white py-12 md:py-24 px-5 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        
        {/* IMAGE: Swapped to top on mobile for visual impact */}
        <div className="relative order-1 md:order-2">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://plus.unsplash.com/premium_photo-1661631383392-c2ec8992b627?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Women in a fitness class" 
              className="w-full h-64 md:h-[500px] object-cover"
            />
          </div>
          {/* Decorative background element - adjusted for mobile safety */}
          <div className="absolute -z-10 -bottom-10 -right-10 w-48 h-48 md:w-80 md:h-80 bg-[#3B82F6] rounded-full blur-[80px] md:blur-[120px] opacity-10"></div>
        </div>

        {/* TEXT CONTENT */}
        <div className="space-y-6 md:space-y-8 order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#1A202C] leading-tight text-center md:text-left">
            Our Mission: Empowering <br className="hidden md:block" />
            Health, Enhancing Life
          </h2>
          
          <div className="space-y-5 text-gray-600 leading-relaxed text-base md:text-lg text-center md:text-left">
            <p>
              At <span className="text-[#3B82F6] font-semibold">Senafix Wellness</span>, we believe that true well-being is a journey, 
              not a destination. Our mission is to empower individuals, 
              particularly mature women, to achieve their optimal body weight 
              and vitality through a holistic approach.
            </p>
            <p>
              We combine cutting-edge science with compassionate support, 
              ensuring a sustainable and graceful transformation that honors 
              your unique journey.
            </p>
            <p className="hidden sm:block">
              Founded with a deep understanding of the challenges women face 
              at different life stages, Senafix Wellness is committed to providing 
              premium, effective solutions. We foster a community where 
              health, confidence, and radiant living are achievable realities.
            </p>
          </div>

          {/* Mobile-only CTA or Signature to make it personal */}
          <div className="flex justify-center md:justify-start pt-4">
             <div className="border-l-4 border-[#3B82F6] pl-4 italic text-gray-500">
                "Your transformation is our passion."
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;