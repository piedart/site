'use client';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full">
      <div className="flex flex-row justify-end w-full items-center">
        <div className="flex-row mr-24 hidden lg:flex">
          <Link href="/">
            <div className="m-3 p-2 rounded-md hover:scale-110 ease-in-out duration-100 hover:cursor-pointer hover:shadow-md hover:font-semibold">
              <p>
                <span className="text-teal-600 font-semibold">01.</span> About
              </p>
            </div>
          </Link>
          <Link href="/blog">
            <div className="m-3 p-2 rounded-md hover:scale-110 ease-in-out duration-100 hover:cursor-pointer hover:shadow-md hover:font-semibold">
              <p>
                <span className="text-teal-600 font-semibold">02.</span> Blog
              </p>
            </div>
          </Link>

          <Link href="/projects">
            <div className="m-3 p-2 rounded-md hover:scale-110 ease-in-out duration-100 hover:cursor-pointer hover:shadow-md hover:font-semibold">
              <p>
                <span className="text-teal-600 font-semibold">03.</span> Projects
              </p>
            </div>
          </Link>

          <Link href="/contact">
            <div className="m-3 p-2 rounded-md hover:scale-110 ease-in-out duration-100 hover:cursor-pointer hover:shadow-md hover:font-semibold">
              <p>
                <span className="text-teal-600 font-semibold">04.</span> Contact
              </p>
            </div>
          </Link>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          className="lg:hidden"
          onClick={handleClick}
        >
          <path d="M4 18L20 18" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 12L20 12" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 6L20 6" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className={`w-full ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col">
          <Link href="/">
            <div className="ml-10 m-3 p-2 rounded-md hover:scale-110 ease-in-out duration-100 hover:cursor-pointer hover:shadow-md hover:font-semibold">
              <p>
                <span className="text-teal-600 font-semibold">01.</span> About
              </p>
            </div>
          </Link>
          <Link href="/blog">
            <div className="ml-10 m-3 p-2 rounded-md hover:scale-110 ease-in-out duration-100 hover:cursor-pointer hover:shadow-md hover:font-semibold">
              <p>
                <span className="text-teal-600 font-semibold">02.</span> Blog
              </p>
            </div>
          </Link>

          <Link href="/projects">
            <div className="ml-10 m-3 p-2 rounded-md hover:scale-110 ease-in-out duration-100 hover:cursor-pointer hover:shadow-md hover:font-semibold">
              <p>
                <span className="text-teal-600 font-semibold">03.</span> Projects
              </p>
            </div>
          </Link>

          <Link href="/contact">
            <div className="ml-10 m-3 p-2 rounded-md hover:scale-110 ease-in-out duration-100 hover:cursor-pointer hover:shadow-md hover:font-semibold">
              <p>
                <span className="text-teal-600 font-semibold">04.</span> Contact
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
