// import React from "react";
import { styled } from "styled-components";
import { Icon } from "../icon/Icon";

type SkillPropsType = {
    iconId: string
    title: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    )
}


const StyledSkill = styled.div`
    width: 33%;
`

const SkillTitle = styled.h3`
    font-size: 30px;
    font-weight: 600;

    position: relative;
    
    &::after{
        content: "";
        display: inline-block;
        height: 5px;
        background: linear-gradient(to left , #13ADC7, #6978D1, #945DD6);
        border-radius: 10px;

        position: absolute;
        top: 20px;
        left: -50px;
        right: -50px;

        z-index: 1;
        
    }
`