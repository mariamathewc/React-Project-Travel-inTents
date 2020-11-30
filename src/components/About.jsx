import React from "react";
import styles from "./About.module.css";
import summer from "../images/snow.jpg"
import b1 from "../images/business1.jpg"
import b2 from "../images/business4.jpg"
import b3 from "../images/business3.jpg"
const About = (props) => {




    return (
    <div>

        <div className={styles.aboutsection}>
                <h1><em>CONNECTING GENERATIONS TO THE OUTDOORS</em></h1>
            
        </div>

            <h2 className={styles.heading} >Our Team</h2>

        <div className={styles.row}>
            <div className={styles.column}>
                    <div className={styles.card}>
                        <img src={b1} alt="John" className={styles.imageIcon} />
                        <div className={styles.container}>
                            <h2>John Doe</h2>
                            
                            <p>Email: <a href="mailto:john@example.com">john@example.com</a></p>
                            
                            <br />

                            <p><button className={styles.button}>CEO & Founder</button></p>
                        </div>
                </div>
            </div>

            <div className={styles.column}>
                <div className={styles.card}>
                        <img src={b2} alt="Mike" className={styles.imageIcon}/>
                            <div className={styles.container}>
                                <h2>Mike Ross</h2>
                            
                            <p>Email: <a href="mailto:mike@example.com">mike@example.com</a></p>
                            <br />
                            <p><button className={styles.button}>Vice President</button></p>
                            </div>
                </div>
            </div>

            <div className={styles.column}>
                <div className={styles.card}>
                        <img src={b3} alt="Jane" className={styles.imageIcon}/>
                            <div className={styles.container}>
                                <h2>Jane Doe</h2>
                           
                            <p>Email: <a href="mailto:jane@example.com">jane@example.com</a></p>
                            <br />
                            <p><button className={styles.button}>Sales Manager</button></p>
                            </div>
                </div>
            </div>
        </div>
    </div>


    );


}

export default About