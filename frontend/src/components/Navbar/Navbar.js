import React, { Component } from 'react'
import { MenuItems } from './MenuItems';
import "./Navbar.css"
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar-items">
                <div className="navbar-brand">
                    <img className="navbar-logo" src="https://www.jotform.com/resources/assets/svg/jotform-logo-transparent.svg" alt="logo"></img>
                    <span className="navbar-divider"></span>
                    <div className="navbar-name">Mail Scanner</div>
                </div>
                <div className="menu-icon"></div>
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.to}>
                                    {item.title}
                                </Link>
                            </li>)
                    })}
                </ul>
            </div>
        )
    }
}
