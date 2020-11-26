import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./NavBar.module.css";

class NavBar extends Component {

    render() {
        let authedUser = null;
        return (
            <nav className={styles.nav}>

                <ul>
                    <li className={styles.name}>
                        <b > Travel in Tents </b>
                    </li>

                    <li className={styles.items}>

                        <div><b> {authedUser ? <b>Hello {authedUser}</b> : ""}</b> </div>

                    </li>
                    <li className={styles.items}>
                        <NavLink to='/login' exact activeClassName='active'  > <b>Login </b> </NavLink>
                    </li>
                    <li className={styles.items}>
                        <NavLink to={{
                            pathname: '/campgrounds',
                            state: {
                                details: this.props.data
                            }
                        }} exact activeClassName='active' > <b>Campgrounds </b> </NavLink>
                    </li>
                    <li className={styles.items}>
                        <NavLink to={{
                            pathname: '/products',
                            state: {
                                details: this.props.data
                            }
                        }} exact activeClassName='active'  > <b>Products </b> </NavLink>
                    </li>
                    <li className={styles.items}>
                        <NavLink to='/' exact activeClassName='active'  ><b> Home </b></NavLink>
                    </li>



                </ul>



            </nav>
        )
    }
}
export default NavBar;