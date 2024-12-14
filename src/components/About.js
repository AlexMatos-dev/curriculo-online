import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>
      <div className="flex flex-col items-center">
        <img
          src="/images/alex.jpg" // Substitua por sua imagem
          alt="Foto de Alex Matos"
          className="rounded-full w-32 h-32 mb-6 shadow-lg"
        />
        <p className="text-lg leading-7 max-w-2xl mx-auto">
          Sou desenvolvedor Back-End, com mais de 3 anos de experiência em front end e mais de 2 anos em desenvolvimento Full-Stack. Apaixonado por criar soluções eficientes e modernas.
        </p>
      </div>
    </section>
  );
}

export default About;
