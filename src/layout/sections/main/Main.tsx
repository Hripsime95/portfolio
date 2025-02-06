import React from "react";
import { styled } from "styled-components";
import photo from "../../../assets/img/photo.jpeg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align="center" justify="space-around">
                    <div>
                        <span>Hi There</span>
                        <Name>I am Svetlana Dyablo</Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </div>
                    <Photo src={photo} alt=""/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
`
const MainTitle = styled.h1`
    
`

const Name = styled.h2`
    
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`