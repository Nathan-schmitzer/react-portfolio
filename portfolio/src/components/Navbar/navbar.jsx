import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react"
class BootstrapNavbar extends React.Component{
    render (){
        return(
            <Container fluid>
                <Nav className="navbar navbar-expand-sm navbar-dark bg-dark">

                <Navbar.Brand href="#" className="navbar-brand bg-warning text-primary">Nathan Schmitzer</Navbar.Brand>
                <button className="navbar-toggler" type="button"  data-target="#navbarMenu"
                aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" data-toggle="collapse" data-target="#navbarMenu"></span>
                </button>

                {/* v className="collapse navbar-collapse" v */}
                <Navbar.Collapse  className="collapse navbar-collapse" id="navbarMenu">
                    <Nav class="mr-auto">

                        <ul className="navbar-nav">
                            <li className="nav-item active ml-auto">
                                <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                            </li>
                            <li className="nav-item active ml-auto">
                                <Nav.Link href="/portfolio" className="nav-link">Portfolio</Nav.Link>
                            </li>
                            <li className="nav-item active ml-auto">
                                <Nav.Link href="homeowork-2.html" className="nav-link">Contact Info</Nav.Link>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            
                </Nav>
            </Container>
        )
    }
}

export default BootstrapNavbar;