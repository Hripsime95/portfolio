// import React from "react";
import { styled } from "styled-components";
import { Theme } from "../../styles/Theme";
import { ButtonLink } from "../ButtonLink";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props:WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt="project image" />
            <ContentWrapper>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <ButtonLink href="#">Look it up</ButtonLink>
            </ContentWrapper>
            
        </StyledWork>
    )
}

const StyledWork = styled.div`
    max-width: 420px;
    width: 100%;
    border: 1px solid white;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
`

const ContentWrapper = styled.div`
    padding: 0 10px 10px;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    border-top-left-radius: 50px;
    object-fit: cover;
`

const Title = styled.h3`
    font-size: 30px;
    text-align: center;

    position:relative;

    &::before{
        content: "";
        width: 200px;
        height: 5px;
        background: linear-gradient(to right, ${Theme.colors.gradient.primaryBorder}, ${Theme.colors.gradient.secondaryBorder});
        position:absolute;

        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
    }

`
const Text = styled.p`
    margin: 40px 0;
    font-size: 18px;
`
