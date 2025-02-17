// import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Theme } from "../../styles/Theme";
import { Menu } from "../../components/menu/Menu";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo/>
                    <Menu MenuItems={items}/>
                </FlexWrapper>
                
            </Container>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    background-color: ${Theme.colors.primaryBg}, 0.7;
    backdrop-filter: blur(10px);
    padding: 20px 0;
    position: fixed;
    left: 0;
    right: 0;

    z-index: 5;

`