import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const ButtonLink = styled.a`
    display: inline-block;
    width: 200px;
    height: 60px;
    border-radius: 80px;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    color: ${Theme.colors.font};
    line-height: 3em;
    background: linear-gradient(to right, ${Theme.colors.gradient.primaryBorder}, ${Theme.colors.gradient.secondaryBorder});
    cursor: pointer;
    &:active{
        box-shadow: 3px 3px 10px ${Theme.colors.font};
    }
`