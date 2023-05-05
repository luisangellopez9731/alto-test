import styled from "styled-components"
import logo from "/logo.jpg"

const LogoStyled = styled.img`
    height: 80px;
`

export const Logo = () => {
    return <LogoStyled src={logo} />
}