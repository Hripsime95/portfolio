// import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { styled } from "styled-components";
import { Container } from "../../../components/Container";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <SectionTitle>I am Avilable for freelance</SectionTitle>
                <Button>Hire me</Button>
            </Container>
        </StyledSlogan>
    )
}

const StyledSlogan = styled.section`
    min-height: 50vh;
    background-color: cadetblue;
`