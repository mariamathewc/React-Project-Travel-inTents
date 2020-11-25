import React, { useState } from "react";
import styles from "./ProductDetails.module.css";
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router";

const ProductDetails = (props) => {
    const [inputValue, setinputValue] = useState(1);

  let  handleChange = (e) => {
      setinputValue(e.target.value);
      console.log("inputValue", inputValue);
    }


    const location = useLocation();
    let displayContent;

    if (location.state.details.features.length) {

        displayContent = (

            <ul className={styles.list} >
                {location.state.details.features.map((feat) => (
                    <div key={feat.tag}>
                        <p><b> {feat.tag}:</b>  {feat.desc}</p>
                        
                    </div>

                ))}
            </ul>

        );


    } else {
        displayContent = <div>You have no data!</div>;
    }
    

    
    
    return (
       
        <div className={styles.row}>
            <div className={styles.column1}>
                
                <img className={styles.iconDetails} src={location.state.details.image} alt={location.state.details.title} />
                
            </div>
            <div className={styles.column2}>
                <h2>{location.state.details.title}</h2>
                <h3>Price: {location.state.details.price}</h3>
                <h4><b>Description:  </b> {location.state.details.description} </h4>
                <h4><b>Features:{displayContent}</b> </h4>
            </div>
            <div className={styles.column3}>
                <h4>In Stock</h4>

                <form className={styles.createquestionform}>
                    <p>Enter Qty:</p>
                    <input
                        id='inputValue'
                        className={styles.input}
                        type='text'
                        placeholder='1'
                        value={inputValue}
                        onChange={handleChange}
                        
                    />
                   
                    <br/>
                    
                    <NavLink className={styles.btn} to={{
                        pathname: '/checkout',
                        state: {
                            title: location.state.details.title,
                            quantity: { inputValue }
                        }
                    }} exact activeClassName='active'  > <b>Buy Now </b> </NavLink>       
                    
                </form>
            </div>
            </div>
            
    )

}

export default ProductDetails