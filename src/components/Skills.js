import React from 'react';
import { FaLaravel, FaReact, FaDocker } from 'react-icons/fa'; // Laravel, React e Docker
import { SiMysql, SiTailwindcss, SiPhp, SiSymfony } from 'react-icons/si'; // MySQL, Tailwind, PHP e Symfony

function Skills() {
  const skills = [
    { name: 'Laravel', icon: <FaLaravel className="text-red-500 text-4xl" /> },
    { name: 'React', icon: <FaReact className="text-blue-400 text-4xl" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-500 text-4xl" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600 text-4xl" /> },
    { name: 'PHP', icon: <SiPhp className="text-purple-500 text-4xl" /> },
    { name: 'Symfony', icon: <SiSymfony className="text-black text-4xl" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-6">Habilidades</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            {skill.icon}
            <p className="text-center font-medium mt-4">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
