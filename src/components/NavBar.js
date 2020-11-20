import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./NavBar.module.css";

class NavBar extends Component {

    render() {

        return (
            <nav className={styles.nav}>

                <ul>
                    <li className={styles.name}>
                        <b > Travel in Tents </b>
                    </li>

                    <li className={styles.items}>

                        <div><b> Hello, user </b> </div>

                    </li>
                    <li className={styles.items}>
                        <NavLink to='/login' exact activeClassName='active'  > <b>Login </b> </NavLink>
                    </li>
                    <li className={styles.items}>
                        <NavLink to='/campgrounds' exact activeClassName='active' > <b>Campgrounds </b> </NavLink>
                    </li>
                    <li className={styles.items}>
                        <NavLink to='/products' exact activeClassName='active'  > <b>Products </b> </NavLink>
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