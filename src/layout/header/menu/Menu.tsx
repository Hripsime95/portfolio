import React from "react";
import { S } from "../menuStyles";


export const Menu: React.FC<{MenuItems: string[]}> = (props: {MenuItems: string[]}) => {
    return (
        <ul>
            {props.MenuItems.map((item, index) => {
                return <li key={index}>
                        <S.MenuItem href={`#${item}`}>{item}</S.MenuItem>
                        </li>
            })}
        </ul>
    )
}