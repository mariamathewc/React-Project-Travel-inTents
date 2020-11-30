import React from 'react';
import styles from "./Campgrounds.module.css";
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router";

const Campgrounds = (props) => {

	const location = useLocation();

	

		return (
			
			<div className={styles.container}>
				<div className={styles.text}>
					<h2>Choose your camping season </h2>

					<ul className={styles.listing}>
						<li className={styles.formating} >
							<NavLink className={styles.links} to={{
								pathname: '/spring',
								state: {
									campdetail: location.state.details,
									code:0
								}
							}} exact activeClassName='active'  > <b>Spring </b> </NavLink>
						</li>
						<li className={styles.formating}>
							<NavLink className={styles.links}  to={{
								pathname: '/summer',
								state: {
									campdetail: location.state.details,
									code: 1
								}
							}}  exact activeClassName='active'  > <b>Summer </b> </NavLink>
						</li>
						<li className={styles.formating}>
							<NavLink className={styles.links}  to={{
								pathname: '/autumn',
								state: {
									campdetail: location.state.details,
									code: 2
								}
							}}  exact activeClassName='active'  > <b>Autumn </b> </NavLink>
						</li>
						<li className={styles.formating}>
							<NavLink className={styles.links}  to={{
								pathname: '/winter',
								state: {
									campdetail: location.state.details,
									code: 3
								}
							}}  exact activeClassName='active'  > <b>Winter </b> </NavLink>
						</li>
						<li className={styles.formating}>
							<NavLink className={styles.links}  to={{
								pathname: '/snow',
								state: {
									campdetail: location.state.details,
									code: 4
								}
							}}  exact activeClassName='active'  > <b>Snow </b> </NavLink>
						</li>
					</ul>
					
				</div>
			</div>

		)
	
}

export default Campgrounds 