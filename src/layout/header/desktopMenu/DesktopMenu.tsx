import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "../menuStyles";
import { MenuItemsType } from "../Header";

export const DesktopMenu: React.FC<{MenuItems: MenuItemsType}> = (props: {MenuItems: MenuItemsType}) => {
    return (
        <S.DesktopMenu>
            <Menu MenuItems={props.MenuItems}/>
        </S.DesktopMenu>
    );
}