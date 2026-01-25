import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = () => {
  // 1. Setup Formspree hook
  // Replace "YOUR_FORM_ID" with the unique ID you get from formspree.io
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  // 2. Show a success message if the form submits successfully
  if (state.succeeded) {
      return (
        <section className="bg-white py-24 px-8 text-center min-h-[50vh] flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-serif text-[#1A202C] mb-4">Message Sent Successfully!</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Thank you for reaching out, Lindiwe will get back to you shortly.
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-8 text-[#3B82F6] font-medium hover:underline"
            >
              Back to form
            </button>
        </section>
      );
  }

  // 3. Main Contact Layout
  return (
    <section className="bg-white py-24 px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-serif text-center text-[#1A202C] mb-16">
          Connect With Senafix Wellness
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-stretch">
          
          {/* LEFT COLUMN: Contact Form (Connected to Formspree) */}
          <div className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-100 border border-gray-50">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
                <input 
                  id="name"
                  type="text" 
                  name="name" 
                  required
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              
              {/* Email Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
                <input 
                  id="email"
                  type="email" 
                  name="email"
                  required
                  placeholder="your@email.com" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows="4" 
                  placeholder="How can we help you?" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button 
                type="submit" 
                disabled={state.submitting}
                className="w-full bg-[#3B82F6] hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition-colors disabled:opacity-50"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN: Contact Info (Blue Premium Design) */}
          <div className="bg-[#3B82F6] p-10 rounded-2xl shadow-xl h-full text-white relative overflow-hidden flex flex-col justify-center">
            
            {/* Decorative background blur */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-10 blur-2xl"></div>

            <h3 className="text-3xl font-serif mb-12 relative z-10">Contact Information</h3>

            <div className="space-y-10 relative z-10">
              
              {/* Email Item */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-blue-100 text-xs font-bold uppercase tracking-wider mb-1">Email Me</p>
                  <p className="font-medium text-lg break-all">lindiwedidiza56@gmail.com</p>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-blue-100 text-xs font-bold uppercase tracking-wider mb-1">Call Us</p>
                  <p className="font-medium text-lg">+27 81 726 5743</p>
                </div>
              </div>

              {/* Address Item */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-blue-100 text-xs font-bold uppercase tracking-wider mb-1">Visit Me</p>
                  <p className="font-medium text-lg leading-snug">
                    12 Stanley street Perm Gardens,<br/>
                    Eerste River
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;