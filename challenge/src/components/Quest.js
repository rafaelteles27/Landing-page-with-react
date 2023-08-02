import React, { useState } from 'react';
import arrow from "../images/icon-arrow.svg";
import arrowUpside from "../images/icon-arrow-upside.svg";

export default function Quest({question, answer}) {
    const[showAnswer, setShowAnswer] = useState(false);

  return (
    <>
        <article className='py-4 border-t border-slate-300 last:border-b'>
            <div onClick={() => setShowAnswer(!showAnswer)} className='flex items-center justify-between mb-1 cursor-pointer'>
                <h2 className='font-normal text-lg hover:text-soft-red'>{question}</h2>
                <button>
                    {showAnswer ? (<img src={arrowUpside} alt='' className='transform rotate-180' /> )
                    : (
                        <img src={arrow} alt='' />
                    )}
                 </button>
            </div>
            {showAnswer && <p>{answer}</p>}
        </article>
    </>
  )
}
