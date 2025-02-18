// import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Theme } from "../../styles/Theme";
import { DesktopMenu } from "../../components/menu/DesktopMenu";
import { MobileMenu } from "../../components/menu/MobileMenu";
import { Icon } from "../../components/icon/Icon";

const items = ["Home", "Skills", "Works", "Contact"];

export const Header = () => {
    return (
        <div>
            <StyledDesktopHeader>
                <Container>
                    <FlexWrapper justify="space-between">
                        <Icon iconId={'code'}/>
                        <DesktopMenu MenuItems={items}/>
                    </FlexWrapper>
                    
                </Container>
            </StyledDesktopHeader>
            <MobileMenu MenuItems={items}/>
        </div>
        

    );
}

const StyledDesktopHeader = styled.header`
    background-color: ${Theme.colors.primaryBg}, 0.7;
    backdrop-filter: blur(10px);
    padding: 20px 0;
    position: fixed;
    left: 0;
    right: 0;

    z-index: 5;

    @media ${Theme.media.tablet}{
        display: none;
    }
`