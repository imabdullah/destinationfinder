import React from 'react'
import {Link} from 'react-router-dom';
export default function Nav() {
    return (
        /** Top nav bar with menu items**/
        <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
        
        <Link className="navbar-brand logo-image" to="/"><img src="images/logo.svg" alt="alternative"/></Link>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-awesome fas fa-bars"></span>
            <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/">HOME <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/contact">Contact</Link>
                </li>
                
            </ul>
            <span className="nav-item social-icons">
                <span className="fa-stack">
                    <a href="#your-link">
                        <span className="hexagon"></span>
                        <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span className="fa-stack">
                    <a href="#your-link">
                        <span className="hexagon"></span>
                        <i className="fab fa-twitter fa-stack-1x"></i>
                    </a>
                </span>
            </span>
        </div>
    </nav>
    )
}
