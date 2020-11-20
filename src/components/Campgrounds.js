import React, { Component } from 'react';
import styles from "./Campgrounds.module.css";
import { NavLink } from 'react-router-dom'
class Campgrounds extends Component {

	render() {

		return (
			<div className={styles.campground}>
			<div className={styles.container}>
				
					<h2>Choose your camping season </h2>

					<ul className={styles.listing}>
						<li className={styles.formating} >
							<NavLink to='/spring' exact activeClassName='active'  > <b>Spring </b> </NavLink>
						</li>
						<li className={styles.formating}>
							<NavLink to='/summer' exact activeClassName='active'  > <b>Summer </b> </NavLink>
						</li>
						<li className={styles.formating}>
							<NavLink to='/autumn' exact activeClassName='active'  > <b>Autumn </b> </NavLink>
						</li>
						<li className={styles.formating}>
							<NavLink to='/winter' exact activeClassName='active'  > <b>Winter </b> </NavLink>
						</li>
						<li className={styles.formating}>
							<NavLink to='/Snow' exact activeClassName='active'  > <b>Snow </b> </NavLink>
						</li>
					</ul>
					
				
			</div>
</div>
		)
	}
}

export default Campgrounds 