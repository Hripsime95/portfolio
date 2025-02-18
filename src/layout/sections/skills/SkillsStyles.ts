import { styled } from "styled-components"
import { Theme } from "../../../styles/Theme"

const Skills = styled.section.attrs((props) => ({
    id: props.id
}))`
`

const MySkillTitle = styled.h3`
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    text-align: center;
    margin-top: 50px;
`

const MyGridContainer = styled.div`
    display: grid;
    gap: 100px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`

const MyGridItem = styled.div`
    justify-items: center;  
`

const IconWrapper = styled.div`  
    position: relative;
    z-index: 0;

    &::before{
        content:"";
        display: inline-block;
        width: 80px;
        height: 80px;
        background-color: ${Theme.colors.iconBg};

        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        z-index: -1;
    }
`

export const S = {
    Skills,
    MySkillTitle,
    MyGridContainer,
    MyGridItem,
    IconWrapper,
}