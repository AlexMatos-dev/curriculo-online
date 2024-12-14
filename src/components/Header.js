import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white fixed w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-2 px-8">
        <h1 className="text-2xl font-bold"><img
          src="/images/alexmatosdevs.png" // Substitua por sua imagem
          alt="Foto de Alex Matos"
          className="rounded w-35 h-20 mb-1 shadow-lg mx-auto  mr-5 md:mr-5 lg:mr-5"
        />Alex Matos</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#about" className="hover:text-gray-400">Sobre Mim</a></li>
            <li><a href="#skills" className="hover:text-gray-400">Habilidades</a></li>
            <li><a href="#experience" className="hover:text-gray-400">Experiência</a></li>
            <li><a href="#education" className="hover:text-gray-400">Formação</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
