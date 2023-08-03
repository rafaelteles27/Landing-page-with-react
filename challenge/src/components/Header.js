import React, { useState } from 'react';
import bookmark from "../images/logo-bookmark.svg";
import bookmarkWhite from "../images/logo-bookmark-white.svg";
import hamburguer from "../images/icon-hamburger.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import closeBurger from "../images/icon-close.svg";

export default function Header() {
const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='flex items-center justify-between p-8 max-w-7xl mx-auto'>
        <div>
            <img src={bookmark} alt='bookmark' />
        </div>

        <nav className={`${isOpen && "open"} lg:block`}>
            <div>
            <div className='flex items-center justify-between lg:hidden'>
                <img src={bookmarkWhite} alt='' />

                <button onClick={() => setIsOpen(false)}>
                    <img src={closeBurger} alt='' />
                </button>
            </div>
            <ul className='flex flex-col text-center mt-10 lg:mt-0 lg:text-left lg:flex-row lg:items-center lg:gap-6'>
                <li className='border-t border-slate-400 py-4 lg:border-transparent lg:py-0'>
                    <button className='uppercase lg:text-very-dark-blue lg:text-sm cursor-pointer tracking-widest transform duration-500 hover:text-soft-red'>Features</button>
                </li>
                <li className='border-t border-slate-400 py-4 lg:border-transparent lg:py-0'>
                    <button className='uppercase lg:text-very-dark-blue lg:text-sm cursor-pointer tracking-widest transform duration-500 hover:text-soft-red'>Pricing</button>
                </li>
                <li className='border-t border-slate-400 py-4 lg:border-transparent lg:py-0'>
                    <button className='uppercase lg:text-very-dark-blue lg:text-sm cursor-pointer tracking-widest transform duration-500 hover:text-soft-red'>Contact</button>
                </li>
                <li className='border-t border-slate-400 py-4 lg:border-transparent lg:py-0'>
                    <button type="button" class="lg:bg-red-500 border-2 text-white rounded shadow-lg tracking-widest px-7 py-2 uppercase transition duration-500 lg:hover:bg-transparent lg:hover:text-soft-red lg:hover:ring lg:hover:ring-soft-red w-full">Login</button>
                </li>
            </ul>
            </div>

            <ul className='flex items-center justify-center gap-6 lg:hidden'>
                <li>
                    <img src={facebook} alt='' />
                </li>
                <li>
                    <img src={twitter} alt='' />
                </li>
            </ul>
        </nav>

        <div className='lg:hidden'>
            <button onClick={() => setIsOpen(true)}>
                <img src={hamburguer} alt='' />
            </button>
        </div>
    </header>
  )
}
