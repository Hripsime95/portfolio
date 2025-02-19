import { styled } from "styled-components"
import { Theme } from "../../styles/Theme"

const Footer = styled.footer`
    position: relative;
    background-color: ${Theme.colors.primaryBg};
    min-height: 20vh;
`

const Name = styled.span`
    font-size: 12px;
    margin: 10px 0;
    color: ${Theme.colors.accent}
`
const SocialList = styled.ul`
    display: flex;
    gap: 5px;
`

const SocialItem = styled.li`
    transition: 0.3s;
    &:hover{
        transform: translateY(-5px);
    }
`

const SocialIconLink = styled.a`
   
`

const Copyright = styled.div`
    font-size: 10px;
    margin: 10px 0;
    color: ${Theme.colors.accent}
`

export const S = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialIconLink,
    Copyright,
}