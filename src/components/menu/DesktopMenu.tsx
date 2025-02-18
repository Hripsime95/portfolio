// import React from "react";
import { styled } from "styled-components";
import { Theme } from "../../styles/Theme";

export const DesktopMenu = (props: {MenuItems: string[]}) => {
    return (
            <StyledMenu>
                <ul>
                    {props.MenuItems.map((item, index) => {
                        return <li key={index}>
                                <a href="">{item}</a>
                            </li>
                    })}
                </ul>
            </StyledMenu>
    );
}

// const StyledDesktopHeader = styled.header`
//     display: block;
//     background-color: ${Theme.colors.primaryBg}, 0.7;
//     backdrop-filter: blur(10px);
//     padding: 20px 0;
//     position: fixed;
//     left: 0;
//     right: 0;

//     z-index: 5;

//     @media ${Theme.media.tablet} {
//         display: none;
//     }
// `

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 70px;

        li {
            border-bottom: 1px solid transparent;

            &:hover{
                border-bottom: 1px solid ${Theme.colors.accent};
            }
        }

        li > a {
            color: ${Theme.colors.accent}
        }
    }
`