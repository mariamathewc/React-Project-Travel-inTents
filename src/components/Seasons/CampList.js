import React, { useState } from "react";
import styles from "./CampList.module.css";
import spring from "../../images/spring.jpg";

const CampList = (props) => {

    const [moreDetails, setMoreDetails] = useState(false);





    return (
        
        <li className={styles.container}>
            <article className={styles.article}>
                <div className={styles.wrapper}>
                    <img src={props.camp.image} alt={props.camp.title} width="430" height="300"/>
                    <h2 className={styles.title}>{props.camp.title}</h2>
                    
                </div>
               
            </article>
        </li>
        
        
        
        
        );


}

export default CampList