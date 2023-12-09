import React from 'react'
import Logo from '../assets/logocropped.png'

const Header = () => {
	return (
		<header className='bg-primary text-white'>
			<nav className=' flex justify-between items-center w-[85%] mx-auto'>
				<div>
					<img className='w-16' src={Logo}></img>
				</div>
				<div className=' absolute'>
					<ul className=' flex md:flex-row items-center gap-[4vw]'>
						<li><a href='#' className='hover:text-tertiary'>Cursos</a></li>
						<li><a href="#" className="hover:text-tertiary">Modalidades</a></li>
						<li><a href="#" className="hover:text-tertiary">Contato</a></li>
						<li><a href="#" className="hover:text-tertiary">Intercâmbistas!</a></li>
					</ul>
				</div>
        <div>
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
