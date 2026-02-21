import React from 'react';

const SenafixProductGrid = () => {
  const WHATSAPP_NUMBER = "27817265743";

  const products = [
    {
      title: "Full Mkhaba Lose Combo",
      price: "R700",
      description: "The complete set: Herbal Tea, Weight Loss Nuts, and Moringa for maximum results.",
      image: "https://ik.imagekit.io/sil3ewrtb/senafix%20lindiwe/Full_lose_mkhaba.jpeg?updatedAt=1771674731547",
      tags: ["Best Value", "Full Kit"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Herbal Tea Concentrate",
      price: "R300",
      description: "Focuses on belly fat, suppresses appetite, and boosts energy without gym or diet.",
      image: "https://ik.imagekit.io/sil3ewrtb/senafix%20lindiwe/WhatsApp%20Image%202026-02-21%20at%2003.25.10.jpeg?updatedAt=1771674731525",
      tags: ["Top Seller"],
      color: "from-green-400 to-green-600"
    },
    {
      title: "Mkhaba Only Combo",
      price: "R570",
      description: "A powerful pairing of Weight Loss Nuts and Herbal Tea concentrate.",
      image: "https://ik.imagekit.io/sil3ewrtb/senafix%20lindiwe/WhatsApp%20Image%202026-02-21%20at%2003.25.10%20(1).jpeg",
      tags: ["Popular"],
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Tea & Moringa Combo",
      price: "R430",
      description: "Combines the detoxifying power of Moringa with our signature Herbal Tea.",
      image: "https://ik.imagekit.io/sil3ewrtb/senafix%20lindiwe/WhatsApp%20Image%202026-02-21%20at%2003.25.09.jpeg",
      tags: ["Health Boost"],
      color: "from-teal-400 to-emerald-600"
    },
    {
      title: "Original Weight Loss Nuts",
      price: "R270",
      description: "Lose weight while you sleep. 100% natural herbal medicine.",
      image: "https://ik.imagekit.io/sil3ewrtb/senafix%20lindiwe/WhatsApp%20Image%202026-02-21%20at%2003.25.08%20(2).jpeg",
      tags: ["Night Care"],
      color: "from-amber-500 to-yellow-600"
    },
    {
      title: "Moringa Capsules",
      price: "R130",
      description: "Nature's multivitamin. Boosts heart and brain health while regulating blood sugar.",
      image: "https://ik.imagekit.io/sil3ewrtb/senafix%20lindiwe/WhatsApp%20Image%202026-02-21%20at%2003.25.08%20(3).jpeg",
      tags: ["Essentials"],
      color: "from-lime-400 to-green-500"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-y-32 gap-x-10">
        {products.map((product, index) => {
          // Construct the WhatsApp Link for each product
          const message = encodeURIComponent(`Hi! I'm interested in the ${product.title} (${product.price}). Please help me place an order.`);
          const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

          return (
            <div key={index} className="flex-none w-full sm:w-[calc(50%-2.5rem)] lg:w-[calc(33.333%-2.5rem)]">
              
              <div className="relative bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 pt-28 pb-10 px-8 flex flex-col h-full border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-slate-300/70">
                
                {/* Floating Image Section */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-52 h-52 flex items-center justify-center">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 rounded-full blur-3xl`}></div>
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] transform transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex justify-center gap-2 mb-4">
                  {product.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-slate-800 mb-3 leading-tight">
                    {product.title}
                  </h3>
                  <div className="inline-block bg-green-50 text-green-600 text-3xl font-black px-6 py-2 rounded-2xl">
                    {product.price}
                  </div>
                </div>

                <p className="text-slate-500 text-sm text-center leading-relaxed mb-8 flex-grow">
                  {product.description}
                </p>

                {/* WhatsApp Link Button */}
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#E69B56] hover:bg-[#d48a47] text-white font-bold py-5 rounded-3xl shadow-lg shadow-orange-200/50 active:scale-[0.95] transition-all flex items-center justify-center gap-2 no-underline"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SenafixProductGrid;