import React, { useState } from "react";
import styles from "./CampDetails.module.css";
import { useLocation } from "react-router";

const CampDetails = (props) => {

    const location = useLocation()

    console.log(location.state)

    let displayContent;

    if (location.state.details.popularspots.length) {

        displayContent = (

            <ul className={styles.list} >
                {location.state.details.popularspots.map((spot) => (
                    <div key={spot.name}>
                        <h3> {spot.name}</h3>
                        <p> {spot.desc}</p>
                        </div>
                    
                ))}
            </ul>

        );


    } else {
        displayContent = <div>You have no data!</div>;
    }

    return (

        

            <div className={styles.title}>
                
                    <h2> {location.state.details.title}</h2>
                    
                <h3>Location: {location.state.details.location}</h3>
                <h3> Price: {location.state.details.price}</h3>
                
                <p><em>{location.state.details.description}</em>
                
                    {displayContent}
                    </p>
                    
            </div>
            
            
           



    );


}

export default CampDetails