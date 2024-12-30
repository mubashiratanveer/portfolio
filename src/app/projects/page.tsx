
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  imgSrc: string;
  liveDemoLink: string;
};

const projects: Project[] = [
  {
    title: 'Resume Builder',
    description: 'A tool to create professional resumes quickly.',
    imgSrc: '/resume.webp',
    liveDemoLink: 'https://resume-builder-black.vercel.app/',
  },
  {
    title: 'Home Decor and Seating Chair Website',
    description: 'An e-commerce website project is a full-featured online platform that allows users to browse, select, and purchase products.🛒',
    imgSrc: '/websitePic3.png',
    liveDemoLink: 'https://ui-ux-hackathone-theta.vercel.app/',
  },
  {
    title: 'Aestheic Bag website',
    description: 'An e-commerce website project is a full-featured online platform that allows users to browse, select, and purchase products.🛒',
    imgSrc: '/websitePic2.png',
    liveDemoLink: 'https://e-commerce-website-lilac-seven.vercel.app/',
  },
  {
    title: 'To-do List',
    description: 'It allows users to create, manage, and prioritize tasks, ensuring they stay on top of their responsibilities and boost productivity. 📝',
    imgSrc: '/to-do-list.png',
    liveDemoLink: 'https://to-do-list-one-opal-57.vercel.app/',
  }, 
  {
    title: 'Counter',
    description: 'A counter project is a simple web application that allows users to Pause,Start and Reset functionality🔢.',
    imgSrc: '/counter.png',
    liveDemoLink: 'https://counter-sigma-three.vercel.app/',
  },
  {
    title: 'Inventory Management System',
    description: 'An inventory management system helps businesses efficiently track.📦',
    imgSrc: '/websitePic4.png',
    liveDemoLink: 'https://inventory-management-system-ten-jade.vercel.app/',
  },
  {
    title: 'E-commerce Website',
    description: 'A full-featured e-commerce web application.',
    imgSrc: '/websitePic.png',
    liveDemoLink: 'https://github.com/mubashiratanveer/hackathone-practice.git',
  }, 
];

const cliProjects: Project[] = [
  {
    title: 'CLI Calculator',
    description: 'A simple calculator built with command-line interface.',
    imgSrc: '/calculator.webp',
    liveDemoLink: 'https://github.com/mubashiratanveer/simple_calculator-.git',
  },
  {
    title: 'ATM Machine',
    description: 'A CLI based ATM machine simulation.',
    imgSrc: '/ATM.jpg',
    liveDemoLink: 'https://github.com/mubashiratanveer/ATM-machine.git',
  },
  {
    title: 'Student Management System',
    description: 'A CLI system to manage student information.',
    imgSrc: '/Management.jpg',
    liveDemoLink: 'https://github.com/mubashiratanveer/student-management-system.git',
  },
  {
    title: 'Currency Converter',
    description: 'CLI tool to convert between different currencies.',
    imgSrc: '/Currency-Converter.jpg',
    liveDemoLink: 'https://github.com/mubashiratanveer/currency_convertor.git',
  },
  {
    title: 'Number Guessing Game',
    description: 'A fun CLI game to guess the number.',
    imgSrc: '/No-Guessing.jpg',
    liveDemoLink: 'https://github.com/mubashiratanveer/cli-number-guessing-game-.git',
  },
  {
    title: '45 Question Assignment',
    description: 'A CLI based 45 Question Typescript Assignment',
    imgSrc: '/45-Ques.jpeg',
    liveDemoLink: 'https://github.com/mubashiratanveer/45-question-of-assignment.git',
  },

];

const ProjectPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black p-6">
      <div className="container mx-auto py-14">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-blue-500 transition-transform 
            duration-300 ease-in-out hover:scale-105">
              <Image src={project.imgSrc} alt={project.title} className="w-auto h-46 object-cover "
               width={500}
               height={500} />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <Link
                  href={project.liveDemoLink}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold text-center my-12 text-white">CLI Based Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cliProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-blue-500 transition-transform 
            duration-300 ease-in-out hover:scale-105">
              <Image src={project.imgSrc} alt={project.title} className="w-full h-48 object-cover "
              width={500}
              height={500} />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                {project.liveDemoLink && (
                  <Link
                    href={project.liveDemoLink}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
