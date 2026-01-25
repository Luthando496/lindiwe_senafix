
const HeroSection = () => {
  return (
    <div className="min-h-screen bg-[#F0F7FF] font-sans">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#3B82F6] rounded flex items-center justify-center">
            {/* Simple Heart Icon placeholder */}
            <span className="text-white text-xs">💙</span>
          </div>
          <span className="text-[#3B82F6] font-semibold text-lg">Senafix Wellness</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="#" className="text-[#3B82F6]">Home</a>
          <a href="#about" className="hover:text-[#3B82F6] transition-colors">About</a>
          <a href="#products" className="hover:text-[#3B82F6] transition-colors">Products</a>
          <a href="#features" className="hover:text-[#3B82F6] transition-colors">Features</a>
          <a href="#contact" className="hover:text-[#3B82F6] transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="max-w-7xl mx-auto px-8 pt-16 pb-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Column */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-serif text-[#1A202C] leading-tight">
            Unlock Your Best Self: <br />
            <span className="italic">A Journey to Renewed Vitality</span>
          </h1>
          
          <p className="text-gray-500 text-lg max-w-md leading-relaxed">
            Discover the path to lasting well-being and a healthier, happier you with 
            Senafix Wellness. Our bespoke programs are designed for graceful 
            transformation at any age.
          </p>

          <button className="bg-[#3B82F6] hover:bg-blue-600 text-white font-medium px-8 py-4 rounded-lg shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1">
            Begin Your Transformation
          </button>
        </div>

        {/* Right Image Column */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://plus.unsplash.com/premium_photo-1679440415182-c362deb2fd40?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Professional woman with notebook" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;