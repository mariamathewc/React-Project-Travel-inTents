import React, { useState } from "react";
import styles from "./ProductList.module.css";
import { NavLink } from 'react-router-dom'

const ProductList = (props) => {



    return (



        <li className={styles.container}>
            <article>
                <div className={styles.wrapper}>
                    <div className={styles.container2}>

                        <img className={styles.iconDetails} src={props.product.image} alt={props.product.title} />


                        <div className={styles.titlecontainer} >
                            <h2 className={styles.title}>{props.product.title}</h2>

                            <NavLink className={styles.button}
                                to={{
                                    pathname: '/productdetails',
                                    state: {
                                        details: props.product
                                    }
                                }}> <b>More Details </b> </NavLink>
                            <br />
                            <br />
                            <br />



                        </div>
                    </div>
                </div>

            </article>
        </li>




    );


}

export default ProductList