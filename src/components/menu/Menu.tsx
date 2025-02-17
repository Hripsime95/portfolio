// import React from "react";
import { styled } from "styled-components";
import { Theme } from "../../styles/Theme";

export const Menu = (props: {MenuItems: string[]}) => {
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