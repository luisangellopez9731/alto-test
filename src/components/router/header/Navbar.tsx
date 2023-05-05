import { Link } from 'react-router-dom'
import { LinksEnum } from '../links'
import styled from 'styled-components'

const NavbarStyled = styled.nav`
    flex: 1;
    height: 100%;
    position: relative;
`

const UlStyled = styled.ul`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
`

const LiStyled = styled.li`
    list-style: none;
    margin-right: 20px;

    &:last-child {
        margin-right: 0;
    }
    & a {
        text-decoration: none;
        color: black;
    }
`

const links = [
    {
        text: 'Home',
        to: LinksEnum.HOME
    },
    {
        text: 'About',
        to: LinksEnum.ABOUT
    },
    {
        text: 'Blog',
        to: LinksEnum.BLOG
    },
    {
        text: 'Contact',
        to: LinksEnum.CONTACT
    },
]

export const Navbar = () => {
    return <NavbarStyled>
        <UlStyled>
            {links.map(link => <LiStyled key={link.to}><h2><Link to={link.to}>{link.text}</Link></h2></LiStyled>)}
        </UlStyled>
    </NavbarStyled>
}