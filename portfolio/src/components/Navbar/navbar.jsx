import { Navbar, Nav } from "react";
import React from "react"
class BootstrapNavbar extends React.Component{
    return (){
        return(
            <Nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <a href="#" class="navbar-brand bg-warning text-primary">Nathan Schmitzer</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu"
            aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" data-toggle="collapse" data-target="#navbarMenu"></span>
            </button>

            {/* v class="collapse navbar-collapse" v */}
            <Navbar.Collapse  id="navbarMenu">
            <Nav class="mr-auto">

                <ul class="navbar-nav">
                    <li class="nav-item active ml-auto">
                        <a href="home.html" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item active ml-auto">
                        <a href="index.html" class="nav-link">About Me</a>
                    </li>
                    <li class="nav-item active ml-auto">
                        <a href="portfolio.html" class="nav-link">Portfolio</a>
                    </li>
                    <li class="nav-item active ml-auto">
                        <a href="homeowork-2.html" class="nav-link">Contact Info</a>
                    </li>
                </ul>
            </Nav>
            </Navbar.Collapse>
        
            </Nav>
        )
    }
}

export default BootstrapNavbar;