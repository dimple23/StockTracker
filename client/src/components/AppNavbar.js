import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';


class AppNavbar extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <AppNavbar>
                <Navbar className="mb-2 dark navbar" dark expand="md">
                        <NavbarBrand href="/"><i className="fas fa-chart-line mr-2"></i>STOCKTRACKER</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/yz9" target="_blank">GitHub</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>
                </AppNavbar>
            </div>
        );
     
        
        
}
}

export default AppNavbar;
