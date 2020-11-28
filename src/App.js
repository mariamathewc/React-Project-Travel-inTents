

import React, { useEffect, useState, Fragment } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { isEmpty } from "lodash";
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Account from './components/Account.jsx';
import Login from './components/Login.jsx';
import Campgrounds from './components/Campgrounds.jsx';
import CampCollections from './components/Seasons/CampCollections.jsx';
import CampDetails from './components/Seasons/CampDetails.jsx';
import Products from './components/Products.jsx';
import ProductCollections from './components/Products/ProductCollections.jsx';
import ProductDetails from './components/Products/ProductDetails.jsx';
import ProductCheckout from './components/Products/ProductCheckout.jsx';
import ThankYou from './components/Products/ThankYou.jsx';

function App() {
    const [fetchedData, setFetchedData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            // performs a GET request
            const response = await fetch("https://run.mocky.io/v3/f3b46e2f-1ec5-45e6-8fbc-14022272f9dd");
            const responseJson = await response.json();
            setFetchedData(Object.values(responseJson));
        };

        if (isEmpty(fetchedData)) {
            fetchData();
        }
    }, [fetchedData]);
   // console.log(fetchedData);
    return (
        <Router>
             <div >
          
                <Fragment >
                    <NavBar data={fetchedData} />
                    <Route path='/' exact component={Home} />
                    <Route exact path="/login"><Login /></Route>
                    <Route exact path="/account"><Account /></Route>

                    <Route path='/campgrounds' exact component={Campgrounds} />
                    <Route exact path="/spring"><CampCollections /></Route>
                    <Route exact path="/summer"><CampCollections /></Route>
                    <Route exact path="/autumn"><CampCollections /></Route>
                    <Route exact path="/winter"><CampCollections /></Route>
                    <Route exact path="/snow"><CampCollections /></Route>
                    <Route exact path="/campdetails"><CampDetails /></Route>

                    <Route exact path="/products"><Products /></Route>
                    <Route exact path="/tents"><ProductCollections /></Route>
                    <Route exact path="/lights"><ProductCollections /></Route>
                    <Route exact path="/sleeping_gear"><ProductCollections /></Route>
                    <Route exact path="/packs_and_bags"><ProductCollections /></Route>
                    <Route exact path="/food_processing"><ProductCollections /></Route>
                    <Route exact path="/productdetails"><ProductDetails /></Route>
                    <Route exact path="/checkout"><ProductCheckout /></Route>
                    <Route exact path="/thankyou"><ThankYou /></Route>
                </Fragment>
            </div>
        </Router>
  );
}

export default App;
