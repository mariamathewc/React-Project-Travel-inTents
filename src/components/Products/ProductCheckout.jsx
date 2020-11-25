import React, { useState } from "react";
import styles from "./ProductCheckout.module.css";
import { NavLink } from 'react-router-dom'
import { useLocation } from "react-router";

const ProductCheckout = (props) => {

    const location = useLocation();
    console.log("passedvalue", location.state.quantity);
    return (



        <div>
            </div>




    );


}

export default ProductCheckout