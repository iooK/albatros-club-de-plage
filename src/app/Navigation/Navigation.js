import React, {Component} from 'react';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            'isOpen': false,
        };
    }

    toggle() {
        this.setState({
            'isOpen': !this.state.isOpen,
        });
    }

    render() {
        return (
            <Navbar className="navbar-toggleable-md"
                    color="faded"
                    fixed="top"
                    light
                    toggleable>
                <NavbarToggler onClick={this.toggle}
                               right />
                <NavbarBrand href="/">Albatros</NavbarBrand>

                <Collapse isOpen={this.state.isOpen}
                          navbar>
                    <Nav navbar>
                        <NavItem><NavLink href="#BeachClub" target="_self">Club de Plage</NavLink></NavItem>
                        <NavItem><NavLink href="#SwimmingSchool" target="_self">Ecole de Natation</NavLink></NavItem>
                        <NavItem><NavLink href="#Fitness" target="_self">Remise en Forme</NavLink></NavItem>
                        <NavItem><NavLink href="#StandUpPaddle" target="_self">Stand Up Paddle</NavLink></NavItem>
                        <NavItem><NavLink href="#Team" target="_self">l'Equipe</NavLink></NavItem>
                        <NavItem><NavLink href="#Contact" target="_self">Contact</NavLink></NavItem>
                        <NavItem><NavLink href="#Partner" target="_self">Partenariat</NavLink></NavItem>
                        <NavItem><NavLink className="facebook"
                                          href="https://www.facebook.com/AlbatrosClubDePlage"
                                          target="_blank"><FontAwesome name="facebook-official" />Facebook</NavLink></NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
