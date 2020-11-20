import React from "react";
import styles from "./Spring.module.css";
import spring from "../../images/spring.jpg";
import CampList from "./CampList";


const Spring = (props) => {

	console.log(props.camps[0])
	//console.log(props.camps[0].title)
	//console.log(props.camps[0].image._url)
    let displayContent;

    if (props.camps[0].length) {

        displayContent = (

            <ul className={styles.container} >
                {props.camps[0].map((camp) => (
                   
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

export default Spring 