import React, { useState } from "react";
import { MenuItemsType, TabId } from "../Header";
import { css, styled } from "styled-components";
import { Theme } from "../../../styles/Theme";


export const Menu: React.FC<{MenuItems: MenuItemsType}> = (props: {MenuItems: MenuItemsType}) => {
    const [currentTab, setCurrentTab] = useState("home");
    let menuTab = "home";

    function changeMenuTab(tabId: TabId) {
        console.log("tabid : ", tabId)
        setCurrentTab(tabId);
    }

    return (
        <ul>
            {props.MenuItems.map((item) => {
                return <MenuItem key={item.id} active={currentTab === item.id}>
                            <a href={`#${item.id}`} onClick={() =>(changeMenuTab(item.id))}>{item.title}</a>
                        </MenuItem>
            })}
        </ul>
    )
}

const MenuItem = styled.li<{active:boolean}>`
    border-bottom: 1px solid transparent;
    transition: 0.5s;

    &:hover{
        border-bottom: 1px solid ${Theme.colors.accent};
    }
    & > a {
        display: inline-block;
        color: ${Theme.colors.accent};
        font-size: 20px;
        &::first-letter {
            text-transform: uppercase; 
        }
    }
    
    ${props => props.active && css<{active:boolean}>`
        border-bottom: 1px solid ${Theme.colors.accent}; !important
    `}
`