import React, { Dispatch, SetStateAction } from "react";

import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    NavbarText,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function ItemMenu({
    href,
    label,
    name,
    state,
    setState,
}: {
    href: string;
    label: string;
    name: string;
    state: { activeLink: string | null; isOpen: boolean };
    setState: Dispatch<
        SetStateAction<{
            activeLink: string | null;
            isOpen: boolean;
        }>
    >;
}) {
    function active(link: string) {
        if (state.activeLink === link) {
            return;
        }

        setState({ ...state, activeLink: link });
    }

    return (
        <NavItem className="text-center">
            <NavLink
                className={state.activeLink === label ? "active" : ""}
                href={href}
                onClick={() => {
                    active(label);
                }}
                target="_self"
            >
                {name}
            </NavLink>
        </NavItem>
    );
}

export default function Navigation() {
    const [state, setState] = React.useState<{
        activeLink: null | string;
        isOpen: boolean;
    }>({
        activeLink: null,
        isOpen: false,
    });

    function toggle() {
        setState({ ...state, isOpen: !state.isOpen });
    }

    return (
        <Navbar
            color={"light"}
            expand={"lg"}
            fixed={"top"}
            light
        >
            <NavbarBrand href="/">Albatros</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse
                isOpen={state.isOpen}
                navbar
            >
                <Nav
                    className="mr-auto"
                    navbar
                    pills
                >
                    <ItemMenu
                        href={"#BeachClub"}
                        label={"beachClub"}
                        name={"Club de Plage"}
                        setState={setState}
                        state={state}
                    />
                    <ItemMenu
                        href={"#SwimmingSchool"}
                        label={"swimmingSchool"}
                        name={"École de Natation"}
                        setState={setState}
                        state={state}
                    />
                    <ItemMenu
                        href={"#Fitness"}
                        label={"fitness"}
                        name={"Remise en Forme"}
                        setState={setState}
                        state={state}
                    />
                    <ItemMenu
                        href={"#StandUpPaddle"}
                        label={"standUpPaddle"}
                        name={"Stand Up Paddle"}
                        setState={setState}
                        state={state}
                    />
                    <ItemMenu
                        href={"#Team"}
                        label={"team"}
                        name={"l'Équipe"}
                        setState={setState}
                        state={state}
                    />
                    <ItemMenu
                        href={"#Contact"}
                        label={"contact"}
                        name={"Contact"}
                        setState={setState}
                        state={state}
                    />
                    <ItemMenu
                        href={"#Partner"}
                        label={"partner"}
                        name={"Partenariat"}
                        setState={setState}
                        state={state}
                    />
                    <NavItem className="text-center">
                        <NavLink
                            className={"facebook"}
                            href={"https://www.facebook.com/AlbatrosClubDePlage"}
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                            &nbsp;Facebook
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}
