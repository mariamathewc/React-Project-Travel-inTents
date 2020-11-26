import React from 'react';
import styles from "./Home.module.css";
import { NavLink } from 'react-router-dom';


	const Home = (props) => {
	

		return (
			
			<div className={styles.container}>
				<div className={styles.home}>
					<h2>Travel in Tents</h2>
					<p>Welcome to Travel in Tents</p>
					<p>Jump right in and explore our campgrounds</p>
					<p> Checkout our exclusive outdoor equipments to make your camping fun</p>
				</div>
				<nav className={styles.nav}>
					<li className={styles.footer}>
					<NavLink to='/about' exact activeClassName='active'  > <b>About </b> </NavLink>
				</li> 
					<li className={styles.footer}>
					<NavLink to='/contacts' exact activeClassName='active'  > <b>Contacts </b> </NavLink>
					</li> 
					</nav>
				</div>
				

		)
	
}

export default Home 