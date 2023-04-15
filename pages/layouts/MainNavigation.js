import Link from 'next/link'
import Image from 'next/image'

const MainNavigation = () => {
	return (
		<div className='nav-wrapper'>
			<nav className='navigation'>
				<div className='logo'>
					<Link href="/">
						<Image src="/QuinchLogo.svg" width={45} height={45}/>
					</Link>
					<Link href="/">
						<h2 className='name-logo'>Cyril James De Guzman</h2>
					</Link>
				</div>
				<div>
					<button className='light-toggle-button'></button>
				</div>
			</nav>
		</div>
	)
}

export default MainNavigation