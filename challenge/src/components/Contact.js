import React, { useState } from 'react';
import errorIcon from "../images/icon-error.svg";

export default function Contact() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputValue));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Check if email is valid
    if (isValidEmail) {
      // Handle form submission (e.g., send email)
      console.log("Form submitted with valid email:", email);
    } else {
      // Display error message for invalid email
      console.log("Invalid email. Please try again.");
    }
  };

  return (
    <>
      <section className="button-darkBlue px-8 py-20 mt-20">
        <div className='max-w-7xl mx-auto'>
          <h3 className='text-white font-normaltext-sm uppercase tracking-widest mb-8 text-center'>35,000+ already joined</h3>
          <h2 className='text-white text-3xl mb-8 lg:text-4xl text-center lg:w-96 lg:mx-auto'>Stay up to date with what we're doing</h2>

          <form onSubmit={handleSubmit} className='flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:max-w-xl md:mx-auto'>
            <div className="relative w-full">
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter your email address'
                required
                value={email}
                onChange={handleEmailChange}
                className={`w-full py-2 px-4 rounded shadow-lg text-sm ${!isValidEmail ? 'border-red-500 pl-8 pr-10' : ''}`}
               
              />
              {!isValidEmail && (
                <div className='absolute right-0 top-0 pb-4 h-full flex items-center pr-3'>
                  <img src={errorIcon} alt="Error Icon" className="w-4 h-4" />
                </div>
              )}
              {!isValidEmail && (
                <div className='text-white w-full bg-soft-red text-sm text-align ml-0 mt-0'>Oops! Try again.</div>
              )}
            </div>
            <button type='submit' className='button-red text-white py-2 px-4 rounded-md shadow-lg transition duration-500 hover:bg-white hover:text-soft-red hover:ring hover:ring-soft-red md:w-40 text-sm'>Contact Us</button>
          </form>
        </div>
      </section>
    </>
  )
}
