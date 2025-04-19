'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const useWidth = () => {
    const [width, setWidth] = useState(0); // default width, detect on server.
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsOpen(false);
    };
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);
    return width;
  };

  useWidth();

  const [colour, setColour] = useState(false);

  useEffect(() => {
    const main = document.getElementById("main")
    if(!main) return;
    main.addEventListener('scroll', () => {
      if (main.scrollTop >= screen.height) {
        setColour(true);
      } else setColour(false);
    });
  });



  return (
    <div className={`w-full fixed ${colour ? 'bg-white' : ''} ${isOpen ? 'bg-white' : ''}`}>
      <div className={`flex justify-end w-full ${isOpen ? 'flex-col' : 'flex-row items-center'}`}>
        <div className={`${isOpen ? 'flex-col' : 'flex-row'} mr-16 hidden lg:flex`}>
          <Button variant="link" className="hover:scale-105 h-auto p-5">
            <Link href="/">
              <p className="text-md">
                <span className="text-primary font-semibold">01.</span> About
              </p>
            </Link>
          </Button>
          <Button variant="link" className="hover:scale-105 h-auto p-5">
            <Link href="/blog">
              <p className="text-md">
                <span className="text-primary font-semibold">02.</span> Blog
              </p>
            </Link>
          </Button>
          <Button variant="link" className="hover:scale-105 h-auto p-5">
            <Link href="/projects">
              <p className="text-md">
                <span className="text-primary font-semibold">03.</span> Projects
              </p>
            </Link>
          </Button>
          <Button variant="link" className="hover:scale-105 h-auto p-5">
            <Link href="/contact">
              <p className="text-md">
                <span className="text-primary font-semibold">04.</span> Contact
              </p>
            </Link>
          </Button>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          className="lg:hidden mx-5"
          onClick={handleClick}
        >
          <path d="M4 18L20 18" stroke="#dd1d4a" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 12L20 12" stroke="#dd1d4a" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 6L20 6" stroke="#dd1d4a" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
