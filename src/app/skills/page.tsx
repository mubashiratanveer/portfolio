'use client'
import React, { useEffect } from 'react';

type Skill = {
  name: string;
  percentage: number;
};

const skills: Skill[] = [
  { name: 'HTML', percentage: 80 },
  { name: 'CSS', percentage: 85 },
  { name: 'TypeScript', percentage: 75 },
  { name: 'JavaScript', percentage: 70 },
  { name: 'Next.js', percentage: 80 },
  { name: 'Tailwind', percentage: 80 },
];

export default  function Skill(){
  useEffect(() => {
    const spinners = document.querySelectorAll('.spinner');
    spinners.forEach((spinner) => {
      const percentage = parseInt(spinner.getAttribute('data-percentage') || '0', 10);
      spinner.animate(
        [{ strokeDashoffset: 440 }, { strokeDashoffset: 440 - (440 * percentage) / 100 }],
        { duration: 2000, fill: 'forwards' }
      );
    });
  }, []);

  return (
    <div className="min-h-screen  flex flex-wrap justify-center items-center bg-black   ">
      <div className='mt-28 flex flex-wrap justify-center items-center '>
      {skills.map((skill, index) => (
        
        <div key={index} className="m-4 text-center text-white ">
          <svg className="w-32 h-32 rounded-full mx-auto  border-2 border-blue-600 ">
            <circle
              className="spinner"
              cx="50%"
              cy="50%"
              r="35%"
              stroke="#f54be4"
              strokeWidth="8"
              fill="none"
              strokeDasharray="440"
              strokeDashoffset="440"
              data-percentage={skill.percentage}
            />
            <text  
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".3em"
              fontSize="1.25em"
              fontWeight="bold"
              fill='white'
            >
              {skill.percentage}%
            </text>
          </svg>
          <div className="mt-4 text-lg font-medium ">{skill.name}</div>
        </div>
       
      ))}
       </div>
    </div>
  );
};


