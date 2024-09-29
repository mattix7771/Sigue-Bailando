import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mjkbnezv");
  if (state.succeeded) {
      return <p>Thank you for your message!</p>;
  }
  return (
    <div className='mx-4 p-4 shadow-lg overflow-auto'>
      <form onSubmit={handleSubmit}>
        
        <div className='mb-4'>
          <label for="name" className='font-bold'>Name</label>
          <input className='rounded-md float-end p-1'
            id="name"
            type="name" 
            name="name"
          />
        </div>
        
        <div className='mb-4'>
          <label for="email" className='font-bold'>Email</label>
          <input className='rounded-md float-end p-1'
            id="email"
            type="email" 
            name="email"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>

        <div className='mb-10'>
          <label for="message" className='font-bold'>Message</label>
          <textarea className='rounded-md float-end p-1'
            id="message"
            name="message"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>

        <button type="submit" disabled={state.submitting} className='float-end bg-blue-500 py-1 px-2 rounded-md font-Barlow font-bold'>
          Send
        </button>
      
      </form>
    </div>
  );
}

export default ContactForm;