import React, { useState } from "react";
import styles from "./ProductCheckout.module.css";
import { NavLink } from 'react-router-dom'
import { useLocation } from "react-router";

const ProductCheckout = (props) => {

    const location = useLocation();

    var amt = parseInt(location.state.quantity.inputValue) * parseInt((location.state.price).slice(1));


    return (

        <div className={styles.row}>
            <div className={styles.column1}>
                <img className={styles.iconDetails} src={location.state.image} alt={location.state.title} />
            </div>
            <div className={styles.column2}>
                <h2>{location.state.title}</h2>
                <h4>Quantity: {location.state.quantity.inputValue}</h4>
                <h4>Toatal Amount: ${amt}</h4>
                <NavLink className={styles.btn} to='/shipping' exact activeClassName='active'  > <b>Confirm </b> </NavLink>


            </div>
        </div>



    );


}

export default ProductCheckout