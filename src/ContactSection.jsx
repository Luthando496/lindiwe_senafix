import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = () => {
  // Replace 'YOUR_FORM_ID' with the ID you get from Formspree
  const [state, handleSubmit] = useForm("meeayapl");

  if (state.succeeded) {
      return (
        <section className="bg-white py-24 px-8 text-center">
            <h2 className="text-3xl font-serif text-[#3B82F6] mb-4">Message Sent!</h2>
            <p className="text-gray-600">Thanks for reaching out. We'll get back to you soon.</p>
        </section>
      );
  }

  return (
    <section className="bg-white py-24 px-8">
      <div className="max-w-6xl mx-auto">
        {/* ... Header and Grid layout ... */}
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Form Column */}
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 outline-none"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 outline-none"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 outline-none resize-none"
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

          {/* ... Your Contact Info Column (Use the "Option 1" design you liked) ... */}

        </div>
      </div>
    </section>
  );
};

export default ContactSection;