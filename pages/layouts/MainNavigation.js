import Link from 'next/link'
import Image from 'next/image'

const MainNavigation = () => {
	return (
		<div className='nav-wrapper'>
			<nav className='navigation'>
				<div>
					<Link className='logo' href="/">
						<Image src="/QuinchLogo.png" width={25} height={25}/>
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