import React, {useState} from 'react'
import Quest from './Quest';

const questions = [
  {
    id:1,
    question: "What is a Bookmark?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id:2,
    question: "How can I request a new browser?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id:3,
    question: "Is there a mobile app?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id:4,
    question: "What about other Chromium browsers?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
]

export default function Questions() {
  const [FAQ] = useState(questions);
  

  return (
    <>
    <section className='max-w-xl mx-auto py-20'>
      <article className='text-center'>
        <h2 className='text-3xl mb-8 lg:text-4xl'>Frequently asked questions</h2>
        <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
      </article>

      <article>
        <div className='my-8'>
          {FAQ.map((array) => (
            <Quest key={array.id} {...array} />
          ))}
        </div>

        <button className='button-darkBlue text-white py-2 px-4 rounded-md shadow-lg transition duration-500 active:bg-soft-blue hover:bg-white hover:text-soft-blue hover:ring hover:ring-soft-blue block mx-auto'>More info</button>
      </article>
    </section>
    
    </>
  )
}
