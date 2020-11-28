import React from 'react';
import styles from "./Account.module.css";
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router";

const Account = (props) => {

	const location = useLocation();

    const mail = "mailto:".concat( location.state.email );

    return (
        <div className={styles.title}>
        <div className={styles.row}>
            <div className={styles.column1}>
                <h2><em>Personal Information</em></h2>
                <br />
                <br />
                <p><strong>First Name:</strong> {location.state.firstname}</p>
                <br />
                <p><strong>Last Name:</strong> {location.state.lastname}</p>
                <br />
                <p><strong>Gender:</strong> {location.state.genders}</p>
                <br />
                <p><strong>Date of Birth:</strong> {location.state.birthday} {location.state.birthmonth} {location.state.birthyear}</p>

        </div>
        <div className={styles.column2}>
                <h2><em>Address Information</em></h2>
                <br />
                <br />
                <p><strong>Street Address:</strong> {location.state.address}</p>
                <br />
                <p><strong>City:</strong> {location.state.city}</p>
                <br />
                <p><strong>State:</strong> {location.state.state}</p>
                <br />
                <p><strong>Zip Code:</strong> {location.state.zipcode}</p>
                <br />
                <p><strong>Country:</strong> {location.state.country}</p>
            </div>

            <div className={styles.column3}>
                <h2><em>Contact Information</em></h2>
                <br />
                <br />
                <p><strong>Phone No:</strong> {location.state.phone}</p>
                    <br />
                    
                <p><strong>Email:</strong><a href={mail}>{location.state.email}</a></p>
                
            </div>

            </div>
</div>

	)

}

export default Account 