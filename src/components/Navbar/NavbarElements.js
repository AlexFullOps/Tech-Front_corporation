import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'




export const Nav = styled.nav`
    background: #001462;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`

    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    z-index: 1;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`

    width: 80px;
    height: 80px;
    display: flex;
    margin-left: -20px;
    

`
export const MobileIcon = styled.div`

    display: none;

    @media screen and (max-width: 768px){
        color: #3bcfed;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor:pointer;
    }
`
export const NavMenu = styled.ul`
        display: flex;
        align-items: center;
        list-style: none;
        text-align: center;
        margin-right: -22px;
    

    @media screen and (max-width: 769px){
        display: none;
    }

`

export const NavItem = styled.li`
        height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #3bcfed;
    display: flex;
    align-items: center;
    text-align: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;


    &:hover{
        color: #fff;
    }
    &.active{
        border-bottom: 30px solid #3bcfed;
    }


`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media acreen and (min-width: 768px){
        display: none;
    }

`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #3bcfed;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #000;
        color: #3bcfed;
    }

`

export const SidebarWrapper = styled.div`
    color: #fff;
`
export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #3bcfed;
    cursor: pointer;

    &:hover{
        color: #fff;
        transition: 0.2s ease-in-out;
    }
`
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`
export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    text-decoration: none;

    &:hover{
        transition: 0.2s all ease-in-out;
        background: #fff;
        color: #3bcfed;
    }
`



