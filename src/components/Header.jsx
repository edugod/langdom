import React from 'react'
import Logo from '../assets/logocropped.png'


const Header = () => {
  
  const navLinks = document.querySelector('.nav-links') 
  function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('[top-[9%]')
  }


  return (
		<header className='bg-primary text-white'>
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
				<div>
					<img className='w-16 cursor-pointer' src={Logo} alt='logo'></img>
				</div>
				<div className="nav-links duration-500 md:static absolute bg-black md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
					<ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
						<li><a href='#' className='hover:text-tertiary'>Cursos</a></li>
						<li><a href="#" className="hover:text-tertiary">Modalidades</a></li>
						<li><a href="#" className="hover:text-tertiary">Contato</a></li>
						<li><a href="#" className="hover:text-tertiary">Intercâmbistas!</a></li>
					</ul>
				</div>
        <div className='flex items-center gap-6'>
          <button className='bg-secondary text-white px-3 py-1 rounded-full hover:bg-tertiary'>Saiba Mais!</button>
        </div>
			</nav>
		</header>
	)
}

export default Header

/*
<div className="max-w-84.4rem mx-auto flex items-center justify-between">
<img src={Logo} alt="Logo da Empresa" className="h-20" />
<nav className="space-x-4">
  <a href="#" className="hover:underline">Cursos</a>
  <a href="#" className="hover:underline">Modalidades</a>
  <a href="#" className="hover:underline">Contato</a>
  <a href="#" className="hover:underline">Intercâmbistas!</a>
</nav>
</div> */
