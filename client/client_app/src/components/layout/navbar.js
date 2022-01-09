import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {

    render()
    {
        return (
            <>
                <nav className="navbar navbar-expand-sm bg-dark justify-content-center">
                <div className="container-fluid">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item mx-5 px-5">
                        <Link to="/" className="nav-link" >
                        <i className="material-icons">language</i>Home</Link>
                    </li>
                    <li className="nav-item mx-5 px-5">
                        <Link to="/login" className="nav-link" >
                        <i className="material-icons">face</i>View profile</Link>
                    </li>
                </ul>
                </div>
                </nav>
            </>
        );
    }
}

export default Navbar;