import React from 'react';
import styles from "./NoMatch.module.css";
import { NavLink } from 'react-router-dom';
import Logo from "../images/error-404.png"

const NoMatch = (props) => {


	return (


		<div >
			<img src={Logo} alt="error" className='error-404' />
		</div>


	)

}

export default NoMatch 