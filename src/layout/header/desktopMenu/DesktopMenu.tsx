import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "../menuStyles";

export const DesktopMenu: React.FC<{MenuItems: string[]}> = (props: {MenuItems: string[]}) => {
    return (
        <S.DesktopMenu>
            <Menu MenuItems={props.MenuItems}/>
        </S.DesktopMenu>
    );
}