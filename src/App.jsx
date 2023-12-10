import React from 'react'
import { AppRoutes } from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'

const App = () => {
	return (
		<>
			<Nav />
			<div className='bg-indigo-600 w-full h-screen'>
				<AppRoutes />
				<Footer />
			</div>
		</>
	)
}

export default App
