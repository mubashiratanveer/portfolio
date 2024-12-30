"use client";
import Typewriter from "typewriter-effect";

import { Dancing_Script } from "next/font/google";
const newFont = Dancing_Script({
  subsets: ['latin']
});

import React from "react";
export default function About(){
  return (
    <div className="container mx-auto py-16 px-6 bg-black ">
      <div className="sm:ml-32 text-blue-500 py-16">
        {/* Introduction Section */}
        <section className="mb-12 ">
          <h1 className="text-3xl font-semibold mb-2">Who I'm? </h1>
          <p
            className={` ${newFont.className} sm:text-2xl text-3xl  text-pink-500  `}
          >
            Hi, I'm Mubashira 😎
          </p>
          <p className="text-lg leading-8 text-white">
            I'm a student in Quarter 2 of the Governor's Initiative for
            Certified Cloud Applied Generative AI Engineer (GenEng).
            <br /> I am passionate about solving complex problems and exploring
            innovative technologies.
          </p>
        </section>

        {/* journey Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-2">My Journey</h2>
          <p className="text-lg leading-8 text-white">
            When I began my journey, I had no coding background. On the first
            day of my class, I felt completely out of my depth,
          </p>
          <div className="text-xl text-pink-500 sm:ml-8 font-semibold">
            I thought{" "}
            <Typewriter
              options={{
                strings: [
                  '"Which planet are these things from?🪐"',
                  '"What is that brother?😂"',
                  "what.....?💭",
                ],
                autoStart: true,
                loop: true,
              }}
            />{" "}
          </div>
          <p className="text-white text-lg leading-8 mb-4">
            But with determination and countless hours of hard work, I
            successfully completed Quarter 1. I built projects, completed
            <br />
            assignments, and even participated in a UI/UX hackathon. Now I'm
            enjoying the process. This experience has fueled
            <br /> my passion for solving complex problems and continuously
            exploring new technologies.
          </p>
        </section>

        {/* How I Can Help You Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-2">How I Can Help You:</h2>
          <p className="text-lg leading-8 text-white">
            I turn your creative ideas into reality by transforming them into
            digital solutions. Whether you need a sleek web application, <br />
            an innovative user interface, or a dynamic web experience, I'm here
            to help you bring your vision to life. My skills in Next.js,
            <br />
            Tailwind CSS, and TypeScript ensure that your projects are not only
            functional but also aesthetically pleasing and user-friendly.
            <br />
            Let's collaborate to make your ideas a reality. Reach out to discuss
            how I can help you achieve your digital goals.
          </p>
        </section>
      </div>
    </div>
  );
};

;


