"use client";

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-pink-500 py-6 px-10 font-sans tracking-wide">
      <div className="flex items-center justify-between max-sm:flex-col gap-5">
        <p className="font-bold text-black">Stay connected with me</p>

        <ul className="flex flex-wrap justify-center gap-x-8 gap-4">
          <li>
            <Link
              href={`https://www.linkedin.com/in/mubashira-tanveer-3521b5288`}
            >
              <FaLinkedin
                className="text-blue-600 text-5xl bg-whit
            transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </Link>
          </li>
          <li>
            <Link href={`https://github.com/mubashiratanveer`}>
              <IoLogoGithub
                className=" text-5xl 
            transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </Link>
          </li>
          <li>
            <Link href={`mailto:tanveerahmed2250010@gmail.com`}>
              <IoMdMail
                className="text-blue-500 text-5xl transition-transform duration-300 
                ease-in-out transform hover:scale-110 "
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
