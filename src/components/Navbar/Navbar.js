import React, { Component } from 'react'
import classes from "./Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        const { userLogon } = this.props
        return (
            <header className={classes.header}>
                <img className={classes.logo} src="" alt="logo" />
                <nav>
                    <ul className={classes["nav-links"]}>
                        <li><Link className={classes.link} to="/" >Home</Link></li>
                        <li><Link className={classes.link} to="/services" >Services</Link></li>
                        {userLogon ? (<li><Link className={classes.link} to="/products" >Products</Link></li>) : (" ")}
                    </ul>
                </nav>
                <Link className={classes.cta} to="/login" ><button>Login</button></Link>
            </header>
        )
    }
}
