import React from 'react';
import before_1 from './assets/before_1.png';
import after_1 from './assets/after_1.png';

const testimonials = [
  {
    name: "Elara M., 58",
    text: "lost 25 lbs and found her energy again with Senafix. 'I feel younger and more vibrant than ever!'",
    images: { before: before_1, after: after_1 }
  },
  {
    name: "David S., 45",
    text: "transformed his physique and boosted stamina. 'Senafix gave me the confidence to push my limits!'",
    images: { before: before_1, after: after_1 }
  },
  {
    name: "Sarah L., 39",
    text: "achieved her fitness goals and radiates positivity. 'The best decision I made for my health and happiness!'",
    images: { before: before_1, after: after_1 }
  }
];

const Transformations = () => {
  return (
    <section id='transformations' className="bg-[#F9FAFB] py-16 md:py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif text-center text-[#1A202C] mb-12 md:mb-20 leading-tight">
          Inspiring Transformations: <br className="hidden md:block" /> Real Journeys, Real Results
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-5 md:p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-md">
              
              {/* Image Container with "VS" Overlay */}
              <div className="relative flex gap-2 md:gap-3 mb-6 w-full">
                <div className="flex-1">
                  <div className="relative">
                    <img 
                      src={item.images.before} 
                      alt="Before" 
                      className="rounded-2xl w-full h-48 md:h-64 object-cover shadow-inner" 
                    />
                    <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm text-[10px] text-white px-2 py-1 rounded-md uppercase font-bold tracking-tighter">
                      Before
                    </div>
                  </div>
                </div>
                
                {/* Visual Separator for mobile clarity */}
                <div className="flex-1">
                  <div className="relative">
                    <img 
                      src={item.images.after} 
                      alt="After" 
                      className="rounded-2xl w-full h-48 md:h-64 object-cover shadow-inner border-2 border-green-100" 
                    />
                    <div className="absolute top-2 left-2 bg-green-600 text-[10px] text-white px-2 py-1 rounded-md uppercase font-bold tracking-tighter">
                      After
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="px-2">
                <h4 className="font-bold text-gray-800 text-lg mb-2">{item.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;