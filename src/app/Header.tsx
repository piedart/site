'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`w-5/6 md:w-2/3 mx-auto xl:w-1/2  h-16 flex my-3 text-primary flex-row  ${
        isOpen ? 'h-auto justify-between lg:justify-end lg:h-16' : 'justify-end'
      }`}
    >
      <div
        className={`${
          isOpen ? 'flex flex-col w-full lg:flex-row lg:w-auto lg:flex lg:items-center' : 'flex-row items-center w-auto hidden lg:flex'
        }`}
      >
        <Link href="/" className="mx-3 hover:bg-tertiary py-2 px-2 rounded-md ease-in duration-75">
          <span className="text-orange-400">01. </span>About
        </Link>
        <Link href="/projects" className="mx-3 hover:bg-tertiary py-2 px-3 rounded-md ease-in duration-75">
          <span className="text-orange-400">02. </span>Projects
        </Link>
        <Link href="/blog" className="mx-3 hover:bg-tertiary py-2 px-3 rounded-md ease-in duration-75">
          <span className="text-orange-400">03. </span>Blog
        </Link>
        <Link href="/contact" className="mx-3 hover:bg-tertiary py-2 px-3 rounded-md ease-in duration-75">
          <span className="text-orange-400">04. </span>Contact
        </Link>
      </div>
      <div className="w-[50px] h-[50px] lg:hidden" onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none">
          <path d="M4 18L20 18" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 12L20 12" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 6L20 6" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
