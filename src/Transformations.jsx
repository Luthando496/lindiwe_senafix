import React from 'react';

const testimonials = [
  {
    name: "Elara M., 58",
    text: "lost 25 lbs and found her energy again with Senafix. 'I feel younger and more vibrant than ever!'",
    images: { before: "/elara-before.jpg", after: "/elara-after.jpg" }
  },
  {
    name: "David S., 45",
    text: "transformed his physique and boosted stamina. 'Senafix gave me the confidence to push my limits!'",
    images: { before: "/david-before.jpg", after: "/david-after.jpg" }
  },
  {
    name: "Sarah L., 39",
    text: "achieved her fitness goals and radiates positivity. 'The best decision I made for my health and happiness!'",
    images: { before: "/sarah-before.jpg", after: "/sarah-after.jpg" }
  }
];

const Transformations = () => {
  return (
    <section id='transformations' className="bg-[#F9FAFB] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-[#1A202C] mb-16">
          Inspiring Transformations: Real Journeys, Real Results
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              {/* Image Container */}
              <div className="flex gap-2 mb-6 w-full">
                <div className="flex-1">
                  <img src={item.images.before} alt="Before" className="rounded-lg w-full h-64 object-cover" />
                  <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider">Before</p>
                </div>
                <div className="flex-1">
                  <img src={item.images.after} alt="After" className="rounded-lg w-full h-64 object-cover" />
                  <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider">After</p>
                </div>
              </div>

              {/* Text Content */}
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="font-semibold text-gray-800">{item.name},</span> {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;