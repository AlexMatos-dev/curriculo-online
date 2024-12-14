import React from 'react';

function Education() {
  const education = [
    {
      course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      institution: 'Faculdade das Américas',
      website: 'https://www.vemprafam.com.br/',
      description: 'Formação focada em desenvolvimento de sistemas, banco de dados e lógica de programação.',
      duration: '2021 - 2023',
    },
    {
      course: 'PHP experience',
      institution: 'Dio',
      website: 'https://www.dio.me/certificate/CE5D3027/share',
      description: 'Conhecimento avançado de PHP, incluindo frameworks como Laravel e Symfony.',
      duration: '2023',
      certificate: 'https://www.dio.me/certificate/CE5D3027/share',
    },
    {
      course: 'Formação em React',
      institution: 'Dio',
      website: 'https://www.dio.me/certificate/A6DC4FE6/share',
      description: 'Aprendizado aprofundado em React, Hooks, Context API e práticas modernas de desenvolvimento front-end.',
      duration: '2023',
      certificate: 'https://www.dio.me/certificate/A6DC4FE6/share',
    },
  ];

  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-6">Formação</h2>
      <div className="max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <div key={index} className="mb-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">
              {edu.course} -{' '}
              <a
                href={edu.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {edu.institution}
              </a>
            </h3>
            <p className="text-sm text-gray-500 mb-2">{edu.duration}</p>
            <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
