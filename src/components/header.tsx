
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div  >
          <header className={` fixed w-full bg-pink-500 top-0 left-0 transition-all duration-300 z-50 
         ${isScrolled ? 'bg-pink-500 bg-opacity-70 backdrop-blur-sm' : 'bg-pink-500'}`}>   
    <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Image
          src="/profile-pic.jpg"
          alt="logo"
          className="w-10 h-10 rounded-full  border-2 border-blue-600 p-0.5"
          width={500}
          height={500}
        />
        <span className="ml-3 text-lg font-bold text-black  ">Portfolio</span>
      </a>
      <nav className="md:ml-auto  flex flex-wrap items-center text-base justify-center text-black ">
      <Link href="landingPage" className="mr-5 hover:text-gray-900">Home </Link> 
      <Link href="about" className="mr-5 hover:text-gray-900">About </Link> 
      <Link href="projects" className="mr-5 hover:text-gray-900">Projects</Link>          
      <Link href="skills" className="mr-5 hover:text-gray-900">Skills</Link>          
      <Link href="contact" className="mr-5 hover:text-gray-900">Contact</Link>  
      </nav>
    </div>
    </header>
    </div>
    
  );
}
