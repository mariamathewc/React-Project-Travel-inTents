import React from "react";
import styles from "./CampCollections.module.css";
import CampList from "./CampList";
import { useLocation } from "react-router";

const CampCollections = (props) => {

    const location = useLocation();
    const selectedSeason = location.state.code; 
    console.log("test", location.state.campdetail[selectedSeason]);


    let displayContent;

    if (location.state.campdetail[selectedSeason].length) {

        displayContent = (

            <ul className={styles.container} >
                {location.state.campdetail[selectedSeason].map((camp) => (
                   
                    <CampList camp={camp} key={camp.title} />
                ))}
            </ul>

        );


    } else {
        displayContent = <div>You have no data!</div>;
    }

    return (
        <div >
            <div className={styles.cover}>
                
            </div>

            <div className={styles.textformat}>
                <h2>View our hand-picked campgrounds around the world</h2>
            </div>

            <div >

                {displayContent}
            </div>
        </div>			
		)
	
}

export default CampCollections 