import React from 'react'
import { 
    Nav,
    NavLogo,
    NavbarContainer, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks 

} 
    from './NavbarElements'
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
    return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to="/">
                <img id='lg-menu' src='./favicon.gif' alt='Logo Tech Front'></img>
                
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
            
        </NavbarContainer>
    </Nav>
    </>
)
}

export default Navbar