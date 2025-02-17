// import React from "react";
import { styled } from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
// import { Skill } from "../../../components/skill/Skill";
import { Container } from "../../../components/Container";
import { Icon } from "../../../components/icon/Icon";
import { Theme } from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>

                <MyGridContainer>
                    <MyGridItem>
                        <IconWrapper><Icon iconId="code"/></IconWrapper>
                        <MySkillTitle>HTML5</MySkillTitle>
                    </MyGridItem>
                    <MyGridItem> 
                        <IconWrapper><Icon iconId="css"/></IconWrapper>
                        <MySkillTitle>CSS</MySkillTitle>
                    </MyGridItem>
                    <MyGridItem>
                        <IconWrapper><Icon iconId="react"/></IconWrapper>
                        <MySkillTitle>React</MySkillTitle>
                    </MyGridItem>
                    <MyGridItem>
                        <IconWrapper><Icon iconId="typescript"/></IconWrapper>
                        <MySkillTitle>Typescript</MySkillTitle>
                    </MyGridItem>
                    <MyGridItem >
                        <IconWrapper><Icon iconId="styledcomponents"/></IconWrapper>
                        <MySkillTitle>Styled Components</MySkillTitle>
                    </MyGridItem>
                    <MyGridItem>
                        <IconWrapper><Icon iconId="figma"/></IconWrapper>
                        <MySkillTitle>Web Design</MySkillTitle>
                    </MyGridItem>
                </MyGridContainer>
            </Container>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
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