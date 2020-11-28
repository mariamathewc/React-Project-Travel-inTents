import React from "react";
import styles from "./About.module.css";
import summer from "../images/snow.jpg"

const About = (props) => {




    return (
    <div>

        <div className={styles.aboutsection}>
            <h1>About Us Page</h1>
            <p>Some text about who we are and what we do.</p>
            <p>Resize the browser window to see that this page is responsive by the way.</p>
        </div>

            <h2 className={styles.heading} >Our Team</h2>

        <div className={styles.row}>
            <div className={styles.column}>
                    <div className={styles.card}>
                        <img src={summer} alt="Jane" className={styles.imageIcon} />
                        <div className={styles.container}>
                            <h2>Jane Doe</h2>
                            <p className={styles.title}>CEO & Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                            <p><button className={styles.button}>Contact</button></p>
                        </div>
                </div>
            </div>

            <div className={styles.column}>
                <div className={styles.card}>
                        <img src={summer} alt="Mike" className={styles.imageIcon}/>
                            <div className={styles.container}>
                                <h2>Mike Ross</h2>
                                <p class="title">Art Director</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>mike@example.com</p>
                                <p><button className={styles.button}>Contact</button></p>
                            </div>
                </div>
            </div>

            <div className={styles.column}>
                <div className={styles.card}>
                        <img src={summer} alt="John" className={styles.imageIcon}/>
                            <div className={styles.container}>
                                <h2>John Doe</h2>
                                <p class="title">Designer</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>john@example.com</p>
                                <p><button className={styles.button}>Contact</button></p>
                            </div>
                </div>
            </div>
        </div>
    </div>


    );


}

export default About