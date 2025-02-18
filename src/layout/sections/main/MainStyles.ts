import { styled } from "styled-components"
import { Theme } from "../../../styles/Theme"
import drawing from "../../../assets/img/drawing.png";


const Main = styled.section.attrs((props) => ({
    id: props.id
}))`
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

const PhotoWrapper = styled.div`
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

export const S = {
    Main,
    TextWrapper,
    SmallText,
    MainTitle,
    Name,
    PhotoWrapper,
    Photo
}