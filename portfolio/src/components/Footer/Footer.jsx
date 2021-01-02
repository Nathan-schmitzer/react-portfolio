import {Navbar, Nav, Container} from 'react-bootstrap';
import React from "react"

class BootstrapFooter extends React.Component {
    return (){
        return(
            <Container>
            <Navbar id="border-top" className="page-footer font-small blue pt-1 fixed-bottom bg-secondary">

                <Nav className="container-fluid text-center text-md-left">

                    <Nav className="row">
                        
                        <Nav className="col-md-6 mt-md-0 mt-3 text-md-right">

                            
                            <br> <br> <br>
                                <h5 class="text-md-right">Visit me on these pages!</h5>
                            </br> </br> </br>
                        </Nav>
                        

                            <hr className="clearfix w-100 d-md-none pb-3"></hr>

                        <Nav className="col-md-3 mb-md-0 mb-3 text-md-left">

                            <h5 className="text-uppercase">Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://www.linkedin.com/in/nathan-schmitzer-2516ba1a9/"
                                        className="fa fa-linkedin"></a>
                                </li>
                                <li>
                                    <a href="https://github.com/Nathan-schmitzer" class="fa fa-github"></a>
                                </li>

                            </ul>

                        </Nav>


                    </Nav>

                </Nav>

                <Nav class="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </Nav>

            </Navbar>
        </Container>
        )
    }
}

export default BootstrapFooter;