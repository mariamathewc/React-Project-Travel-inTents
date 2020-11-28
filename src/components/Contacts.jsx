import React from "react";
import styles from "./Contacts.module.css";
import summer from "../images/snow.jpg"

const Contacts = (props) => {




    return (
        <div>
            <div className={styles.imageContainer}>
                <img className={styles.iconDetails} src={summer} alt="summer camp" />
                </div>

        <div className={styles.container}>
                < div className={styles.address}>
                    <h3>Address:</h3>
                    <p> 1700 N 1st St</p>
                    <p> San Jose</p>
                    <p> California</p>
                    <p> 95112</p>
                    <br />
                    <br />
                    <p><h3>Email Address:</h3> mathew.m@husky.neu.edu</p>
                    <br />
                    <br />
                    <p><h3>Contact No:</h3> 510 309 2054</p>

                </div>
           
          
        </div>
</div>



    );


}

export default Contacts