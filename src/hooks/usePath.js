import { useLocation } from 'react-router-dom'

export const usePath = () => {
	let isHome = false

	const { pathname } = useLocation()
	console.log('isHome do hook', isHome);
	if (pathname === '/' || pathname === '/#') isHome = true

	return isHome
}
