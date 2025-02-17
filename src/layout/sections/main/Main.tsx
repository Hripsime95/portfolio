// import React from "react";
import { styled } from "styled-components";
import avatar from "../../../assets/img/avatar.jpeg";
import drawing from "../../../assets/img/drawing.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align="center" justify="space-around" wrap="wrap" gap="20px">
                    <TextWrapper>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Ripsime Madoyan</span></Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </TextWrapper>
                    <PhotoWrapper>
                        <Photo src={avatar} alt="MyPhoto"/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
`
const TextWrapper = styled.div`
    text-align: start;
`

const SmallText = styled.span`
    font-weight: 400;
    font-size: 14px;
`

const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
`

const Name = styled.h2`
    font-family: "Josefin Sans" sans-serif;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
    margin: 10px 0;

    span{
        position: relative;
        z-index: 0;

        &::before{
            content:"";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${Theme.colors.accent};

            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
`

export const PhotoWrapper = styled.div`
    display: inline-block;
    width: 380px;
    height: 450px;

    position: relative;
    z-index: 1;

    &::before {
        content: "";
        background: linear-gradient(${Theme.colors.gradient.primaryBorder}, ${Theme.colors.gradient.secondaryBorder});
        inset: -5px;
        border-top-left-radius: 50px;
        border-bottom-right-radius: 50px;

        position: absolute;

        z-index: -1;
    }

    &::after {
        content:"";
        width: 666px;
        height: 666px;
        background-image: url(${drawing});

        position: absolute;
        top: 40px;
        left: -22px;

        z-index: -5;
    }
`

const Photo = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;

`