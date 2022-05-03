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
                    <SidebarLink to="about" onClick={toggle}>
                        A empresa
                    </SidebarLink>
                    <SidebarLink to="discovery" onClick={toggle}>
                        Serviços
                    </SidebarLink>
                    <SidebarLink to="service" onClick={toggle}>
                        Galeria
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Contatos
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>
                        Redes sociais   
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar