import React from 'react';

function Experience() {
  const experiences = [
    {
      title: 'Desenvolvedor Back-End',
      company: 'Jobifull.com',
      website: 'https://jobifull.com',
      description: 'Atualmente trabalhando no desenvolvimento de um sistema completo de gestão de empregos utilizando PHP Laravel.',
      duration: '2024 - Presente',
    },
    {
      title: 'Desenvolvedor Front-End',
      company: 'Trigan.org',
      website: 'https://trigan.org',
      description: 'Desenvolvi interfaces modernas e responsivas utilizando React para aprimorar a experiência do usuário.',
      duration: '2023 - 2024',
    },
  ];

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-6">Experiências</h2>
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">
              {exp.title} -{' '}
              <a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {exp.company}
              </a>
            </h3>
            <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
            <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
