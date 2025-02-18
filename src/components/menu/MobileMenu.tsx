import { useState } from "react";
import { css, styled } from "styled-components";
import { Theme } from "../../styles/Theme";

export const MobileMenu = (props: {MenuItems: string[]}) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleBurgerMenu = () => {setMenuIsOpen(!menuIsOpen)};

    return (
        <StyledMobileMenu>
            <StyledMenuButton isOpen={menuIsOpen} onClick={toggleBurgerMenu}>
                <span></span>
            </StyledMenuButton>
            <StyledMenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
                <ul>
                    {props.MenuItems.map((item, index) => {
                        return <li key={index}>
                                <a href="">{item}</a>
                            </li>
                    })}
                </ul>
            </StyledMenuPopup>
        </StyledMobileMenu>
    );
}

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${Theme.media.tablet} {
        display: block;
    }
`

const StyledMenuButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -30px;
    right: -100px;
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

const StyledMenuPopup = styled.div<{isOpen: boolean}>`
    position:fixed;
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
            color: ${Theme.colors.accent}
        }
    }
`