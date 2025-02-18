import React from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { DesktopMenu } from "./desktopMenu/DesktopMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { Icon } from "../../components/icon/Icon";
import { S } from "./menuStyles";

const items = ["home", "skills", "works", "contact"];

export const Header = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    })

    return (
        <div>
            <S.Header>
                <Container>
                    <FlexWrapper justify="space-between">
                        <Icon iconId={'code'}/>

                        {width < breakpoint ? <MobileMenu MenuItems={items}/> 
                                            : <DesktopMenu MenuItems={items}/>}

                    </FlexWrapper>
                </Container>
            </S.Header>
        </div>
    );
}

