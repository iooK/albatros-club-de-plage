import React, {Component} from 'react';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.active = this.active.bind(this);
        this.state = {
            'isOpen': false,
            'activeLink': 1,
        };
    }

    toggle() {
        this.setState({
            'isOpen': !this.state.isOpen,
        });
    }

    active(link) {
        if (this.state.activeLink === link) {
            return;
        }

        this.setState({
            'activeLink': link,
        });
    }

    render() {
        return (
            <Navbar color="faded"
                    fixed="top"
                    light
                    toggleable="md">
                <NavbarToggler onClick={this.toggle} right />
                <NavbarBrand href="/">Albatros</NavbarBrand>

                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav navbar pills>
                        <NavItem className="text-center">
                            <NavLink className={ this.state.activeLink === 'beachClub' ? 'active' : '' }
                                     href="#BeachClub"
                                     onClick={() => { this.active('beachClub'); }}
                                     target="_self">
                                Club de Plage
                            </NavLink>
                        </NavItem>

                        <NavItem className="text-center">
                            <NavLink className={ this.state.activeLink === 'swimmingSchool' ? 'active' : '' }
                                     href="#SwimmingSchool"
                                     onClick={() => { this.active('swimmingSchool'); }}
                                     target="_self">
                                Ecole de Natation
                            </NavLink>
                        </NavItem>

                        <NavItem className="text-center">
                            <NavLink className={ this.state.activeLink === 'fitness' ? 'active' : '' }
                                     href="#Fitness"
                                     onClick={() => { this.active('fitness'); }}
                                     target="_self">
                                Remise en Forme
                            </NavLink>
                        </NavItem>

                        <NavItem className="text-center">
                            <NavLink className={ this.state.activeLink === 'standUpPaddle' ? 'active' : '' }
                                     href="#StandUpPaddle"
                                     onClick={() => { this.active('standUpPaddle'); }}
                                     target="_self">
                                Stand Up Paddle
                            </NavLink>
                        </NavItem>

                        <NavItem className="text-center">
                            <NavLink className={ this.state.activeLink === 'team' ? 'active' : '' }
                                     href="#Team"
                                     onClick={() => { this.active('team'); }}
                                     target="_self">
                                l'Équipe
                            </NavLink>
                        </NavItem>

                        <NavItem className="text-center">
                            <NavLink className={ this.state.activeLink === 'contact' ? 'active' : '' }
                                     href="#Contact"
                                     onClick={() => { this.active('contact'); }}
                                     target="_self">
                                Contact
                            </NavLink>
                        </NavItem>

                        <NavItem className="text-center">
                            <NavLink className={ this.state.activeLink === 'partner' ? 'active' : ''}
                                     href="#Partner"
                                     onClick={() => { this.active('partner'); }}
                                     target="_self">
                                Partenariat
                            </NavLink>
                        </NavItem>

                        <NavItem className="text-center">
                            <NavLink className="facebook"
                                     href="https://www.facebook.com/AlbatrosClubDePlage"
                                     target="_blank">
                                <FontAwesome name="facebook-official" />&nbsp;Facebook
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
