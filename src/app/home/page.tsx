
'use client'
import Image from "next/image";
import Typewriter from "typewriter-effect";
import React from "react";

import {Dancing_Script } from "next/font/google"
const myFont= Dancing_Script({subsets:['latin'],weight:'400'})

 
export default function HeroSection() {
  return (
    <div>
      <section className="text-gray-600 body-font bg-black">
        <div className="container mx-auto flex px-5 py-32 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
            <Image
              className="rounded-full border-2 border-pink-500 hover:shadow-lg hover:shadow-blue-500 "
              alt="hero"
               src="/profile-pic.jpg"  
               width={500}
               height={500} 
            />   
          </div>
          <div
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left
     items-center text-center "
          >
            <p className= {` ${myFont.className} sm:text-5xl md:text-3xl mb-4  text-blue-500`}>
              Mubashira Tanveer    
            </p>
             <h1 className="title-font sm:text-4xl text-3xl mb-3 font-medium text-pink-500">
             < Typewriter
                options={{
                  strings: ["UI/UX designer", "Frontend Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
             </h1>
            <p className="mb-8 leading-relaxed text-blue-500">
             Passionate about pushing the boundaries of front-end development
              to craft visually stunning and high-performance applications.
              Designing isn't just a job for me; it's a profound passion that
              drives me to create meaningful and engaging user experiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
