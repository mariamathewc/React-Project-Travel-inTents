import React from 'react';
import styles from "./Products.module.css";
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router";

const Products = (props) => {

	const location = useLocation();



	return (
		
			<div className={styles.container}>
			<div className={styles.text}>
				<h2>Choose your camping season </h2>

				<ul className={styles.listing}>
					<li className={styles.formating} >
						<NavLink className={styles.links} to={{
							pathname: '/tents',
							state: {
								productdetail: location.state.details,
								code: 5
							}
						}} exact activeClassName='active'  > <b>Tents </b> </NavLink>
					</li>
					<li className={styles.formating}>
						<NavLink className={styles.links} to={{
							pathname: '/lights',
							state: {
								productdetail: location.state.details,
								code: 6
							}
						}} exact activeClassName='active'  > <b>Lights </b> </NavLink>
					</li>
					<li className={styles.formating}>
						<NavLink className={styles.links} to={{
							pathname: '/sleeping_gear',
							state: {
								productdetail: location.state.details,
								code: 7
							}
						}} exact activeClassName='active'  > <b>Sleeping Gear </b> </NavLink>
					</li>
					<li className={styles.formating}>
						<NavLink className={styles.links} to={{
							pathname: '/packs_and_bags',
							state: {
								productdetail: location.state.details,
								code: 8
							}
						}} exact activeClassName='active'  > <b>Packs and Bags </b> </NavLink>
					</li>
					<li className={styles.formating}>
						<NavLink className={styles.links} to={{
							pathname: '/food_processing',
							state: {
								productdetail: location.state.details,
								code: 9
							}
						}} exact activeClassName='active'  > <b>Food Processing </b> </NavLink>
					</li>
				</ul>

</div>
			</div>
		
	)

}

export default Products 