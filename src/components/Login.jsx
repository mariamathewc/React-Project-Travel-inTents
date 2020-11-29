import React, { useState } from "react";
import styles from "./Login.module.css";
import { NavLink } from 'react-router-dom';
import summer from "../images/winter.jpg"

const Login = (props) => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [zipcode, setzipcode] = useState("");
    const [country, setcountry] = useState("");
    const [email, setemail] = useState("");
    const [genders, setgenders] = useState("");
    const [phone, setphone] = useState("");
    const [birthday, setbirthday] = useState("");
    const [birthmonth, setbirthmonth] = useState("");
    const [birthyear, setbirthyear] = useState("");

    const [placefirstname, setplacefirstname] = useState("Enter First Name");
    const [placelastname, setplacelastname] = useState("Enter Last Name");
    const [placeaddress, setplaceaddress] = useState("Enter Street Address");
    const [placecity, setplacecity] = useState("Enter City");
    const [placestate, setplacestate] = useState("Enter State");
    const [placezipcode, setplacezipcode] = useState("Enter Zip Code");
    const [placecountry, setplacecountry] = useState("Enter Country");
    const [placeemail, setplaceemail] = useState("Enter Email Address");
    const [placephone, setplacephone] = useState("Enter Phone Number");


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
        if (email.trim() === "") {
            setplaceemail("**Email cannot be empty**");
        }
        else if (!email.trim().includes('@')) {
            setemail("");
            setplaceemail("**Invalid Email address**");
        }
        if (phone.trim() === "") {
            setplacephone("**Phone Number cannot be empty**");
        }
        else if (phone.trim().length !== 10) {
            setphone("");
            setplacephone("**Phone number must be 10 digit long**");
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

    let handleChangeEmail = (e) => {
        setemail(e.target.value);
    }

    let handleChangePhone = (e) => {
        setphone(e.target.value);
    }

    let handleChangeDay = (e) => {
        setbirthday(e.target.value);
    }

    let handleChangeMonth = (e) => {
        setbirthmonth(e.target.value);
    }

    let handleChangeYear = (e) => {
        setbirthyear(e.target.value);
    }
    let handleChangeGenders = (e) => {
        setgenders(e.target.value)

    }

    return (

		<div className={styles.row}>
			<div className={styles.column1}>
				<img className={styles.iconDetails} src={summer} alt="summer camp" />
			</div>
            <div className={styles.column2}>
                
                <form  className={styles.createquestionform} onKeyDown={onKeyDown}>
                    <p>* First Name:</p>
                    <input
                        id='firstname'
                        className={styles.input}
                        type='text'
                        placeholder={placefirstname}
                        value={firstname}
                        onChange={handleChangeFirstName}

                        required />
                    <br />
                    <p>* Last Name:</p>
                    <input
                        id='lastname'
                        className={styles.input}
                        type='text'
                        placeholder={placelastname}
                        value={lastname}
                        onChange={handleChangeLastName}

                        required />
                    <br />
                    <p>* Street Address:</p>
                    <input
                        id='address'
                        className={styles.input}
                        type='text'
                        placeholder={placeaddress}
                        value={address}
                        onChange={handleChangeAddress}

                        required />
                    <br />
                    <p>* City:</p>
                    <input
                        id='city'
                        className={styles.input}
                        type='text'
                        placeholder={placecity}
                        value={city}
                        onChange={handleChangeCity}

                        required />
                    <br />
                    <p>* State:</p>
                    <input
                        id='state'
                        className={styles.input}
                        type='text'
                        placeholder={placestate}
                        value={state}
                        onChange={handleChangeState}

                        required />
                    <br />
                    <p>* Zip Code:</p>
                    <input
                        id='zipcode'
                        className={styles.input}
                        type='number'
                        placeholder={placezipcode}
                        value={zipcode}
                        onChange={handleChangeZipCode}

                        required />
                    <br />
                    <p>* Country:</p>
                    <input
                        id='country'
                        className={styles.input}
                        type='text'
                        placeholder={placecountry}
                        value={country}
                        onChange={handleChangeCountry}

                        required />
                    <br />
                    <p>* Email Address:</p>
                    <input
                        id='email'
                        className={styles.input}
                        type='text'
                        placeholder={placeemail}
                        value={email}
                        onChange={handleChangeEmail}

                        required />
                    <br />
                    <p>* Phone No:</p>
                    <input
                        id='phone'
                        className={styles.input}
                        type='number'
                        placeholder={placephone}
                        value={phone}
                        onChange={handleChangePhone}

                        required/>
                    <br />
                    <p>Gender:</p>
                        <div >
                        <input onChange={handleChangeGenders} type="radio" name="gender" value="Male" id="male"  />
                            <label for="male">Male </label>
                        <input onChange={handleChangeGenders} type="radio"  name="gender" value="Female" id="female" />
                            <label for="female">Female </label>
                        <input onChange={handleChangeGenders} type="radio"  name="gender" value="Other" id="other" />
                            <label for="other">Other </label>
                    </div>
                    <br />
                    <p>Date of Birth:</p>
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

                        <span> Day: </span>
                        <select onChange={handleChangeDay} name="days" id="days">
                            <option value="DD">DD</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                        <span> Year: </span>
                        <select onChange={handleChangeYear} name="year" id="year">
                            <option value="YYYY">YYYY</option>
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
                        state.trim() !== "" && zipcode.trim() !== "" && country.trim() !== "" && email.trim() !== "" && email.trim().includes('@')
                        && phone.trim() !== "" && phone.trim().length === 10) ?
                        <NavLink className={styles.btn} to={{
                            pathname: '/account',
                            state: {
                                firstname: firstname,
                                lastname: lastname,
                                address: address,
                                city: city,
                                state: state,
                                zipcode: zipcode,
                                country: country,
                                email: email,
                                phone: phone,
                                genders: genders,
                            
                                birthday:birthday,
                                birthmonth:birthmonth,
                                birthyear:birthyear

                            }
                        }}  exact activeClassName='active'  > <b> Submit </b> </NavLink>
                        : <NavLink onClick={handleSubmit} className={styles.btn} to='/login' exact activeClassName='active'  > <b>Submit </b> </NavLink>
                    }
                </form>

			</div>

		</div>



	)

}

export default Login 