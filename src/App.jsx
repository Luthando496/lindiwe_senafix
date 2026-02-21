import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import AboutSection from "./AboutSection";
import Transformations from "./Transformations";
import ProductSection from "./ProductSection";
import BenefitsSection from "./BenefitsSection";
import ContactSection from "./ContactSection";
import SenafixGallery from "./SenafixGallery";

function App() {
  // const [count, setCount] = useState(0)
  const year = new Date().getFullYear();

  return (
    <>
      <Header />
      <section id="home" className="min-h-[90vh] bg-[#F0F7FF] flex items-center pt-20 pb-20 md:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Column */}
        <div className="text-center md:text-left space-y-6 order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1A202C] leading-tight">
            Unlock Your Best Self: <br className="hidden md:block" />
            <span className="italic text-[#3B82F6]">Renewed Vitality</span>
          </h1>
          
          <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
            Discover the path to lasting well-being with Senafix. Bespoke programs designed for graceful transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="bg-[#3B82F6] hover:bg-blue-600 text-white font-medium px-8 py-4 rounded-lg shadow-lg shadow-blue-200 transition-all text-center">
              Start Transformation
            </a>
            <a href="#about" className="text-[#3B82F6] font-medium px-8 py-4 rounded-lg border border-blue-100 hover:bg-blue-50 transition-all text-center">
              Learn More
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative order-1 md:order-2">
          <div className="rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-md md:max-w-full">
             {/* Replace this with your actual image variable or path */}
            <img 
              src="https://plus.unsplash.com/premium_photo-1679440415182-c362deb2fd40?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Lindiwe Senafix" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
      <AboutSection />
      <Transformations />
      <ProductSection />
      <BenefitsSection />
      <SenafixGallery />
      <ContactSection />
    <footer className="bg-white border-t border-gray-100 py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {year} Senafix Wellness by Lindiwe. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-[#3B82F6] transition-colors">
            <span className="sr-only">Facebook</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          
          <a href="#" className="text-gray-400 hover:text-[#E1306C] transition-colors">
            <span className="sr-only">Instagram</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>

          <a href="#" className="text-gray-400 hover:text-[#1DA1F2] transition-colors">
            <span className="sr-only">Twitter</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
        </div>
      </div>
    </footer>
    </>
  );
}

export default App;
