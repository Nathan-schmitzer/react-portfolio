import { Navbar, Nav } from "react-bootstrap";
import React from "react"
class BootstrapNavbar extends React.Component{
    render (){
        return(
            <Nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <a href="#" className="navbar-brand bg-warning text-primary">Nathan Schmitzer</a>
            <button className="navbar-toggler" type="button"  data-target="#navbarMenu"
            aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" data-toggle="collapse" data-target="#navbarMenu"></span>
            </button>

            {/* v className="collapse navbar-collapse" v */}
            <Navbar.Collapse  className="collapse navbar-collapse" id="navbarMenu">
                <Nav class="mr-auto">

                    <ul className="navbar-nav">
                        <li className="nav-item active ml-auto">
                            <a href="home.html" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item active ml-auto">
                            <a href="index.html" className="nav-link">About Me</a>
                        </li>
                        <li className="nav-item active ml-auto">
                            <a href="portfolio.html" className="nav-link">Portfolio</a>
                        </li>
                        <li className="nav-item active ml-auto">
                            <a href="homeowork-2.html" className="nav-link">Contact Info</a>
                        </li>
                    </ul>
                </Nav>
            </Navbar.Collapse>
        
            </Nav>
        )
    }
}

export default BootstrapNavbar;