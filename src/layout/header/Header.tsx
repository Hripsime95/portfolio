// import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Theme } from "../../styles/Theme";
import { HeaderMenu } from "./headerMenu/HeaderMenu";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo/>
                    <HeaderMenu MenuItems={items}/>
                </FlexWrapper>
                
            </Container>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    background-color: ${Theme.colors.primaryBg};
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`