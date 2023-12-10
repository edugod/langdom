import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logocropped.png'
import Button from './Button'

const NavigationLink = ({ to, children, linkClassName }) => (
	<li className={`md:ml-8 text-xl md:my-0 my-7`}>
		<Link to={to} className={`text-gray-700 hover:text-gray-400 duration-500 ${linkClassName}`}>
			{children}
		</Link>
	</li>
)

const Nav = () => {
	let Links = [
		{ name: 'HOME', link: '/' },
		{ name: 'SERVICE', link: '/' },
		{ name: 'ABOUT', link: '/' },
		{ name: 'CONTACT', link: '/' },
	]

	const [open, setOpen] = useState(false)
	return (
		<div className=' shadow-md w-full fixed top-o left-0'>
			<div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
				<div className='font-bold text-2xl cursor-pointer flex items-center text-gray-500 '>
					<span className='text-3xl text-indigo-500 mr-1 pt-2'>
						<Link to='/'>
							<img className='md:w-20 w-16 cursor-pointer p-2' src={Logo} alt='logo' />
						</Link>
					</span>
				</div>
				<div
					onClick={() => setOpen(!open)}
					className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
				>
					<ion-icon name={open ? 'close' : 'menu'}></ion-icon>
				</div>
				<ul
					className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
						open ? 'top-20 opacity-100' : 'top-[-490px]'
					}`}
				>
					<NavigationLink to='/courses'>Cursos</NavigationLink>
					<NavigationLink to='/exchange'>Intercâmbistas</NavigationLink>
					<NavigationLink to='/tobacco'>Tobacco</NavigationLink>
					<NavigationLink to='/contact'>Contato</NavigationLink>
					<Button>Teste</Button>
				</ul>
			</div>
		</div>
	)
}

export default Nav
