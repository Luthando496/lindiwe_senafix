import React from 'react';

const AboutSection = () => {
  return (
    <section id='about' className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A202C] leading-tight">
            Our Mission: Empowering <br />
            Health, Enhancing Life
          </h2>
          
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            <p>
              At Senafix Wellness, we believe that true well-being is a journey, 
              not a destination. Our mission is to empower individuals, 
              particularly mature women, to achieve their optimal body weight 
              and vitality through a holistic approach.
            </p>
            <p>
              We combine cutting-edge science with compassionate support, 
              ensuring a sustainable and graceful transformation that honors 
              your unique journey.
            </p>
            <p>
              Founded with a deep understanding of the challenges women face 
              at different life stages, Senafix Wellness is committed to providing 
              premium, effective solutions. We foster a community where 
              health, confidence, and radiant living are not just goals, but 
              achievable realities.
            </p>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl border-8 border-white">
            <img 
              src="https://plus.unsplash.com/premium_photo-1661631383392-c2ec8992b627?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Women in a fitness class" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Subtle decorative background element to match Visily's style */}
          <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-[#F0F7FF] rounded-full blur-3xl opacity-70"></div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;