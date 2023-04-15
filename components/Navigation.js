import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
	return (
		<div className={styles.navContainer}>
			<nav className={styles.navigation}>
				<div>
				<Link className={styles.logo} href="/">
					<Image className={styles.quinchLogo} src="/QuinchLogo.svg" width={30} height={30} alt="Cyril James De Guzman Logo" />
					<h2 className={styles.nameLogo}>Cyril James De Guzman</h2>
				</Link>
				</div>
				<div>
					<Link className={styles.logo} href="https://github.com/Quinchy" target="_blank">
						<Image className={styles.github} src="/github.svg" width={30} height={30} alt="Cyril James De Guzman Logo" />
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Navigation