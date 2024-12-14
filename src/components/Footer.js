import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10 text-center">
      <p>Desenvolvido por Alex Matos</p>
      <p>
        <a href="https://www.linkedin.com/in/alexmatos-dev/" className="hover:text-gray-400">LinkedIn</a> | 
        <a href="mailto:alexgammatos@bol.com,br" className="hover:text-gray-400"> Email</a>
      </p>
      <img
          src="/images/alexmatosdevs.png" // Substitua por sua imagem
          alt="Foto de Alex Matos"
          className="rounded-full w-40 h-20 mb-8 shadow-lg mx-auto"
        />
    </footer>
  );
}

export default Footer;
