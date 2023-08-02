import React from 'react';
import Chrome from "../images/logo-chrome.svg";
import Firefox from "../images/logo-firefox.svg";
import Opera from "../images/logo-opera.svg";
import Dots from "../images/bg-dots.svg";

export default function Downloads() {
  return (
    <>
    <section className='max-w-7xl mx-auto px-8 py-20'>
        <article className='text-center mb-10'>
            <h2 className='text-3xl mb-8 lg:text-4xl'>Download the extensions</h2>
            <p>We've got more browsers in the pipeline. 
                Please do let us know if you've got a favourite you'd like us to prioritize.</p>
        </article>

        <article className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <div className='bg-white shadow-2xl text-center p-8 rounded'>
                <img src={Chrome} alt='' className='block mx-auto mb-4'/>
                <h3 className='text-xl mb-4'>Add to Chrome</h3>
                <p className='text-sm'>Minimum version 62</p>
                <img src={Dots} alt='' className='block mx-auto my-4' />
                <button className='button-darkBlue text-white py-2 px-4 rounded-md shadow-lg transition duration-500 active:bg-soft-blue hover:bg-white hover:text-soft-blue hover:ring hover:ring-soft-blue'>Add & Install Extensions</button>
            </div>

            <div className='bg-white shadow-2xl text-center p-8 rounded lg:transform lg:translate-y-10'>
                <img src={Firefox} alt='' className='block mx-auto mb-4'/>
                <h3 className='text-xl mb-4'>Add to Firefox</h3>
                <p className='text-sm'>Minimum version 62</p>
                <img src={Dots} alt='' className='block mx-auto my-4' />
                <button className='button-darkBlue text-white py-2 px-4 rounded-md shadow-lg transition duration-500 active:bg-soft-blue hover:bg-white hover:text-soft-blue hover:ring hover:ring-soft-blue'>Add & Install Extensions</button>
            </div>

            <div className='bg-white shadow-2xl text-center p-8 rounded lg:transform lg:translate-y-20'>
                <img src={Opera} alt='' className='block mx-auto mb-4'/>
                <h3 className='text-xl mb-4'>Add to Opera</h3>
                <p className='text-sm'>Minimum version 62</p>
                <img src={Dots} alt='' className='block mx-auto my-4' />
                <button className='button-darkBlue text-white py-2 px-4 rounded-md shadow-lg transition duration-500 active:bg-soft-blue hover:bg-white hover:text-soft-blue hover:ring hover:ring-soft-blue'>Add & Install Extensions</button>
            </div>
        </article>
    </section>
    </>
  )
}
