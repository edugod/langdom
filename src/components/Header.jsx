import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logocropped.png';

const NavigationLink = ({ to, children }) => (
  <li>
    <Link to={to} className="hover:text-tertiary">
      {children}
    </Link>
  </li>
);

const Header = () => {
  return (
    <header className="bg-primary text-white">
      <nav className="flex justify-between items-center w-[66%] mx-auto">
        <div>
          <Link to="/">
          <img className="md:w-20 w-16 cursor-pointer p-2" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="nav-links absolute bg-black min-h-[60vh] left-0 top-full md:static md:min-h-fit md:w-auto w-full flex items-center px-5">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <NavigationLink to="/courses">Cursos</NavigationLink>
            <NavigationLink to="/exchange">Intercâmbistas</NavigationLink>
            <NavigationLink to="/tobacco">Tobacco</NavigationLink>
            <NavigationLink to="/contact">Contato</NavigationLink>
          </ul>
        </div>
        <div className="">
        <Link to="/contact" className="bg-secondary text-white px-3 py-1 md:py-0 rounded-lg hover:bg-tertiary">
            Saiba mais
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
