import React, {useState} from 'react'

const data = [
  {
    images: "./images/illustration-features-tab-1.svg",
    id: 1,
    title: "Bookmark in one click",
    desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    info: "More Info",
    button: "Simple Bookmarking",
  },
  {
    images: "./images/illustration-features-tab-2.svg",
    id: 2,
    title: "Intelligent search",
    desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    info: "More Info",
    button: "Speedy Searching",
  },
  {
    images: "./images/illustration-features-tab-3.svg",
    id: 3,
    title: "Share your bookmarks",
    desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    info: "More Info",
    button: "Easy Sharing",
  }
]

export default function Features() {
  const [features] = useState(data);
  const [value, setValue] = useState(0);

  const {images, title, desc, info} = features[value]

  return (
    <>
    <section className='max-w-7xl mx-auto px-8 py-20'>
      <article className='text-center'>
        <h2 className='text-3xl mb-8 lg:text-4xl'>Features</h2>
        <p className='lg:w-96 lg:mx-auto'>Our aim is to make it quick and easy for you to access your favourite websites. 
          Your bookmarks sync between your devices so you can access them on the go.</p>
      </article>

      <div>
       <ul className='flex justify-center flex-col text-center my-10 md:flex-row'>
        {features.map((search, index) => (
          <li key={search.id} className='border-t border-slate-400 last:border-b md:border-t-0 md:border-b'>
            <button onClick={() => setValue(index) }
             className={`hover:text-soft-red py-3 md:px-8 ${index === value && " border-b-2 border-soft-red"}`}>{search.button}</button>
          </li>
        ))}
       </ul>

       <div className='lg:flex items-center justify-center lg:gap-16 pt-10 max-w-7xl mx-auto'>
          <article className='lg:flex-1 relative '>
            <img src={images} alt='' className='block mx-auto w-full' />
            <div className='rectangle-left'></div>
          </article>

          <article className='text-center lg:text-left lg:flex-1'>
            <h2 className='text-3xl mt-16 mb-8 lg:text-4xl'>{title}</h2>
            <p className='mb-10'>{desc}</p>
            <button className='button-darkBlue text-white py-2 px-4 rounded-md shadow-lg transition duration-500 active:bg-soft-blue hover:bg-white hover:text-soft-blue hover:ring hover:ring-soft-blue'>{info}</button>
          </article>
       </div>
      </div>
    </section>
    </>
  )
}
