import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./NavBar.module.css";

class NavBar extends Component {

    render() {
        
        return (
            <div className={styles.nav}>
                <input type="checkbox" id={styles.navcheck} />
                <div className={styles.navheader}>
                    <div className={styles.navtitle}>
                        Travel in Tents
    </div>
                </div>
                <div className={styles.navbtn}>
                    <label htmlFor={styles.navcheck}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className={styles.navlinks}>
                    <NavLink to='/' exact activeClassName='active'  >Home </NavLink>
                    <NavLink to={{
                        pathname: '/products',
                        state: {
                            details: this.props.data
                        }
                    }} exact activeClassName='active'  > Products </NavLink>
                    <NavLink to={{
                        pathname: '/campgrounds',
                        state: {
                            details: this.props.data
                        }
                    }} exact activeClassName='active' >Campgrounds  </NavLink>
                    <NavLink to='/login' exact activeClassName='active'  > Login </NavLink>


                </div>
            </div>
        )
    }
}
export default NavBar;