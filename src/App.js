

import React, { useEffect, useState, Fragment } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { isEmpty } from "lodash";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Campgrounds from './components/Campgrounds';
import Spring from './components/Seasons/Spring';


function App() {
    const [fetchedData, setFetchedData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            // performs a GET request
            const response = await fetch("https://run.mocky.io/v3/ffe82bd1-7297-478c-8303-04ac58e156e5");
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
                    <NavBar />
                    <Route path='/' exact component={Home} />
                    <Route path='/campgrounds' exact component={Campgrounds} />
                    
                    <Route exact path="/spring"><Spring camps={fetchedData} /></Route>
                </Fragment>
            </div>
        </Router>
  );
}

export default App;
