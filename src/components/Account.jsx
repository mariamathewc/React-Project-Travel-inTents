import React from 'react';
import styles from "./Account.module.css";
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router";

const Account = (props) => {

	const location = useLocation();



    return (
        <div className={styles.row}>
            <div className={styles.column1}>
                <h2><em>Personal Information</em></h2>
                <p><strong>First Name:</strong> {location.state.firstname}</p>
                <p><strong>Last Name:</strong> {location.state.lastname}</p>
                <p><strong>Gender:</strong> {location.state.genders}</p>
                <p><strong>Date of Birth:</strong> {location.state.birthday} {location.state.birthmonth} {location.state.birthyear}</p>

        </div>
        <div className={styles.column2}>
                <h2><em>Address Information</em></h2>
                <p><strong>Street Address:</strong> {location.state.address}</p>
                <p><strong>City:</strong> {location.state.city}</p>
                <p><strong>State:</strong> {location.state.state}</p>
                <p><strong>Zip Code:</strong> {location.state.zipcode}</p>
                <p><strong>Country:</strong> {location.state.country}</p>
            </div>

            <div className={styles.column3}>
                <h2><em>Contact Information</em></h2>
                <p><strong>Phone No:</strong> {location.state.phone}</p>
                <p><strong>Email:</strong> {location.state.email}</p>
            </div>

            </div>


	)

}

export default Account 