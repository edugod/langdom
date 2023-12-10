import { useLocation } from 'react-router-dom'

export const usePath = () => {
	let isHome = false

	const { pathname } = useLocation()
	if (pathname === '/' || pathname === '/#') isHome = true

	return isHome
}
