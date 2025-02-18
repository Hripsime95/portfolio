import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { Icon } from "../../../components/icon/Icon";
import { S } from "./SkillsStyles";

export const Skills: React.FC = () => {
    return (
        <S.Skills id="skills">
            <Container>
                <SectionTitle>My Skills</SectionTitle>

                <S.MyGridContainer>
                    <S.MyGridItem>
                        <S.IconWrapper><Icon iconId="code"/></S.IconWrapper>
                        <S.MySkillTitle>HTML5</S.MySkillTitle>
                    </S.MyGridItem>
                    <S.MyGridItem> 
                        <S.IconWrapper><Icon iconId="css"/></S.IconWrapper>
                        <S.MySkillTitle>CSS</S.MySkillTitle>
                    </S.MyGridItem>
                    <S.MyGridItem>
                        <S.IconWrapper><Icon iconId="react"/></S.IconWrapper>
                        <S.MySkillTitle>React</S.MySkillTitle>
                    </S.MyGridItem>
                    <S.MyGridItem>
                        <S.IconWrapper><Icon iconId="typescript"/></S.IconWrapper>
                        <S.MySkillTitle>Typescript</S.MySkillTitle>
                    </S.MyGridItem>
                    <S.MyGridItem >
                        <S.IconWrapper><Icon iconId="styledcomponents"/></S.IconWrapper>
                        <S.MySkillTitle>Styled Components</S.MySkillTitle>
                    </S.MyGridItem>
                    <S.MyGridItem>
                        <S.IconWrapper><Icon iconId="figma"/></S.IconWrapper>
                        <S.MySkillTitle>Web Design</S.MySkillTitle>
                    </S.MyGridItem>
                </S.MyGridContainer>
            </Container>
        </S.Skills>
    )
}

