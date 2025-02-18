import { useState } from "react";
import { Menu } from "../menu/Menu";
import { S } from "../menuStyles";

export const MobileMenu: React.FC<{MenuItems: string[]}> = (props: {MenuItems: string[]}) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleBurgerMenu = () => {setMenuIsOpen(!menuIsOpen)};

    return (
        <S.MobileMenu>
            <S.MenuButton isOpen={menuIsOpen} onClick={toggleBurgerMenu}>
                <span></span>
            </S.MenuButton>
            <S.MenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
                <Menu MenuItems={props.MenuItems}/>
            </S.MenuPopup>
        </S.MobileMenu>
    );
}

