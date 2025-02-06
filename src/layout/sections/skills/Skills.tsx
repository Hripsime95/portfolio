// import React from "react";
import { styled } from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "../../../components/skill/Skill";
import { Container } from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>MySkills</SectionTitle>
            <Container>
                <FlexWrapper wrap="wrap" justify="space-between">
                    <Skill 
                        iconId="code" 
                        title="HTML5" 
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                    <Skill 
                        iconId="css" 
                        title="CSS" 
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                    <Skill 
                        iconId="react" 
                        title="React" 
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                    <Skill 
                        iconId="typescript" 
                        title="TypeScript" 
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                    <Skill 
                        iconId="styledcomponents" 
                        title="Styled Components" 
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                    <Skill 
                        iconId="figma" 
                        title="web design" 
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    )
}


const StyledSkills = styled.section`
    min-height: 100vh;
`