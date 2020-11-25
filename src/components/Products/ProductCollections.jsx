import React from "react";
import styles from "./ProductCollections.module.css";
import ProductList from "./ProductList";
import { useLocation } from "react-router";

const ProductCollections = (props) => {

    const location = useLocation();
    const selectedProduct = location.state.code;
    console.log("test", location.state.productdetail[selectedProduct]);

    let category = "";

    if (selectedProduct == "5") {
        category = "tents";
    }
    else if (selectedProduct == "6"){
        category = "lights";
    }
    else if (selectedProduct == "7"){
        category = "sleeping gear";
    }
    else if (selectedProduct == "8"){
        category = "packs and bags gear";
    }
    else {
        category = "food processing";
    }
    let displayContent;

    if (location.state.productdetail[selectedProduct].length) {

        displayContent = (

            <ul className={styles.container} >
                {location.state.productdetail[selectedProduct].map((product) => (

                    <ProductList product={product} key={product.title} />
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
                <h2>View our hand-picked {category} around the world</h2>
            </div>

            <div >

                {displayContent}
            </div>
        </div>
    )

}

export default ProductCollections