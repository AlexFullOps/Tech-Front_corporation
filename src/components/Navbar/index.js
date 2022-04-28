import React from 'react'
import { 
    Nav,
    NavLogo,
    NavbarContainer, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn,
    NavBtnLink
} 
    from './NavbarElements'
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
    return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to="/">
                Tech Front
            </NavLogo>
            <MobileIcon>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about">A empresa</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="discover">Serviços</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="services">Galeria</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="signup">Contatos</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Seguir</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
    </>
)
}

export default Navbar