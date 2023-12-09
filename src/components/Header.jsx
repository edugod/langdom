import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4">
      <div className="max-w-84.4rem mx-auto flex items-center justify-between">
        <p className="text-lg font-bold">Logo ou Título</p>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Cursos</a>
          <a href="#" className="hover:underline">Modalidades</a>
          <a href="#" className="hover:underline">Contato</a>
          <a href="#" className="hover:underline">Intercâmbistas!</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
