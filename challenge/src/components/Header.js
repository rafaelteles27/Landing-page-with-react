import React from 'react';
import bookmark from "../images/logo-bookmark.svg";
import hamburguer from "../images/icon-hamburger.svg";

export default function Header() {
  return (
    <header>
        <div>
            <img src={bookmark} alt='bookmark' />
        </div>

        <nav>
            <ul>
                <li>
                    <button>

                    </button>
                </li>
            </ul>
        </nav>

        <div>
            <img src={hamburguer} alt='' />
        </div>
    </header>
  )
}
