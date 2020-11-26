import React, { useState } from "react";
import styles from "./Login.module.css";
import { NavLink } from 'react-router-dom';
import summer from "../images/winter.jpg"

const Login = (props) => {
    const [firstname, setfirstname] = useState("");

    let handleChangeFirstName = (e) => {
        setfirstname(e.target.value);
        
        console.log("firstname", firstname);
    }

    return (

		<div className={styles.row}>
			<div className={styles.column1}>
				<img className={styles.iconDetails} src={summer} alt="summer camp" />
			</div>
            <div className={styles.column2}>
                
                <form className={styles.createquestionform}>
                    <p>First Name:</p>
                    <input
                        id='firstname'
                        className={styles.input}
                        type='text'
                        placeholder='First Name'
                        value={firstname}
                        onChange={handleChangeFirstName}

                    />

                    <br />
                    {(firstname) ?
                        <NavLink to='/' exact activeClassName='active'  > <b>Home </b> </NavLink>
                        : <NavLink to='/' exact activeClassName='active'  > <b>Home </b> </NavLink>
                    }
                </form>
				
				<h4>Last Name:</h4>
				<h4>Street Address:</h4>
				<h4>City:</h4>
				<h4>State:</h4>
				<h4>Zip Code:</h4>
				<h4>Country:</h4>
				<h4>Email Address:</h4>
				<h4>Phone No:</h4>
			</div>

		</div>



	)

}

export default Login 