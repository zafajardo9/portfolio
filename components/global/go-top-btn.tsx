"use client"


import { CiCircleChevUp } from 'react-icons/ci';
import { useState, useEffect } from 'react';

import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100); // Adjust this value based on when you want the button to appear
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex p-4 h-[10rem] items-center justify-center">
        <button
        className={`${
            isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transition-opacity duration-300 focus:outline-none`}
        onClick={scrollToTop}
        >
        
            <span className="font-semibold uppercase text-neutral-500">
            Go Back on Top
            <div className="pt-4 animate-bounce flex justify-center">
                <MdOutlineKeyboardDoubleArrowUp className="text-4xl text-colorOne" />
            </div>
            </span>
        
        </button>
    </div>
  );
};

export default ScrollToTopButton;
