import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { Navlink } from 'react-router-dom';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Restorante Con Fusion" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} Navbar>
                            <Nav navbar>
                                <NavItem>
                                    <Navlink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-sm"> Home</span>
                                    </Navlink>
                                </NavItem>
                                <NavItem>
                                    <Navlink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-sm"> Menu</span>
                                    </Navlink>
                                </NavItem>
                                <NavItem>
                                    <Navlink className="nav-link" to="/Aboutus">
                                        <span className="fa fa-info fa-sm"> Aboutus</span>
                                    </Navlink>
                                </NavItem>
                                <NavItem>
                                    <Navlink className="nav-link" to="/Contactus">
                                        <span className="fa fa-address-card fa-sm"> Contactus</span>
                                    </Navlink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>
                                    We Take Inspiration from the World's best Hotels. lecture when you want to capture a screen. You can also highlight and save lines from the transcript below. Add your own notes to anything you’ve captured.
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header;