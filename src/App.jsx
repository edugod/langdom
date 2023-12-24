import React from 'react'
import { AppRoutes } from './routes'
import Footer from './components/Footer'
import NewNav from './components/NewNav'

const App = () => {
	return (
		<>
			<NewNav />
			<div className='bg-offwhite w-full h-screen'>
				<AppRoutes />
				<Footer />
			</div>
		</>
	)
}

export default App
