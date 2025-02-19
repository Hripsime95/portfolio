import { css, styled } from "styled-components";
import { Theme } from "../../styles/Theme";

const Header = styled.header`
    background-color: ${Theme.colors.primaryBg}, 0.7;
    backdrop-filter: blur(10px);
    padding: 20px 0;
    position: fixed;
    left: 0;
    right: 0;

    z-index: 5;
`

//Mobile
const MobileMenu = styled.nav`
`
const MenuButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -55px;
    right: -150px;
    z-index: 999999999;

    span{
        display: block;
        position: relative;
        width: 30px;
        height: 3px;
        background-color: ${Theme.colors.accent};

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: transparent;
        `}

        &::before {
            content:"";
            display: block;
            position: absolute;
            width: 36px;
            height: 3px;
            background-color: ${Theme.colors.accent};
            transform: translateY(-10px);
            
            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
                width: 30px;
            `}
        }

        &::after {
            content:"";
            display: block;
            position: absolute;
            width: 24px;
            height: 3px;
            background-color: ${Theme.colors.accent};
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
                width: 30px;
            `}
        }
    }
`
const MenuPopup = styled.div<{isOpen: boolean}>`
    position:fixed;
    min-height: 100vh;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(31, 31, 32, 0.9);

    z-index: 9999;
    display:none;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 70px;

        li > a {
            color: ${Theme.colors.accent};
            font-size: 50px;
        }
    }
`

//Desktop
const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 70px;
    }
`

export const S = {
    Header,
    MobileMenu,
    MenuButton,
    MenuPopup,
    DesktopMenu,
}