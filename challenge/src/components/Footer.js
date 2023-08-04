import React, {useState} from 'react';
import facebook from "../images/icon-facebook.svg";
import facebookRed from "../images/icon-facebook-red.svg";
import twitter from "../images/icon-twitter.svg";
import twitterRed from "../images/icon-twitter-red.svg";
import logo from "../images/logo-bookmark-white.svg";

export default function Footer() {
  const [isFacebookHovering, setIsFacebookHovering] = useState(false);
  const [isTwitterHovering, setIsTwitterHovering] = useState(false);

  return (
    <>
    <footer className='darkest-blue py-10 px-8 '>
       <div className='max-w-7xl mx-auto flex items-center justify-center gap-6 flex-col text-center md:flex-row md:justify-between'>
         <div className='md:flex md:items-center md:gap-6 lg:gap-10'>
            <img src={logo} alt='' />

            <ul className='mt-6 md:mt-0 md:flex md:gap-6'>
                <li>
                    <button className='text-white text-sm tracking-wide uppercase cursor-pointer transform duration-500 hover:text-soft-red'>
                        Features
                    </button>
                </li>
                <li className='my-4 md:my-0'>
                    <button className='text-white text-sm tracking-wide uppercase cursor-pointer transform duration-500 hover:text-soft-red'>
                        Pricing
                    </button>
                </li>
                <li><button className='text-white text-sm tracking-wide uppercase cursor-pointer transform duration-500 hover:text-soft-red'>
                    Contact
                    </button>
                </li>
            </ul>
          </div>

          <ul className='flex items-center gap-4 lg:gap-10'>
      <li className="relative">
        <button
          onMouseEnter={() => setIsFacebookHovering(true)}
          onMouseLeave={() => setIsFacebookHovering(false)}
        >
          <img src={facebook} alt='' className={`w-5 h-5 transform duration-500 hover:${isFacebookHovering ? 'opacity-0' : 'opacity-100'}`} />
          <img src={facebookRed} alt='' className={`w-5 h-5 absolute top-0 left-0 opacity-0 transition-opacity duration-500 ${isFacebookHovering ? 'opacity-100' : 'opacity-0'}`} />
        </button>
      </li>
      <li className="relative">
        <button
          onMouseEnter={() => setIsTwitterHovering(true)}
          onMouseLeave={() => setIsTwitterHovering(false)}
        >
          <img src={twitter} alt='' className={`w-5 h-5 transform duration-500 hover:${isTwitterHovering ? 'opacity-0' : 'opacity-100'}`} />
          <img src={twitterRed} alt='' className={`w-5 h-5 absolute top-0 left-0 opacity-0 transition-opacity duration-500 ${isTwitterHovering ? 'opacity-100' : 'opacity-0'}`} />
        </button>
      </li>
    </ul>
       </div>
    </footer>
    </>
  )
}
