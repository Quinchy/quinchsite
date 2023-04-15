import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
	return (
		<div className={styles.navContainer}>
			<nav className={styles.navigation}>
				<div>
				<Link className={styles.logo} href="/" title="Go to Homepage">
					<Image src="/QuinchLogo.svg" width={30} height={30} alt="Cyril James De Guzman Logo" />
					<h2 className={styles.nameLogo}>Cyril James De Guzman</h2>
				</Link>
				</div>
				<div>
					<button className={styles.lightToggleButton} aria-label='Toggle light mode'></button>
				</div>
			</nav>
		</div>
	);
};

export default Navigation