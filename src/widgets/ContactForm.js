import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mjkbnezv");
  if (state.succeeded) {
    return (
      <div className="text-center py-8">
        <p className="text-xl font-semibold text-green-600">Thank you for your message!</p>
      </div>
    );
  }
  return (
    <div className="max-w-md mx-auto p-6 shadow-lg rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            placeholder="Your Name"
          />
        </div>
        
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            placeholder="Your Email"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-600 text-sm mt-1"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            placeholder="Your Message"
            rows="4"
          ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-600 text-sm mt-1"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
