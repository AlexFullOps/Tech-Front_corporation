import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon, 
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute


} from './SidebarElements'


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        A empresa
                    </SidebarLink>
                    <SidebarLink to="discovery">
                        Serviços
                    </SidebarLink>
                    <SidebarLink to="service">
                        Galeria
                    </SidebarLink>
                    <SidebarLink to="signup">
                        Contatos
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>
                        Seguir   
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar