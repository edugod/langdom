import React from 'react'
import { AppRoutes } from './routes'
import Footer from './components/Footer'
import Nav from './components/Nav'

const App = () => {
	return (
		<>
			<Nav />
			<div className='bg-offwhite w-full h-screen'>
				<AppRoutes />
				<Footer />
			</div>
		</>
	)
}

export default App
