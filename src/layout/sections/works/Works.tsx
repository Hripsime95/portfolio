import React from "react";
import { styled } from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Menu } from "../../../components/menu/Menu";
import { Work } from "../../../components/work/Work";
import timer from "../../../assets/img/calPhoto.webp";
import socNet from "../../../assets/img/socNetPohoto.webp";
import { Container } from "../../../components/Container";


const items = ["All", "Landing Page", "React", "SPA"];

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <Menu MenuItems={items}></Menu>

                <FlexWrapper justify="space-around">
                    <Work src={socNet} title="social network" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."></Work>
                    <Work src={timer} title="timer" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."></Work>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: aquamarine;
`