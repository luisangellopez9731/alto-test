import styled from "styled-components"
import { Logo } from "./Logo"
import { Navbar } from "./Navbar"
import { Searchbar } from "./Searchbar"

const HeaderWrapper = styled.div`
    position: sticky;
    top: 0;
    margin-bottom: 20px;
    background-color: white;
`

const HeaderStyled = styled.header`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 20px 20px 0 20px;
`

export const Header = () => {
    return <HeaderWrapper>
        <HeaderStyled>
            <Logo />
            <Navbar />
            <Searchbar />
        </HeaderStyled>
        <hr />
    </HeaderWrapper>
}