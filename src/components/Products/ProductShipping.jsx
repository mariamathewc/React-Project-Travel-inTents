import React, { useState } from "react";
import styles from "./ProductShipping.module.css";
import { NavLink } from 'react-router-dom'


const ProductShipping = (props) => {



    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [zipcode, setzipcode] = useState("");
    const [country, setcountry] = useState("");
    const [cardname, setcardname] = useState("");
    const [cardnumber, setcardnumber] = useState("");
    const [cvv, setcvv] = useState("");
    const [expmonth, setexpmonth] = useState("");
    const [expyear, setexpyear] = useState("");

    const [placefirstname, setplacefirstname] = useState("Enter First Name");
    const [placelastname, setplacelastname] = useState("Enter Last Name");
    const [placeaddress, setplaceaddress] = useState("Enter Street Address");
    const [placecity, setplacecity] = useState("Enter City");
    const [placestate, setplacestate] = useState("Enter State");
    const [placezipcode, setplacezipcode] = useState("Enter Zip Code");
    const [placecountry, setplacecountry] = useState("Enter Country");
    const [placecardname, setplacecardname] = useState("Enter Name on Card");
    const [placecardnumber, setplacecardnumber] = useState("Enter Card Number");
    const [placecvv, setplacecvv] = useState("Enter CVV");

    function onKeyDown(keyEvent) {
        if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
            keyEvent.preventDefault();
        }
    }

    function handleSubmit() {
        if (firstname.trim() === "") {
            setplacefirstname("**First Name cannot be empty**");
        }
        if (lastname.trim() === "") {
            setplacelastname("**Last Name cannot be empty**");
        }
        if (address.trim() === "") {
            setplaceaddress("**Street Address cannot be empty**");
        }
        if (city.trim() === "") {
            setplacecity("**City cannot be empty**");
        }
        if (state.trim() === "") {
            setplacestate("**State cannot be empty**");
        }
        if (zipcode.trim() === "") {
            setplacezipcode("**Zip Code cannot be empty**");
        }
        if (country.trim() === "") {
            setplacecountry("**Country cannot be empty**");
        }
        if (cardname.trim() === "") {
            setplacecardname("**Card Name cannot be empty**");
        }
        if (cardnumber.trim() === "") {
            setplacecardnumber("**Card Number cannot be empty**");
        }
        else if (cardnumber.trim().length !== 12) {
            setcardnumber("");
            setplacecardnumber("**Card Number must be 12 digit**");
        }
        if (cvv.trim() === "") {
            setcvv("**CVV cannot be empty**");
        }
        else if (cvv.trim().length !== 3) {
            setcvv("");
            setplacecvv("**CVV must be 3 digit**");
        }
        if (expmonth.trim() === "") {
            alert("You have not selected card expiration month");
        }
        if (expyear.trim() === "") {
            alert("You have not selected card expiration year");
        }
    }

    let handleChangeFirstName = (e) => {
        setfirstname(e.target.value.trim());

    }

    let handleChangeLastName = (e) => {
        setlastname(e.target.value);
    }

    let handleChangeAddress = (e) => {
        setaddress(e.target.value);
    }

    let handleChangeCity = (e) => {
        setcity(e.target.value);
    }

    let handleChangeState = (e) => {
        setstate(e.target.value);
    }

    let handleChangeZipCode = (e) => {
        setzipcode(e.target.value);
    }

    let handleChangeCountry = (e) => {
        setcountry(e.target.value);
    }

    let handleChangeCardName = (e) => {
        setcardname(e.target.value);
    }

    let handleChangeCardNumber = (e) => {
        setcardnumber(e.target.value);
    }

    let handleChangeCVV = (e) => {
        setcvv(e.target.value);
    }

    let handleChangeMonth = (e) => {
        setexpmonth(e.target.value);
    }

    let handleChangeYear = (e) => {
        setexpyear(e.target.value);
    }
    return (

        <div className={styles.row}>
            
                <div className={styles.column1}>
                <h2> Shipping Address </h2>
                <br/>
                    <form className={styles.createquestionform} onKeyDown={onKeyDown}>
                        <p>* First Name:</p>
                        <input
                            id='firstname'
                            className={styles.input}
                            type='text'
                            placeholder={placefirstname}
                            value={firstname}
                            onChange={handleChangeFirstName}

                            required />
                        <p>* Last Name:</p>
                        <input
                            id='lastname'
                            className={styles.input}
                            type='text'
                            placeholder={placelastname}
                            value={lastname}
                            onChange={handleChangeLastName}

                            required />
                        <p>* Street Address:</p>
                        <input
                            id='address'
                            className={styles.input}
                            type='text'
                            placeholder={placeaddress}
                            value={address}
                            onChange={handleChangeAddress}

                            required />
                        <p>* City:</p>
                        <input
                            id='city'
                            className={styles.input}
                            type='text'
                            placeholder={placecity}
                            value={city}
                            onChange={handleChangeCity}

                            required />
                        <p>* State:</p>
                        <input
                            id='state'
                            className={styles.input}
                            type='text'
                            placeholder={placestate}
                            value={state}
                            onChange={handleChangeState}

                            required />
                        <p>* Zip Code:</p>
                        <input
                            id='zipcode'
                            className={styles.input}
                            type='number'
                            placeholder={placezipcode}
                            value={zipcode}
                            onChange={handleChangeZipCode}

                            required />
                        <p>* Country:</p>
                        <input
                            id='country'
                            className={styles.input}
                            type='text'
                            placeholder={placecountry}
                            value={country}
                            onChange={handleChangeCountry}

                            required />

                    </form>

                </div>



          
            <div className={styles.column2}>
                <h2> Credit Card </h2>
                <br />
                <form className={styles.createquestionform} onKeyDown={onKeyDown}>
                    <p>* Name on Card:</p>
                    <input
                        id='cardname'
                        className={styles.input1}
                        type='text'
                        placeholder={placecardname}
                        value={cardname}
                        onChange={handleChangeCardName}

                        required />
                    <p>* Card Number:</p>
                    <input
                        id='cardnumber'
                        className={styles.input1}
                        type='number'
                        placeholder={placecardnumber}
                        value={cardnumber}
                        onChange={handleChangeCardNumber}

                        required />
                    <p>* CVV:</p>
                    <input
                        id='cvv'
                        className={styles.input1}
                        type='number'
                        placeholder={placecvv}
                        value={cvv}
                        onChange={handleChangeCVV}

                        required />

                    <p>Expiration Date:</p>
                    <div>
                        <span>Month: </span>
                        <select onChange={handleChangeMonth} name="months" id="months">
                            <option value="MM">MM</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                        
                        <span> Year: </span>
                        <select onChange={handleChangeYear} name="year" id="year">
                            <option value="YYYY">YYYY</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                        </select>
                    </div>
                    <br />
                    {(firstname.trim() !== "" && lastname.trim() !== "" && address.trim() !== "" && city.trim() !== "" &&
                        state.trim() !== "" && zipcode.trim() !== "" && country.trim() !== "" && cardname.trim() !== "" &&
                        cardnumber.trim() !== "" && cardnumber.trim().length === 12 && cvv.trim() !== "" && cvv.trim().length === 3
                        && expmonth.trim() !== "" && expyear.trim() !== "") ?
                        <NavLink className={styles.btn} to={{
                            pathname: '/thankyou',
                            state: {
                                firstname: firstname,
                                lastname: lastname,
                                address: address,
                                city: city,
                                state: state,
                                zipcode: zipcode,
                                country: country
                            }
                        }} exact activeClassName='active'  > <b> Confirm </b> </NavLink>
                        : <NavLink onClick={handleSubmit} className={styles.btn} to='/shipping' exact activeClassName='active'  > <b>Confirm </b> </NavLink>
                    }







                </form>
            </div>
        </div>



    );


}

export default ProductShipping